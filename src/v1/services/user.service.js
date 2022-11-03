import db from "../databases/init.mysql.js";
import jsonwebtoken from "jsonwebtoken";
export const createNewUser = async (new_user, action) => {
    try {
        const userQuery = `select * from user where username = '${new_user.userName}' ;`;
        db.query(userQuery, (err, result) => {
            console.log(result);
            if (!result.length) {
                const insertQuery = `insert into user set ?`;
                db.query(insertQuery, new_user, (err) => {
                    if (err) action(err.sqlMessage);
                    else action("Thêm tài khoản thành công");
                });
            } else action("Đã có tài khoản");
        });
    } catch (error) {
        console.log(error);
    }
};

export const getInforUser = async (UserName, Email, action) => {
    try {
        const getUserQuery = `select * from user where username = ? and email = ?`;
        await db.query(getUserQuery, [UserName, Email], (err, result) => {
            if (err) action(err.sqlMessage);
            else action(result);
        });
    } catch (error) {
        console.log(error);
    }
};

export const login = async (UserName, Password, action) => {
    try {
        const getUserQuery = `select * from user where username = ? and password = ?`;
        await db.query(getUserQuery, [UserName, Password], (err, result) => {
            if (err) action(err.sqlMessage);
            else {
                if (result.length > 0) {
                    const user = result[0];
                    const accessToken = jsonwebtoken.sign(
                        { uid: user.ID },
                        process.env.ACCESS_SECRET_KEY,
                        {
                            expiresIn: "1m",
                        }
                    );
                    const refreshToken = jsonwebtoken.sign(
                        { uid: user.ID },
                        process.env.REFRESH_SECRET_KEY,
                        {
                            expiresIn: "5m",
                        }
                    );

                    const response = {
                        accessToken,
                        refreshToken,
                    };

                    action(response);
                } else {
                    action("Your username or password is not correct");
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const refresh = async (refreshToken, action) => {
    try {
        await jsonwebtoken.verify(
            refreshToken,
            process.env.REFRESH_SECRET_KEY,
            (err, user) => {
                if (err) action("please Login Again");
                else {
                    const accessToken = jsonwebtoken.sign(
                        { uid: user.ID },
                        process.env.ACCESS_SECRET_KEY,
                        {
                            expiresIn: "1m",
                        }
                    );
                    const refreshToken = jsonwebtoken.sign(
                        { uid: user.ID },
                        process.env.REFRESH_SECRET_KEY,
                        {
                            expiresIn: "5m",
                        }
                    );

                    const response = {
                        accessToken,
                        refreshToken,
                    };

                    action(response);
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
};

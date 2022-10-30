import db from "../databases/init.mysql.js";
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

export const forgotPassword = async () => {};

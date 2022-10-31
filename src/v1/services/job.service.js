import db from "../databases/init.mysql.js";
export const getListJob = async (user_id, action) => {
    try {
        const listJobQery = `select * from job where uid = ?`;
        await db.query(listJobQery, user_id, (err, result) => {
            if (err) action(err.sqlMessage);
            else action({ listJob: result });
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateJob = async (id, update_job, action) => {
    try {
        const updateQuery = `update job set ? where id = ?`;
        await db.query(updateQuery, [update_job, id], (err, result) => {
            if (err) action(err.sqlMessage);
            else action(result);
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeJob = async (id, uid, action) => {
    try {
        const deleteQuery = `delete from job where id = ? and uid = ?`;
        await db.query(deleteQuery, [id, uid], (err, result) => {
            if (err) action(err.sqlMessage);
            else action("Delete job success");
        });
    } catch (error) {
        console.log(error);
    }
};

export const addJob = async (new_job, action) => {
    try {
        const addJobQuery = `insert into job set ?`;
        await db.query(addJobQuery, new_job, (err, result) => {
            if (err) action(err.sqlMessage);
            else action({ result: "Add job success" });
        });
    } catch (error) {
        console.log(error);
    }
};

import db from "../databases/init.mysql.js";
import client from "../databases/init.redis.js";

export const getListJob = async (uid, action) => {
    try {
        await client.get(uid, (_, result) => {
            action(JSON.parse(result));
        });
    } catch (error) {
        console.log(error);
    }
};

export const setListJob = async (uid) => {
    try {
        const queryListJob = `select * from job where uid = ?`;
        await db.query(queryListJob, [uid], async (_, result) => {
            await client.setex(uid, 900, JSON.stringify(result));
            return;
        });
    } catch (error) {
        console.log(error);
    }
};

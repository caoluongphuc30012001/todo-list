import { getListJob } from "../services/redis.service.js";

class RedisController {
    getListJob = async (req, res, next) => {
        const { uid } = req.query;
        await getListJob(uid, (result) => {
            if (result) {
                res.status(200).send({ result });
            } else next();
        });
    };
}

export default new RedisController();

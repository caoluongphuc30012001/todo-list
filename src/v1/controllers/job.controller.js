import Job from "../models/job.model.js";
import {
    addJob,
    getListJob,
    removeJob,
    updateJob,
} from "../services/job.service.js";
import { setListJob } from "../services/redis.service.js";
class JobController {
    getListJob = async (req, res) => {
        try {
            const { uid } = req.query;
            setListJob(uid);
            await getListJob(uid, (result) => {
                res.status(200).send({ result });
            });
        } catch (error) {
            res.status(500).send({ error: error });
        }
    };
    addJob = async (req, res) => {
        try {
            const {
                uid,
                JobName,
                JobDescription,
                JobStatus,
                StartDay,
                EndDay,
            } = req.body;
            const new_job = new Job(
                uid,
                JobName,
                JobDescription,
                JobStatus,
                StartDay,
                EndDay
            );
            await addJob(new_job, (result) => {
                setListJob(uid);
                res.status(200).send({ result });
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: error });
        }
    };
    updateJob = async (req, res) => {
        try {
            const {
                id,
                uid,
                JobName,
                JobDescription,
                JobStatus,
                StartDay,
                EndDay,
            } = req.body;
            const update_job = new Job(
                uid,
                JobName,
                JobDescription,
                JobStatus,
                StartDay,
                EndDay
            );
            await updateJob(id, update_job, (result) => {
                setListJob(uid);
                res.status(200).send({ result });
            });
        } catch (error) {
            res.status(500).send({ error: error });
        }
    };

    removeJob = async (req, res) => {
        try {
            const { id, uid } = req.body;
            await removeJob(id, uid, (result) => {
                setListJob(uid);
                res.status(200).send({ result });
            });
        } catch (error) {
            res.status(500).send({ error: error });
        }
    };
}
export default new JobController();

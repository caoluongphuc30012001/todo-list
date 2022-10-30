export default function Job(
    uid,
    JobName,
    JobDescription,
    JobStatus = "pending",
    StartDay,
    EndDay
) {
    this.uid = uid;
    this.JobName = JobName;
    this.JobDescription = JobDescription;
    this.StartDay = StartDay;
    this.EndDay = EndDay;
    this.JobStatus = JobStatus;
}

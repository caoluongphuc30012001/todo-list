/**
 *  @swagger
 *  components:
 *    schemas:
 *      JobInformation:
 *        type: object
 *        properties:
 *          ID:
 *            type: number
 *          uid:
 *            type: number
 *          JobName:
 *            type: string
 *          JobDescription:
 *            type: string
 *          JobStatus:
 *            type: string
 *          StartDay:
 *            type: string
 *          EndDay:
 *            type: string
 *
 */

/**
 *  @swagger
 *  components:
 *    schemas:
 *      UserInformation:
 *        type: object
 *        properties:
 *          ID:
 *            type: number
 *          FullName:
 *            type: string
 *          UserName:
 *            type: string
 *          Password:
 *            type: string
 *          Email:
 *            type: string
 *
 */

/**
 *  @swagger
 *  components:
 *    schemas:
 *      GetJobResponse:
 *        type: object
 *        properties:
 *          result:
 *            type: array
 *            items:
 *              $ref: '#components/schemas/JobInformation'
 */

import jsonwebtoken from "jsonwebtoken";

export async function authorization(req, res, next) {
    try {
        const token = req?.headers?.authorization?.split(" ")[1];
        await jsonwebtoken.verify(
            token,
            process.env.ACCESS_SECRET_KEY,
            (err) => {
                if (err)
                    res.status(401).send({
                        result: "Your token is not correct",
                    });
                else {
                    next();
                }
            }
        );
    } catch (error) {
        res.status(500).send({ error: error });
    }
}

import { createNewUser, getInforUser } from "../services/user.service.js";
import User from "../models/user.model.js";
import { validateEmail } from "../utils/validateEmail.util.js";
import Mail from "../databases/init.email.js";

class UserController {
    async createNewUser(req, res) {
        try {
            const { FullName, UserName, Password, Email } = req.body;
            const isEmail = validateEmail(Email);
            if (isEmail) {
                const new_user = new User(FullName, UserName, Password, Email);
                await createNewUser(new_user, (result) => {
                    res.status(200).send({ result });
                });
            } else {
                res.status(200).send({
                    result: "Your email address is invalid",
                });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async forgotPassword(req, res) {
        try {
            const { UserName, Email } = req.body;
            const sendEmail = (result) => {
                if (result.length > 0) {
                    const [userInfor, ...rest] = result;
                    const email = new Mail(
                        userInfor.Email,
                        "Đây là mật khẩu của bạn",
                        userInfor.Password
                    );
                    email.sendEmail();
                }
            };
            await getInforUser(UserName, Email, sendEmail);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
export default new UserController();

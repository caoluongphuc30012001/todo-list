import mysql from "mysql";
import { config } from "dotenv";
config();
let db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
});

db.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
});

export default db;


import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { questionRouter } from "./routes/questions.router";
import conn from "./database/connection";
import { CREATE_TABLE_QUESTION } from "./helper/questionQuery";

dotenv.config();
if (!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

// CONNECT DB
conn.connect((err) => {
    try {
        if (err) console.log(err);
        else {
            console.log('Kết nối đến db thành công !');
        }
    } catch (error) {
        console.log(error);

    }
})
// API ROUTER 
app.use("/api", questionRouter)

// ============================
app.listen(PORT, () => {
    console.log(`app connect to ${PORT}`);

})
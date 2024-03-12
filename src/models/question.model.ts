import conn from "~/database/connection";
import { CREATE_TABLE_QUESTION } from "~/helper/questionQuery";

conn.query(CREATE_TABLE_QUESTION, (err: Error, result: any) => {
    if (err) console.log(err);
    else console.log("tạo bảng question thành công !");
})

conn.end()
import { BaseQuestion } from './../interfaces/question.interface';
import { Request, Response } from "express"
import conn from "~/database/connection"
import { DELETE_QUESTION, GET_ALL_QUESTION, GET_QUESTION_BY_ID, SAVE_QUESTIONS, UPDATE_QUESTION } from "~/helper/questionQuery"

export const getAllQuestion = async (req: Request, res: Response) => {
    await conn.query(GET_ALL_QUESTION, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return;
        }
        const newQuestion = results.map(({ correct_answer, ...rest }: BaseQuestion) => {
            return rest
        })

        return res.status(200).json(newQuestion)
    })
}
export const createQuestion = async (req: Request, res: Response) => {
    conn.query(SAVE_QUESTIONS, req.body, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return;
        }
        const insertedId = results.insertId;
        conn.query(GET_QUESTION_BY_ID, insertedId, (err, rows) => {
            if (err) {
                console.error('Error fetching inserted data:', err);
                return;
            }
            return res.status(200).json(rows[0])
        });
    });
}
export const updateQuestion = (req: Request, res: Response) => {
    conn.query(UPDATE_QUESTION, [req.body, req.params.id], (err, rows) => {
        if (err) {
            console.error('Error fetching inserted data:', err);
            return;
        }
        return res.status(200).json(rows[0])
    })

}
export const deleteQuestion = (req: Request, res: Response) => {
    conn.query(DELETE_QUESTION, req.params.id, (err) => {
        if (err) {
            console.error('Error fetching inserted data:', err);
            return;
        }
        return res.status(200).json(
            {
                'message': 'xoá thành công !'
            }
        )
    })
}
export const getQuestionById = (req: Request, res: Response) => {
    conn.query(GET_QUESTION_BY_ID, req.params.id, (err, rows, fields) => {
        if (err) {
            console.error('Error fetching inserted data:', err);
            return;
        }
        return res.status(200).json(rows[0])
    });
}
export const checkQuestionAnswer = (req: Request, res: Response) => {
    // return res.status(200).json(req.params.id)
    conn.query(GET_QUESTION_BY_ID, req.params.id, (err, rows) => {
        const ques = rows[0]
        console.log("Object.values(ques.correct_answer)", Object.values(ques.correct_answer));
    })
}
import conn from "~/database/connection";

export const CREATE_TABLE_QUESTION: string = `CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255),
    description VARCHAR(255),
    answer_a VARCHAR(255),
    answer_b VARCHAR(255),
    answer_c VARCHAR(255),
    answer_d VARCHAR(255),
    category_id INT,
    multiple_correct_answers BOOLEAN,
    correct_answer JSON
);`
export const GET_ALL_QUESTION: string = 'SELECT * FROM questions'
export const SAVE_QUESTIONS: string = 'INSERT INTO questions SET ?';
export const GET_QUESTION_BY_ID: string = 'SELECT * FROM questions WHERE id = ?'
export const UPDATE_QUESTION: string = 'UPDATE questions SET ? WHERE id = ?'
export const DELETE_QUESTION: string = 'DELETE FROM questions WHERE id = ? '
export const CHECK_QUESTION_CORRECT:string = ''
export const getItemById = (query: string, id: string) => {
    conn.query(query, id, (err, rows) => {
        if (err) {
            console.error('Error fetching inserted data:', err);
            return;
        }
        return rows[0]
    });
}
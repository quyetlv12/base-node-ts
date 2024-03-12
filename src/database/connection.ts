import mysql from 'mysql';

const conn = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        database: 'quizz',
        password: '',
        port: 3306
    }
)
export default conn
export interface BaseQuestion  {
    question:                 string;
    description:              string;
    answer_a:                 string;
    answer_b:                 string;
    answer_c:                 string;
    answer_d:                 string;
    category_id:              number;
    multiple_correct_answers: boolean;
    correct_answer:           string[];
}


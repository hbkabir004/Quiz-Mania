import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quizs = () => {
    const quizData = useLoaderData();
    const {data}= quizData;
    const questions = data.questions;
    console.log(questions);
    return (
        <div>
           {
            questions.map(question=><Question
            key={question.id}
            quiz={question}
            ></Question>)
           }
        </div>
    );
};

export default Quizs;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quizs = () => {
    const quizData = useLoaderData();
    const {data}= quizData;
    const questions = data.questions;
    console.log(questions);
    return (
        <div className='grid grid-cols-3 lg:mx-72 lg:my-10 gap-10'>
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
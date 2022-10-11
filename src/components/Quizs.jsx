import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quizs = () => {
    const quizData = useLoaderData();
    const {data}= quizData;
    const questions = data.questions;
    console.log(data.name);
    return (
        <div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-yellow-200 ">
                {data.name}
              </h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:mx-72 lg:my-10 gap-10'>
           {
            questions.map(question=><Question
            key={question.id}
            quiz={question}
            ></Question>)
           }
        </div>
        </div>
    );
};

export default Quizs;
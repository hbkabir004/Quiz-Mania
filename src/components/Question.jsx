import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizCard from './QuizCard';

const Question = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    const exactQuestion = question.slice(3,-4);

    const notify = () => toast.success(`Answer: ${correctAnswer}`,
    {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    return (
        <div>
            <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <div className='flex justify-end'>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{exactQuestion}</h5>
            
            <svg onClick={notify} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          
            </div>

            <div className='grid grid-cols-1'>
            {
                options.map(option=><QuizCard
                key={option.id}
                opt={option}
                correctAnswer={correctAnswer}
                >{option}</QuizCard>)
            }
            </div>
            </a>
        
        </div>
    );
};

export default Question;
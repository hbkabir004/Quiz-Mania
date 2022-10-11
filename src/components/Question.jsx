import React from 'react';

const Question = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    return (
        <div>
            <h1>{question}</h1>
            
            <div className='grid grid-cols-1'>
            {
                options.map(option=><p
                key={option.id}
                >{option}</p>)
            }
            </div>
        </div>
    );
};

export default Question;
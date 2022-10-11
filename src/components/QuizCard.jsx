import React from 'react';

const QuizCard = ({opt}) => {
    return (
        <div className="px-4 py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
            <span><input type="radio" name="radio-1" className="radio mr-2" />{opt}</span>
        </div>
        
    );
};

export default QuizCard;
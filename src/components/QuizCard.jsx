import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = ({opt, correctAnswer}) => {
    const notify = () => {
        if(opt===correctAnswer){
            toast.success('CORRECT', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
            toast.error('WRONG', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    };
    return (
        <label for={opt}>
            <div className="px-4 py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 hover:shadow-lg hover:bg-yellow-200 hover:rounded-lg hover:text-deep-purple-accent-400 hover:font-semibold hover:text-xl">
                <span><input onClick={notify} type="radio" id={opt} name="radio-1" className="radio mr-2" />{opt}</span>
            <ToastContainer />
            </div>
        </label>
        
    );
};

export default QuizCard;
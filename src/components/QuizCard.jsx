import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = ({opt, correctAnswer}) => {
    const notify = () => {
        if(opt===correctAnswer){
            toast.success('CORRECT', {
                position: "top-center",
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
                position: "top-center",
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
        <div className="px-4 py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
            <span onClick={notify}><input type="radio" id={opt} name="radio-1" className="radio mr-2" /><label for={opt}>{opt}</label></span>
            <ToastContainer />
        </div>
        
    );
};

export default QuizCard;
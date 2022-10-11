import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row border-solid border-2 border-yellow-200 pl-5 pr-32 py-8 rounded-lg hover:bg-yellow-100">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100">
              <img src={logo} alt="" srcset="" />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
            <p className="mb-3 text-sm text-gray-900">
              Total quiz : <b>{total}</b>
            </p>
            <Link
              to ={`/quiz/${id}`}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 p-2 rounded-lg bg-yellow-400 hover:text-sky-400"
            >
              <span className='mr-2'>Start Quiz</span>
               
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>




             
            </Link>
            
            
            
            
          </div>
        </div>
        
    );
};

export default Topic;
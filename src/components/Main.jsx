import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';

export const QuizContext = React.createContext();
const Main = () => {
    const quiz = useLoaderData();
    // console.log(quiz);
    return (
        <div>
            <QuizContext.Provider value={quiz}>
                <Header></Header>
                <Outlet></Outlet>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;
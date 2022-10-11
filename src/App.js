import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Main from './components/Main';
import Quizs from './components/Quizs';
import Statistics from './components/Statistics';
import Topics from './components/Topics';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/topic',
          element: <Topics></Topics>,
        },
        {
          path: '/stat',
          
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/quiz/:quizID',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`);
          },
          element: <Quizs></Quizs>,
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>,
        },
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

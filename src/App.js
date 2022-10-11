import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Main from './components/Main';
import Statistics from './components/Statistics';
import Topic from './components/Topic';


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
          element: <Topic></Topic>,
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

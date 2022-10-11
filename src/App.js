import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Main from './components/Main';
import Statistics from './components/Statistics';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/stat',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
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

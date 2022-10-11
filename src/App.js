import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Main from './components/Main';


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
          path: '/',
          element: <Home></Home>,
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

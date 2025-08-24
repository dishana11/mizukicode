import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/lib/themeContext';
import '@/styles/globals.css';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import CoursePage from '@/pages/CoursePage';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/courses', element: <Courses /> },
  { path: '/course/:id', element: <CoursePage /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

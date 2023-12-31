import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)

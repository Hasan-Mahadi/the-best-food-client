import React from 'react';
import Header from '../routes/pages/Shared/Header/Header';
import Footer from '../routes/pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-136px)]'>
           
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
            
            
        </div>
    );
};

export default Main;
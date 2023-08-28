import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.css';


const Detail = () => {

    return (
        <div className='full-page-bg6'>
            <div className='text-center  font-bold   text-center mb-5  text-purple-900'>
            <h1 className='text-6xl font-bold pt-5'>Here are deteails comming....</h1>





            <div className='text-center mt-64 hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                <Link to='/'> <button className="btn btn-primary  text-4xl ml-20"> Back to home </button></Link>

            </div>
        </div>
        </div>


    );
};

export default Detail;
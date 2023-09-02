import { Button } from 'bootstrap';
import React from 'react';
import { BsEmojiSmileUpsideDownFill } from 'react-icons/bs';


import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {

   const {error, status} = useRouteError()
    console.log(error.message)
    return (
        <div>
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <BsEmojiSmileUpsideDownFill className='w-40 h-40 text-yellow-500' />
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
              <span className='sr-only'>Error</span>
              {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
              {error?.message}
            </p>

            <Link  className="btn btn-primary mt-20 text-4xl text-center" to='/'>  Back to home page </Link>
          
          </div>

        </div>


        
      </section>
            
          <div className='text-center mt-10  hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    

                </div>
        </div>
    );
};

export default Errorpage;
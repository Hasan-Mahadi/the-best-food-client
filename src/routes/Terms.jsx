import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere itaque ipsum dolorum deserunt veritatis, molestias animi inventore culpa eligendi aperiam obcaecati harum distinctio dicta at ad possimus nihil doloremque labore.
            </p>

            <div className='text-center mt-10  hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='/register'> <button className="btn btn-primary  text-4xl ml-20"> Back to Register </button></Link>

                </div>
        </div>
    );
};

export default Terms;
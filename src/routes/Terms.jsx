import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
    return (
        
        <div className='full-page-bg1t'>
            <div className='p-40 pt-5 font-bold italic text-white'>
            <h2 className='text-orange-700 font-bold italic text-6xl text-center mb-5   hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere itaque ipsum dolorum deserunt veritatis, molestias animi inventore culpa eligendi aperiam obcaecati harum distinctio dicta at ad possimus nihil doloremque labore.
            </p>







            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam voluptate officia quos ducimus maxime, ipsa possimus. Voluptatibus, nihil ea voluptates vitae officia labore vel similique quaerat pariatur enim corrupti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam voluptate officia quos ducimus maxime, ipsa possimus. Voluptatibus, nihil ea voluptates vitae officia labore vel similique quaerat pariatur enim corrupti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam voluptate officia quos ducimus maxime, ipsa possimus. Voluptatibus, nihil ea voluptates vitae officia labore vel similique quaerat pariatur enim corrupti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam voluptate officia quos ducimus maxime, ipsa possimus. Voluptatibus, nihil ea voluptates vitae officia labore vel similique quaerat pariatur enim corrupti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam voluptate officia quos ducimus maxime, ipsa possimus. Voluptatibus, nihil ea voluptates vitae officia labore vel similique quaerat pariatur enim corrupti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam voluptate officia quos ducimus maxime, ipsa possimus. Voluptatibus, nihil ea voluptates vitae officia labore vel similique quaerat pariatur enim corrupti!</p>

            <div className='text-center mt-10  hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='/register'> <button className="btn btn-primary  text-4xl ml-20"> Back to Register </button></Link>

                </div>
        </div>
        </div>
    );
};

export default Terms;
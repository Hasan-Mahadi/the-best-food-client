import React, { useContext } from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {



  const { user,logOut } = useContext(Authcontext);
  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch(error => console.log(error));
  }


  return (
    <div className='p-3 bg-cover bg-center bg-sky-950  custom-bg'>
      <Navbar className='' >

        <Container className='st ' >
          <h1 className='title-name italic font-bold text-5xl '><span className='text-orange-600'>T</span>he <span className='text-orange-600'>B</span>est <span className='text-orange-600'> F</span>ood</h1>

          <div className='items-center hidden space-x-8 lg:flex text-decoration-none'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-green-600 font-bold text-decoration-none text-xl hover:text-2xl transform hover:scale-110 hover:rotate-12 transition delay-150 duration-300 ease-in-out' : 'default')}
            >
              Home
            </NavLink>

            <NavLink
              to='/blogs'
              className={({ isActive }) => (isActive ? 'text-green-600 font-bold text-decoration-none  text-xl hover:text-2xl transform hover:scale-110 hover:rotate-12 transition delay-150 duration-300 ease-in-out' : 'default')}
            >
              Blog
            </NavLink>

            {/* ---------------------- */}

            <NavLink className='gap-1 flex'>
              {user && <div className=''>
                <FaUserCircle style={{ color: 'orange', fontSize: '1.8rem' }} ></FaUserCircle>

              </div>
              }

          
           
              <Link to='/login' >
            {
              user ?
                <Button onClick={handleLogOut} className='text-green-600 font-bold text-decoration-none  text-xl hover:text-2xl transform hover:scale-110 hover:rotate-12 transition delay-150 duration-300 ease-in-out'>Logout</Button>:

                <Button className='text-green-600 font-bold text-decoration-none  text-xl hover:text-2xl transform hover:scale-110 hover:rotate-12 transition delay-150 duration-300 ease-in-out'>login</Button>

            }
            </Link>
      
           

         

            </NavLink>
          </div>

        </Container>

      </Navbar>
    </div>
  );
};

export default Header;
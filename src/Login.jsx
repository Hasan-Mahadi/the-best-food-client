import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { Authcontext } from './Providers/AuthProvider';


const Login = () => {


const {signIn} = useContext(Authcontext);
const navigate = useNavigate();
const location = useLocation();
console.log( 'login page location',location);
const from = location.state?.from?.pathname  || '/';

const handlelogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password);

  signIn(email,password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    navigate(from, {replace: true});
  })
  .catch(error => {
    console.log(error);
  })
}






    return (
     
        <div className='full-page-bg1'>
            <Container className=' '>
          <h1 className='text-center pt-5 mb-5 font-bold font-bold text-black		'>Please Login !!!</h1>

          <div className=''>
          <div className='w-full  '>

<Form onSubmit={handlelogin} className="shadow-md bg-purple-700 rounded px-8 pt-6 max-w-xs m-auto max-w-md  max-h-screen pb-8 mb-4">
 <Form.Group className="mb-4 mt-10 ">
   <Form.Label className="block text-gray-700  text-sm font-bold mb-2" for="username">
     Email
   </Form.Label>
   <Form.Control className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' type='email'name='email' placeholder='Enter your Email' />
  
 </Form.Group>
 <Form.Group className="mb-6">
   <Form.Label className="block text-gray-700 text-sm font-bold mb-2" >
     Password
   </Form.Label>

   <Form.Control className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 'name='password' type='text' placeholder='Enter your Password' />
 
  

   <a className="inline-block mt-2 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
     Forgot Password?
   </a>
 </Form.Group>

 <div className="flex items-center justify-between">

   <Button className="bg-blue-500 mb-10 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'> 
   Login
   </Button>
  
 

 </div>
 <div className=''>
 <label className="block text-red-500 text-sm font-bold mb-10" >
   Dont Have an Account?   <Link className='text-blue-400 underline' to="/register">  Register!!!</Link>
   </label>
 </div>
</Form>

</div>
          </div>


           
         
       </Container>
    
        </div>
    );
};

export default Login;
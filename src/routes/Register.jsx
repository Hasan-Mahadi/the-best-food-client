import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
import { useContext } from 'react';
import { Authcontext } from '../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {

  const { createUser } = useContext(Authcontext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name,email,photo,password)
    createUser(  email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error => {
      console.log(error);
    })

  }


  const handleAccepted = event =>{
    setAccepted(event.target.checked);
  }

    return (
        <div className='full-page-bg'>
                  <Container className=''>
          <h1 className='text-center mb-5 pt-3 font-bold text-purple-900'>Please <span className='text-blue-700'>Register </span>Here!!!</h1>

          <div className=''>
          <div className='w-full  '>

<Form  onSubmit={handleRegister}   className="shadow-md bg-purple-700 rounded px-8 pt-6 max-w-xs m-auto max-w-md  max-h-screen pb-8 mb-4">

 <Form.Group className="mb-2  ">
   <Form.Label className="block text-gray-700  text-sm font-bold mb-2" >
      Name
   </Form.Label>
 
  
   <Form.Control className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' type='text' name='name' placeholder='Enter your Name' required/>
  
 </Form.Group>


 <Form.Group className="mb-2 ">
   <Form.Label className="block text-gray-700  text-sm font-bold mb-2" >
   Photo 
   </Form.Label>
 
  
   <Form.Control className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' type='text' name='photo' placeholder='Enter your URL' required/>
  
 </Form.Group>

 <Form.Group className="mb-2  ">
   <Form.Label className="block text-gray-700  text-sm font-bold mb-2" >
   Email
   </Form.Label>
 
  
   <Form.Control  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' type='email' name='email' placeholder='Enter your Email' required />
  
 </Form.Group>

 <Form.Group className="mb-2">
   <Form.Label className="block text-gray-700 text-sm font-bold mb-2"  >
     Password
   </Form.Label>

   <Form.Control className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' type='password'  name='password' placeholder='Enter your Password' required />
 
  
   

 </Form.Group>

 <Form.Check 

 onClick={handleAccepted}
 type='checkbox'
 name='accept' 
 label={<>Accept <Link className='text-orange-500' to='/terms'>Terms and Conditions</Link></>}/>





 <div className="flex items-center justify-between">

   <Button className="bg-blue-500 mb-10 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={!accepted} type='submit'>
    Register
   </Button>
  
 

 </div>
 <div className=''>
 <label className="block text-black text-sm font-bold mb-10" >
   Already Have an Account?   <Link className='text-blue-400 underline' to="/login">  Login!!!</Link>
   </label>
 </div>
</Form>

</div>
          </div>


           
         
       </Container>
        </div>
    );
};

export default Register;



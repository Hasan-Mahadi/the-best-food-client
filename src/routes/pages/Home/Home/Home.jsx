import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaRegClock, FaRegStar, FaStar } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { FcCallback } from 'react-icons/Fc';
import Marquee from "react-fast-marquee";
import './Home.css';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react' 
import Best from '../../../../assets/Best Food.json'




const Home = () => {

    const [Items, setItems] = useState([])

    fetch('https://the-best-food-server-side-hasan-mahadi.vercel.app/allData')
        .then((response) => response.json())
        .then((data) => setItems(data));
    console.log(Items);



    // h-screen bg-gradient-to-b from-gray-100 to-gray-300



    return (

      
 <section className=' '>

<section className='' >
  
     <div className='flex m-20 rounded-lg mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  sm:flex  '>
        <div className='sm:text-center'>
            <h1 className='ms-20' >The <span className='text-orange-600 text-8xl font-bold italic   hover:text-2xl transform hover:scale-110 hover:rotate-12'>Fastest</span>  <br />Delivery <br /><span className='text-orange-400 text-8xl	font-bold'>In Your City...</span></h1>

        </div>


        <div>
            <Lottie className='rounded-lg sm:text-center' animationData={Best} loop={true}/>
        </div>

     
     {/* <div>
     <img className='rounded-lg w-9/12 ms-40  text-xl hover:text-2xl transform hover:scale-110 hover:rotate-12' src="https://img.freepik.com/free-photo/smiling-young-male-baker-leaning-table-with-variety-baked-bread-laptop_23-2147883512.jpg?w=1060&t=st=1693922331~exp=1693922931~hmac=49245cb2bd77639e035376e467508cadd85f2168c2b41d6c7beddfea9bc5cec0" alt="" />
     </div> */}

    </div>


    <div className='d-flex'>
        <button className="btn btn-primary  text-4xl ml-20">Comming... </button>
        <Marquee className='text-green-900 font-bold italic text-xl	' speed={150}>


            1. Cheeseburger
            2. French fries
            3. Chicken nuggets
            4. Pizza
            5. Hot dogs
            6. Tomato
            7. Burritos
            8. Fried chicken
            9. Milkshakes
            10. Soft serve ice cream <br />

            <br />

            11. Onion rings

            12. Nachos

            13. Chicken wings

            14. Fish and chips
            15. Breakfast sandwiches
            16. Chicken sandwich
            17. Quesadillas
            18. Sliders
            19. Fried shrimp
            20. Veggie burger


        </Marquee>
    </div>


    <div className='text-center mb-5 mt-5 text-purple-900 '>
        <h1 className='text-6xl font-bold'>Our Best Sales Food!!! </h1>
    </div>




    <div className='w-7/12 ms-72 rounded-lg '>
        <Carousel>
            <Carousel.Item interval={1000}>

                <img
                    className=" rounded-lg "
                    src='https://img.freepik.com/free-photo/joyful-birthday-celebration-with-delicious-chocolate-cake-generative-ai_188544-9589.jpg?w=1380&t=st=1693933598~exp=1693934198~hmac=a92ace26c33d534aba435c937bf6c375d3264d7bf7e33a38dfa229a4175b1d31'
                    alt="First slide"
                />


                <Carousel.Caption>
                    <h3>Cake</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
                <img
                    className="rounded-lg  "
                    src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1380&t=st=1693933490~exp=1693934090~hmac=d114e1b0f89eca4bea3eb991e795df6057efbcc96bd90ec75af0eadfc3d42816'
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Burger</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='rounded-lg '
                    src='https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=1380&t=st=1693933214~exp=1693933814~hmac=3768487fd4008e1d8b02e862d261cf4466c8e35ac9f0d45d5b5420c22edd3d2d'
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Pizza</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>





    <div className='mt-5 p-5 '>

        <CardGroup className=''>
            <Card className='border border-0 hover:text-2xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>

                <Card.Body className='mx-auto bg-purple-600	rounded-lg '>
                    <h1 className='ml-28 text-orange-500'><FaRegClock></FaRegClock></h1>
                    <Card.Title className='ml-5'>Today 10:00am - 10:00pm</Card.Title>
                    <p className='ml-20 text-white font-bold italic'>Working time</p>
                    <hr className='w-48  h-1 mx-auto my-4  border-0 rounded md:my-10  bg-rose-950 ' />
                </Card.Body>

            </Card>
            <Card className='border border-0 hover:text-2xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out'>

                <Card.Body className='mx-auto bg-purple-600	rounded-lg'>
                    <h1 className='ml-28 text-orange-600'> <GoLocation></GoLocation> </h1>
                    <Card.Title className='ml-5'>Washington, D.C., DC,USA</Card.Title>
                    <p className='ml-20 text-white font-bold italic'>Our Location</p>
                    <hr className='w-48  h-1 mx-auto my-4  border-0 rounded md:my-10  bg-rose-950 ' />
                </Card.Body>


            </Card>
            <Card className='border border-0 hover:text-2xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out'>

                <Card.Body className='mx-auto bg-purple-600	rounded-lg'>
                    <h1 className='ml-20 '><FcCallback></FcCallback></h1>
                    <Card.Title className='ml-6'>Cell---    ++0123 456 7891</Card.Title>
                    <p className='ml-20 text-white font-bold italic'>Phone Number</p>
                    <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10   dark:bg-gray-700' />
                </Card.Body>

            </Card>
        </CardGroup>

    </div>


    {/* API part */}

    <section>
        <div className='text-center'>
            <h3 className='mt-20 text-purple-700 text-4xl	italic'>Product</h3>
            <h1 className=''>Most <span className='text-purple-700 italic'>Popular</span> Items <span className='text-purple-700	italic'>!!!</span></h1>

        </div>


        {/* border border-0  hover:text-2xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out */}

        {<div className='p-5 m-20  most mt-2'>



            <div className='	rounded-lg'>
                <Card className='	rounded-lg'>


                    <Card.Body className='mx-auto grid grid-cols-3 mb-5 gap-4 mt-5 	rounded-lg	'>

                        {Items.map((service) => (
                            <div className='max-w-sm rounded hover:text-2xl transform hover:scale-110  transition delay-150 duration-300 ease-in-outoverflow-hidden shadow-lg 	rounded-lg ' key={service?.id}>

                                <img className='ima 	rounded-lg' src={service.img} alt="" />


                                <div className=' flex ratin '>
                                    <h2 className='ml-3 mt-2 text-purple-700 '>{service.name}</h2>

                                    <div className='flex gap-1 mr-3 mt-2'>
                                        <div>
                                            {<FaStar className='text-warning mt-2'></FaStar>}</div>

                                        <h4>{service.ratings}</h4>
                                    </div>
                                </div>

                                <div className='flex ratin mb-3 mt-3'>

                                    <div className='ml-3'>
                                        <Link to={`../details/${1}`}><button className='bg-purple-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>Deteils</button></Link>

                                    </div>



                                    <h2 className='mr-3'><span className='text-warning'>$</span>{service.price}</h2>

                                </div>
                            </div>
                        ))}



                    </Card.Body>


                </Card>
            </div>

        </div>}





        <div className='text-center mb-5 mt-10 text-purple hover:text-2xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
            <Link to='about'> <button className="bg-purple-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">About Me !!!</button></Link>

        </div>
   







    </section>
</section>

</section>
    









    );
};

export default Home;















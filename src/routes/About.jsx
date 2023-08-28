import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className=''>
           
           <div className=''>
           <div>
                <h4 className='text-purple-600 font-bold italic text-5xl mt-5 text-center mb-5'>Wellcome To My About Page!!!</h4>
            </div>

            <div className='flex flex-wrap m-20 font-bold'>
                <div className=''>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, placeat minus odio dolor neque aut voluptatibus quam quaerat saepe beatae praesentium ipsum culpa perspiciatis ex facere distinctio porro dolores nam.
            Dolores cum quis, libero voluptates quo commodi obcaecati ratione sapiente veniam illum perspiciatis nam, officia repellendus rem reiciendis distinctio illo iste accusamus cumque labore. Quae repellat ducimus obcaecati odit dicta.
            Doloremque officiis consectetur repellendus ex, necessitatibus corporis aut obcaecati quas. Quod assumenda architecto dolore id nemo enim alias ad commodi. Beatae recusandae aperiam laudantium assumenda laborum asperiores odit eius placeat?
            Laboriosam nihil est illum totam unde, cupiditate tempore id veniam delectus repellendus a iusto, nesciunt sint ipsa vel reiciendis eius, ullam accusamus quas. Rerum natus commodi quod est, ab cum?
            Quisquam tempore amet eveniet accusamus dolores fuga ratione omnis itaque autem, maiores in minus quis quod id, voluptates ipsum consequatur fugiat sapiente tempora consequuntur? Et harum fugiat nobis labore repellendus.
            Aspernatur, velit! Incidunt pariatur labore corrupti libero, quo, accusamus nesciunt suscipit voluptatibus ipsum totam reiciendis a sequi earum fuga debitis accusantium ad, fugiat adipisci. Optio iste ipsam dolorem voluptatibus sequi?
            Beatae hic in quaerat autem molestias quasi sapiente? Quod quidem id praesentium sapiente nam iure nostrum alias saepe pariatur eum molestias consequatur enim at odit repudiandae maiores, incidunt modi porro.
            Deserunt dolores culpa accusantium aliquam laborum modi reprehenderit quos nulla sed incidunt enim, maxime dolorum, tempora harum! Animi, ipsa esse aspernatur quia accusantium nesciunt pariatur sunt quod, inventore id quo!
            Non ab eveniet aut debitis dicta eum nesciunt nobis blanditiis iure explicabo esse, porro, enim vel id consectetur assumenda eos quae provident! Nostrum eaque consectetur nihil maxime exercitationem excepturi dolorum?
            Natus veritatis, temporibus ad sapiente unde, aliquid alias doloribus illo repellendus placeat praesentium fuga. Atque magni dicta ratione sint praesentium, quasi mollitia commodi, ab, omnis magnam excepturi hic natus pariatur?
            Aspernatur earum, illum eaque harum, necessitatibus obcaecati rerum ut tempora ad, unde non incidunt pariatur alias nesciunt deserunt molestiae culpa porro ab quis temporibus quisquam amet et! Labore, deserunt debitis.
            Ducimus dolores dicta voluptate, cumque consequuntur saepe sequi omnis corrupti eligendi nostrum, autem unde quos eum doloribus beatae magni earum expedita consequatur modi molestias pariatur rerum vel. Debitis, voluptates omnis!
            Officiis minus delectus corrupti incidunt quas molestias necessitatibus eum ipsam nobis, soluta magni aliquid ullam ipsum architecto, dolor cupiditate! Iure itaque dolorem repudiandae. Consequatur tenetur at quaerat sapiente repellat? Perspiciatis.
            Minus aut culpa molestias iure suscipit quis molestiae hic reprehenderit ipsa est alias blanditiis ullam fugit voluptatibus incidunt doloremque quia fugiat in magnam modi ipsum saepe, ad dolores animi. Autem!
            Voluptatem dolorem molestiae dolore fugiat dignissimos. Perspiciatis aut reprehenderit dolore labore placeat inventore itaque vitae repellat velit, ex unde illo adipisci similique tempora! Facilis maxime fuga, reiciendis quod sed numquam!
            Magnam vitae voluptatum, error, earum nisi dolor, ullam tempora molestiae animi soluta id facilis iure necessitatibus. Vel unde, voluptatem nobis enim, quidem error odio repudiandae veritatis consectetur ipsam alias tempore!
            Corrupti numquam voluptas iusto iste sint. Rerum voluptatibus molestiae quis explicabo labore obcaecati odit non. Commodi vitae tempora dolor, nihil iusto temporibus incidunt minus earum accusamus repellendus dolorum, veritatis ad.
            Animi reiciendis iusto fugit, corrupti commodi odit, aut ex inventore expedita pariatur minus suscipit earum adipisci laudantium accusamus asperiores vero rerum incidunt quod, consectetur maxime ullam? Quos blanditiis animi earum!
            Eius praesentium, culpa, officia veritatis in asperiores facere similique quam ea eos quae tempora beatae esse alias impedit accusantium ipsa commodi sint sit maxime assumenda numquam eum adipisci? Praesentium, ullam.
            Doloribus earum ratione molestias maiores dolore ab facere qui debitis nesciunt error, provident soluta iure, nostrum voluptatibus id autem harum nemo impedit fugit aliquid. Beatae commodi necessitatibus illum delectus! Porro.
                </div>
            </div>

            <div className='mt-20 p-40   '>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> 1. Tell us the differences between uncontrolled and controlled components ??</Accordion.Header>
                        <Accordion.Body>
                            <p className='text-green-600 font-bold'>1. Uncontrolled Components:</p>

                            In uncontrolled components, the component itself manages its own state internally.
                            The state of the input elements (such as input fields, checkboxes, etc.) is handled by the HTML DOM rather than the component.
                            The values of the input elements are accessed through DOM queries or references.
                            Uncontrolled components are typically simpler to implement as they require less code.
                            They are useful for cases where you don't need to track the input values or perform complex validations.
                            However, they offer limited control and make it harder to perform actions such as validation, formatting, or resetting values.



                            <br />


                            <p className='text-green-600 font-bold mt-2'>2. Controlled Components:</p>

                            Controlled components, on the other hand, have their state controlled by the component itself.
                            The state of the input elements is stored in the component's state or props.
                            Changes to the input values are handled through event handlers, typically using the onChange event.
                            Controlled components provide a central source of truth, allowing you to manage and manipulate the input data more easily.
                            They enable you to perform validations, enforce formatting rules, and respond to user interactions more effectively.
                            Controlled components are often more suitable for complex forms or scenarios where you need fine-grained control over the input state.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. How to validate React props using PropTypes ??</Accordion.Header>
                        <Accordion.Body>
                            <p className='text-green-600 font-bold mt-2'>  In React,</p> you can validate the props passed to a component using PropTypes. PropTypes is a separate package called prop-types, which can be installed via npm or yarn. Here's how you can use PropTypes to validate React props:
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>3.Tell us the difference between node js and express js ??
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className='text-green-600 font-bold mt-2'> Node.js</p>
                            Node.js and Express.js are both widely used in the JavaScript ecosystem, but they serve different purposes:

                            Node.js:
                            Node.js is a runtime environment that allows you to execute JavaScript code outside the browser. It provides an event-driven, non-blocking I/O model that makes it suitable for building scalable network applications. Key features of Node.js include:

                            1. Server-side JavaScript: Node.js allows you to run JavaScript code on the server, enabling you to build server-side applications and APIs using JavaScript.

                            2. Event-driven and non-blocking: Node.js uses an event-driven architecture that allows for efficient handling of multiple concurrent connections without blocking the execution of other operations. This makes it well-suited for building highly scalable and real-time applications.

                            3. JavaScript ecosystem: Node.js has a rich ecosystem of packages and modules available through npm (Node Package Manager). It allows developers to leverage a wide range of libraries and tools to build server-side applications efficiently.
                            <p className='text-green-600 font-bold mt-2'>Express.js:</p>
                            Express.js:
                            Express.js is a web application framework built on top of Node.js. It provides a set of features and utilities for building web applications and APIs. Some key aspects of Express.js include:

                            1. Minimal and unopinionated: Express.js is designed to be lightweight and flexible. It provides a minimal set of features out of the box, allowing developers to choose and integrate additional libraries and tools as per their requirements.

                            2. Routing and middleware: Express.js offers a robust routing system that allows you to define routes for handling HTTP requests and specifying corresponding actions. It also provides middleware support, which allows you to add functionality in the request-response cycle, such as authentication, logging, error handling, etc.

                            3. Server-side rendering: Express.js supports server-side rendering (SSR) and can be used in conjunction with templating engines like EJS, Pug, or Handlebars to generate dynamic HTML on the server before sending it to the client.

                            4. API development: Express.js simplifies the development of RESTful APIs by providing tools and conventions for handling routes, request parameters, query parameters, and response formats.
                            <br />


                            <p className='font-bold mt-5'>In summary,</p> Node.js is a runtime environment for executing JavaScript on the server, while Express.js is a web application framework built on top of Node.js. Node.js provides the underlying infrastructure and capabilities, whereas Express.js adds higher-level abstractions and utilities for building web applications and APIs.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>4. What is a custom hook, and why will you create a custom hook??</Accordion.Header>
                        <Accordion.Body>
                            <p className='text-green-600 font-bold mt-2'>  In React,</p> a custom hook is a JavaScript function that starts with the prefix "use" and enables you to reuse stateful logic across multiple components. Custom hooks allow you to extract and encapsulate common logic, making it more reusable, shareable, and easier to test.

                            Here are some reasons why you might create a custom hook:

                            1. Reusability: If you find yourself duplicating code or logic in multiple components, you can create a custom hook to extract that common logic into a reusable function. This promotes code reuse and reduces redundancy.

                            2. Abstraction: Custom hooks help abstract away complex or repetitive logic, making your components cleaner and easier to understand. By encapsulating logic within a custom hook, you can simplify the component code and focus on its specific responsibilities.

                            3. Stateful logic: Custom hooks are especially useful for managing stateful logic, such as handling form inputs, API calls, timers, or subscriptions. By encapsulating such logic in a custom hook, you can share the state and behavior across multiple components without the need for complex component hierarchies or prop drilling.

                            4. Testing: Custom hooks can make testing easier. Since hooks can be independently tested, creating custom hooks allows you to separate the concerns of testing the logic from testing the component itself. You can write unit tests for the custom hook to ensure the logic behaves as expected, and then focus on testing the component's specific rendering and interactions.

                            5. Organization and maintainability: By extracting reusable logic into custom hooks, you can improve the organization and maintainability of your codebase. Custom hooks provide a clear and structured way to manage and reuse logic, making it easier to understand, update, and extend your code in the future.

                            When creating a custom hook, remember to follow the rules of hooks in React. These rules state that custom hooks should only call other hooks and not contain any JSX or conditional statements at the top level. This ensures the custom hook works consistently with React's lifecycle and state management.

                            Overall, custom hooks are a powerful tool in React for creating reusable and maintainable code by encapsulating common logic. They allow you to extract and share stateful logic across components, promoting code reuse and improving the organization of your codebase.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

<h4 className='mt-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus laudantium rem laborum. Ut quia rerum pariatur magni dolorem, quibusdam tempora quos suscipit nemo atque, neque, facilis fugit placeat. Sequi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fuga laborum. Totam officia fuga earum corporis qui hic, corrupti asperiores laboriosam rerum necessitatibus id magni tempore eaque error commodi quia.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatibus quo maxime cumque, eos corrupti, officiis placeat delectus quod rem ab tenetur amet ipsum illum, excepturi vel incidunt facere architecto?
</h4>
                <div className='text-center mt-96  hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='/'> <button className="btn btn-primary  text-4xl "> Back to home </button></Link>

                </div>
        </div>
           </div>
        </div>
    );
};

export default About;
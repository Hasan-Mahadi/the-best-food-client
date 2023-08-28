import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (

        <section>
            <div>
                <h4 className='text-purple-600 font-bold italic text-5xl mt-5 text-center mb-5'>Wellcome To My Blog Page!!!</h4>
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

                <div className='text-center mt-10  hover:text-4xl transform hover:scale-110  transition delay-150 duration-300 ease-in-out '>
                    <Link to='/'> <button className="btn btn-primary  text-4xl ml-20"> Back to home </button></Link>

                </div>
            </div>
        </section>
    );
};

export default Blog;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "./pages/Home/Home/Home";
import Blog from "../Blog";
import Login from "../Login";
import Detail from "./pages/Detail";
import About from "./About";
import Register from "./Register";
import PrivetRouts from "./PrivetRouts";
import Terms from "./Terms";
import Errorpage from "./Errorpage";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blogs',
                element: <PrivetRouts><Blog></Blog></PrivetRouts>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <PrivetRouts><About></About></PrivetRouts>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
            {
                path: '/details/:id',
                element: <PrivetRouts><Detail></Detail></PrivetRouts>,
                loader: ({ params }) => fetch(`https://the-best-food-server-side-hasan-mahadi.vercel.app/allData/${params.id}`),
            },

        ]
    }


]);

export default router;


// {
//     path:'/details/:id',
//     element:<Details></Details>

// }
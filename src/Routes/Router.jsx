import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Home/Service/Service";
import Works from "../Pages/Home/Works/Works";
import Resume from "../Pages/Home/Resume/Resume";
import Skill from "../Pages/Home/Skill/Skill";
import Testimonials from "../Pages/Home/Testimonials/Testimonials";
import Contact from "../Pages/Home/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
           {
            path: 'services',
            element: <Service></Service>
           },
           {
            path: 'works',
            element: <Works></Works>
           },
           {
            path: 'resume',
            element: <Resume></Resume>
           },
           {
            path: 'skills',
            element: <Skill></Skill>
           },
           {
            path: 'testimonials',
            element: <Testimonials></Testimonials>
           },
           {
            path: 'contact',
            element: <Contact></Contact>
           }
        ]
    },
]);
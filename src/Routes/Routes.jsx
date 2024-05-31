import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Components from "../Pages/Components/Components/Components";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Orders from "../Pages/Orders/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Shared/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/components',
                element: <Components/>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },           
        ]
    },
]);
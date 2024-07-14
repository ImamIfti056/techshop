import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Components from "../Pages/Components/Components/Components";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AdminRoute from "./AdminRoute";
import ManageProducts from "../Pages/Dashboard/ManageProducts/ManageProducts";

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
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },           
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/cart',
                element: <Cart/>
            },
            //----------ADMINS ONLY------------------
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path: '/dashboard/addProducts',
                element: <AdminRoute><AddProducts/></AdminRoute>
            },
            {
                path: '/dashboard/manageProducts/:id',
                element: <AdminRoute><ManageProducts/></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/components/${params.id}`)
            },

        ]
    }
]);
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Gunpla from "./Gunpla.jsx";
import GunplaDetail from "./GunplaDetail.jsx";
import Create from "./Create.jsx";
import Edit from "./Edit.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/gunpla",
                element: <Gunpla />,
            },
            {
                path: "/gunpla/:id",
                element: <GunplaDetail />,
            },
            {
                path: "/create",
                element: <Create />,
            },
            {
                path: "/gunpla/:id/edit",
                element: <Edit />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App

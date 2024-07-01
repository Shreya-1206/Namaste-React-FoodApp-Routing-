import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";


// const styleCard = {
//   backgroundColor :"#FEEFAD",
// }

const AppLayout = () => {
    return (
        <div className="app">
           <Header/>
           <Outlet/>
           {/* <Body /> */}
           {/* footer */}
        </div>
    )
};

const appRouter = createBrowserRouter([ // router configuration
    {
        path : "/",
        element :<AppLayout />,
        children :[
            {
                path : "/",
                element :<Body/>,
                errorElement : <Error/>
            },
            {
                path : "/about",
                element :<About />,
                errorElement : <Error/>
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/restuarants/:resId",
                element : <RestuarantMenu />
            }
        ],
        errorElement : <Error/>
    },
    

])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} /> );  // render like this 



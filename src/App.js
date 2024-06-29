import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// const styleCard = {
//   backgroundColor :"#FEEFAD",
// }

const AppLayout = () => {
    return (
        <div className="app">
           <Header/>
           <Body />
           {/* footer */}
        </div>
    )
};

const appRouter = createBrowserRouter([ // router configuration
    {
        path : "/",
        element :<AppLayout />
    },
    {
        path : "/about",
        element :<About />
    },
    {
        path : "/contact",
        element : <Contact />
    },

])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} /> );  // render like this 



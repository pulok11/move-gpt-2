import React, { useState, useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [userDetails, setUserDetails] = useState();
  const [bodyCont, setBodyCont] = useState();


  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

 

  return (
    <div>
      <UserContext.Provider value={{loginUserData:userDetails, bodyDate:bodyCont, setUserDetails, setBodyCont}}>
      
        <RouterProvider router={appRoute}  />
      </UserContext.Provider>
    </div>
  );
};

export default Body;

import React, { lazy,Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offer from "./components/Offer";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";




const Grocery = lazy(()=> import("./components/Grocery"))

function App() {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Outlet/>
      
    </div>
    </Provider>
  );
}
export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> ,
      },
      
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

export default App;

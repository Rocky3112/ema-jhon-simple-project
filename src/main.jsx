import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoaders from './Loaders/cartProductLoaders';
import CheckOut from './components/CheckOut/CheckOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element:<Shop></Shop>, 
      },
      {
        path: 'orders',
        element:<Orders></Orders>, 
        loader: cartProductLoaders
      },
      {
        path: 'inventory',
        element:<PrivateRoute><Inventory></Inventory></PrivateRoute>, 
      },
      {
        path: 'login',
        element:<Login></Login>, 
      },
      {
        path: 'signup',
        element:<SignUp></SignUp> 
      },
      {
        path:'checkout',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router ={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>,
)

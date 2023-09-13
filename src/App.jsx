
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Landing, ErrorPage, HomeLayout, Login, Register, DashboardLayout, Clubs, Drinks, PriceControl, Cart, Payment, QR } from './pages'
import { createContext, useContext, useState } from 'react';
import drinkmenu from './utils/drinkdata';
import clubmenu from './utils/clubdata';

const AppContext = createContext()


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'clubs',
        element: <Clubs />,
      },
      {
        path: 'limit',
        element: <PriceControl />,
      },
      {
        path: 'drinks',
        element: <Drinks />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'qr_page',
        element: <QR />,
      },
    ],
  },
]);


function App() {

   const [stock, setStock] = useState([]);
   const [club, setClub] = useState();
   const [validUsers, setValidUsers] = useState([
    {
      email: 'drinkbuddy@gmail.com',
      password: 'drinkbuddy',
    }
   ])
   const addItem = (id) => {
     const isIteminStock = stock.find((item) => item.id === id);
     if (isIteminStock) {
       const index = stock.indexOf(isIteminStock);
       const newQuantity = isIteminStock['quantity'] + 1;
       const newItem = { ...isIteminStock, quantity: newQuantity };
       const newStock = stock.filter((item) => item.id !== id);
       setStock([...newStock, newItem]);
     } else {
       const item = drinkmenu.find((item) => item.id === id);
       const newItem = { ...item, quantity: 1 };
       const newStock = [...stock, newItem];
       setStock(newStock);
     }
   };
   const reduceItem = (id) => {
     const isItemInStock = stock.find((item) => item.id === id);
     if (!isItemInStock) {
     } else {
       if (isItemInStock['quantity'] == 1) {
         const newStock = stock.filter((item) => item.id !== id);
         setStock(newStock);
       } else {
         const index = stock.indexOf(isItemInStock);
         const newQuantity = isItemInStock['quantity'] - 1;
         const newItem = { ...isItemInStock, quantity: newQuantity };
         const newStock = stock.filter((item) => item.id !== id);
         setStock([...newStock, newItem]);
       }
     }
   };
   const removeItem = (id) => {
     const newStock = stock.filter((item) => item.id !== id);
     setStock(newStock);
   };

   const calculateTotal = () => {
     let total = 0;
     stock.map((item) => {
       const itemTotal = item.price * item.quantity;
       total += itemTotal;
     });
      total += club.price
     return total;
   };


   

  const addUser = (email, password) => {
    const newUser = {email: email, password: password}
    const newValidUsers = {...validUsers, newUser}
    setValidUsers(newValidUsers)
  }
  const handleModify = () => {
        setClub('');
        setStock([]);

      };

  return (
    <AppContext.Provider
      value={{ drinkmenu, addItem, stock, reduceItem, removeItem, calculateTotal, clubmenu, club, setClub, validUsers, addUser, handleModify }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export const useGlobalContext = ()=>useContext(AppContext)
export default App

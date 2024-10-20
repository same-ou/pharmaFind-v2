import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ClientLogin from "@/pages/auth/ClientLogin";
import ClientRegistration from "@/pages/auth/ClientRegistration";
import PharmacistRegistration from "@/pages/auth/PharmacistRegistration";
import PharmacistLogin from "@/pages/auth/PharmacistLogin";
import RegisterPharmacy from "@/pages/pharmacist/RegisterPharmacy";
import NotFound from "@/pages/NotFound";
import Error from "@/pages/Error";
import PharmacistDashboard from "@/pages/pharmacist/PharmacistDashboard";
import DashboardOrders from "@/pages/pharmacist/DashboardOrders";
import DashboardProducts from "@/pages/pharmacist/DashboardProducts";
import {loader as dashboardProductsLoader} from "@/pages/pharmacist/DashboardProducts";
import DashboardSettings from "@/pages/pharmacist/DashboardSettings";
import Activate from "@/pages/auth/Activate";
import Home from "@/pages/Home/Home";
import Pharmacies from "@/pages/pharmacy/Pharmacies";
import { loader as pharmaciesLoader } from "@/pages/pharmacy/Pharmacies";

import PharmacyDetails from "@/pages/pharmacy/PharmacyDetails";
import { loader as pharmacyDetailsLoader } from "@/pages/pharmacy/PharmacyDetails";

import Products from "@/pages/product/Products";
import { loader as productsLoader } from "@/pages/product/Products";

import ProductDetails from "@/pages/product/ProductDetails";
import { loader as productDetailsLoader } from "@/pages/product/ProductDetails";

import NewProduct from "@/pages/product/NewProduct";
import Checkout from "@/pages/checkout/Checkout";
import Blog from "@/pages/blog/Blog";

import Map from "@/pages/Map";


export const router = createBrowserRouter([
        {
            element: <App />,
            errorElement: <Error />,
            children:[
                {index:true,element:<Home /> },
                {path: "clients/login", element: <ClientLogin />},
                {path:"clients/register", element: <ClientRegistration />},
                {path: "pharmacists/register", element: <PharmacistRegistration />},
                {path: "pharmacists/login", element: <PharmacistLogin />},
                {path: "pharmacists/register-pharmacy", element: <RegisterPharmacy />},
                {
                    path: "pharmacists/dashboard",
                    element: <PharmacistDashboard />,
                    children:[
                        {path: "", index:true ,loader: dashboardProductsLoader ,element:<DashboardProducts/> },
                        {path: "orders", element:<DashboardOrders/>},
                        {path: "settings", element:<DashboardSettings/>},
                        {path: "addProduct", element: <NewProduct />}
                    ]
                },
                {path: "activate", element: <Activate />},
                {path: "pharmacies", loader: pharmaciesLoader ,element: <Pharmacies />},
                {path: "pharmacies/:id", loader: pharmacyDetailsLoader ,element: <PharmacyDetails />},
                {path: "products", element: <Products />, loader: productsLoader},
                {path: "products/:id", element: <ProductDetails />, loader: productDetailsLoader},
                {path: "checkout", element: <Checkout />},
                {path: "blog", element: <Blog />},
                {path: "map", element: <Map />},
                {path: "*", element: <NotFound />}
            ]
        }
]);

import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "../pages/errorHandling";
import SignInPage from "../pages/signIn";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/home";
import ProductsPage from "../pages/products";
import BrandsPage from "../pages/brands";
import UsersPage from "../pages/users";
import CategoriesPage from "../pages/categories";

const errorElement = <ErrorPage />;


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/home" element=<Navigate to="/"/> />

            <Route path="/" element=<MainLayout/> errorElement={errorElement}>
                <Route index element=<HomePage/>  />
                <Route path="products" element =<ProductsPage/> />
                <Route path="categories" element=<CategoriesPage/> />
                <Route path="brands" element=<BrandsPage/> />
                <Route path="users" element=<UsersPage/> />
            </Route>

            <Route path="sign-in" element=<SignInPage/> errorElement={errorElement}/>

            <Route path="*" element=<ErrorPage/> />
        </>
    )
)
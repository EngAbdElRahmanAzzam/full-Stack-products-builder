import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "../pages/errorHandling/errorHandling";
import SignInPage from "../pages/auth/signIn";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/main/home";
import ProductsPage from "../pages/main/products";
import BrandsPage from "../pages/main/brands";
import UsersPage from "../pages/main/users";
import CategoriesPage from "../pages/main/categories";
import NotFoundPage from "../pages/errorHandling/notFoundPage";

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

            <Route path="*" element=<NotFoundPage/> />
        </>
    )
)
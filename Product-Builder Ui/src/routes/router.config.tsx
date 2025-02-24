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
import ProtectedRoute from "../compontents/common/protectedRoute";
import { isAuth } from "../authorization/isAuth";

const errorElement = <ErrorPage />;


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* handle home url */}
            <Route path="/home" element=<Navigate to="/"/> />

            {/* main pages => protected must auth */}
            <Route path="/"  
            element=
                    <ProtectedRoute isAllowed={isAuth()} redirect="sign-in">
                        element=<MainLayout/>
                    </ProtectedRoute> errorElement={errorElement}
            >

                <Route index element=<HomePage/>  />
                <Route path="products" element =<ProductsPage/> />
                <Route path="catergories" element=<CategoriesPage/> />
                <Route path="brands" element=<BrandsPage/> />
                <Route path="users" element=<UsersPage/> />
            </Route>

            {/* main pages => unprotected must unauth */}
            <Route path="sign-in" 
            element=
                    <ProtectedRoute isAllowed={!isAuth()} redirect="/">
                        <SignInPage/>
                    </ProtectedRoute> errorElement={errorElement}
            />

            {/* handle wrong url */}
            <Route path="*" element=<NotFoundPage/> />
        </>
    )
)
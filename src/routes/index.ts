import {IRoutes} from "../interfaces/routes";
import StartPage from "../pages/StartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage'
import ProductPage from "../pages/ProductPage";

const mainRoutes:IRoutes[] = [
    {
        element: StartPage,
        path: '/',
        auth: false
    },
    {
        element: ProductPage,
        path: '/product/:productID',
        auth: false,
    },
]
const authRoutes: IRoutes[] = [
    {
        element: LoginPage,
        path: '/login',
        auth: false
    },
    {
        element: RegisterPage,
        path: '/register',
        auth: false
    }
]
const routes: IRoutes[] = [ ...mainRoutes,...authRoutes ]

export default routes
import {IRoutes} from "../interfaces/routes";
import StartPage from "../pages/StartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from '../pages/RegisterPage'
import ProductPage from "../pages/ProductPage";
import OrderPage from '../pages/OrderPage'
import OrderListPage from '../pages/OrderListPage'

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
    {
        element: OrderPage,
        path: '/order',
        auth: false
    },
    {
        element: OrderListPage,
        path: '/myorder',
        auth: false
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

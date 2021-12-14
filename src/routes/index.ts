import {IRoutes} from "../interfaces/routes";
import StartPage from "../pages/StartPage";
import LoginPage from "../pages/LoginPage";

const mainRoutes:IRoutes[] = [
    {
        element: StartPage,
        path: '/',
        auth: false
    }
]
const authRoutes: IRoutes[] = [
    {
        element: LoginPage,
        path: '/login',
        auth: false
    }
]

const routes: IRoutes[] = [ ...mainRoutes,...authRoutes ]

export default routes
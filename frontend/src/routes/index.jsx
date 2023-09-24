import { BrowserRouter } from "react-router-dom";
import { AppRoutes} from './AppRoutes';
import { AuthRoutes } from "./AuthRoutes";
import { useAuth } from "../Contexts/AuthContext"

export function Routes(){

    const { user } = useAuth();

    return (

        <BrowserRouter>

         {user ? <AppRoutes/> : <AuthRoutes />}
        
        </BrowserRouter>

    )
}
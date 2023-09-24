import { Routes, Route} from 'react-router-dom';

import { Events } from '../pages/Events';
import { Event } from '../pages/Event';


export function AppRoutes(){
    return (

        <Routes>

            <Route path='/' element={ <Events /> }/>
            <Route path='/event/:date' element={ <Event /> }/>

        </Routes>


    )

}

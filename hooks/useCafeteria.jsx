import {useContext} from 'react';
import CafeteriaContext from '../context/CafeteriaProvider';

const useCafeteria = ( ) => {
    return (
        useContext(CafeteriaContext)
    )
}

export default useCafeteria;
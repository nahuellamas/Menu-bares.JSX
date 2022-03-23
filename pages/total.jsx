import Layout from '../layout/Layout';
import useCafeteria from '../hooks/useCafeteria';
import { useEffect, useCallback } from 'react';
import { formatearDinero } from '../helpers';
export default function total() {
    const { pedido, nombre, setNombre, colocarOrden, total } = useCafeteria();
    

    const comprobarForm = useCallback(() => {
        return pedido.length === 0 ? true : false || nombre === '' ? true : false || nombre.length <= 3 ? true : false;
    }, [pedido, nombre]);

    useEffect(() => {
        comprobarForm()
    }, [pedido, comprobarForm]);


    return(
        <Layout pagina='Checkout'>
            <h1 className='text-4xl font-black text-center'>Total a pagar</h1>
            <p className='text-clamp-2 my-10 font-bold text-center'>Confirma el pedido y tu forma de pago</p>
            <form onSubmit={colocarOrden}>
                <div>
                    <label htmlFor='nombre' className='block uppercase font-bold'>Nombre</label>
                    <input id='nombre' type='text'
                        className=' bg-gray-200 lg:w-1/3 md:w-2/3 mt-3 rounded p-2 '
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mt-10'>
                    <p>Total a pagar: {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
                </div>
                <div>
                    <input type="submit"
                    className={`${comprobarForm() ? 'bg-indigo-100 text-gray-400' : 'bg-amber-400 hover:bg-amber-700 hover:text-white' } mt-10 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-center ease-in-out duration-300 `}
                    value={`${comprobarForm() ? '¡Agregá algun Producto!' : 'Confirmar pedido'}`}
                    disabled={comprobarForm()} 
                    />
                </div>
            </form>

        </Layout>
    )
}
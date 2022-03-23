import Layout from '../layout/Layout';
import useCafeteria from '../hooks/useCafeteria';
import ResumenProducto from '../components/ResumenProducto';
export default function resumen() {
    const { pedido } = useCafeteria();

    return(
        <Layout pagina='Resumen'>
            <h1 className='text-4xl font-black text-center'>Resumen</h1>
            <p className='text-clamp-2 my-10 font-bold text-center'>Revisa tu pedido</p>

            {pedido.length === 0 ? (
                <p className='text-center text-clamp' >No hay productos en el pedido</p>
            ) : (
                pedido.map(producto => (
                    <ResumenProducto 
                        key={producto.id}
                        producto={producto}
                     />
                ))
            )}
        </Layout>
    )
}
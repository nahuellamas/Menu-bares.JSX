import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import Producto from '../components/Producto'
import useCafeteria from '../hooks/useCafeteria'
export default function Home() {
  const {categoriaActual} = useCafeteria();
  return (
    <Layout pagina={`Menu - ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black text-center">{categoriaActual?.nombre}</h1>
      <p className="text-clamp-2 mt-5 mb-5 font-bold text-center">
        Elegí tu pedido a continuacion!
      </p>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
     
    </Layout>
  )
}

import Image from 'next/image'
import { formatearDinero } from '../helpers';
import useCafeteria from '../hooks/useCafeteria';
const Producto = ({producto}) => {
    const {nombre, imagen, precio} = producto;
    const {handlerClickProducto, handlerClickModal} = useCafeteria();
  return (
    <div className="border rounded p-3">
        <Image className="rounded" src={`/assets/img/${imagen}.jpg`} alt={`Img de ${nombre}`} width={300} height={400} layout="responsive"/>
        <div className="p-5">
            <h2 className="text-clamp font-bold">{nombre}</h2>
            <p className="mt-3 font-black text-clamp-2 text-amber-500">
                {formatearDinero(precio)}
            </p>
            <button type="button" onClick={() => {handlerClickModal(), handlerClickProducto(producto)} } className="bg-amber-400 hover:bg-amber-500 text-black w-full mt-4 p-3 text-clamp uppercase font-bold rounded ease-in-out duration-300">
              Agregar
            </button>
        </div>
    </div>
  )
}

export default Producto
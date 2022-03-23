import { useState, useEffect } from 'react'
import Image from 'next/image'
import useCafeteria from '../hooks/useCafeteria'
import {formatearDinero} from '../helpers'

const ModalProducto = () => {
    const { producto, handlerClickModal, handlerClickPedido, pedido } = useCafeteria()
    const [cantidad, setCantidad] = useState(1)
    const [edicion , setEdicion] = useState(false)

    useEffect(() => {
        //comprobamos si el producto esta en el pedido
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoEnEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEnEdicion.cantidad)
        }
    }, [producto, pedido]);

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image
                src={`/assets/img/${producto.imagen}.jpg`}
                height={400}
                width={300}
                alt={`imagen de ${producto.nombre}`}
                className="rounded"
            />
        </div>
        <div className="md:w-2/3">
            <div className="absolute top-2 right-2">
                <button onClick={handlerClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <h2 className="text-clamp-2 font-bold text-center md:text-left">{producto.nombre}</h2>
            <p className="mt-3 font-black text-clamp-2 text-amber-500 text-center md:text-left">{formatearDinero(producto.precio)}</p>
            <div className="flex gap-2 mt-5">
                <button type="button" onClick={() => {if(cantidad <= 0) return; setCantidad(cantidad - 1)}}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                <p className="text-clamp-2">{cantidad}</p>
                <button type="button" onClick={() => { if (cantidad >= 10) return; setCantidad(cantidad + 1)}}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
            </div>
            <button type="button" onClick={() => {handlerClickPedido({...producto, cantidad})}} className='bg-amber-400 hover:bg-amber-600 mt-5 rounded px-5 py-2 text-black font-bold uppercase ease-in-out duration-300' >
                {edicion ? 'Editar el Pedido' : 'Agregar al Pedido'}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto
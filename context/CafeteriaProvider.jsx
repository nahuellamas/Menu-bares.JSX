import {useState, useEffect, createContext} from 'react'
import Axios from 'axios'
import { toast  } from 'react-toastify'
import {useRouter} from 'next/router'
import axios from 'axios'
const CafeteriaContext = createContext()

const CafeteriaProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre ] = useState('')
    const [total, setTotal] = useState('')

    const router = useRouter()

    const obtenerCategorias = async () => {
        const url = '/api/categorias'
        const {data} = await Axios.get(url)
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    const handlerClickCategoria = async (id) => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handlerClickProducto = (producto) => {
        setProducto(producto)
    }

    const handlerClickModal = () => {
        setModal(!modal)
    }

    const handlerClickPedido = ({categoriaId, ...producto}) => { //sacamos la categoriaId y la imagen para no enviarla al servidor 
        if(pedido.some(productoState => productoState.id === producto.id)){ //itera en los array y se fija si existe el ID del producto
            //si existe el producto, actualizamos la cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.info(`Pedido Editado`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        else {
            setPedido([...pedido, producto])
            toast.success(`Agregado al Pedido`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        setModal(false)
    }

    const handlerEditarCantidades = (id) => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handlerEliminarPrducto = (id) => {
        const productoEliminar = pedido.filter(producto => producto.id !== id)
        setPedido(productoEliminar)
        toast.error(`Producto Eliminado`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const colocarOrden = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString() })

            //resetar app
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success(`Orden Enviada`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

            setTimeout(() => {
                //redireccionar
                router.push('/')
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <CafeteriaContext.Provider value={{
            categorias,
            handlerClickCategoria,
            categoriaActual,
            handlerClickProducto,
            producto,
            handlerClickModal,
            modal,
            pedido,
            handlerClickPedido,
            handlerEditarCantidades,
            handlerEliminarPrducto,
            nombre,
            setNombre,
            colocarOrden,
            total
        }}>
            {children}
        </CafeteriaContext.Provider>
    )
}

export {
    CafeteriaProvider,
}
export default CafeteriaContext
import Image from 'next/image'
import useCafeteria from '../hooks/useCafeteria'
const Categoria = ({categoria}) => {
  const {categoriaActual, handlerClickCategoria} = useCafeteria()
    const {nombre, id, icono} = categoria
  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-500' : ''} flex items-center gap-3 w-full p-5 hover:bg-amber-400 ease-in-out duration-300`}>
        <button type='button' className='text-2x1 font-bold hover:cursor-pointer flex items-center ml-5 w-full' onClick={() => handlerClickCategoria(id)}>
            <Image width={60} height={60} alt='Imagen Icono' src={`/assets/img/icono_${icono}.svg`} layout="intrinsic"/>
            <span className='ml-2 text-clamp'>{nombre}</span>
        </button>
    </div>
  )
}

export default Categoria
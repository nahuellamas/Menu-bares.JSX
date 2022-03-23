import Image from 'next/image'
import useCafeteria from '../hooks/useCafeteria'
import Categoria from './Categoria'

const Sidebar = () => {
  const { categorias } = useCafeteria()
  return (
    <>
      <div className="w-full pt-4">
        <Image width={200} height={100} src='/assets/img/logo.svg' alt='logo' />
        <nav className="mt-10">
            {categorias.map(categoria => (
                <Categoria key={categoria.id} categoria={categoria} />
            ))}
        </nav>
      </div>  
    </>
  )
}

export default Sidebar
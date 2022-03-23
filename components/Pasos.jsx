import { useRouter } from 'next/router'

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'}
]

const Pasos = () => {
    const router = useRouter()

    const calcularBarra = () => {
        let valor;
        if(router.pathname === '/'){
            valor = 2
        } else if(router.pathname === '/resumen'){
            valor = 45
        } else {
            valor = 100
        }
        return `${valor}%`
    }

  return (
    <>
        <div className="flex justify-between mb-3">
            {pasos.map(paso => (
                <button className="text-clamp font-bold" key={paso.paso} onClick={() => {router.push(paso.url);}}>
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className="bg-gray-200 mb-5">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width: `${calcularBarra()} `}}>

            </div>
        </div>
    </>
  )
}

export default Pasos
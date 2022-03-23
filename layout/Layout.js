import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Modal from 'react-modal'
import useCafeteria from '../hooks/useCafeteria';
import ModalProducto from '../components/ModalProducto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '../components/Pasos'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%'
  },
};

Modal.setAppElement('#__next');

export default function Home({children, pagina}) {
    const {modal} = useCafeteria()

   return (
    <>
        <Head>
            <title>Fresh Cōffe - {pagina}</title>
            <meta name="viewport" content="width=device-width, initial-scale"/>
            <meta name="description" content="Cafetería App"/>
        </Head>
        <div className="sm:flex">
            <aside className="w-6/12 sm:w-4/12 md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen border-r-2">
                <Sidebar />
            </aside>
            <main className="w-6/12 sm:w-8/12 md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    <Pasos />
                    {children}
                </div>
            </main>
        </div>
        {modal && (
            <Modal isOpen={modal} style={customStyles}>
                <ModalProducto/>
            </Modal>
        )}
        <ToastContainer position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
    </>
    )
}
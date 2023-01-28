import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className=' min-w-[200px] max-w-[450px] m-auto '>
                {children}
            </main>
            <Footer />
        </>
    )
}
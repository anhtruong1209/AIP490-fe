import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import About from '../components/HomeOne/About'
import Services from '../components/HomeOne/Services'
import Footer from '../components/Layouts/Footer'


const Index = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Features />
            <About />
            <Services />
            <Footer />
        </>
    )
}

export default Index
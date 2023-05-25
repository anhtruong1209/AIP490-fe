import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Testimonials extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Testimonials" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Testimonials" 
                /> 
                <Footer />
            </>
        );
    }
}

export default Testimonials;
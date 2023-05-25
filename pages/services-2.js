import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Services Style Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style Two" 
                /> 
                <MakeYourBusiness />
                <Footer />
            </>
        );
    }
}

export default Services2;
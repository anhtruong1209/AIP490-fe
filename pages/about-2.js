import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/AboutTwo/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';

class About2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle="About Style Two"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="About Style Two"
                />
                <About />
                <MakeYourBusiness />
                <Footer />
            </>
        );
    }
}

export default About2;
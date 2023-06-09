import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import About from '../components/AboutOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class About1 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="About Us"
                    homePageUrl="/index"
                    homePageText="Home" 
                    activePageText="About Us"
                /> 
                {/* <About /> */}
                <MakeYourBusiness />
                <TeamTwo />
                <div className="pb-50">
                    <Partner />
                </div>
                <Footer />
            </>
        );
    }
}

export default About1;
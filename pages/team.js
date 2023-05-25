import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Team" 
                    homePageUrl="/index-4"
                    homePageText="Home" 
                    activePageText="Team" 
                /> 
                <Footer />
            </>
        );
    }
}

export default Team;
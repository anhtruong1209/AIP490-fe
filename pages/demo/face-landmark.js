import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import BodyBackgroundContent from '../../components/DemoPage/BodyBackground/BodyBackgroundContent';
import BodyBackgroundScenarios from '../../components/DemoPage/BodyBackground/BodyBackgroundScenarios';
import Footer from '../../components/Layouts/Footer';
import withTransHook from '../../HOC/withTranslate';

class ServiceDetails extends Component {
    render() {
        const { router, trans } = this.props
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle={trans['face.lanmark']}
                    homePageUrl="/" 
                    homePageText={trans['home_banner']}
                    activePageText={trans['service_details']}
                />
                <BodyBackgroundContent />
                <BodyBackgroundScenarios />
                <Footer />
            </>
        );
    }
}

export default withTransHook(ServiceDetails);
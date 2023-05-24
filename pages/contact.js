import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import TeamTwo from '../components/Common/TeamTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';
import withTransHook from '../HOC/withTranslate';
class Contact extends Component {
    render() {
        const { router, trans } = this.props
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle= {trans["nav-item.contact.english"]}
                    homePageUrl="/" 
                    homePageText={trans["home_banner"]}
                    activePageText={trans["contact.details"]}
                /> 
                <ContactInfo />
                <TeamTwo />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default withTransHook(Contact);
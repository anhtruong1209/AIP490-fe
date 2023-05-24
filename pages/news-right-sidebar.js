import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsGridTwo from '../components/News/NewsGridTwo';
import Footer from '../components/Layouts/Footer';
import withTransHook from '../HOC/withTranslate';
class NewsRightSidebar extends Component {
    render() {
        const { router, trans } = this.props
        return (
            <>
                <Navbar />
                <PageBanner
                    pageTitle={trans['nav-item.new.english']}
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="FPT.UNI.AI"
                />
                <NewsGridTwo />
                <Footer />
            </>
        );
    }
}

export default withTransHook(NewsRightSidebar);
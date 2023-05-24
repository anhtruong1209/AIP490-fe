import React, { Component } from 'react';
import Link from 'next/link';
import withTransHook from '../../HOC/withTranslate';

class PricingStyleOne extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        const { trans } = this.props
        return (
            <section className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{trans['price_content']}</span>
                        <h2>{trans['purchase']}</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse.</p> */}
                    </div>

                    <div className="tab quote-list-tab">
                        {/* Tabs */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>{trans['price_daily']}</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>{trans['price_weekly']}</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>{trans['footer.service-1']}</h3>
                                                {/* <p>Build A Website</p> */}
                                            </div>
                                            <span>$69
                                                <sub>/ USD/ QPS</sub>
                                            </span>
                                            {/* <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul>  */}
{/* 
                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            
                                            <span>$69
                                                <sub>/ USD/ QPS</sub>
                                            </span>
{/* 
                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link> */}

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>{trans['footer.service-2']}</h3>
                                            </div>
                                            <span>$39
                                                <sub>/ USD/ QPS</sub>
                                            </span>
{/* 
                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul> */}
{/* 
                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
 
                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>{trans['footer.service-1']}</h3>
                                            </div>
                                            <span>$3,499
                                                <sub>/ USD/ QPS</sub>
                                            </span>

                                            {/* <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul> */}

                                            {/* <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <span>$3499
                                                <sub>/ USD/ QPS</sub>
                                            </span>

                                            {/* <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul> */}

                                            {/* <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link> */}

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>{trans['footer.service-2']}</h3>
                                            </div>
                                            <span>$329
                                                <sub>/ USD/ QPS</sub>
                                            </span>

                                            {/* <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Drag & Drop Builder
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Lead Generation & Sales
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Boot & Digital Assistants
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customer Service
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Unlimited Broadcasts
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Landing Pages & Web Widgets
                                                </li>
                                            </ul> */}
{/* 
                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTransHook(PricingStyleOne);
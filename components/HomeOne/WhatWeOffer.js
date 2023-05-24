import React, { Component } from 'react';
import Link from 'next/link';
import withTransHook from '../../HOC/withTranslate';
const WhatWeOffer = (props)  => {
    const { trans } = props
    const openTabSection = (evt, tabNmae) => {
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

    return (
        <section className="industries-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span>{trans["offer"]}</span>
                    <h2>{trans["offer.title"]}</h2>
                    <p>{trans["offer.content"]}</p>
                </div>

                <div className="tab industries-list-tab">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            {/* Tabs navs */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3>{trans["feature.robot"]}</h3>
                                        <p>{trans["offer.project"]}</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>{trans["feature.nlp"]}</h3>
                                        <p>{trans["offer.project2"]}</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-deep-learning"></i>
                                        <h3>{trans["feature.cs"]}</h3>
                                        <p>{trans["offer.project3"]}</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-9">
                            <div className="tab_content">
                                {/* Tab item #1 */}
                                <div id="tab1" className="tabs_item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/doji/img8.jpeg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>{trans["feature.robot"]}</h3>
                                                <p>{trans["offer.project.content"]}</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item1']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item2']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item3']}
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item4']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item5']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item6']}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                <div className="text-center">
                                                    <Link href="/service-details">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tab item #2 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>{trans['feature.nlp']}</h3>
                                                <p>{trans['industry.content2']}</p>
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item1']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item2']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item3']}
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item4']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item5']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item6']}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className="text-center">
                                                    <Link href="/service-details">
                                                        <a className="default-btn">{trans['industry.button']}</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img style={{border: '2px solid', padding: '8px'}} src="/images/saleman/1.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #3 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/doji/img9.jpg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>{trans['feature.cs']}</h3>
                                                <p>{trans['industry.content3']}</p>
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item1']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item2']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item3']}
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item4']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item5']}
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                {trans['industry.item6']}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <Link href="/service-details">
                                                        <a className="default-btn"> {trans['industry.button']}</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTransHook(WhatWeOffer);
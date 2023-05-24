import React, { Component } from 'react';
import Link from 'next/link';
import withTransHook from '../../HOC/withTranslate';

class MakeYourBusiness extends Component {
    render() {
        const { router, trans } = this.props
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>{trans['myb']}</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>{trans['myb.business']}</h3>
                                <p>{trans['myb.business2']}</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>{trans['myb.business3']}</h3>
                                <p>{trans['myb.business4']}</p>
                            </div>

                            {/* <div className="business-btn">
                                <Link href="/about-2">
                                    <a className="default-btn">
                                        {trans['myb.knowdetail']}
                                    </a>
                                </Link>
                            </div> */}
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">100%</span></h2>
                                        <p>{trans['myb.counter1']}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">100%</span></h2>
                                        <p>{trans['myb.counter2']}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">100%</span></h2>
                                        <p>{trans['myb.counter3']}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">99%</span></h2>
                                        <p>{trans['myb.counter4']}</p>
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

export default withTransHook(MakeYourBusiness);
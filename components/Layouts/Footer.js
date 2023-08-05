import React, { Component } from 'react';
import Link from 'next/link';
import baseRs from '../../utils/baseRs';
import withTransHook from '../../HOC/withTranslate';
import { withRouter } from 'next/router'
class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        const { router, trans } = this.props
        return (
            <>
                <footer className="footer-top-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <a href="/" className="logo">
                                        <img src={baseRs + "icon/logo_fpt.png"} alt="Image" />
                                    </a>

                                    <p>{trans["footer.content"]}</p>

                                    <ul className="social-icon">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>{trans["footer.nav-item.service.english"]}</h3>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans["footer.service-1"]}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans["footer.service-2"]}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans["footer.service-3"]}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans["footer.service-4"]}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans["footer.service-5"]}
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>{trans['footer.important']}</h3>

                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans['nav-item.service.english']}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    {trans['footer.support']}
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>{trans['footer.information']}</h3>

                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-call"></i>
                                            <span>{trans['footer.phone']}</span>
                                            +84 832206397 - Mr. Trường<br></br>
                                            +84 705045677 - Mr. Kỳ<br></br>
                                            +84 816386999 - Mr. Thịnh
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>{trans['footer.email']}</span>
                                            TruongNDAHE141784@fpt.edu.vn<br></br>
                                            KyNQHE150376@fpt.edu.vn<br></br>
                                            ThinhTTHE151100@fpt.edu.vn
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-maps-and-flags"></i>
                                            <span>{trans['footer.address']}</span>
                                            Hoa Lac Hi-Tech Park Km29 Thang Long Avenue, Thach That District, Hanoi
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-shape">
                        <img src={baseRs + "shape/footer-shape-one.png"} alt="Image" />
                        <img src={baseRs + "shape/footer-shape-two.png"} alt="Image" />
                    </div>
                </footer>
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>{trans['footer.copyright']} &copy; {currentYear} FPT University. {trans['footer.copyright2']}</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>{trans['footer.termsandconditions']}</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>{trans['footer.policy']}</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        {trans['footer.design']} <i className='bx bx-heart'></i> <a href="#" target="_blank">TruongNDAHE141784</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default withRouter(withTransHook(Footer));
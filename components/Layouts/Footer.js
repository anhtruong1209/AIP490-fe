import React, { Component } from 'react';
import Link from 'next/link';
import baseRs from '../../utils/baseRs';
class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
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

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat molestiae corporis, magni maxime perferendis ducimus totam officiis sit exercitationem sed odio debitis minus cumque dolores dicta.</p>

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
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Big Data
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    UI/UX Design
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Desktop Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Mobile Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Product Engineering
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Machine Learning
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Important Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/about-us">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Services
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Pricing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Team
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Support
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Information</h3>

                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-call"></i>
                                            <span>Phone</span>
                                            +84 832206397 - Mr. Trường<br></br>
                                            +84 705045677 - Mr. Kỳ<br></br>
                                            +84 816386999 - Mr. Thịnh
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>Email</span>
                                            TruongNDAHE141784@fpt.edu.vn<br></br>
                                            KyNQHE150376@fpt.edu.vn<br></br>
                                            ThinhTTHE151100@fpt.edu.vn
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-maps-and-flags"></i>
                                            <span>Address</span>
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
                                    <p>Copyright &copy; {currentYear} FPT University. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        Designed By <i className='bx bx-heart'></i> <a href="#" target="_blank">TruongNDAHE141784</a>
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

export default Footer;
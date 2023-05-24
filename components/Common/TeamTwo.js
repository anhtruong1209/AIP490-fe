import React, { Component } from 'react';
import Link from 'next/link';
import baseRs from '../../utils/baseRs';
class TeamTwo extends Component {
    render() {
        return (
            <section className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Team</span>
                        <h2>Meet Our Genius Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src={baseRs + "team/ava1.jpg"} alt="Image" />

                                    <div className="team-img">
                                        <img src={baseRs + "team/team-shape.png"} alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Nguyễn Đinh Anh Trường</h3>
                                    <span>FullStack Engineer</span>

                                    <ul>
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
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src={baseRs + "team/ava2.jpg"} alt="Image" />

                                    <div className="team-img">
                                        <img src={baseRs + "team/team-shape.png"} alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Nguyễn Quốc Kỳ</h3>
                                    <span>AI Engineering</span>

                                    <ul>
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
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src={baseRs + "team/ava3.jpg"} alt="Image" />

                                    <div className="team-img">
                                        <img src={baseRs + "team/team-shape.png"} alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Trần Tiến Thịnh</h3>
                                    <span>Unity Engineer</span>

                                    <ul>
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamTwo;
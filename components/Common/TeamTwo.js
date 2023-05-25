import React, { Component } from 'react';
import Link from 'next/link';
import baseRs from '../../utils/baseRs';
import withTransHook from '../../HOC/withTranslate';
import { withRouter } from 'next/router'
class TeamTwo extends Component {
    render() {
        const { router, trans } = this.props
        return (
            <section className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{trans["team"]}</span>
                        <h2>{trans["team.title"]}</h2>
                        <p>{trans["team.description"]}</p>
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
                                    <h3>{trans["team_name2"]}</h3>
                                    <span>{trans["team_job2"]}</span>

                                    <ul>
                                        <li>
                                            <a href={trans["team_fb2"]} target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans["team_tw2"]} target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans["team_ln2"]} target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans["team_gh2"]} target="_blank">
                                                <i className="bx bxl-github"></i>
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
                                    <h3>{trans["team_name3"]}</h3>
                                    <span>{trans["team_job3"]}</span>

                                    <ul>
                                        <li>
                                            <a href={trans["team_fb3"]} target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans["team_tw3"]} target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans["team_ln3"]} target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans["team_gh3"]} target="_blank">
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
                                    <h3>{trans['team_name4']}</h3>
                                    <span>{trans['team_job4']}</span>

                                    <ul>
                                        <li>
                                            <a href={trans['team_fb4']} target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans['team_tw4']} target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans['team_ln4']} target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={trans['team_gh4']} target="_blank">
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

export default withRouter(withTransHook(TeamTwo));
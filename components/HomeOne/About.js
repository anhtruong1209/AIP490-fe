import Link from 'next/link';
import withTransHook from '../../HOC/withTranslate';

const About = (props) => {
    const { trans } = props
    return (
        <section className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/about-img.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>{trans["about.title"]}</span>
                            <h2>{trans["about.title2"]}</h2>
                            <p>{trans["about.content"]}</p>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            {trans["about.check1"]}
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            {trans["about.check2"]}
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            {trans["about.check3"]}
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            {trans["about.check4"]}
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            {trans["about.check5"]}
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            {trans["about.check6"]}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="/">
                                <a className="default-btn">
                                {trans["mainbanner.learnmore"]}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTransHook(About)
import Link from 'next/link'
import withTransHook from '../../HOC/withTranslate';

const Features = (props) => {
    const { trans } = props
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 p-0">
                        <div className="single-features">
                            <i className="flaticon-cloud-computing-1"></i>
                            <h3>{trans["feature.cs"]}</h3>
                            
                            <p>{trans["feature.cs.content"]}</p>

                            <Link href="/">
                                <a className="read-more-icon">
                                    <span className="flaticon-right-arrow"></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 p-0">
                        <div className="single-features">
                            <i className="flaticon-engineer"></i>
                            <h3>{trans["feature.nlp"]}</h3>
                            <p>{trans["feature.nlp.content"]}</p>
                            
                            <Link href="/">
                                <a className="read-more-icon">
                                    <span className="flaticon-right-arrow"></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                        <div className="single-features">
                            <i className="flaticon-success"></i>
                            <h3>{trans["feature.robot"]}</h3>
                            <p>{trans["feature.robot.content"]}</p>
                            
                            <Link href="/">
                                <a className="read-more-icon">
                                    <span className="flaticon-right-arrow"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTransHook(Features);
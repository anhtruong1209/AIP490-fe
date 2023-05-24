import Link from 'next/link'
import withTransHook from '../../HOC/withTranslate';
const Services = (props) => {
    const { trans } = props
    return (
        <section className="offer-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>{trans["nav-item.service.english"]}</span>
                    <h2>{trans["service.h2"]}</h2>
                    <p>{trans["service.content"]}</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="single-offer">
                            <i className="flaticon-deep-learning"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>{trans["footer.service-1"]}</a>
                                </Link>
                            </h3>
                            <p>{trans["service.content-1"]}</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="single-offer">
                            <i className="flaticon-machine-learning"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>{trans["footer.service-2"]}</a>
                                </Link>
                            </h3>
                            <p>{trans["service.content-2"]}</p>
                        </div>
                    </div>

                    

                    <div className="col-lg-6 col-sm-12">
                        <div className="single-offer">
                            <i className="flaticon-engineer"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>{trans["footer.service-4"]}</a>
                                </Link>
                            </h3>
                            <p>{trans["service.content-4"]}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="offer-shape">
                <img src="/images/shape/services-shape/1.png" alt="Image" />
                <img src="/images/shape/services-shape/2.png" alt="Image" />
                <img src="/images/shape/services-shape/3.png" alt="Image" />
                <img src="/images/shape/services-shape/4.png" alt="Image" />
                <img src="/images/shape/services-shape/5.png" alt="Image" />
                <img src="/images/shape/services-shape/6.png" alt="Image" />
            </div>
        </section>
    )
}

export default withTransHook(Services);
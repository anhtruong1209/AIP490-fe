import withTransHook from '../../HOC/withTranslate';
const WhyChooseUs = (props) => {
    const { trans } = props
    return (
        <section className="choose-ue-area pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="choose-title">
                            <span>{trans["whychooseus.title"]}</span>
                            <h2>{trans["whychooseus.content"]}</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <ul>
                                <li>
                                    <span>
                                        01 <i className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>{trans["whychooseus.safe"]}</h3>
                                    <p>{trans["whychooseus.safecontent"]}</p>
                                </li>

                                <li className="ml">
                                    <span>
                                        02 <i className="flaticon-shield"></i>
                                    </span>
                                    <h3>{trans["whychooseus.techsup"]}</h3>
                                    <p>{trans["whychooseus.techsupcontent"]}</p>
                                </li>

                                <li className="ml-25">
                                    <span>  
                                        03 <i className="flaticon-support"></i>
                                    </span>
                                    <h3>{trans["whychooseus.livesup"]}</h3>
                                    <p>{trans["whychooseus.livesupcontent"]}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-img.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTransHook(WhyChooseUs)
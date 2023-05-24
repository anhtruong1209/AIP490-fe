import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import withTransHook from '../../HOC/withTranslate';
const MainBanner = (props) => {
    const [open, setopen] = useState(false)
    const { trans } = props
    const openModal = () => {
        setopen(true)
    }
    return (
        <section className="main-banner-area main-banner-area-one">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1>{trans["mainbanner.title"]}</h1>
                            <p>{trans["mainbanner.content"]}</p>

                            <div className="banner-btn">
                                <Link href="/">
                                    <a className="default-btn">
                                        {trans["mainbanner.learnmore"]}
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className="default-btn">
                                    {trans["mainbanner.contact"]}
                                    </a>
                                </Link>
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="default-btn active popup-youtube"
                                > 
                                    <i className="bx bx-play"></i> {trans["mainbanner.howiswork"]}
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* Main Image */}
                        <div className="banner-main-img banner-one-main-img">
                            <img src="/images/home-one/main-img1.png" alt="Image" />
                        </div>

                        {/* Banner Shape Images */}
                        <div className="banner-img">
                            <img className="animate__animated animate__fadeInUp animate__fast" src="/images/home-one/shape1.png" alt="Image" />
                            <img className="animate__animated animate__fadeInUp animate__fast" src="/images/home-one/shape2.png" alt="Image" /> 
                            <img className="animate__animated animate__fadeInRight animate__fast" src="/images/home-one/shape3.png" alt="Image" />
                            <img className="animate__animated animate__fadeInRight animate__fast" src="/images/home-one/shape4.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div> 

            {/* Shape Images */}
            <div className="over-shape">
                <img src="/images/home-one/shape/animate1.png" alt="Image" />
                <img src="/images/home-one/shape/animate2.png" alt="Image" />
                <img src="/images/home-one/shape/animate3.png" alt="Image" />
            </div>

            <div className="white-shape">
                <img src="/images/home-one/bottom-shape.png" alt="Image" />
            </div>
            <ModalVideo 
                channel='youtube' 
                isOpen={open} 
                videoId='COVQD8RG4NE'
                onClose={() => setopen(false)}
            />
        </section>
       
    )
}

export default withTransHook(MainBanner);
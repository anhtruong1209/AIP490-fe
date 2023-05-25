import React, { Component } from 'react';
import Link from 'next/link';
import baseRs from '../../utils/baseRs';
class Partner extends Component {
    render() {
        return (
            <div className="brand-area">
                <div className="container">
                    <div className="brand-list">
                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand1.png"} alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand2.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand3.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand4.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand5.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand6.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand7.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand8.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand9.png"}  alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src={baseRs +"brands/brand10.png"}  alt="Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partner;
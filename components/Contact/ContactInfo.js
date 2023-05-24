import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p><a href="mailto:TruongNDA@fpt.edu.vn">TruongNDA@fpt.edu.vn</a></p>
                                <p><a href="mailto:KyNQHE150376@fpt.edu.vn">KyNQHE150376@fpt.edu.vn</a></p>
                                <p><a href="mailto:ThinhTTHE151100@fpt.edu.vn">ThinhTTHE151100@fpt.edu.vn</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <a href="tel:84832206397">Tel. + (84) 832206397</a>
                                <a href="tel:84869688635">Tel. + (84) 705045677</a>
                                <a href="tel:84936362845">Tel. + (84) 816386999</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>Address</h3>
                                <p>Hoa Lac Hi-Tech Park</p>
                                <p>Km29 Thang Long Avenue, Thach That District, Hanoi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        );
    }
}

export default ContactInfo;
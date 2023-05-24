// import React, { Component } from 'react';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));
// import withTransHook from '../../HOC/withTranslate';

// const options = {
//     loop:true,
//     nav:false,
//     autoplay:true,
//     autoplayHoverPause: true,
//     mouseDrag: true,
//     margin: 30,
//     center: false,
//     dots: false,
//     smartSpeed:1500,
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:2
//         },
//         992:{
//             items:3
//         },
//         1200:{
//             items:3
//         }
//     }
// }

// class Testimonials extends Component {

//     _isMounted = false;
//     state = {
//         display:false
//     }
//     componentDidMount(){ 
//         this._isMounted = true;
//         this.setState({ display: true }) 
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//     }

//     render() {
//         const { router, trans } = this.props
//         return (
//             <section className="client-area ptb-100">
//                 <div className="container">
//                     <div className="section-title">
//                         <span>{trans['testimonial.title']}</span>
//                         <h2>{trans['testimonial.title2']}</h2>
//                     </div>

//                     {this.state.display ? <OwlCarousel 
//                     className="client-wrap owl-carousel owl-theme"
//                         {...options}
//                     >
//                         <div className="single-client">
//                             <i className="quotes flaticon-left-quotes-sign"></i>
//                             <p>{trans['testimonial.content']}</p>

//                             <ul>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                             </ul>

//                             <div className="client-img">
//                                 <img src="/images/team/huongns.jpeg" alt="Image" />
//                                 <h3>{trans['team_name1']}</h3>
//                                 <span>{trans['team_job1']}</span>
//                             </div>
//                         </div>

//                         <div className="single-client">
//                             <i className="quotes flaticon-left-quotes-sign"></i>
//                             <p>{trans['team_cm2']}</p>

//                             <ul>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                             </ul>

//                             <div className="client-img">
//                                 <img src="/images/team/truongnda.jpg" alt="Image" />
//                                 <h3>{trans['team_name2']}</h3>
//                                 <span>{trans['team_job2']}</span>
//                             </div>
//                         </div>



//                         <div className="single-client">
//                             <i className="quotes flaticon-left-quotes-sign"></i>
//                             <p>{trans['team_cm3']}</p>
//                             <ul>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                             </ul>

//                             <div className="client-img">
//                                 <img src="/images/team/kienlt.jpeg" alt="Image" />
//                                 <h3>{trans['team_name3']}</h3>
//                                 <span>{trans['team_job3']}</span>
//                             </div>
//                         </div>

//                         <div className="single-client">
//                             <i className="quotes flaticon-left-quotes-sign"></i>
//                             <p>{trans['team_cm4']}</p>                           
//                             <ul>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                                 <li><i className="bx bxs-star"></i></li>
//                             </ul>

//                             <div className="client-img">
//                                 <img src="/images/team/linhhh.jpeg" alt="Image" />
//                                 <h3>{trans['team_name4']}</h3>
//                                 <span>{trans['team_job4']}</span>
//                             </div>
//                         </div>
//                     </OwlCarousel> : ''}
//                 </div>
//             </section>
//         );
//     }
// }

// export default withTransHook(Testimonials);
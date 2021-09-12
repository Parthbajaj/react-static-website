import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import businessman from './assets/businessman-laptop-planning-strategy-working-conce-PZLC523.jpg'


class testimonials extends Component {

    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },

        },
    }

    render() {
        return (
            <div>
                <section className="testimonials" id="contact">
                    <div className="testimonials_text">
                        <h5>Testimonial</h5>
                        <h1>My Clients Said</h1>
                    </div>

                    <div className="testimonials_carousel">
                        <div className="testimonials_wrapper">
                            <div className="carousel">
                                <div className="row">
                                <OwlCarousel loop autoplay='true'  items="2" responsive={this.state.responsive}  >
                                        <div className="container_wrapper item" id="slide">
                                            <div className="testimonial_rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </div>
                                            <div className="testimonial_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            </div>
                                            
                                            <div className="client_description">
                                                <div className="col-1">
                                                    <img src={businessman} />
                                                </div>

                                                <div className="col-9">
                                                    <h4><b>Aldebaran Fahrie</b></h4>
                                                    <h5>HRD Ikatan Cienta</h5>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="container_wrapper item" id="slide">
                                            <div className="testimonial_rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                            </div>
                                            <div className="testimonial_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            </div>
                                            <div className="client_description">
                                                <div className="col-1">
                                                    <img src={businessman} />
                                                </div>

                                                <div className="col-9">
                                                    <h4><b>Aldebaran Fahrie</b></h4>
                                                    <h5>HRD Ikatan Cienta</h5>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="container_wrapper item" id="slide">
                                            <div className="testimonial_rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                            </div>
                                            <div className="testimonial_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            </div>
                                            <div className="client_description">
                                                <div className="col-1">
                                                    <img src={businessman} />
                                                </div>

                                                <div className="col-9">
                                                    <h4><b>Aldebaran Fahrie</b></h4>
                                                    <h5>HRD Ikatan Cienta</h5>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="container_wrapper item" id="slide">
                                            <div className="testimonial_rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                            </div>
                                            <div className="testimonial_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            </div>
                                            <div className="client_description">
                                                <div className="col-1">
                                                    <img src={businessman} />
                                                </div>

                                                <div className="col-9">
                                                    <h4><b>Aldebaran Fahrie</b></h4>
                                                    <h5>HRD Ikatan Cienta</h5>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="container_wrapper item" id="slide">
                                            <div className="testimonial_rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                            </div>
                                            <div className="testimonial_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                            </div>
                                            <div className="client_description">
                                                <div className="col-1">
                                                    <img src={businessman} />
                                                </div>

                                                <div className="col-9">
                                                    <h4><b>Aldebaran Fahrie</b></h4>
                                                    <h5>HRD Ikatan Cienta</h5>
                                                </div>
                                            </div>

                                        </div>

                                       
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default testimonials

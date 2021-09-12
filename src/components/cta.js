import React from 'react'
import portrait from './assets/portrait-of-blue-eyed-guy-ponders-on-something-sta-JWVPPAM.jpg'

function cta() {
    return (
        <div className="cta_wrapper">
            <section className="cta">
                <div className="row">
                    <div className="col-6">
                        <div className="cta_text">
                            <h1>Have a project on your mind</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="cta_img">
                            <img src={portrait} />
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default cta

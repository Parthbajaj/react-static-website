import React from 'react'
import success from './assets/measure-success-concept-PLZUEUG.jpg'
import brainstorming from './assets/brainstorming-on-brand-new-project-PY98XCA.jpg'
import online from './assets/online-shop-website-design-template-on-a-laptop-mo-YXNES5Z.jpg'

function portfolio() {
    return (
        <div>
            <section className="portfolio" id="portfolio">
                <div className="row">
                    <div className="col-6 stretch">
                        <div className="portfolio_text">
                            <h5>Portfolio</h5>
                            <h1>This is my project, to Inspired you</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>        
                        <div className="portfolio_imageBox">
                            <img src={online} />
                            <h1>Market Place UI/UX</h1>
                        </div>                  
                    </div>
                    <div className="col-6 stretch">
                        <div className="portfolio_imageBox">
                            <img src={success} />
                            <h1>Rebranding Joyo’s Logo</h1>
                        </div>   
                        <div className="portfolio_imageBox">
                            <img src={brainstorming} />
                            <h1>Branding Supharman</h1>
                        </div>                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default portfolio

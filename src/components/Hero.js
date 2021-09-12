import React from 'react'
import Particles from 'react-particles-js'



function Hero() {
    return (
        <div className='hero_section' id="hero">
                <h1 className="hero_heading">Neque porro quisquam est qui dolorem ipsum</h1>
                <p className="hero_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

            <Particles
        params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} />



        </div>
    )
}

export default Hero

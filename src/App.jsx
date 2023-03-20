import React, { useState } from 'react'

export const App = () => {
    const [dataCard, setDataCard] = useState({
        equilibrium: Math.round (Math.random () * 5000),
        days: Math.round (Math.random () * 30)
    })
    return (
        <section className='card-section'>
            <div className='container-image'>
                <img 
                    src="/images/image-equilibrium.jpg" 
                    alt="" 
                />
                <div className="view-eye">
                    <img 
                        src="images/icon-view.svg" 
                        alt="icon View" 
                        className='image-view'
                    />
                </div>
            </div>
            <h2>Equilibrium #{dataCard.equilibrium}</h2>
            <p>Our Equilibrium collection promotes balance and calm</p>
            <article className='card-data'>
                <div>
                    <img 
                        src="images/icon-ethereum.svg" 
                        alt="Icon ehterium" 
                    />
                    <p><span>0.041 ETH</span></p>
                </div>
                <div>
                    <img 
                        src="images/icon-clock.svg" 
                        alt="Icon clock" 
                    />
                    <p><span>{dataCard.days} days left</span></p>
                </div>
            </article>
            <hr />
            <article className='card-author'>
                <img 
                    src="images/image-avatar.png" 
                    alt="Avatar" 
                />
                <p>Creation of <span>Jules Wyverm</span></p>
            </article>

        </section>
    )
}

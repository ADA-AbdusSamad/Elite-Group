import React from 'react'
import styles from './page.module.css'



export default function page() {
    return (
        <div>
            <section className={styles['testi-section']}>
                <div className='container'>
                    <div id="carouselExampleControls" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className={`${styles["testi-container"]} container`}>
                                    <div className={styles['testi-img']}>
                                        <img src='https://themesflat.co/html/restaurant/luxury/assets/images/item-background/icon-quote.png'></img>
                                    </div>
                                    <h3>Good restaurant, delicious food, classy atmosphere</h3>
                                    <p>Please thank your team for their professional, efficient and friendly service on Sat night.  The chefs smashed it and the drinks flowed freely!  Everyone was impressed and were quite taken with how cost effective it was to have Ochre do what you did.</p>
                                    <div>
                                        <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                    </div>
                                    <h1>MARGARET-FOOD CRITIC</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={`${styles["testi-container"]} container`}>
                                    <div className={styles['testi-img']}>
                                        <img src='https://themesflat.co/html/restaurant/luxury/assets/images/item-background/icon-quote.png'></img>
                                    </div>
                                    <h3>Good restaurant, delicious food, classNamey atmosphere</h3>
                                    <p>Please thank your team for their professional, efficient and friendly service on Sat night.  The chefs smashed it and the drinks flowed freely!  Everyone was impressed and were quite taken with how cost effective it was to have Ochre do what you did.</p>
                                    <div>
                                        <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                    </div>
                                    <h1>MARGARET-FOOD CRITIC</h1>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>


                </div>
            </section>
        </div>
    )
}

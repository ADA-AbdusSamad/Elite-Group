import React from 'react'
import styles from './page.module.css'

export default function page() {
    return (
        <div>
            <section className={styles['menuPage-section']}>
                <div className={`${styles["menuPage-container"]} container`}>
                    <div>
                        <h1 className={styles['menuPage-h1']}>Our menu style 2</h1>
                        <p>Explore our menu with a wide range of Asian to European dishes, dishes to suit all
                            <br />your tastes or events</p>
                    </div>
                </div>
            </section>
            <section className={styles['menuPage-content']}>
                <img className={styles['image-item1']} src='https://themesflat.co/html/restaurant/luxury/assets/images/item-background/item-1.png'></img>
                <img className={styles['image-item2']} src='https://themesflat.co/html/restaurant/luxury/assets/images/item-background/item-1.png'></img>
                <div className={`${styles["menuPage-container2"]} container`}>
                    <div className='text-center'>
                        <h3>What food do we have in our restaurant?</h3>
                        <h1>FROM OUR MENU</h1>
                        <p className='pt-4'>We always give our customers a feeling of peace of mind and comfort when dining at our restaurant
                            Sed ut perspiciatis unde omnis iste natus error voluptate accusantium
                        </p>
                        <div className='event-divider'>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles['menu-system-section']}>
                <div className={`container-fluid`}>
                    {/* <div className={styles['menu-buttons-div']}>
                        <ul className='nav nav-tabs' role="tablist">
                            <li className='nav-item'>
                                <button>
                                    <a className={`${styles['nav-link']} nav-link active`} href="#" role="tab" data-toggle="tab">ALL MENU</a>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button>
                                    <a className={`${styles['nav-link']} nav-link`} href="#" role="tab" data-toggle="tab">ALL MENU</a>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button>
                                    <a className={`${styles['nav-link']} nav-link `} href="#" role="tab" data-toggle="tab">ALL MENU</a>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button>
                                    <a className={`${styles['nav-link']} nav-link`} href="#" role="tab" data-toggle="tab">ALL MENU</a>
                                </button>
                            </li>
                        </ul>
                    </div> */}
                    <div className={styles['menu-system-container']}>
                        <div className={styles['menu-img-div']}>
                            <img src='https://themesflat.co/html/restaurant/luxury/assets/images/box-item/menu-3.jpg'></img>
                        </div>
                        <div className={styles['menu-list-div']}>
                            <div className={styles['tab-container']}>
                                <div className="tab-content">
                                    <div id="special" className={`${styles["menu-list"]} tab-pane active`} role="tabpanel">
                                        <div className={styles['menu-list-wrap']}>
                                            <div className='name'>
                                                <h1>PURPLE CORN TOSTODA</h1>
                                            </div>
                                            <div className='line'></div>
                                            <div className={styles.price}>$32</div>
                                        </div>
                                        <p>Candied jerusalem artichokes, truffle</p>
                                        {/* <div className={`${styles['menu-list']}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles['menu-list']}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles['menu-list']}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div> */}
                                    </div>
                                    <div id="dinner" className={`${styles["menu-list"]} tab-pane`} role="tabpanel">
                                        <div className={styles['menu-list-wrap']}>
                                            <div className='name'>
                                                <h1>PURPLE CORN TOSTODA</h1>
                                            </div>
                                            <div className='line'></div>
                                            <div className='text-white'>$price</div>
                                        </div>
                                        <p>Candied jerusalem artichokes, truffle</p>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                    </div>
                                    <div id="dessert" className={`${styles["menu-list"]} tab-pane`} role="tabpanel">
                                        <div className={styles['menu-list-wrap']}>
                                            <div className='name'>
                                                <h1>PURPLE CORN TOSTODA</h1>
                                            </div>
                                            <div className='line'></div>
                                            <div className='text-white'>$price</div>
                                        </div>
                                        <p>Candied jerusalem artichokes, truffle</p>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                    </div>
                                    <div id="wine" className={`${styles["menu-list"]} tab-pane`} role="tabpanel">
                                        <div className={styles['menu-list-wrap']}>
                                            <div className='name'>
                                                <h1>PURPLE CORN TOSTODA</h1>
                                            </div>
                                            <div className='line'></div>
                                            <div className='text-white'>$price</div>
                                        </div>
                                        <p>Candied jerusalem artichokes, truffle</p>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                        <div className={`${styles["menu-list"]}`}>
                                            <div className={styles['menu-list-wrap']}>
                                                <div className='name'>
                                                    <h1>PURPLE CORN TOSTODA</h1>
                                                </div>
                                                <div className='line'></div>
                                                <div className={styles.price}>$32</div>
                                            </div>
                                            <p>Candied jerusalem artichokes, truffle</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['menu-img-div']}>
                            <img src='https://themesflat.co/html/restaurant/luxury/assets/images/box-item/menu-4.jpg'></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

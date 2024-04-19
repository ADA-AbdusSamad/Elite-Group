import React from 'react'
import styles from '../completedProjects/page.module.css'

export default function page() {
    return (
        <div>
            <section className={styles["main-section"]}>
                <div className={`${styles["main-container"]} container`}>
                    <div className={styles["div1"]}>
                        <div>
                            <h1>LODHA</h1>
                            <div className={styles.divider}>
                                <div className={styles["divider-div"]}>
                                </div>
                            </div>
                            <h3 className=''>Luxury that leaves you in awe and design that takes your breath away. That’s exactly what Vista Residences is all about.</h3>
                            <ul className={styles["div1-ul"]}>
                                <li>
                                    <p>Number of Storeys: 33 floors</p>
                                </li>
                                <li>
                                    <p>Configuration: 2 & 3 BHK</p>
                                </li>
                                <li>
                                    <p>Pricing: $3.16cr + onwards</p>
                                </li>
                                <li>
                                    <p>Possesion: 31/12/2022 as per MAHARERA</p>
                                </li>
                                <li>
                                    <p>Status: Completed</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["div2"]}>
                        <div className={styles["image-div"]}>
                            <img src='lodha-building.jpg'></img>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div id={styles['event-divider']} className='event-divider'>
                        <div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["main-container"]} container`}>
                    <div className={styles["div1"]}>
                        <div>
                            <h1>LODHA</h1>
                            <div className={styles.divider}>
                                <div className={styles["divider-div"]}>
                                </div>
                            </div>
                            <h3 className=''>Luxury that leaves you in awe and design that takes your breath away. That’s exactly what Vista Residences is all about.</h3>
                            <ul className={styles["div1-ul"]}>
                                <li>
                                    <p>Number of Storeys: 33 floors</p>
                                </li>
                                <li>
                                    <p>Configuration: 2 & 3 BHK</p>
                                </li>
                                <li>
                                    <p>Pricing: $3.16cr + onwards</p>
                                </li>
                                <li>
                                    <p>Possesion: 31/12/2022 as per MAHARERA</p>
                                </li>
                                <li>
                                    <p>Status: Completed</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["div2"]}>
                        <div className={styles["image-div"]}>
                            <img src='lodha-building.jpg'></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

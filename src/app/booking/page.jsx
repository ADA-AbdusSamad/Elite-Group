import React from 'react'
import styles from '../booking/page.module.css'

export default function page() {
    return (
        <div>
            <section className={styles['booking-section']}>
                <div className={`${styles["booking-container"]} container`}>
                    <div className={styles.divItem1}>
                        <div className='text-center'>
                            <h3>Enquiry</h3>
                            <h1>BOOKING A Meeting</h1>
                            <p className='pt-3'>Thank you for your interest in our services. Please fill out the form below, and we will get in touch with you shortly to schedule a meeting.</p>
                            <div className='event-divider'>
                                <div>
                                </div>
                            </div>
                            <input type='text' placeholder='Name*' className={styles['name-input']}></input>
                            <div className={styles['input-flex']}>
                                <input type='text' placeholder='Phone*' className={styles['name-input']}></input>
                                <input className={styles['name-input']}></input>
                            </div>
                            <input type='text' placeholder='Email*' className={styles['name-input']}></input>
                            <div className="discover-btn-div d-flex justify-content-center">
                                <button className={`${styles["discover-btn"]} discover-btn`}>Enquiry Now</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divItem2}>
                        <img src='https://themesflat.co/html/restaurant/luxury/assets/images/box-item/reservation-1.jpg' />
                    </div>
                </div>
            </section>
        </div>
    )
}

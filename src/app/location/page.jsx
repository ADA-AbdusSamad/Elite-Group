import React from 'react'
import styles from '../location/page.module.css'

export default function page() {
    return (
        <div>
            <section className={styles['location-section']}>
                <div className={`${styles['location-container']} container`}>
                    <div className={styles.itemDiv1}>
                        <img src='https://cdn.fjorgedigital.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-08-at-11.50.04-AM.png' />
                    </div>
                    <div className={styles.itemDiv1}>
                        <div className='text-center'>
                            <h3>Location</h3>
                            <h1>BOOKING A MEETING</h1>
                            <p className='pt-2'>After booking we will call the customer to confirm, so please <br /> enter your name and phone number is required</p>
                            <div className='event-divider'>
                                <div>
                                </div>
                            </div>
                            <h3>+34 455 698 1220</h3>
                            <p className='pt-3'>Elite Properties Inc.
                                456 Oak Street, Suite 200
                                Cityville, State 12345
                                USA</p>
                            <div className='pt-4'>
                                <p>OPENING HOUR:</p>
                                <p>Mon - Fri : 9.00am - 22.00pm, Holidays : Close</p>
                            </div>
                            <div className="discover-btn-div d-flex justify-content-center mt-5">
                                <button className={`${styles['discover-btn']} discover-btn`}>GET DIRECTION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

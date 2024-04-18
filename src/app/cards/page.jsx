import React from 'react'
import styles from '../cards/page.module.css'


export default function page() {
  return (
    <div>
      <section className={styles['card-section']}>
        <div className={`${styles["card-flex"]} container-fluid`}>
          <div className={styles['card-items']}>
            <img src='https://fama.b-cdn.net/elitegroup/eminities1.jpg' />
            <div className={styles['inner-div']}>
              <div className={styles['inner-div-line']}>
                <h3>Balcony</h3>
              </div>
            </div>
          </div>
          <div className={styles['card-items']}>
            <img src='https://fama.b-cdn.net/elitegroup/eminities2.png' />
            <div className={styles['inner-div']}>
              <div className={styles['inner-div-line']}>
                <h3>Gaming</h3>
              </div>
            </div>
          </div>
          <div className={styles['card-items']}>
            <img src='https://fama.b-cdn.net/elitegroup/eminities3.jpg' />
            <div className={styles['inner-div']}>
              <div className={styles['inner-div-line']}>
                <h3>Garden</h3>
              </div>
            </div>
          </div>
          <div className={styles['card-items']}>
            <img src='https://fama.b-cdn.net/elitegroup/eminities4.jpg' />
            <div className={styles['inner-div']}>
              <div className={styles['inner-div-line']}>
                <h3>Swimming Pool</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center pb-5 mt-5 pt-5'>
          <h3 className={styles['signIn-text']}>Sign up to receive news and offers from us!</h3>
          <div className={`${styles["signIn-container"]} container`}>
            <input type='text' placeholder='Email Address*' className={styles['name-input']}></input>
            <div className={`${styles["discover-btn-div"]} discover-btn-div d-flex justify-content-center`}>
              <button className={`${styles["discover-btn"]} discover-btn`}>GET DIRECTION</button>
            </div>
          </div>
          <p className={styles['res-p']}>* We promise not to spam your inbox in any way</p>
        </div>
      </section>
    </div>
  )
}

import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className={styles['footer-section']}>
        <div className={`${styles["footer-container"]} container`}>
          <div className={styles['items']}>
            <div className={styles['item1']}>
              <h1>WE ARE HERE</h1>
             
              <p className="pt-5">
                {/* 82 Place Charles de Gaulle, Paris <br /> */}
                <Link
                  href={`https://maps.app.goo.gl/dkzebwUuPLcsvhz17`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center ${styles.contactLink}`}
                >
                  375 Sane Guruji Marg, Ghaas Gali, Yasmin Tower, 1st Floor,
                  Agripada, Mumbai - 400011
                </Link><br />
                <a
                  href={`mailto:elitegroupofcompany1989@gmail.com`}
                  rel="noopener noreferrer"
                  className={`text-center ${styles.contactLink}`}
                >
                  EliteGroup@gmail.com
                </a>
               <br />
               <Link
                  href={`tel:39-055-123456`}
                  rel="noopener noreferrer"
                  className={`text-center ${styles.contactLink}`}
                >
                  +39-055-123456
                </Link>
               </p>
            </div>
          </div>
          <div className={styles['mid-item']}>
            <div className={styles['footer-logo-wrap']}>
              <div className={styles['footer-logo-div']}>
                <img src="https://themesflat.co/html/restaurant/luxury/assets/images/logo/logo-ft@2x.png"></img>
              </div>
            </div>
            <p className="pt-5">A distinctive, well-preserved and comfortable space, high-quality products, authentic cuisine, food and drinks are done flawlessly.</p>
            <ul className={styles['mid-item-ul']}>
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>TRIPVADASOR</li>
            </ul>
          </div>
          <div className={styles['items']}>
            <div className={styles['item3']}>
              <h1>OPENING TIME</h1>
              <p className="pt-5">Mon - Fri: 08:00 am - 09:00pm <br />
                Sat - Sun: 10:00 am - 11:00pm <br />Holiday: Close</p>
            </div>
          </div>
        </div>
        <p className="text-center pt-5">Copyright {" "}
         {/* © 2023 themesflat */}
         Elite Group. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";




const About = () => {
  return (
    <div className={styles["about-section"]}>
      <div className={`${styles["about-container"]} container`}>
        <div className={`${styles["about-div1"]} ${styles.fadeUp}`}>
          <div>
            <h3 className={styles["about-text"]}>About Us</h3>
            <h1 className={styles["star5-text"]}>Elite Groups<br /> Where Homes Tell Stories</h1>
            <div className={styles.divider}>
              <div className={styles["divider-div"]}>
              </div>
            </div>
            <h2>we create experiences, weaving narratives that turn each<br /> interaction into a celebration of luxury living..</h2>
            <p className="pt-3">we are more than just a real estate agency - we are your trusted partners in realizing your property goals. With years of industry expertise and a commitment to excellence, we strive to deliver unparalleled service and satisfaction to our clients. Learn more about our vision, values, and the team behind our success</p>
            <div className="discover-btn-div">
              <button className="discover-btn">DISCOVER MENU</button> 
            </div>
          </div>
        </div>
        <div className={`${styles["about-div2"]}`}>
          <img className={styles["about-div-img"]} src="about-img2.jpg"></img>
        </div>
      </div>
      <div className={`${styles["about-container"]} container pt-5`}>
        <div className={`${styles["about-div3"]}`}>
          <img className={styles["about-div-img"]} src='about-img1.jpg'></img>
        </div>
        <div className={`${styles["about-div4"]}`}>
          <div>
            <h1 className={styles["star5-text"]}>Property Locations</h1>
            <h2 className="pt-4">Discover luxury residences in prime Mumbai locales. Your dream home awaits</h2>
            <div className="pt-4">
              <p className={styles['property-p']}>At Elite Groups, we believe in the power of choice. Explore our diverse portfolio of properties located in prime destinations across Mumbai. Whether you prefer the hustle and bustle of the city or the tranquility of the suburbs, we have the perfect location to suit your lifestyle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

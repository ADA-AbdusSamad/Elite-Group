
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

// const links = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     url: "/portfolio",
//   },
//   {
//     id: 3,
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     id: 4,
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: 5,
//     title: "Contact",
//     url: "/contact",
//   }
// ];

const Navbar = () => {

  return (
    // <div className={styles.container}>
    //   <Link href="/" className={styles.logo}>
    //     lamamia
    //   </Link>
    //   <div className={styles.links}>
    //     {links.map((link) => (
    //       <Link key={link.id} href={link.url} className={styles.link}>
    //         {link.title}
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div>
      <header className={styles.header}>
        <div className={styles["flex-div"]}>
          <div className={styles["location-div"]}>
          <p className={styles['navbar-p']}>Upcoming <br/><p className={styles['navbar-p-span']}>Projects</p></p>
          </div>
          <div className={styles["location-div"]}>
            <p className={styles['navbar-p']}>Ongoing <br/><p className={styles['navbar-p-span']}>Projects</p></p>
          </div>
        </div>

        <div id={styles["site-logo"]}>
          <div className={styles["site-logo-wrap"]}>
            <Link href="/menuPage" rel="home" className="main-logo">
              <img id={styles["logo_header"]} alt="" src="https://themesflat.co/html/restaurant/luxury/assets/images/logo/logo.png" />
            </Link>
          </div>
        </div>
        <div className={styles["content-end"]}>
          <div className={styles["location-div"]}>
            <div className={styles["icon-div"]}>
              <i id={styles.icon} className="fa-solid fa-phone"></i>
            </div>
            <div className={styles.content}>
              <p className={styles.p1}>EliteGroup@gmail.com</p>
              <p className={styles.pp}>phone no: +34 455 698 1220</p>
            </div>
          </div>
          <div className={styles["button-div"]}>
            <button>CONTACT US</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

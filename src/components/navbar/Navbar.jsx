
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
          <p className={styles["navbar-title"]}>Elite <span className={styles["golden-span"]}>Group</span> Of <span className={styles["golden-span"]}>Companies</span></p>
        </div>

        <div id={styles["site-logo"]}>
          <div className={styles["site-logo-wrap"]}>
            <Link href="/app" rel="home" className="main-logo">
              <img id={styles["logo_header"]} alt="" src="https://themesflat.co/html/restaurant/luxury/assets/images/logo/logo.png" />
            </Link>
          </div>
        </div>
        <div className={styles["content-end"]}>
          <div className={styles["projects-dropdown"]}>
            <div>
              <h1 className={styles["navbar-projects-text"]}>PROJECTS</h1>
            </div>
            <div className={styles["navbar-dropdown"]}>
              <ul className={styles["dropdown-ul"]}>
                <li>
                  <h1>Upcoming</h1>
                </li>
                <li>
                  <h1>Ongoing</h1>
                </li>
                <li>
                  <Link href="/completedProjects"><h1>Completed</h1></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["location-div"]}>
            <div className={styles["icon-div"]}>
              <i id={styles.icon} className="fa-solid fa-phone"></i>
            </div>
            <div className={styles.content}>
              <p className={styles.p1}>EliteGroup@gmail.com</p>
              <p className={styles.pp}>+34 455 698 1220</p>
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

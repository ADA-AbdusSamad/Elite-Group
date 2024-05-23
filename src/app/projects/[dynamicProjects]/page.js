import React from "react";
import styles from "@/app/completedProjects/page.module.css";

const projects = [
  {
    name: "Dar Us Salam",
    location: "Kurla West",
    duration: "6 months",
    completion: "onGoing",
    status: "ongoing",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Elite Residency",
    location: "Kurla West",
    duration: "6 months",
    completion: "onGoing",
    status: "ongoing",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Bait Us Salam",
    location:
      "375 Sane Guruji Marg, Ghaas Gali, Yasmin Tower, 1st Floor, Agripada, Mumbai - 400011",
    duration: "6 months",
    completion: "onGoing",
    status: "ongoing",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Elite Tower-B wing",
    location:
      "375 Sane Guruji Marg, Ghaas Gali, Yasmin Tower, 1st Floor, Agripada, Mumbai - 400011",
    duration: "6 months",
    completion: "onGoing",
    status: "ongoing",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "",
    location: "Mohili Village Sakinaka Kurla",
    duration: "1 year",
    completion: "upcoming",
    status: "upcoming",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "",
    location: "khetwadi",
    duration: "1 year",
    completion: "upcoming",
    status: "upcoming",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "",
    location: "Mazgaon",
    duration: "1 year",
    completion: "upcoming",
    status: "upcoming",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "",
    location: "Priya Darshini Mahada, Kurla - (W)",
    duration: "1 year",
    completion: "upcoming",
    status: "upcoming",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "",
    location: "Nagpada (mumbai Central)",
    duration: "1 year",
    completion: "upcoming",
    status: "upcoming",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "",
    location: "Jacob Circle (Mahalaxmi)",
    duration: "1 year",
    completion: "upcoming",
    status: "upcoming",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Prathemsh Apartment",
    location: "Borivali (E)",
    duration: "3 months",
    completion: "2009",
    status: "completed",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Mustafa Manzil",
    location: "Borivali",
    duration: "3 months",
    completion: "2010",
    status: "completed",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Yasmin Tower",
    location: "Agripada",
    duration: "3 months",
    completion: "2015",
    status: "completed",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Sai Shrushti",
    location: "Borivali",
    duration: "3 months",
    completion: "2015",
    status: "completed",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Ibrahim Residency",
    location: "Mahalaxmi",
    duration: "3 months",
    completion: "2023",
    status: "completed",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
  {
    name: "Elite Tower",
    location: "Borivali",
    duration: "3 months",
    completion: "2024",
    status: "completed",
    image: "https://fama.b-cdn.net/elitegroup/yasmintower.PNG",
  },
];

const Page = ({ params }) => {
  const projectUrl = params.dynamicProjects;
  const filteredProjects = projects.filter(
    (project) => project.status === projectUrl
  );
  console.log("filtered Projects", filteredProjects);
  return (
    <div>
      <section className={styles["main-section"]}>
        {filteredProjects.length > 0 &&
          filteredProjects.map((ele) => (
            <>
              <div className={`${styles["main-container"]} container`}>
                <div className={styles["div1"]}>
                  <div>
                    <h1>{ele.name}</h1>
                    <div className={styles.divider}>
                      <div className={styles["divider-div"]}></div>
                    </div>
                    <h3 className="">
                      Luxury that leaves you in awe and design that takes your
                      breath away. That’s exactly what Vista Residences is all
                      about.
                    </h3>
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
                    <img src={ele.image}></img>
                  </div>
                </div>
              </div>
              <div className="container">
                <div id={styles["event-divider"]} className="event-divider">
                  <div></div>
                </div>
              </div>
            </>
          ))}
        {/* <div className={`${styles["main-container"]} container`}>
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
        </div> */}
      </section>
    </div>
  );
};

export default Page;

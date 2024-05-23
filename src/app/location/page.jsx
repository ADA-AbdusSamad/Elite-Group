import React from "react";
import styles from "../location/page.module.css";

export default function page() {
  return (
    <div>
      <section className={styles["location-section"]}>
        <div className={`${styles["location-container"]} container`}>
          <div className={styles.itemDiv1}>
            {/* <img src="https://cdn.fjorgedigital.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-08-at-11.50.04-AM.png" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.165230929522!2d72.82057949999999!3d18.9766926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf79c31ab06f%3A0x2a744a4aaee88d!2sYasmin%20Tower!5e0!3m2!1sen!2sin!4v1682151256345!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.itemDiv1}>
            <div className="text-center">
              <h3>Location</h3>
              <h1>BOOKING A MEETING</h1>
              <p className="pt-2">
                After booking we will call the customer to confirm, so please{" "}
                <br /> enter your name and phone number is required
              </p>
              <div className="event-divider">
                <div></div>
              </div>
              <h3>+34 455 698 1220</h3>
              <p className="pt-2 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="100"
                  height="37.000000pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#b09a72"
                    stroke="none"
                  >
                    <path d="M2365 5109 c-582 -71 -1084 -429 -1339 -953 -190 -392 -222 -847 -90 -1283 100 -331 284 -664 543 -985 39 -48 71 -90 71 -93 0 -3 -88 -5 -195 -5 -145 0 -204 -4 -228 -14 -39 -17 -1074 -964 -1102 -1009 -19 -30 -20 -52 -23 -332 -3 -299 -3 -300 21 -344 16 -31 37 -52 67 -68 l43 -23 2427 0 2427 0 43 23 c30 16 51 37 67 68 24 44 24 45 21 345 l-3 301 -25 36 c-31 45 -1040 981 -1080 1002 -23 12 -71 15 -235 15 -113 0 -205 2 -205 5 0 3 39 53 86 112 99 123 250 348 322 478 341 623 379 1250 107 1795 -243 488 -698 823 -1245 916 -108 19 -370 26 -475 13z m489 -189 c311 -60 558 -192 787 -420 438 -437 564 -1026 353 -1659 -184 -555 -689 -1180 -1342 -1665 l-92 -68 -98 73 c-492 368 -918 834 -1163 1269 -391 697 -359 1415 87 1951 244 294 611 491 999 538 118 14 342 5 469 -19z m-985 -3452 c160 -157 252 -237 426 -373 159 -124 211 -155 262 -155 58 0 83 14 243 136 184 140 300 241 467 405 l141 139 266 0 267 0 498 -462 c275 -255 500 -466 500 -470 1 -5 -1071 -8 -2381 -8 l-2383 0 50 49 c28 27 257 239 509 470 l460 421 260 0 259 0 156 -152z m3081 -1128 l0 -170 -2390 0 -2390 0 0 170 0 170 2390 0 2390 0 0 -170z" />
                    <path d="M2483 4453 c-18 -10 -249 -193 -514 -408 -398 -322 -485 -397 -500 -430 -37 -81 -21 -130 83 -253 50 -59 84 -90 115 -104 l43 -19 0 -413 0 -414 28 -53 c31 -60 93 -113 150 -129 51 -14 1293 -14 1344 0 57 16 119 69 150 129 l28 53 0 414 0 413 43 19 c31 14 65 45 115 104 147 175 140 234 -47 384 l-111 89 0 238 c0 258 -2 267 -57 319 -42 39 -95 51 -219 47 -86 -3 -116 -8 -143 -24 -44 -26 -71 -63 -85 -118 l-11 -45 -115 94 c-63 51 -129 100 -147 109 -42 20 -111 19 -150 -2z m543 -526 c254 -204 462 -376 462 -382 2 -17 -91 -126 -104 -123 -7 2 -184 139 -393 306 -210 166 -393 307 -406 312 -15 6 -34 6 -49 0 -13 -5 -198 -146 -410 -314 -212 -168 -390 -306 -394 -306 -10 0 -101 110 -102 123 -1 7 919 756 930 756 3 1 212 -167 466 -372z m214 197 c0 -113 -3 -144 -12 -138 -7 4 -46 34 -85 66 l-73 59 0 73 c0 40 3 76 7 79 3 4 42 7 85 7 l78 0 0 -146z m-336 -544 l335 -265 1 -438 0 -438 -25 -24 c-23 -24 -28 -25 -170 -25 l-145 0 0 234 c0 252 -5 287 -56 353 -13 18 -46 45 -72 60 -46 28 -50 28 -212 28 -162 0 -166 0 -212 -28 -26 -15 -59 -43 -74 -62 -49 -64 -53 -92 -54 -347 l0 -238 -145 0 c-142 0 -147 1 -170 25 l-25 24 0 438 1 438 337 267 c185 147 340 266 344 265 4 -1 158 -121 342 -267z m-200 -706 l26 -27 0 -228 0 -229 -170 0 -170 0 0 229 0 228 26 27 c26 25 31 26 144 26 113 0 118 -1 144 -26z" />
                  </g>
                </svg>
                <a
                  href={`https://maps.app.goo.gl/dkzebwUuPLcsvhz17`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center ${styles.contactLink}`}
                >
                  375 Sane Guruji Marg, Ghaas Gali, Yasmin Tower, 1st Floor,
                  Agripada, Mumbai - 400011
                </a>
              </p>
              <p className="pt-2 d-flex">
                <img src="https://img.icons8.com/?size=100&id=c84A8yTomT5p&format=png&color=000000" className={styles.browser}/>
                <a
                  href="http://elitegroupofcompany.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center ${styles.contactLink}`}
                >
                  elitegroupofcompany.com
                </a>
              </p>
              <p className=" d-flex">
              <img src="https://img.icons8.com/?size=100&id=YbPqIO0gOrT3&format=png&color=000000" className={styles.browser}/>

                <a
                  href="mailto:elitegroupofcompany1989@gmail.com"
                  className={`ms-2 mt-3 text-center ${styles.contactLink}`}
                >
                  elitegroupofcompany1989@gmail.com
                </a>
              </p>
              <div className="pt-4">
                <p>Working HOUR:</p>
                <p>Mon - Fri : 9.00am - 22.00pm, Holidays : Close</p>
              </div>
              <div className="discover-btn-div d-flex justify-content-center mt-5">
                <button className={`${styles["discover-btn"]} discover-btn`}>
                  GET DIRECTION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

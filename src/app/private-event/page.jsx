import React from 'react'
import styles from '../private-event/page.module.css'


export default function page() {
  return (
    <div>
      <section className={styles.section}>
        <div className={`${styles["section-container"]} container`}>
          <div className="text-center">
            <h3>Private Event</h3>
            <h1>perfect place for event</h1>
            <div className='event-divider'>
              <div>
              </div>
            </div>
            <p>Whether you're hosting a corporate event, cocktail party, luncheon, dinner, meeting, shower, wedding reception, bat/bar mitzvah or rehearsal dinner, we know we can offer you and your guests a truly memorable event. </p>
            <div className="discover-btn-div d-flex justify-content-center">
              <button className="discover-btn">GET STARTED FOR YOUR EVENT</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

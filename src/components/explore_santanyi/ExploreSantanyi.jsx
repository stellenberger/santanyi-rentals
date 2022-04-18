import React from 'react'
import classes from './ExploreSantanyi.module.scss'
import {
  EsPontas,
  DesMoro,
  Llombards,
  Mondrago
} from '../../media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function ExploreSantanyi() {
  return (
    <div className={classes.exploreSantanyiContainer}>
      <div className={classes.content} id="exploreContent">
        <div className={classes.mainBlurb}>
          <p>
            Santanyi is a beautiful, traditional rural town, with cobbled streets, on the east coast of Mallorca. 
            The buildings in Santanyi look just that little bit more mellow than everywhere else as the golden sandstone used in Palma's cathedral and La Llotja are sourced from here. 
            The magnificent church is home to the old Palma pipe organ which has a very interesting and long history.
          </p>
          <p>
            Santanyi is an arty town with galleries and workshops to be stumbled upon. 
            Whiling away the hours and soaking up the sun on the charming square is so relaxing and a great way to soak up the atmosphere. 
          </p>
          <p>
            There are a variety of lovely restaurants and a thriving, popular local market twice a week as well as various music festivals throughout the summer.
            Santanyi and the surrounding area is a great base to explore the islands best and many cove beaches which are easily accessible either on foot or by car. 
            The white sand and turquoise water, sandstone cliffs, and caves to explore, one can’t help but sense a feeling of paradise.
          </p>
        </div>
        <div className={classes.sectionsGrid}>
          <div className={classes.rowOne}>
            <div className={classes.informationSection}>
              <div className={classes.topBanner}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /><span>Cala Des Moro</span>
                </span>
              </div>
              <img src={DesMoro} alt="Picture of Cala Des Moro" />
            </div>
            <span className={classes.information}>
              A hidden gem around the corner of Cala Llombards and a few minutes drive (or cycle!) from Santanyi
              lies the idyllic cove of Cala Des Moro. Be sure to take a swim or a leisurely stroll around this beautiful beach
              when visiting this part of the island. 
            </span>
          </div>
          <div className={classes.rowTwo}>
            <div className={classes.informationSection}>
              <div className={classes.topBanner}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /><span>Es Pontas</span>
                </span>
              </div>
              <img src={EsPontas} alt="Picture of Es Pontas" />
            </div>
            <span  className={classes.information}>
              "Es Pontas" translates to "The Bridge" in Catalan, and you can see why. An epic feat of nature, it's swimmable from 
              either Cala Llombards or Cala Santanyi, where you will find an array of fish and other wildlife calling the bridge home.
            </span>
          </div>
          <div className={classes.rowTwo}>
            <div className={classes.informationSection}>
              <div className={classes.topBanner}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /><span>Cala Llombards</span>
                </span>
              </div>
              <img src={Llombards} alt="Picture of Cala Llombards" />
            </div>
            <span  className={classes.information}>
              Cala Llombards; one of the most picturesque beaches on the island. Whats even better is that every year, from May to October, the local
              Chiringuito is open, serving all things from fresh seafood to ice cold beverages. A day at the beach has never been more handsome. 
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import classes from '../House.module.scss'
import { ConTiuSVGsMainPage } from '../../media'

export default function CanTiuPropertyDetails() {
  return (
    <div className={classes.propertyContainer}>
      <div className={classes.about}>
        <i>“Just two minutes walking from the central square of Santanyi”</i>
      </div>
      <div className={classes.amenitiesContainer}>
        <div className={classes.information}>
          <h1>Information</h1>
          {ConTiuSVGsMainPage.information.map(sec => {
            return (
              <div className={classes.svgContainer}>
                <img src={sec[0]} alt="Svg" className={classes.svgs} />
                <span className={classes.svgDescription}>{sec[1]}</span>
              </div>
            )
          })}
        </div>
        <div className={classes.amenities}>
          <h1>Amenities</h1>
          {ConTiuSVGsMainPage.amenities.map(sec => {
            return (
              <div className={classes.svgContainer}>
                <img src={sec[0]} alt="Svg" className={classes.svgs} />
                <span className={classes.svgDescription}>{sec[1]}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={classes.buttons}>          
        <a href = "mailto: contact@santanyiholidayrentals.com" className={classes.button}>More details</a>
        <a href = "mailto: contact@santanyiholidayrentals.com" className={classes.button}>Floorplan</a>
        <a href = "mailto: contact@santanyiholidayrentals.com" className={classes.requestBooking}>Request a booking</a>
      </div>
    </div>
  )
}

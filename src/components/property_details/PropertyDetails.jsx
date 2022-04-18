import React from 'react'
import classes from './PropertyDetails.module.scss'

export default function PropertyDetails({ propertyInformation }) {
  return (
    <div className={classes.propertyContainer}>
      <div className={classes.about}>
        <i>“{propertyInformation.blurb}”</i>
      </div>
      <div className={classes.amenitiesContainer}>
        <div className={classes.information}>
          <h1>Information</h1>
          {propertyInformation.svgs.information.map((sec, index) => {
            return (
              <div key={index} className={classes.svgContainer}>
                {sec[0]}
                <span className={classes.svgDescription}>{sec[1]}</span>
              </div>
            )
          })}
        </div>
        <div className={classes.amenities}>
          <h1>Amenities</h1>
          {propertyInformation.svgs.amenities.map((sec, index) => {
            return (
              <div key={index} className={classes.svgContainer}>
                {sec[0]}
                <span className={classes.svgDescription}>{sec[1]}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={classes.buttons}>          
        <a href={propertyInformation.details} className={classes.button} download="floorplan">More details</a>
        <a href={propertyInformation.floorplan} className={classes.button} download="floorplan">Floorplan</a>
        <a href={`mailto: ${propertyInformation.email}`} className={classes.requestBooking}>Request a booking</a>
      </div>
    </div>
  )
}

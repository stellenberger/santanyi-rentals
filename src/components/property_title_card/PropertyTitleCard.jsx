import React from 'react'
import classes from './PropertyTitleCard.module.scss'
import { GrMapLocation } from 'react-icons/gr';

export default function PropertyTitleCard({ property }) {
  return (
    <div className={classes.propertyTitleCardContainer}>
      <span className={classes.title}>{property && property.id.toUpperCase()}</span>
      <div className={classes.location}>
        <GrMapLocation/>
        <span>{property && property.location}</span>
      </div>
    </div>
  )
}

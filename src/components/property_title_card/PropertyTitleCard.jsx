import React from 'react'
import classes from './PropertyTitleCard.module.scss'
import { blacklocationmarker } from '../../media/svgs'

export default function PropertyTitleCard({ property, gravatar }) {
  return (
    <div className={classes.propertyTitleCardContainer}>
      <span className={classes.title}>{property && property.id.toUpperCase()}</span>
      <div className={classes.location}>
        <img src={blacklocationmarker} alt="a white location marker" />
        <span>{property && property.location}</span>
      </div>
      <img src={gravatar} alt="The property owner picture" />
    </div>
  )
}
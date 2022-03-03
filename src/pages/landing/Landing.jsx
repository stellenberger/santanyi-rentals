import React from 'react'
import classes from './Landing.module.scss';
import { PropertyCard } from '../../components'
import { 
  SEstadorsPropertyPictures
} from '../../houses';

const Landing = () => {

  return (
    <div className={classes.landingContainer}>
      <p className={classes.landingTitle}>Properties</p>
      <PropertyCard images={SEstadorsPropertyPictures} />
    </div>
  )
}


export default Landing

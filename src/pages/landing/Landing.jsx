import React from 'react'
import classes from './Landing.module.scss';
import { PropertyCard } from '../../components'
import { 
  SEstadorsPropertyPictures,
  CanTiuPropertyPictures,
  CanSabaterPropertyPictures,
} from '../../houses';

const Landing = () => {

  return (
    <div className={classes.landingContainer}>
      <p className={classes.landingTitle}>Properties</p>
      <div className={classes.propertyGrid}>
        <PropertyCard images={SEstadorsPropertyPictures} propertyName={'Casa S\'Estadors'} />
        <PropertyCard images={CanTiuPropertyPictures} propertyName={'Casa Can Tiu'} />
        <PropertyCard images={CanSabaterPropertyPictures} propertyName={'Casa Can Sabater'} />
      </div>
    </div>
  )
}


export default Landing

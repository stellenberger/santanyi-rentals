import React from 'react'
import classes from './Landing.module.scss';
import { PropertyCard } from '../../components'
import { 
  SEstadorsPropertyPictures,
  CanTiuPropertyPictures,
  CanSabaterPropertyPictures,
  EmbarcaderoPropertyPictures,
} from '../../houses';
import { 
  SEstadorsSVGs,
  CanTiuSVGs,
  CanSabaterSVGs,
  EmbarcaderoSVGs,
} from '../../media';

const Landing = () => {

  return (
    <div className={classes.landingContainer}>
      <p className={classes.landingTitle}>Properties</p>
      <div className={classes.propertyGrid}>
        <PropertyCard images={SEstadorsPropertyPictures} propertyName={'Casa S\'Estadors'} propertySVGs={SEstadorsSVGs} />
        <PropertyCard images={CanTiuPropertyPictures} propertyName={'Casa Can Tiu'} propertySVGs={CanTiuSVGs} />
        <PropertyCard images={CanSabaterPropertyPictures} propertyName={'Casa Can Sabater'} propertySVGs={CanSabaterSVGs} />
        <PropertyCard images={EmbarcaderoPropertyPictures} propertyName={'Casa Embarcadero'} propertySVGs={EmbarcaderoSVGs} />
      </div>
    </div>
  )
}


export default Landing

import React from 'react'
import classes from './Landing.module.scss';
import { PropertyCard } from '../../components'
import { 
  SEstadorsPropertyPicturesForCards,
  CanTiuPropertyPicturesForCards,
  CanSabaterPropertyPicturesForCards,
  EmbarcaderoPropertyPicturesForCards,
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
        <PropertyCard images={SEstadorsPropertyPicturesForCards} propertyName={'Casa S\'Estadors'} propertySVGs={SEstadorsSVGs} />
        <PropertyCard images={CanTiuPropertyPicturesForCards} propertyName={'Casa Can Tiu'} propertySVGs={CanTiuSVGs} />
        <PropertyCard images={CanSabaterPropertyPicturesForCards} propertyName={'Casa Can Sabater'} propertySVGs={CanSabaterSVGs} />
        <PropertyCard images={EmbarcaderoPropertyPicturesForCards} propertyName={'Casa Embarcadero'} propertySVGs={EmbarcaderoSVGs} />
      </div>
    </div>
  )
}


export default Landing

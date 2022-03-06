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
      <div className={classes.propertyGrid}>
        <PropertyCard images={SEstadorsPropertyPicturesForCards} propertyId={'sestadors'} propertyName={'Casa S\'Estadors'} propertySVGs={SEstadorsSVGs} />
        <PropertyCard images={CanTiuPropertyPicturesForCards} propertyId={'cantiu'} propertyName={'Casa Can Tiu'} propertySVGs={CanTiuSVGs} />
        <PropertyCard images={CanSabaterPropertyPicturesForCards} propertyId={'cansabater'} propertyName={'Casa Can Sabater'} propertySVGs={CanSabaterSVGs} />
        <PropertyCard images={EmbarcaderoPropertyPicturesForCards} propertyId={'embarcadero'} propertyName={'Casa Embarcadero'} propertySVGs={EmbarcaderoSVGs} />
      </div>
    </div>
  )
}


export default Landing

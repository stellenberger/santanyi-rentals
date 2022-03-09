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
        <PropertyCard images={EmbarcaderoPropertyPicturesForCards} propertyId={'embarcadero'} propertyName={'Embarcadero'} propertySVGs={EmbarcaderoSVGs} />
        <PropertyCard images={SEstadorsPropertyPicturesForCards} propertyId={'sestadors'} propertyName={'S\'Estadors'} propertySVGs={SEstadorsSVGs} />
        <PropertyCard images={CanSabaterPropertyPicturesForCards} propertyId={'cansabater'} propertyName={'Can Sabater'} propertySVGs={CanSabaterSVGs} />
        <PropertyCard images={CanTiuPropertyPicturesForCards} propertyId={'cantiu'} propertyName={'Can Tiu'} propertySVGs={CanTiuSVGs} />
      </div>
    </div>
  )
}


export default Landing

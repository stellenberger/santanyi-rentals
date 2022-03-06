import classes from './Property.module.scss';
import React, { useEffect, useState } from 'react';

import { 
  PropertyBundles
 } from '../../houses';

export default function Property() {
  const [properties, setProperties] = useState(PropertyBundles)
  const [property, setProperty] = useState(null)

  useEffect(() => {
    let id = window.location.pathname.split('/')
    properties && setProperty(properties.filter(property => property.id == id[id.length - 1])[0])
  }, [])

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.title}>{property && property.id}</div>
      <div className={classes.contentContainer}>
        {property && property.detailsComponent}
      </div>
    </div>
  )
}

import classes from './Property.module.scss';
import React, { useEffect, useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, DotGroup, Slide, Slider, ButtonNext, ButtonBack } from "pure-react-carousel";

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
    <div className={classes.propertyContainer}>
      <div className={classes.carouselContainer}>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={property && property.images.length}
            currentSlide={0}
          >
          <Slider>
            { property && property.images.map(img => {
              return (<Slide index={property.images.indexOf(img)}>
                <span className={classes.imageContainer}>
                  <img src={img} alt={`photos of ${property.id} property`} />
                </span>
              </Slide>)
            })}
          </Slider>
          <DotGroup className={classes.dotGroup} />
          <ButtonBack className={classes.buttonBack}><i class={classes.left} /></ButtonBack>
          <ButtonNext className={classes.buttonNext}><i class={classes.right} /></ButtonNext>
        </CarouselProvider>
      </div>
      <div className={classes.contentContainer}>
        {property && property.detailsComponent}
      </div>
    </div>
  )
}

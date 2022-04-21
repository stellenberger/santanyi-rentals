import classes from './Property.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, DotGroup, Slide, Slider, ButtonNext, ButtonBack } from "pure-react-carousel";
import { SantanyiCalendar, PropertyTitleCard } from '../../components'
import { ImArrowLeft } from 'react-icons/im';

export default function Property({ changeColor, backgroundHeroImage, property }) {
  return (
    <div className={classes.propertyContainer}>
      <div className={classes.contentContainer}>
        <Link to="/" className={classes.backButton} onClick={() => changeColor(backgroundHeroImage)}><ImArrowLeft/> Go back</Link>
        <PropertyTitleCard property={property} />
        {property && property.detailsComponent}
      </div>
      <div>
        <div className={classes.carouselContainer}>
          <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={150}
              totalSlides={property && property.images.length}
              currentSlide={0}
            >
            <Slider>
              { property && property.images.map((img, index) => {
                return (
                  <Slide key={index} index={property.images.indexOf(img)}>
                    <span className={classes.imageContainer}>
                      <img src={img} alt={`photos of ${property.id} property`} />
                    </span>
                  </Slide>
                )
              })}
            </Slider>
            <DotGroup className={classes.dotGroup} />
            <ButtonBack className={classes.buttonBack}><i className={classes.left} /></ButtonBack>
            <ButtonNext className={classes.buttonNext}><i className={classes.right} /></ButtonNext>
          </CarouselProvider>
        </div>
        <div className={classes.calendarContainer} >
          <SantanyiCalendar bookings={property && property.bookings} prices={property && property.prices}/>
        </div>
      </div>
    </div>
  )
}

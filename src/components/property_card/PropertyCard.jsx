import React from 'react';
import classes from './PropertyCard.module.scss';
import { 
  WhiteMail,
  WhitePhone,
} from '../../media'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, DotGroup, Slide, Slider, ButtonNext, ButtonBack } from "pure-react-carousel";

export default function PropertyCard({ images, propertyName, propertySVGs }) {
  return (
    <div className={classes.propertyCardContainer}>
      <div className={classes.topBanner}>
        <span>
          { propertyName && propertyName }
        </span>
        <div className={classes.propertyInformation}>
          { propertySVGs && propertySVGs.map(svg => {
            return (
              <span className={classes.SVGContainer} >
                <img src={svg[0]} className={classes.propertySVG} />
                <span>{ svg[1] && svg[1] }</span>
              </span>
            )
          }) }
        </div>
      </div>
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={150}
          totalSlides={images.length}
          currentSlide={0}
        >
        <Slider>
          { images && images.map(img => {
            return (<Slide index={images.indexOf(img)}>
              <span className={classes.imageContainer}>
                <img src={img} alt="a mallorcan house" />
                <a href="https://google.com" className={classes.viewProperty}><b>View details</b></a>
              </span>
            </Slide>)
          })}
        </Slider>
        <DotGroup className={classes.dotGroup} />
        <ButtonBack className={classes.buttonBack}><i class={classes.left} /></ButtonBack>
        <ButtonNext className={classes.buttonNext}><i class={classes.right} /></ButtonNext>
      </CarouselProvider>
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import classes from './PropertyCard.module.scss';
import { 
  WhiteMail,
  WhitePhone,
} from '../../media'
import { CarouselProvider, Slide, Slider, ButtonNext, ButtonBack } from "pure-react-carousel";

export default function PropertyCard({ images }) {
  const [currentImage, setCurrentImage] = useState(null)

  useEffect(() => {
    setCurrentImage(images[0])
  }, [])

  return (
    <div className={classes.propertyCardContainer}>
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={150}
          totalSlides={images.length}
          currentSlide={0}
        >
          <Slider>
            { images && images.map(img => {
              return <Slide index={images.indexOf(img)}>
                <img src={img} alt="a mallorcan house" />
              </Slide>
            })}
          </Slider>
        <ButtonBack className={classes.buttonBack}><i class={classes.left} /></ButtonBack>
        <ButtonNext className={classes.buttonNext}><i class={classes.right} /></ButtonNext>
      </CarouselProvider>
    </div>
  )
}

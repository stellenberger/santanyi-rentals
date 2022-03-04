import React from 'react'
import classes from './Footer.module.scss';
import { 
  WhiteMail,
  WhitePhone,
} from '../../media'

export default function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div>
          <img src={WhiteMail} alt="white mail icon" />
          <a href = "mailto: contact@santanyiholidayrentals.com">contact@santanyiholidayrentals.com</a>
        </div>
        <div>
          <img src={WhitePhone} alt="white telephone icon" />
          <a href="tel:+31 4988 0992 2883">+31 4988 0992 2883</a>
        </div>
      </div>
    </div>
  )
}

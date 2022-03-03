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
          <img src={WhiteMail} alt="white mail icon" /><span>contact@santanyiholidayrentals.com</span>
        </div>
        <div>
          <img src={WhitePhone} alt="white telephone icon" /><span>+31 4988 0992 2883</span>
        </div>
      </div>
    </div>
  )
}

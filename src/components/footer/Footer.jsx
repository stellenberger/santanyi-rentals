import React from 'react'
import classes from './Footer.module.scss';
import { 
  GrMail
} from 'react-icons/gr';
import { 
  BsFillTelephoneFill
} from 'react-icons/bs';

export default function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div>
          <GrMail/>
          <a href = "mailto: contact@santanyiholidayrentals.com">contact@santanyiholidayrentals.com</a>
        </div>
        <div>
          <BsFillTelephoneFill/>
          <a href="tel:+31 4988 0992 2883">+31 4988 0992 2883</a>
        </div>
      </div>
    </div>
  )
}

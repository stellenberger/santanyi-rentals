import React from 'react'
import classes from './Footer.module.scss';

export default function Footer() {
  const getYear = () => {
    let d = new Date()
    return d.getFullYear()
  }
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <p>&copy; Copyright Santanyi Holiday Rentals {getYear()} | Website designed and authored by <a href="https://www.stephanellenberger.dev" target="_blank">Stephan Ellenberger</a></p>
      </div>
    </div>
  )
}

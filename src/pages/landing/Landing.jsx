import React from 'react'
import classes from './Landing.module.scss';

const Landing = () => {

  return (
    <div className={classes.landingContainer}>
      <div className={classes.scrollMessageContainer}>
        <div className={classes.explore}>Explore Santanyi</div>
        <div className={classes.arrowDown}>
      </div>
      </div>
    </div>
  )
}


export default Landing

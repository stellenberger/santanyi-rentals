import React from 'react'
import classes from './Landing.module.scss';
import { ExploreSantanyi } from '../../components';

const Landing = () => {

  return (
    <div>
      <div className={classes.landingContainer}>
        <div className={classes.scrollMessageContainer}>
          <div className={classes.explore}>Explore Santanyi</div>
          <div className={classes.arrowDown} />
        </div>
      </div>
      <ExploreSantanyi />
    </div>

  )
}


export default Landing

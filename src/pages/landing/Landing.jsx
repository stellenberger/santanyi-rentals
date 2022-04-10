import React from 'react'
import classes from './Landing.module.scss';
import { ExploreSantanyi } from '../../components';

const Landing = () => {
  const smoothScroll = () => {
    document.querySelector('#exploreContent').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  return (
    <div>
      <div className={classes.landingContainer}>
        <div className={classes.scrollMessageContainer}>
          <div className={classes.explore} onClick={smoothScroll}>Explore the South East of Mallorca</div>
          <div className={classes.arrowDown} />
        </div>
      </div>
      <ExploreSantanyi />
    </div>
  )
}


export default Landing

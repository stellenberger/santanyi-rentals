import React from 'react'
import classes from './Landing.module.scss';
import { SeoMetaTags, ExploreSantanyi } from '../../components';

const Landing = ({ setOpen, open }) => {
  const smoothScroll = () => {
    document.querySelector('#exploreContent').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  return (
    <div>
      <div className={classes.landingContainer}>
        <SeoMetaTags 
          title="Santanyi Holiday Rentals"
          description="Rent villas and holiday homes with Santanyi Holiday Rentals and explore the idyllic South East of Mallorca."
          ogTitle="Santanyi Holiday Rentals"
        />
        <div className={classes.scrollMessageContainer}>
          <div className={classes.viewProperties} onClick={() => setOpen(!open)}>View properties</div>
          <div className={classes.explore} onClick={smoothScroll}>Explore the South East of Mallorca</div>
          <div className={classes.arrowDown} />
        </div>
      </div>
      <ExploreSantanyi />
    </div>
  )
}


export default Landing

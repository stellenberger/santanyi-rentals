import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import classes from './Navbar.module.scss'

const Ul = styled.ul`
    @media screen and (max-width: 1000px) {
      display: flex;
      flex-flow: column nowrap;
      z-index: 199;
      text-align: center;
      background-color: rgba(0,0,0,0.8);
      position: fixed;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      padding-top: 10rem;
      margin: auto;
      transition: transform 0.3s ease-in-out;
      li {
        padding-top: 10vh;
        color: white;
      }
    }
  `
const RightNav = ({ changeColor, backgroundColor, backgroundHeroImage, open }) => {
  return (
    <div className={classes.rightnavContainer}>
      <Ul open={open}>
        <Link to='/' onClick={() => changeColor(backgroundHeroImage)}><h1 className={classes.navTitle}>Santanyi Holiday Rentals</h1></Link>
        <div className={classes.rightnavContent}>
          <h2 style={{margin: 0, marginTop: 50}} className={classes.houseTitle}>Our houses</h2>
          <div className={classes.houseNavigation}>
            <li><Link to='/embarcadero' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>Embarcadero</span></Link></li>
            <li><Link to='/sestadors' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>S’Estadors</span></Link></li>
            <li><Link to='/cantiu' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>Can Tiu</span></Link></li>
            <li><Link to='/cansabater' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>Can Sabater</span></Link></li>
          </div>
          <div className={classes.contact}>
            <li><Link to='/' onClick={() => changeColor(backgroundHeroImage)} className={classes.item}>Explore the South East</Link></li>
            <li className={classes.item}>Book</li>
          </div>
        </div>
      </Ul>
    </div>
  )
}

export default RightNav

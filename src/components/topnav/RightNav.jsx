import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import classes from './Navbar.module.scss'

const Ul = styled.ul`
    list-style: none;
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    padding: 0;
    a {
      text-decoration: none;
      color: white;
      font-size: 100%;
    };
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
      margin: 0;
      transition: transform 0.3s ease-in-out;
      li {
        padding-top: 10vh;
        color: white;
      }
    }
  `
const RightNav = ({ changeColor, backgroundColor, backgroundHeroImage, open }) => {
  return (
    <div>
      <Link to='/' onClick={() => changeColor(backgroundHeroImage)}><h1>Santanyi Holiday Rentals</h1></Link>
      <Ul open={open}>
        <li><Link to='/embarcadero' onClick={() => changeColor(backgroundHeroImage)}><span className={classes.item}>Embarcadero</span></Link></li>
        <li><Link to='/sestadors' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>S’Estadors</span></Link></li>
        <li><Link to='/cantiu' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>Can Tiu</span></Link></li>
        <li><Link to='/cansabater' onClick={() => changeColor(backgroundColor)}><span className={classes.item}>Can Sabater</span></Link></li>
      </Ul>
    </div>
  )
}

export default RightNav

import React from 'react'
import classes from './TopNav.module.scss'
import {
  Logo
}  from '../../media/index.jsx'

const TopNav = () => {
  return (
    <div className={classes.TopNavContainer}>
      <div className={classes.TopNavRight}>
        <a href="#nav_item_one">Navigation Item 1</a>
        <a href="#nav_item_two">Navigation Item 2</a>
        <a href="#nav_item_three">Navigation Item 3</a>
        <a href="#nav_item_four">Navigation Item 4</a>
      </div>
    </div>
  )
}

export default TopNav

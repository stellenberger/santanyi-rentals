import classes from './About.module.scss';
import React from 'react'
import {
  Steph
} from '../../media/index.jsx'

export default function About() {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.title}>about</div>
      <div className={classes.contentContainer}>
        This is an example about component
      </div>
    </div>
  )
}

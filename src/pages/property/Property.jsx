import classes from './Property.module.scss';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { ExampleHouse, ExampleHouseBookings } from '../../houses'
import RemarkGfm from 'remark-gfm'

export default function Property() {
  const [house, setHouse] = useState(null)
  useEffect(() => {
    fetch(ExampleHouse).then(res => res.text()).then(text => setHouse(text));
  }, [])

  console.log(ExampleHouseBookings)

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.title}>about</div>
      <div className={classes.contentContainer}>
      <ReactMarkdown children={house} remarkPlugins={[RemarkGfm]}/>
        This is an example about component
      </div>
    </div>
  )
}
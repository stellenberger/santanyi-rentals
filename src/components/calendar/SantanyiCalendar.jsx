import React, { useState, useEffect } from 'react'
import classes from './SantanyiCalendar.module.scss'

export default function SantanyiCalendar() {
  const [precedingDays, setPrecedingDays] = useState([])
  const [currentYear, setCurrentYear] = useState((new Date).getFullYear())
  const [currentMonth, setCurrentMonth] = useState(null)
  const [totalDateRange, setTotalDateRange] = useState([])

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  useEffect(() => {
    const currentDate = new Date();
    setCurrentMonth(currentDate.getMonth())
    buildDates(currentDate.getMonth(), currentDate.getFullYear())
    offsetPrecedingDays(currentDate.getMonth(), currentDate.getFullYear())
  }, [])

  const offsetPrecedingDays = (month, year) => {
    const datesToOffset = (new Date(year, month, 1)).getDay();
    setPrecedingDays([...Array(datesToOffset).keys()])
    console.log([...Array(datesToOffset).keys()])
  } 

  const getMonthName = () => {
    return months[currentMonth]
  }

  const getDateStyling = (date) => {
    // Here we include the logic to search if the date is taken or not
    if (date) {
      // return { backgroundColor: `white` }
    } else {
      // return { backgroundColor: `red` }
    }
  }

  const handleNextYear = () => {
    const newYear = currentYear + 1
    setCurrentYear(newYear)
    setCurrentMonth(0)
    offsetPrecedingDays(0, newYear)
  }

  const handlePreviousYear = () => {
    const newYear = currentYear - 1
    setCurrentYear(newYear)
    setCurrentMonth(11)
    offsetPrecedingDays(11, newYear)
  }

  const nextMonth = () => {
    if (currentMonth == 11) {
      handleNextYear()
    } else {
      const newMonth = currentMonth + 1
      setCurrentMonth(newMonth)
      buildDates(newMonth, 2022)
      offsetPrecedingDays(newMonth, 2022)
    }
  }

  const prevMonth = () => {
    if (currentMonth == 0) {
      handlePreviousYear()
    } else {
      const newMonth = currentMonth - 1
      setCurrentMonth(newMonth)
      buildDates(newMonth, 2022)
      offsetPrecedingDays(newMonth, 2022)
    }
  }

  const buildDates = (month, year) => {
    const totalDays = daysInMonth(month + 1, year)
    setTotalDateRange([...Array(totalDays + 1).keys()].slice(1))
  }

  return (
    <div className={classes.calendarContainer}>
      <div className={classes.month}>
        <ul>
          <li className={classes.prev} onClick={prevMonth}>&#10094;</li>
          <li className={classes.next} onClick={nextMonth}>&#10095;</li>
          <li>{ getMonthName() }<br /><span>{currentYear && currentYear}</span></li>
        </ul>
      </div>

      <ul className={classes.weekdays}>
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
      </ul>

      <ul className={classes.days}>
        { precedingDays.map(day => <li></li>) }
        { totalDateRange && totalDateRange.map(date => <li style={getDateStyling(date)}>{date}</li>)}
      </ul>
    </div>
  )
}

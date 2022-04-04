import React, { useState, useEffect } from 'react'
import classes from './SantanyiCalendar.module.scss'

export default function SantanyiCalendar({ bookings }) {
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

  const [precedingDays, setPrecedingDays] = useState([])
  const [currentYear, setCurrentYear] = useState((new Date).getFullYear())
  const [currentMonth, setCurrentMonth] = useState((new Date).getMonth())
  const [totalDateRange, setTotalDateRange] = useState([])
  
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }

  useEffect(() => {
    const currentDate = new Date();
    buildDates(currentDate.getMonth(), currentDate.getFullYear())
    offsetPrecedingDays(currentDate.getMonth(), currentDate.getFullYear())
  }, [])

  const offsetPrecedingDays = (month, year) => {
    const datesToOffset = (new Date(year, month, 1)).getDay();
    setPrecedingDays([...Array(datesToOffset).keys()])
  } 

  const getMonthName = () => {
    return months[currentMonth]
  }

  const getDateStyling = (date) => {
    // Here we include the logic to search if the date is taken or not
    if (dateTaken(date)) {
      return { backgroundColor: `rgba(201, 76, 76, 0.8)` }
    } else {
      return { backgroundColor: `rgba(255, 255, 255, 0.8)` }
    }
  }

  const dateTaken = (date) => {
    return bookings[currentYear] && bookings[currentYear][months[currentMonth]] && bookings[currentYear][months[currentMonth]].flat().includes(date.toString())
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
        { precedingDays.map((day, index) => <li key={index}></li>) }
        { totalDateRange && totalDateRange.map((date, index) => <li key={index} style={getDateStyling(date)}><span>{date}</span></li>)}
      </ul>
    </div>
  )
}

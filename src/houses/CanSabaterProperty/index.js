import React from 'react'
import { SeoMetaTags } from '../../components';
import { 
  FaUserAlt,
  FaSwimmingPool,
  FaWifi,
  FaPlaneArrival,
  FaUmbrellaBeach,
} from 'react-icons/fa';
import { 
  BiEuro,
  BiBed,
} from 'react-icons/bi';
import { 
  MdSmokeFree,
} from 'react-icons/md';
import { 
  GiThermometerCold,
  GiFlowers,
  GiWashingMachine,
} from 'react-icons/gi';

import { CanSabaterInfo } from '.'

export { default as CanSabaterInfo } from './cansabaterInfo.pdf'
 
export { default as CanSabater1 } from './Can Sabater 1.jpg'
export { default as CanSabater2 } from './Can Sabater 2.jpg'
export { default as CanSabater3 } from './Can Sabater 3.jpg'
export { default as CanSabater4 } from './Can Sabater 4.jpg'
export { default as CanSabater5 } from './Can Sabater 5.jpg'
export { default as CanSabater6 } from './Can Sabater 6.jpg'
export { default as CanSabater7 } from './Can Sabater 7.jpg'
export { default as CanSabater8 } from './Can Sabater 8.jpg'
export { default as CanSabater9 } from './Can Sabater 9.jpg'
export { default as CanSabater10 } from './Can Sabater 10.jpg'
export { default as CanSabater11 } from './Can Sabater 11.jpg'
export { default as CanSabater12 } from './Can Sabater 12.jpg'
export { default as CanSabater13 } from './Can Sabater 13.jpg'
export { default as CanSabater14 } from './Can Sabater 14.jpg'
export { default as CanSabater16 } from './Can Sabater 16.jpg'
export { default as CanSabater17 } from './Can Sabater 17.jpg'
export { default as CanSabater18 } from './Can Sabater 18.jpg'
export { default as CanSabater19 } from './Can Sabater 19.jpg'
export { default as CanSabater20 } from './Can Sabater 20.jpg'
export { default as CanSabater21 } from './Can Sabater 21.jpg'
export { default as CanSabater22 } from './Can Sabater 22.jpg'
export { default as CanSabater23 } from './Can Sabater 23.jpg'

export { default as CanSabaterBookings } from './bookings.json'

export const CanSabaterPrices = {
  "January": 150,
  "February": 150,
  "March": 150,
  "April": 150,
  "May": 180,
  "June": 210,
  "July": 240,
  "August": 240,
  "September": 210,
  "October": 180,
  "November": 150,
  "December": 150,
}

export const CanSabaterPropertyDetails = {
  "tags": <SeoMetaTags 
    title="Santanyi Holiday Rentals - Can Sabater"
    description="Rent Can Sabater with Santanyi Holiday Rentals, and explore Mondrago National Park just around the corner"
    ogTitle="Santanyi Holiday Rentals - Can Sabater"
  />,
  "name": "cansabater",
  "blurb": "5 minutes from Mondrago National Park",
  "email": "antonirigo@gmail.com",
  "floorplan": "unavailable",
  "details": CanSabaterInfo,
  "svgs": {
    "information": [
      [<BiEuro/>, "150 - 240 (seasonal)"],
      [<FaUserAlt/>, "6 People"],
      [<BiBed/>, "3 bedrooms"],
      [<FaPlaneArrival/>, "40 min drive"],
      [<FaUmbrellaBeach/>, "5 min drive"],
      [<MdSmokeFree/>, "No smoking"],
    ],
    "amenities": [
      [<GiThermometerCold/>, "Aircon"],
      [<GiFlowers/>, "Spacious garden with grill"],
      [<FaWifi/>, "Internet"],
      [<GiWashingMachine/>, "Washing machine + dryer"],
      [<FaSwimmingPool/>, "Swimming pool"],
    ]
  }
}
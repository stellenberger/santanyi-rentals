import React from 'react'
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

import { CanTiuInfo } from '.'
import { CanTiuFloorplan } from '.'

export { default as CanTiuInfo } from './cantiuInfo.pdf'
export { default as CanTiuFloorplan } from './cantiu_floorplan.pdf'

export { default as CanTiu1 } from './Can Tiu 1.jpg'
export { default as CanTiu2 } from './Can Tiu 2.jpg'
export { default as CanTiu3 } from './Can Tiu 3.jpg'
export { default as CanTiu4 } from './Can Tiu 4.jpg'
export { default as CanTiu5 } from './Can Tiu 5.jpg'
export { default as CanTiu6 } from './Can Tiu 6.jpg'
export { default as CanTiu7 } from './Can Tiu 7.jpg'
export { default as CanTiu8 } from './Can Tiu 8.jpg'
export { default as CanTiu9 } from './Can Tiu 9.jpg'
export { default as CanTiu10 } from './Can Tiu 10.jpg'
export { default as CanTiu11 } from './Can Tiu 11.jpg'
export { default as CanTiu12 } from './Can Tiu 12.jpg'
export { default as CanTiu13 } from './Can Tiu 13.jpg'
export { default as CanTiu14 } from './Can Tiu 14.jpg'
export { default as CanTiu15 } from './Can Tiu 15.jpg'
export { default as CanTiu16 } from './Can Tiu 16.jpg'
export { default as CanTiu17 } from './Can Tiu 17.jpg'
export { default as CanTiu18 } from './Can Tiu 18.jpg'
export { default as CanTiu19 } from './Can Tiu 19.jpg'
export { default as CanTiu20 } from './Can Tiu 20.jpg'
export { default as CanTiu21 } from './Can Tiu 21.jpg'
export { default as CanTiu22 } from './Can Tiu 22.jpg'

export { default as CanTiuBookings } from './bookings.json'

export const CanTiuPropertyDetails = {
  "name": "cantiu",
  "blurb": "Just two minutes walking from the central square of Santanyi",
  "email": "antonirigo@gmail.com",
  "floorplan": CanTiuFloorplan,
  "details": CanTiuInfo,
  "svgs": {
    "information": [
      [<BiEuro/>, "250 per night"],
      [<FaUserAlt/>, "4 People"],
      [<BiBed/>, "2 bedrooms"],
      [<FaPlaneArrival/>, "40 min drive"],
      [<FaUmbrellaBeach/>, "10 min drive"],
      [<MdSmokeFree/>, "No smoking"],
    ],
    "amenities": [
      [<GiThermometerCold/>, "Aircon + Heating"],
      [<GiFlowers/>, "Garden"],
      [<FaWifi/>, "Internet"],
      [<GiWashingMachine/>, "Washing machine"],
    ]
  }
}
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

import { SestadorsInfo } from '.'
import { SestadorsFloorplan } from '.'

export { default as SestadorsInfo } from './sestadorsInfo.pdf'
export { default as SestadorsFloorplan } from './sestadors_floorplan.pdf'

export { default as SEstadors2 } from './S\'Estadors 2.jpg'
export { default as SEstadors3 } from './S\'Estadors 3.jpg'
export { default as SEstadors4 } from './S\'Estadors 4.jpg'
export { default as SEstadors5 } from './S\'Estadors 5.jpg'
export { default as SEstadors6 } from './S\'Estadors 6.jpg'
export { default as SEstadors7 } from './S\'Estadors 7.jpg'
export { default as SEstadors8 } from './S\'Estadors 8.jpg'
export { default as SEstadors9 } from './S\'Estadors 9.jpg'
export { default as SEstadors10 } from './S\'Estadors 10.jpg'
export { default as SEstadors11 } from './S\'Estadors 11.jpg'
export { default as SEstadors12 } from './S\'Estadors 12.jpg'
export { default as SEstadors13 } from './S\'Estadors 13.jpg'
export { default as SEstadors14 } from './S\'Estadors 14.jpg'
export { default as SEstadors15 } from './S\'Estadors 15.jpg'
export { default as SEstadors16 } from './S\'Estadors 16.jpg'
export { default as SEstadors17 } from './S\'Estadors 17.jpg'
export { default as SEstadors18 } from './S\'Estadors 18.jpg'
export { default as SEstadors19 } from './S\'Estadors 19.jpg'
export { default as SEstadors20 } from './S\'Estadors 20.jpg'
export { default as SEstadors21 } from './S\'Estadors 21.jpg'
export { default as SEstadors22 } from './S\'Estadors 22.jpg'

export { default as SEstadorsBookings } from './bookings.json'

export const SestadorsPrices = {
  "January": 120,
  "February": 120,
  "March": 120,
  "April": 120,
  "May": 120,
  "June": 150,
  "July": 180,
  "August": 180,
  "September": 150,
  "October": 120,
  "November": 120,
  "December": 120,
}

export const SEstadorsPropertyDetails = {
  "name": "sestadors",
  "blurb": "Between the town and the country",
  "email": "antonirigo@gmail.com",
  "floorplan": SestadorsFloorplan,
  "details": SestadorsInfo,
  "svgs": {
    "information": [
      [<BiEuro/>, "120 - 180 (seasonal)"],
      [<FaUserAlt/>, "2 People"],
      [<BiBed/>, "1 bedroom"],
      [<FaPlaneArrival/>, "40 min drive"],
      [<FaUmbrellaBeach/>, "15 min drive"],
      [<MdSmokeFree/>, "No smoking"],
    ],
    "amenities": [
      [<GiThermometerCold/>, "Aircon"],
      [<GiFlowers/>, "Spacious garden"],
      [<FaWifi/>, "Internet"],
      [<GiWashingMachine/>, "Washing machine"],
      [<FaSwimmingPool/>, "Swimming pool"],
    ]
  }
}
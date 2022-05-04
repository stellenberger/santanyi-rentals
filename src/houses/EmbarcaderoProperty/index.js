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
import { EmbarcaderoFloorplan } from '.'
import { 
  AiFillCar,
} from 'react-icons/ai';

export { default as Embarcadero1 } from './Embarcadero 1.jpg'
export { default as Embarcadero2 } from './Embarcadero 2.jpg'
export { default as Embarcadero3 } from './Embarcadero 3.jpg'
export { default as Embarcadero4 } from './Embarcadero 4.jpg'
export { default as Embarcadero5 } from './Embarcadero 5.jpg'
export { default as Embarcadero6 } from './Embarcadero 6.jpg'
export { default as Embarcadero7 } from './Embarcadero 7.jpg'
export { default as Embarcadero8 } from './Embarcadero 8.jpg'
export { default as Embarcadero9 } from './Embarcadero 9.jpg'
export { default as Embarcadero10 } from './Embarcadero 10.jpg'
export { default as Embarcadero11 } from './Embarcadero 11.jpg'
export { default as Embarcadero12 } from './Embarcadero 12.jpg'
export { default as Embarcadero13 } from './Embarcadero 13.jpg'
export { default as Embarcadero14 } from './Embarcadero 14.jpg'
export { default as Embarcadero15 } from './Embarcadero 15.jpg'
export { default as Embarcadero16 } from './Embarcadero 16.jpg'
export { default as Embarcadero17 } from './Embarcadero 17.jpg'
export { default as Embarcadero18 } from './Embarcadero 18.jpg'
export { default as Embarcadero19 } from './Embarcadero 19.jpg'
export { default as Embarcadero20 } from './Embarcadero 20.jpg'
export { default as Embarcadero21 } from './Embarcadero 21.jpg'
export { default as Embarcadero22 } from './Embarcadero 22.jpg'
export { default as Embarcadero23 } from './Embarcadero 23.jpg'
export { default as Embarcadero24 } from './Embarcadero 24.jpg'
export { default as Embarcadero25 } from './Embarcadero 25.jpg'

export { default as EmbarcaderoBookings } from './bookings.json'
export const EmbarcaderoPrices = {
  "January": "N/A",
  "February": "N/A",
  "March": "N/A",
  "April": 300,
  "May": 300,
  "June": 330,
  "July": 330,
  "August": 330,
  "September": 320,
  "October": 300,
  "November": 290,
  "December": "N/A",
}

export { default as EmbarcaderoFloorplan } from './embarcaderoFloorplan.pdf'

export const EmbarcaderoPropertyDetails = {
  "tags": <SeoMetaTags 
    title="Santanyi Holiday Rentals - Embarcadero"
    description="Rent Embarcadero with Santanyi Holiday Rentals, a 30 second walk to the beach of Cala Llombards"
    ogTitle="Santanyi Holiday Rentals - Embarcadero"
  />,
  "name": "embarcadero",
  "blurb": "A stones throw from Cala Llombards beach",
  "email": "lauraellenberger63@gmail.com",
  "floorplan": EmbarcaderoFloorplan,
  "svgs": {
    "information": [
      [<BiEuro/>, "280-330 per night"],
      [<FaUserAlt/>, "8 People"],
      [<BiBed/>, "4 bedrooms"],
      [<FaPlaneArrival/>, "40 min drive"],
      [<FaUmbrellaBeach/>, "30 second walk"],
      [<MdSmokeFree/>, "No smoking"],
    ],
    "amenities": [
      [<GiFlowers/>, "Spacious garden"],
      [<FaWifi/>, "Internet"],
      [<GiWashingMachine/>, "Washing machine"],
      [<AiFillCar/>, "Off street parking"],
    ]
  }
}
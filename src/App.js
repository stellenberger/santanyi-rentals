import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import classes from './App.module.scss';
import { 
  TopNavigation,
  Footer,
} from './components'
import { 
  Landing, 
  Property, 
} from './pages'
import { 
  CalaLlombards,
} from './media'
import { 
  PropertyBundles
 } from './houses';

import ReactGa from 'react-ga'

function App() {
  const [background, setBackground] = useState(null)
  const backgroundHeroImage = {
    backgroundImage: `url(${CalaLlombards})`,
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    height: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  const backgroundColor = {
    backgroundColor: '#F3F3F2'
  }

  const styling = () => {
    if (window.location.pathname === '/') {
      return (
        setBackground(
          backgroundHeroImage
        )
      ) 
    } else {
      return (
        setBackground(
          backgroundColor
        )
      )
    }
  }

  const changeColor = (color) => {
    setBackground(color)
  }

  useEffect(() => {
    styling()
    ReactGa.initialize('PUT YOUR GOOGLE ANALYTICS CODE HERE')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className={classes.App} style={background}>
      <BrowserRouter>
        <TopNavigation changeColor={changeColor} backgroundColor={backgroundColor} backgroundHeroImage={backgroundHeroImage} />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/:id' element={<Property property={PropertyBundles.filter(p => p.id == window.location.pathname.split('/')[1])[0]} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

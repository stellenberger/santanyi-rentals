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

import ReactGa from 'react-ga4'

function App() {
  const [background, setBackground] = useState(null)
  const [open, setOpen] = useState(false)
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
    ReactGa.initialize('G-WYVJFQDXY4')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className={classes.App} style={background}>
      <BrowserRouter>
        <TopNavigation changeColor={changeColor} backgroundColor={backgroundColor} backgroundHeroImage={backgroundHeroImage} setOpen={setOpen} open={open} />
        <Routes>
          <Route exact path='/' element={<Landing setOpen={setOpen} open={open}/>} />
          <Route exact path='/:id' element={<Property changeColor={changeColor} backgroundHeroImage={backgroundHeroImage} property={PropertyBundles.filter(p => p.id == window.location.pathname.split('/')[1])[0]} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

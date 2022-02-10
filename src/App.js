import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import classes from './App.module.scss';
import { 
  TopNavigation, 
  Landing, 
  About, 
} from './components'

import { 
  ReactLogo
} from './media'

import ReactGa from 'react-ga'

function App() {
  const [background, setBackground] = useState(null)
  const backgroundHeroImage = {
    backgroundImage: `url(${ReactLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  const backgroundColor = {
    backgroundColor: '#080935'
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
  useEffect(() => {
    styling()
    ReactGa.initialize('PUT YOUR GOOGLE ANALYTICS CODE HERE')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  const changeColor = (color) => {
    setBackground(color)
  }
  return (
    <div className={classes.App} style={background}>
      <BrowserRouter>
      <TopNavigation changeColor={changeColor} backgroundHeroImage={backgroundHeroImage} />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

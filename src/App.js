import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import classes from './App.module.scss';
import { 
  TopNavigation,
  Footer,
} from './components'
import { 
  Landing, 
  About, 
} from './pages'
import { 
  CalaLlombards,
} from './media'

import ReactGa from 'react-ga'

function App() {
  const [background, setBackground] = useState(null)
  const backgroundHeroImage = {
    backgroundImage: `url(${CalaLlombards})`,
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
      <TopNavigation />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

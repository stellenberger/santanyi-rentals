import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
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

import ReactGa from 'react-ga'

function App() {
  const [background, setBackground] = useState(null)
  const backgroundHeroImage = {
    backgroundImage: `url(${CalaLlombards})`,
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    height: '100%',
    backgroundSize: 'cover',
  }

  const backgroundColor = {
    backgroundColor: '#080935'
  }

  const styling = () => setBackground(backgroundHeroImage)

  useEffect(() => {
    styling()
    ReactGa.initialize('PUT YOUR GOOGLE ANALYTICS CODE HERE')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className={classes.App} style={background}>
      <BrowserRouter>
        <TopNavigation />
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route exact path='/:id' element={<Property/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

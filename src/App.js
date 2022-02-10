import React, { useEffect } from 'react';
import classes from './App.module.scss';
import { 
  TopNav, 
  Landing, 
  About, 
} from './components'
import ReactGa from 'react-ga'

function App() {
  useEffect(() => {
    ReactGa.initialize('PUT YOUR GOOGLE ANALYTICS CODE HERE')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className={classes.App}>
      <TopNav />
      <Landing />
      <About />
    </div>
  );
}

export default App;

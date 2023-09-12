import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action,orginals,comedyMovies,romanceMovies} from './urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginals} title='Netflix Orginals'/>
        <RowPost url={action} title='Action Movies' isSmall />
        <RowPost url={comedyMovies} title='Comedy Movies' isSmall />
        <RowPost url={romanceMovies} title='Romantic Movies' isSmall />
    </div>
  );
}

export default App;

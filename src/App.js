import React from 'react'
import Home from "./Pages/Home"
import DataProvider from './Context/DataContext';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;

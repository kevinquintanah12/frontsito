import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryList from './CountryList';
import CreateCountry from './CreateCountry';
import Header from './Header';
import Login from './Login';

class App extends Component {
 

  render() {
    return (
      <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<CountryList/>} />
          <Route
            path="/create"
            element={<CreateCountry/>}
          />
          
          <Route path="/login" element={<Login/>} />

        </Routes>
      </div>
    </div>
    )
    
    
  }
}

export default App;


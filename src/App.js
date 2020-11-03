import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Landing from './Component/Landing/Landing';
import Documents from './Container/Documents/Documents';
import Parking from './Container/Parking/Parking';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact={true} component={Landing} />
          <Route path='/documents' component={Documents} />
          <Route path='/parking' component={Parking} />
        </Switch>
        <Footer />
        
      </div>
    )
  }
}

export default App;

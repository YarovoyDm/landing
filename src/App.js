import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Landing from './Component/Landing/Landing';
import Documents from './Container/Documents/Documents';
import Parking from './Container/Parking/Parking';
import Contacts from './Container/Contacts/Contacts';
import TermsOfPurchase from './Container/TermsOfPurchase/TermsOfPurchase';
import ConstructionProgress from './Container/ConstructionProgress/ConstructionProgress';
import News from './Container/News/News';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';
import NewsPage from './Container/NewsPage/NewsPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact={true} component={Landing} />
          <Route path='/documents' component={Documents} />
          <Route path='/parking' component={Parking} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/terms-of-purchase' component={TermsOfPurchase} />
          <Route path='/construction-progress' component={ConstructionProgress}/>
          <Route path='/news/:id' component={NewsPage} />
          <Route path='/news' component={News} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;

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
import Infrastructure from './Container/Infrastructure/Infrastructure';
import AboutDeveloper from './Container/AboutDeveloper/AboutDeveloper';
import CommercialProperty from './Container/CommercialProperty/CommercialProperty';
import AboutComplex from './Container/AboutComplex/AboutComplex';
import GalleryPage from './Container/Gallery/Gallery';
import House from './Container/House/House';
import FloorPlan from './Container/FloorPlan/FloorPlan';
import ConstructionTechnology from './Container/ConstructionTechnology/ConstructionTechnology';
import Apartament from './Container/Apartament/Apartament';
import NewLanding from './Container/NewLanding/NewLanding';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact={true} component={NewLanding} />
          <Route path='/documents' component={Documents} />
          <Route path='/parking' component={Parking} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/terms-of-purchase' component={TermsOfPurchase} />
          <Route path='/construction-progress' component={ConstructionProgress}/>
          <Route path='/news/:id' component={NewsPage} />
          <Route path='/news' component={News} />
          <Route path='/infrastructure' component={Infrastructure} />
          <Route path='/about-developer' component={AboutDeveloper} />
          <Route path='/commercial-property/:id' component={Apartament} />
          <Route path='/commercial-property' component={CommercialProperty} />
          <Route path='/about-the-complex' component={AboutComplex} />
          <Route path='/gallery' component={GalleryPage} />
          <Route path='/house/floor-plan' component={FloorPlan} />
          <Route path='/house' component={House} />
          <Route path='/construction-technology' component={ConstructionTechnology} />
          <Route path='/layot/:id' component={Apartament} />
          <Route path='/layot' component={CommercialProperty} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;

import React from 'react'
import Footer from './pages/layout/Footer'
import Header from './pages/layout/Header'
import Preloader from './pages/layout/Preloader'
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import TermsConditions from './pages/TermsConditions'
import DisclaimerPolicy from './pages/DisclaimerPolicy'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/in' element={<Home />} />
            <Route path='/uk' element={<Home />} />
            <Route path='/hk' element={<Home />} />
            <Route path='/us' element={<Home />} />
            <Route path='/who-we-are' element={<About />} />
            <Route path='/how-it-works' element={<Home />} />
            <Route path='/features' element={<Home />} />
            <Route path='/terms-and-conditions' element={<TermsConditions />} />
            <Route path='/disclaimer-policy' element={<DisclaimerPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App

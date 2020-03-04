import React from 'react'
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from '../containers/pages/LandingPage'
import Pricing from '../containers/pages/Pricing'
import GalleryPage from '../containers/pages/GalleryPage'
import Services from '../containers/pages/Services'
import MainLayout from '../components/MainLayout/MainLayout'

const App = props => {
  return(
    <BrowserRouter>
      <div>
          <MainLayout>
            <Route exact path='/' render ={() => (<LandingPage/>)} />
            <Route exact path='/pricing' render ={() => (<Pricing/>)} />
            <Route exact path='/gallery' render ={() => (<GalleryPage/>)} />
            <Route exact path='/services' render ={() => (<Services/>)} />
          </MainLayout>
      </div>
    </BrowserRouter>
  )
}

export default App;

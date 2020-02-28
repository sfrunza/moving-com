import React from "react"
import NavigationBar  from '../NavigationBar/NavigationBar';
import Footer from "../Footer/Footer"

class MainLayout extends React.Component{
  render() {
      return(
         <div>
            <NavigationBar />
              <div className="appLayout">
                { this.props.children }
              </div>
            <Footer />
         </div>
      );
  }
}

export default MainLayout

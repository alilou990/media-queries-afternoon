import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import 'reset-css'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <Navbar />
        <div className='first-page-text'>
          <h1 className='tagline-one'>Welcome To Our Studio!</h1>
          <h1 className='tageline-two'>IT'S NICE TO MEET YOU</h1>
          <button className='tell-me-more-btn'>Tell Me More</button>
        </div>
      </div>
    )
  }
}

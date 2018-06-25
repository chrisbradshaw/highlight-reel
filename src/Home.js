import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import NewMovies from './components/NewMovies';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <NewMovies />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

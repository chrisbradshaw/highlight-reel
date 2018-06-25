import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import NewMovies from './components/NewMovies';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Form />
        <NewMovies />
      </div>
    );
  }
}

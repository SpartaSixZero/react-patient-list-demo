import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PatientCardList from './components/patient_card_list';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: [
        {
          fullName: 'Billy Bob',
          roomBed: '102 A',
          fin: '123456'
        },
        {
          fullName: 'Leonardo Da Vinci',
          roomBed: '103 B',
          fin: '4433322'
        },
        {
          fullName: 'Don King',
          roomBed: '104 A',
          fin: '0923669'
        }]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CCTA</h1>
        </header>
        <PatientCardList patients={this.state.patients}/>
      </div>
    );
  }
}

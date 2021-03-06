import React, { Component } from 'react';

import Flightboard from '../../components/flightboard/Flightboard';
import Navbar from '../../components/flightboard/Navbar';

class FlightboardTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  handleFilter = (filterValue) => {
    this.setState({
      filter: filterValue
    });
  }

  render () {
    return (
      <div id="page-wrap">
        <Navbar filter={this.handleFilter}/>
        <Flightboard filter={this.state.filter}/>
      </div>
    )
  }
}

export default FlightboardTemplate;

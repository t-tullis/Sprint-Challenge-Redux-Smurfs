import React, { Component } from 'react';

import { connect } from 'react-redux';
import {addSmurf} from '../actions';

class AddSmurf extends Component {
    state = {
      name: '',
      age: '',
      height: ''
    };

  handleAddSmurf = (e) =>{
      e.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({name:"", age: "", height: ""})
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({ 
        [e.target.name]: value
   });
  };

  render() {
    return (
      <div className="smurf-form">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={this.handleAddSmurf} type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}


export default connect(
    null,
     { addSmurf }
  )(AddSmurf);
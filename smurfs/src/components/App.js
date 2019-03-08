import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getData} from '../actions';
import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf />
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  console.log(state)
  return {
    loadingSmurfs: state.smurfReducer.loadingSmurfs,
    smurfs: state.smurfReducer.smurfs,
    error: state.smurfReducer.error
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(App)

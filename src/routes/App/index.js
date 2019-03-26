import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions/appActions';

//also export the unwrapped class by itself for testing
export class App extends Component {
	render() {
		return (
	   <div>
	     <h1>{this.props.test != undefined ? this.props.test : null}</h1>
	   </div>
		);
	}
}

function mapStateToProps(state) {
	console.log('Store: ', state);
	return {
		app: state.app
	};
}

export default connect(mapStateToProps, actions)(App);
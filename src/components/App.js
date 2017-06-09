import React, { Component }from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

export default class App extends Component {
	constructor(){
		super()

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
		this.handleFilterChange = this.handleFilterChange.bind(this)
	}

	componentWillMount() {
    	this.fetchFilters();
  	}

	fetchFilters = () => {
    	fetch('/api/fruit_types')
      	.then(response => response.json())
      	.then(filters => this.setState({ filters }));
  	}

  	handleFilterChange = event => {
    	console.log('new filter: ', event.target.value);
    	this.setState({ selectedFilter: event.target.value });
  	}

	render(){

		return(
			<div>
				<FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} handleFilterChange={this.handleFilterChange}/> 
				</div>
			)
	}


}

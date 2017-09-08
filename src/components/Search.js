import React, { Component } from 'react';
import config from '../config'
import Autosuggest from 'react-autosuggest';
import {
  Link
} from 'react-router-dom'

import './Components.css'

// Teach Autosuggest how to calculate suggestions for any given input value. 
const getSuggestions = function(value, callback) {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	
	let self = this
	fetch(config.apiUrl+'/destination')  
	  .then(function(response) {
	    response.json().then(function(json) {
	      	let filtered = json.filter(item =>
				item.name.toLowerCase().slice(0, inputLength) === inputValue
		 	)
		 	callback(filtered)
	    })
	})
};
 
// When suggestion is clicked, Autosuggest needs to populate the input 
// based on the clicked suggestion. Teach Autosuggest how to calculate the 
// input value for every given suggestion. 
const getSuggestionValue = suggestion => suggestion.name;
 
// Use your imagination to render suggestions. 
const renderSuggestion = suggestion => (
  <div >
    {suggestion.name}
  </div>
);
 
export default class Search extends React.Component {
  constructor() {
    super();
 
    // Autosuggest is a controlled component. 
    // This means that you need to provide an input value 
    // and an onChange handler that updates this value (see below). 
    // Suggestions also need to be provided to the Autosuggest, 
    // and they are initially empty because the Autosuggest is closed. 
    this.state = {
      value: '',
      suggestions: [],
      selected: null
    };
  }
  
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionSelected = (event, {suggestion}) => {
  	this.setState({
      selected: suggestion
    });
  };

  // Autosuggest will call this function every time you need to update suggestions. 
  // You already implemented this logic above, so just use it. 
  onSuggestionsFetchRequested = ({ value }) => {
  	let self = this
  	getSuggestions(value, function(suggestions){
  		self.setState({
	      suggestions: suggestions
	    });
  	})
  };
 	
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

	getSearchLink = () => {
		var slug = null
		if(this.state.selected) {
			slug = this.state.selected.slug
		}

		if(this.state.suggestions && this.state.suggestions.length) {
			 slug = this.state.suggestions[0].slug
		} 

		return slug ? '/d/'+slug : '/d/'+this.state.value 
	}
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input. 
    const inputProps = {
      placeholder: 'Donde querés viajar',
      value,
      onChange: this.onChange
    };

    // Finally, render it! 
    return (
    	<div className="main-search-input">
			<div className="main-search-input-item">
				<Autosuggest
			        suggestions={suggestions}
			        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
			        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
			        onSuggestionSelected={this.onSuggestionSelected}
			        getSuggestionValue={getSuggestionValue}
			        renderSuggestion={renderSuggestion}
			        inputProps={inputProps}
			      />
			</div>
			<Link 
				to={ this.getSearchLink() } 
				className="button" 
				style={ {paddingLeft: '50px', paddingRight: '50px', } }>
				Search
			</Link>
		</div>
    );
  }
}

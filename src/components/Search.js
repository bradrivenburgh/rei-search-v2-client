import React from 'react';
import { Context } from '../Context'
import { cities } from '../mockData';
import Autosuggest from 'react-autosuggest';
import './Search.css';

function getSuggestions(value) {
  const trimmedInputValue = value.trim().toLowerCase();

  return cities.filter(city => {
    const preppedValue = city.city.trim().toLowerCase();
    return preppedValue.includes(trimmedInputValue);
  });
}

function getSuggestionValue(suggestion) {
  return suggestion.city;
}

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.city}</span>
  );
}

class Search extends React.Component {
  constructor() {
    super();

    this.autosuggest = React.createRef();

    this.state = {
      value: '',
      suggestions: [],

    };
  }
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  static contextType = Context;

  onSubmit = (e) => {
    e.preventDefault();
    // Only search if another search is not running
    if (!this.context.isLoading) {
      this.context.handleSearch(this.state.value);
      // Remove focus from input so software keyboard
      // on mobile will close
      this.autosuggest.current.input.blur()  
    }
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter a location ",
      value,
      tabIndex: "1",
      title: 'search',
      onChange: this.onChange
    };


    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <Autosuggest
          ref={this.autosuggest}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </form>
    );
  }
}
            
export default Search;
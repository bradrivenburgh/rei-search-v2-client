import React from 'react';
import { Context } from '../Context'
import { cities } from '../mockData';
import Autosuggest from 'react-autosuggest';
import './Search.css';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp('^' + escapedValue, 'i');

  return cities.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
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
  static contextType = Context;
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
 
  onSubmit = (e) => {
    e.preventDefault();
    this.context.handleAPICall();
    // Used to set defaultTab to true for an instant;
    // triggers HUD event
    this.context.setDefaultTab(true)
    setTimeout(() => {
      this.context.setDefaultTab(false)
    }, 1);
    this.autosuggest.current.input.blur()  
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type a city name",
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
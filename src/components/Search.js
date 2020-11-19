import React from 'react';
import Autosuggest from 'react-autosuggest';
import './Search.css';

const cities = [
  {
    name: 'Philadelphia, PA',
  },
  {
    name: 'Moorestown, NJ',
  },
  {
    name: 'Langhorne, PA',
  },
  {
    name: 'Cinnaminson, NJ',
  },
  {
    name: 'Elm',
  },
  {
    name: 'Go',
  },
  {
    name: 'Haskell',
  },
  {
    name: 'Java',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'Perl',
  },
  {
    name: 'PHP',
  },
  {
    name: 'Python',
  },
  {
    name: 'Ruby',
  },
  {
    name: 'Scala',
  }
];

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

    this.state = {
      value: '',
      suggestions: []
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

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        shouldRenderSuggestions={shouldRenderSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default Search;
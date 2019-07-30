import React, { Component } from 'react';
import { Search, Snippet } from '@asl/components';

class SearchPanel extends Component {
  render() {
    const searchableModels = this.props.searchableModels;
    const searchType = this.props.searchType || searchableModels[0];

    return (
      <div className="search-panel">
        <ul className="search-type">
          { searchableModels.map(model => (
            <li key={model}>
              <a href={`/search/${model}`} className={searchType === model ? 'active' : ''}>
                <Snippet>{`searchPanel.${model}.label`}</Snippet>
              </a>
            </li>
          )) }
        </ul>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h3>Search {searchType}</h3>
            <Search action={this.props.action} name="filter-*" />
          </div>
        </div>
      </div>
    );
  }
}

SearchPanel.defaultProps = {
  searchableModels: ['establishments', 'profiles', 'projects'],
  action: ''
};

export default SearchPanel;

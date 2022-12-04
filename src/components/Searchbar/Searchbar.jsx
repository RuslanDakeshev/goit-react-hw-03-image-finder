import { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {

    state = {
        query: '',
        page: 1
    }

    searchQueryChange = e => {
        this.setState({query: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault()

        const { query } = this.state;
        const { onSubmit } = this.props;

        if (query.trim() === '') {
            alert('Please enter a search value');
            return
        }

        onSubmit(query)
        
    }

    render() {
        const { query } = this.state
        
        return (
            <header class="searchbar">
  <form class="form" onSubmit = {this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

                    <input
                        onChange={this.searchQueryChange}
            value={query}
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }

}

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };
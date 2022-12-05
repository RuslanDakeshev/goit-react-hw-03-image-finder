import { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {

    state = {
        query: ''
        
    }

    searchQueryChange = e => {
        this.setState({query: e.target.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault()

        const { query } = this.state;
        // const { onSubmit } = this.props;

        if (query.trim() === '') {
            alert('Please enter a search value');
            return
        }

        this.props.showPictures(query);
        this.setState({query: ''})

        // onSubmit(query)
        
    }

    render() {
        
        
        return (
            <header>
  <form onSubmit = {this.handleSubmit}>
    <button type="submit">
      <span >Search</span>
    </button>

                    <input
                        onChange={this.searchQueryChange}
            value={this.state.query}
      
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }

}

SearchBar.propTypes = { showPictures: PropTypes.func.isRequired };
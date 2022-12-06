import { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchForm, Input, ButtonSubmit } from './Searchbar.styled';
import { toast } from 'react-toastify';

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
            toast.error('Please enter a search value');
            return
        }

        this.props.showPictures(query);
        this.setState({query: ''})

        // onSubmit(query)
        
    }

    render() {
        
        
        return (
            <Header>
  <SearchForm onSubmit = {this.handleSubmit}>
    <ButtonSubmit type="submit">
      <span >Search</span>
    </ButtonSubmit>

                    <Input
                        onChange={this.searchQueryChange}
            value={this.state.query}
      
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</Header>
        )
    }

}

SearchBar.propTypes = { showPictures: PropTypes.func.isRequired };
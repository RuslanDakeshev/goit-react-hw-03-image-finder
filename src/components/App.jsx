import React from 'react';
import { fetchPictures } from 'services/picturesApi';
import { picturesMapper } from 'utils/mapper';
import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null
  };

  componentDidUpdate(_, prevState) {
    const { isShown } = this.state
    if (isShown && isShown !== prevState.isShown) {
      this.getPictures()
    }
}

  getPictures = () => {
    const { page } = this.state
    this.setState({isLoading:true})
    fetchPictures(page).then(({data:{totalHits}}) => {
      this.setState(prevState =>({
        images: [...prevState.images,...picturesMapper(totalHits)]
      }))
    }).catch(error => {
      this.setState({error: error.message})
    }).finally(()=> this.setState({isLoading: false}))
  }

  openModal = data => {
    this.setState({ images: data })
  };

  closeModal = () => {
    this.setState({ images: null})
  }

 


}

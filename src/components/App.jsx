import React from 'react';
import { fetchPictures } from 'services/picturesApi';
import { picturesMapper } from 'utils/mapper';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
 

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null,
    isShown: false,
    currentImage: null
  };

  componentDidUpdate(_, prevState) {
    const { isShown, page } = this.state
    if ((isShown && isShown !== prevState.isShown) || (isShown && page !== prevState.page)) {
      this.getPictures()
    }
     if (!isShown && isShown !== prevState.isShown) {
       this.setState({ images: [], page: 1 })
    }
}

  getPictures = () => {
    const { page } = this.state
    this.setState({isLoading:true})
    fetchPictures(page).then(({data:{totalHits}}) => {
      this.setState(prevState =>({
        images: [...prevState.images, ...picturesMapper(totalHits)],
        error: ''
      }))
    }).catch(error => {
      this.setState({error: error.message, isShown:false})
    }).finally(()=> this.setState({isLoading: false}))
  }

  openModal = data => {
    this.setState({ currentImage: data })
  };

  closeModal = () => {
    this.setState({ currentImage: null})
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render() {
    const {images, currentImage,isLoading,error,Button} = this.state
    return (
      <>
        <ImageGallery images={images} />
        {currentImage && <Modal image={currentImage} closeModal={ this.closeModal}/>}
        {!isLoading && !error && (<Button text='Load more' clickHandler={this.loadMore} />)}
        {isLoading && <Loader />}
        </>
   )
 }


}

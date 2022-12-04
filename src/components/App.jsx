import React from 'react';
import { fetchPictures } from 'services/picturesApi';
import { picturesMapper } from 'utils/mapper';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import {handleSubmit} from './Searchbar'

 
export class App extends React.Component {
  state = {
    query: '',
    searchWord: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null,
    isShown: false,
    currentImage: null,
    totalNumberOfPages: 0,
    modalShown: false,
  };

  componentDidUpdate(_, prevState) {
    const { isShown, page, totalNumberOfPages } = this.state
    if ((isShown && isShown !== prevState.isShown) || (isShown && page !== prevState.page)) {
      this.getPictures()
    }
    //  if (!isShown && isShown !== prevState.isShown) {
    //    this.setState({ totalNumberOfPages: 1 })
    // }

    if (page === totalNumberOfPages) {
       this.setState({ totalNumberOfPages: 1 })
    }
}

  getPictures = () => {
    const { page, searchWord } = this.state
    this.setState({ isLoading: true });

    fetchPictures(page,searchWord).then(({data:{totalHits}}) => {
      this.setState(prevState =>({
        images: [...prevState.images, ...picturesMapper(totalHits)],
        error: ''
      }))
    }).catch(error => {
      this.setState({error: error.message, isShown:false})
    }).finally(()=> this.setState({isLoading: false}))
  }

  showPictures = () => {
    this.setState(prevState => ({
      searchDone: !prevState.searchDone,
      pictures: [],
      searchWord: prevState.query,
      query: '',
      page: 1,
    }));
  };

  openModal = data => {
    this.setState({ currentImage: data, modalShown:true})
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
    const {images, query, page, totalNumberOfPages, currentImage,isLoading,error,Button} = this.state
    return (
      <>
        <SearchBar showPictures = {this.showPictures} query = {query} />
        <ImageGallery images={images} openModal={this.openModal} query={query }/>
        {currentImage && <Modal image={currentImage} closeModal={ this.closeModal}/>}
        {!isLoading && !error && (<Button text='Load more' clickHandler={this.loadMore} />)}
        {isLoading && <Loader />}
        <Modal query = {query} largeImageUrl = {currentImage} closeModal = {this.closeModal}/>
        </>
   )
 }


}

import { Component } from 'react';
import { fetchPictures, imagesOfPages } from 'services/picturesApi';
import { picturesMapper } from 'utils/mapper';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalNumberOfPages: 0,
    isLoading: false,
    error: null,
    currentImage: null,
    modalShown: false,
    searchDone: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, totalNumberOfPages, searchDone } = this.state;
    if (searchDone !== prevState.searchDone || page !== prevState.page) {
      this.getPictures();
      
    }
    //  if (!isShown && isShown !== prevState.isShown) {
    //    this.setState({ totalNumberOfPages: 1 })
    // }

    if (page === totalNumberOfPages) {
      this.setState({ totalNumberOfPages: 0 });
    }
  }

  // getPictures = () => {
  //   const { page, searchWord } = this.state;
  //   this.setState({ isLoading: true });

  //   fetchPictures(page, searchWord)
  //     .then(({ data: { totalHits } }) => {
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...picturesMapper(totalHits)],
  //         error: '',
  //       }));
  //     })
  //     .catch(error => {
  //       this.setState({ error: error.message, isShown: false });
  //     })
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  getPictures = async () => {
    const {query, page} = this.state;
    this.setState({ isLoading: true });

    const arrayOfImages = await fetchPictures(page, query)
    const filteredArray = picturesMapper(arrayOfImages);
    if (filteredArray.length === 0) {
      this.setState({ isLoading: false })
      return toast.error('Oops! Something went wrong!')
    }

    this.setState({ totalNumberOfPages: imagesOfPages });

    this.setState(prevState => ({
      images: [...prevState.images, ...filteredArray],
      error: '',
    }));
    this.setState({ isLoading: false });


      
  };

  handleInputChange(newQuery) {
    const searchQuery = newQuery.trim();
    this.setState({ query: searchQuery });
  }

  showPictures = query => {
    this.setState(prevState => ({
      searchDone: !prevState.searchDone,
      images: [],
      searchWord: prevState.query,
      query,
      page: 1,
    }));
  };

  openModal = data => {
    this.setState({ currentImage: data, modalShown: true });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  

  render() {
    const { images, query, isLoading, page, totalNumberOfPages, currentImage } =
      this.state;
    return (
      <>
        <SearchBar showPictures={this.showPictures} query={query} handleInputChange = {this.handleInputChange} />
        {images.length > 0 && (<ImageGallery
          images={images}
          openModal={this.openModal}
          query={query}
        />
        )}
        {isLoading && <Loader/>}
        {/* {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )} */}
        {/* {!isLoading && !error && (<Button text='Load more' clickHandler={this.loadMore} />)} */}
        {images.length > 0 && !isLoading && page < totalNumberOfPages && (
          <Button text="Load more" loadMore={this.loadMore} />
        )}
        
        {currentImage && (
          <Modal
            query={query}
            largeImageUrl={currentImage}
            closeModal={this.closeModal}
          />)}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

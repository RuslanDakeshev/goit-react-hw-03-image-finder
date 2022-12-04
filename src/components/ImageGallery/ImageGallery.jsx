import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images,query, openModal }) => {
    return <ul>
        {images.map(({ id, webformatURL, largeImageURL }) => {
        return <li key={id}>
            <ImageGalleryItem images = {images}/>
            
            <button type="button" onClick={() => openModal(largeImageURL)}>
                Show image
            </button>
      </li>
  })}</ul>;
};

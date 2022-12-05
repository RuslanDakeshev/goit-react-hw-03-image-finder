import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';


// export const ImageGallery = ({ images,query, openModal }) => {
//     return <ul>
//         {images.map(({ id, webformatURL, largeImageURL }) => {
//         return <li key={id}>
//             <ImageGalleryItem images = {images}/>
            
//             <button type="button" onClick={() => openModal(largeImageURL)}>
//                 Show image
//             </button>
//       </li>
//   })}</ul>;
// };

export const ImageGallery = ({ images,query, openModal }) => {
    return <Gallery>
        {images.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem
                key={id}
                imageURL={webformatURL}
          openModal={openModal}
          largeImageURL={largeImageURL}
          query={query}/>
            
            // {/* <button type="button" onClick={() => openModal(largeImageURL)}>
            //     Show image
            // </button> */}
      
  })}</Gallery>;
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

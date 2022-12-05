import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  query,
  imageURL,
  largeImageURL,
  openModal,
}) => (
    <GalleryItem>
        <Image src={imageURL} alt={query} onClick={() => { openModal(largeImageURL) }} />
        </GalleryItem>
  );


ImageGalleryItem.propTypes = {
  query: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

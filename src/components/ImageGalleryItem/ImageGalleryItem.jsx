export const ImageGalleryItem = ({ id, webformatURL, largeImageURL}) => {
    return (
        <li key={id}>
  <img src={webformatURL} alt={largeImageURL} />
</li>
    )
}
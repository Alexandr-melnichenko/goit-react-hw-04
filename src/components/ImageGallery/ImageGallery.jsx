import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <ul className={s.galleryList}>
      {images.map(image => (
        <li className={s.liItem} key={image.id}>
          <ImageCard image={image} handleImageClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

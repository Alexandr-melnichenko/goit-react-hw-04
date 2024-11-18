import s from './ImageCard.module.css';

const ImageCard = ({ image, handleImageClick }) => {
  return (
    <div>
      <img
        className={s.imageCard}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleImageClick(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;

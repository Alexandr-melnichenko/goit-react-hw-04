import ReactModal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({ onRequestClose, isOpen, imageUrl }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={s.modalContent}
        overlayClassName={s.overlay}
      >
        <div className={s.imageWrapper}>
          <img src={imageUrl} alt="Large view" className={s.modalImage} />
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;

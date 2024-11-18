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
          <img
            src={imageUrl}
            alt="Large view"
            // style={{ width: '100%', objectFit: 'cover' }}
            className={s.modalImage}
          />
        </div>
        {/* <button onClick={onRequestClose}>Close</button> */}
      </ReactModal>
    </div>
  );
};

export default ImageModal;

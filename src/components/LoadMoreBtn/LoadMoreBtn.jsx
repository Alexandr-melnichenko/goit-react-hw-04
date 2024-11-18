import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ moreBtnClick }) => {
  return (
    <div>
      <button className={s.loadMoreBtn} onClick={moreBtnClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

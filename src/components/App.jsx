import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import { ProgressBar } from 'react-loader-spinner';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import ReactModal from 'react-modal';
import ErrorMessage from './ErrorMessage/ErrorMessage';

ReactModal.setAppElement('#root');

const API_KEY = 'client_id=eW8eLm1JsOKiPjrboVX295kU55DEdoHMcgKhKIxDCDw';
const BASE_URL = 'https://api.unsplash.com/';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnMore, setIsBtnMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  // const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (query === '') return;
    // console.log(React.version);
    async function fetchImages() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}search/photos?page=${pageNumber}&per_page=12&query=${query}&${API_KEY}`
        );
        setImages(prevImages =>
          pageNumber === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
        setIsBtnMore(response.data.results.length > 0);
        // setImageUrl(response.data.results.urls.regular);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, pageNumber]);

  const handleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target.elements.search.value.trim();
    if (!searchQuery) {
      toast('Please fill search input!');
      return;
    }
    setQuery(searchQuery);
    setPageNumber(1);
    setImages([]);
  };

  const handleMoreBtnClick = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  const handleImageClick = url => {
    {
      setImageUrl(url);
      openModal();
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <ProgressBar />}
      {images.length === 0 && query !== '' ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} handleImageClick={handleImageClick} />
      )}
      {/* {setQuery !== '' && (
        <ImageGallery images={images} handleImageClick={handleImageClick} />
      )} */}
      {isBtnMore && <LoadMoreBtn moreBtnClick={handleMoreBtnClick} />}
      <Toaster />
      {isOpen && (
        <ImageModal
          onRequestClose={closeModal}
          isOpen={isOpen}
          imageUrl={imageUrl}
        />
      )}
    </div>
  );
}

export default App;

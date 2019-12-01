const REACT_APP_GOOGLE_KEY = 'AIzaSyDUunwT-TLR24mYYp5R9t7rIofOlKc8jbE';

const url = url => {
  return fetch(REACT_APP_GOOGLE_KEY).then(res => res.json());
};

export {url};

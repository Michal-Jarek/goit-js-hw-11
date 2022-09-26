import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPicture = (keyWord, page) => {
  return axios
    .get('?', {
      params: {
        key: '30058964-66debb9f20d9f056f9054d1c1',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 40,
        safesearch: 'true',
        page: page,
        q: keyWord,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.log(error);
      //   return new error();
    });
};
export { fetchPicture };
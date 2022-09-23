import axios from 'axios';

const fetchPicture = (keyWord, page) => {
  return axios
    .get(`https://pixabay.com/api?`, {
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
    .catch(error => console.log(error));
};
export { fetchPicture };

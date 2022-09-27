import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPicture = (keyWord, page, perPage) => {
  return axios
    .get('?', {
      params: {
        key: '30058964-66debb9f20d9f056f9054d1c1',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
        safesearch: 'true',
        page: page,
        q: keyWord,
      },
    })
    .then(response => {
       console.log(response.data);
      return response.data;
     
    })
    .catch(error => {
      console.log(error);
    });
};


export { fetchPicture };

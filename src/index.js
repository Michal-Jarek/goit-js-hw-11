import axios from 'axios';

const gallery = document.querySelector('.gallery');
let page = 1;

const getPicture = (keyWord, page) => {
  return axios
    .get(`https://pixabay.com/api?`, {
      params: {
        key: '30058964-66debb9f20d9f056f9054d1c1',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 40,
        page: page,
        q: keyWord,
      },
    })
    .then(response => response.data.hits)
    .catch(error => console.log(error));
};

const gallerySet = data => {
  gallery.innerHTML = '';
  console.log(data);
  const markup = data 
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>
`;
      }
    )
    .join('');
  return gallery.insertAdjacentHTML('beforeend', markup);
};

const cuzamenDoKupy = async () => {
  let zmienna = await getPicture('boobs', 1);
  console.log(zmienna);
  gallerySet(zmienna);
};
cuzamenDoKupy();

// console.log(getPicture('boobs', 1));
// gallerySet(getPicture('boobs',1))

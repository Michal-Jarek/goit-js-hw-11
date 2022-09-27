import { gallerySet } from './js/gallerySet';
import { fetchPicture } from './js/fetchPicture';
import Notiflix from 'notiflix';
import { toInteger } from 'lodash';

function toggleBtn() {
  loadMoreBtn.classList.toggle('is-hidden');
}

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const searchedTxt = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');
let page;
let objectGallery;
const perPage = 40;
let maxPages;
console.log(maxPages);

searchForm.lastElementChild.addEventListener('click', async e => {
  if (!loadMoreBtn.classList.contains('is-hidden')) toggleBtn();
  gallery.innerHTML = '';
  e.preventDefault();
  page = 1;
  objectGallery = await fetchPicture(searchedTxt.value, page, perPage);
  console.log(objectGallery);
  if (objectGallery.hits.length === 0)
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  Notiflix.Notify.success(
    `"Hooray! We found ${objectGallery.totalHits} images."`
  );
  maxPages = toInteger(objectGallery.totalHits / perPage) + 1;
  gallery.insertAdjacentHTML('beforeend', gallerySet(objectGallery.hits));
  toggleBtn();
});

loadMoreBtn.addEventListener('click', async () => {
  if (maxPages === page) {
    toggleBtn();
    return Notiflix.Notify.failure(
      `We're sorry, but you've reached the end of search results.`
    );
  }
  page++;
  console.log(page);
  objectGallery = await fetchPicture(searchedTxt.value, page);
  gallery.insertAdjacentHTML('beforeend', gallerySet(objectGallery.hits));
});

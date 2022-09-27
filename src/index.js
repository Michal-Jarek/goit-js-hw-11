import { gallerySet } from './js/gallerySet';
import { fetchPicture } from './js/fetchPicture';
import Notiflix from 'notiflix';
import { toInteger } from 'lodash';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function toggleBtn() {
  loadMoreBtn.parentElement.classList.toggle('is-hidden');
}

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const searchedTxt = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');
const simpleGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'ALT',
  captionDelay: 250,
});
let page;
let objectGallery;
const perPage = 40;
let maxPages;
console.log(maxPages);

searchForm.lastElementChild.addEventListener('click', async e => {
  if (!loadMoreBtn.parentElement.classList.contains('is-hidden')) toggleBtn();
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
  simpleGallery.refresh();
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
  objectGallery = await fetchPicture(searchedTxt.value, page, perPage);
  gallery.insertAdjacentHTML('beforeend', gallerySet(objectGallery.hits));
  simpleGallery.refresh();
});

const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});

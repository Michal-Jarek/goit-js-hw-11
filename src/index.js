import { gallerySet } from './js/gallerySet';
import { fetchPicture } from './js/fetchPicture';
import Notiflix from 'notiflix';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const searchedTxt = document.querySelector('[name="searchQuery"]');
let page;

searchForm.lastElementChild.addEventListener('click', async e => {
  gallery.innerHTML = '';
  e.preventDefault();
  page = 1;
  let objectGallery = await fetchPicture(searchedTxt.value, page);
  console.log(objectGallery);
  if (objectGallery.length === 0)
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  gallery.insertAdjacentHTML('beforeend', gallerySet(objectGallery));
});

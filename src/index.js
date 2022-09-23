
import { gallerySet } from './js/gallerySet';
import { fetchPicture } from './js/fetchPicture';

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const searchedTxt = document.querySelector('[name="searchQuery"]');
let page;

searchForm.lastElementChild.addEventListener('click', async e => {
  gallery.innerHTML = '';
  e.preventDefault();
  page = 1; 
  let objectGallery = await fetchPicture(searchedTxt.value, page);
  gallery.insertAdjacentHTML('beforeend', gallerySet(objectGallery));
});



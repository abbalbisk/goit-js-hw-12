// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { currentPage } from "../main.js";
import { maxPage } from "../main.js";


const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-hidden');
const loadBtn = document.querySelector('.js-load-btn');


let galleryLight = null;

export function createGallery(images) {

    let markup = images.map(image => `<li class="item-gallery">
        <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" width="360px" height="152px"> </a>
        <ul class="card-info">
          <li>
            <h4>Likes</h4>
            <p>${image.likes}</p>
          </li>

          <li>
            <h4>Views</h4>
            <p>${image.views}</p>
          </li>
          <li>
            <h4>Comments</h4>
            <p>${image.comments}</p>
          </li>
          <li>
            <h4>Downloads</h4>
            <p>${image.downloads}</p>
          </li>
        </ul>
      </li>`).join('');

    gallery.insertAdjacentHTML('beforeend', markup);

    if (!galleryLight) {
        galleryLight = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });
    } else {
        galleryLight.refresh();
    }
}


export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    if (loader) {
        loader.classList.add('is-active');
    }
}

export function hideLoader() {
    if (loader) {
        loader.classList.remove('is-active');
    }
}


export function showLoadMoreButton() {
  loadBtn.disabled = false;
  loadBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadBtn.disabled = true;
  loadBtn.classList.add('hidden');
}
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

let galleryLight = null;

export function createGallery(images) {
  const markup = images
    .map(
      image => `<li class="item-gallery">
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
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', markup);

  if (!galleryLight) {
    galleryLight = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
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
    loader.classList.remove('loader-hidden');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.add('loader-hidden');
  }
}

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { getImagesByQuery } from './js/pixabay-api';
import {createGallery} from './js/render-functions'
import { clearGallery } from './js/render-functions';
import {showLoader} from './js/render-functions'
import {hideLoader} from './js/render-functions'
import { hideLoadMoreButton } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';


//======================================

const formEl = document.querySelector('.form');
const inputValue = document.querySelector('[type="text"]');
const gallery = document.querySelector('.js-gallery');
const loadBtn = document.querySelector('.js-load-btn');

let inpValue;
export let currentPage;
export let maxPage = 0;
const pageSize = 15;

formEl.addEventListener("submit", async (e) => {

    e.preventDefault();

    inpValue = inputValue.value.trim();
    currentPage = 1;

    if (!inpValue) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
            });
        return;
    }

    clearGallery();

    showLoader();
    hideLoadMoreButton();

    try {
        const res = await getImagesByQuery(inpValue, currentPage);
        const arrOfImage = res.hits;

        if (arrOfImage.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
           return;
        }

        createGallery(arrOfImage);

        maxPage = Math.ceil(res.totalHits / pageSize);
        if (currentPage < maxPage) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.error({
                message: "We're sorry, but you've reached the end of search results."
            });
        }
    }

    catch {
        maxPage = 0;
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        })
        clearGallery();
    }
    finally {
        hideLoader();
    }
    formEl.reset();
});

loadBtn.addEventListener('click', async () => {
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();

    try{
        const res = await getImagesByQuery(inpValue, currentPage);
        if (!res.hits.length) {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
            return;
        }

        createGallery(res.hits);


        const firstCard = document.querySelector('.js-gallery .item-gallery');
        if (!firstCard) return;
        const cardHeight = firstCard.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth"
        });

    } catch {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
    } finally {
        hideLoader();
        if (currentPage < maxPage) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.error({
                message: "We're sorry, but you've reached the end of search results."
            });
        }
    }
})
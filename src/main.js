import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { getImagesByQuery } from './js/pixabay-api';
import {createGallery} from './js/render-functions'
import { clearGallery } from './js/render-functions';
import {showLoader} from './js/render-functions'
import {hideLoader} from './js/render-functions'

//======================================

const formEl = document.querySelector('.form');
const inputValue = document.querySelector('[type="text"]');
const gallery = document.querySelector('.gallery');


formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let inpValue = inputValue.value.trim();

    if (!inpValue) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        clearGallery();
        return;
    }
     showLoader();


    getImagesByQuery(inpValue)
        .then(data => {
            const arrOfImage = data.hits;

            if (arrOfImage.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                clearGallery();
                return;
            }
            clearGallery();
            createGallery(arrOfImage);
            }).catch(err => {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                })
                clearGallery();
            }).finally(() => {
                hideLoader();
            })


    formEl.reset();
});
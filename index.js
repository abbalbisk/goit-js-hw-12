import{a as c,S as P,i as o}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&m(y)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:"51771971-26538829ed76446a8c68a5295",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:""};async function L(s,t){return(await c.get("",{params:{...c.defaults.params,q:s,page:t}})).data}const S=document.querySelector(".gallery"),u=document.querySelector(".loader-hidden"),d=document.querySelector(".js-load-btn");let f=null;function b(s){let t=s.map(e=>`<li class="item-gallery">
        <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" width="360px" height="152px"> </a>
        <ul class="card-info">
          <li>
            <h4>Likes</h4>
            <p>${e.likes}</p>
          </li>

          <li>
            <h4>Views</h4>
            <p>${e.views}</p>
          </li>
          <li>
            <h4>Comments</h4>
            <p>${e.comments}</p>
          </li>
          <li>
            <h4>Downloads</h4>
            <p>${e.downloads}</p>
          </li>
        </ul>
      </li>`).join("");S.insertAdjacentHTML("beforeend",t),f?f.refresh():f=new P(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){S.innerHTML=""}function q(){u&&u.classList.add("is-active")}function w(){u&&u.classList.remove("is-active")}function v(){d.disabled=!1,d.classList.remove("hidden")}function h(){d.disabled=!0,d.classList.add("hidden")}const p=document.querySelector(".form"),$=document.querySelector('[type="text"]');document.querySelector(".js-gallery");const x=document.querySelector(".js-load-btn");let n,i,l=0;const B=15;p.addEventListener("submit",async s=>{if(s.preventDefault(),n=$.value.trim(),i=1,!n){o.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(),q(),h();try{const t=await L(n,i),e=t.hits;if(e.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(e),l=Math.ceil(t.totalHits/B),i<l?v():(h(),o.error({message:"We're sorry, but you've reached the end of search results."}))}catch{l=0,o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),g()}finally{w()}p.reset()});x.addEventListener("click",async()=>{i+=1,h(),q();try{const s=await L(n,i);if(!s.hits.length){o.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s.hits);const t=document.querySelector(".js-gallery .item-gallery");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{o.error({message:"Sorry, there are no images matching your search query. Please try again!"})}finally{w(),i<l?v():(h(),o.error({message:"We're sorry, but you've reached the end of search results."}))}});
//# sourceMappingURL=index.js.map

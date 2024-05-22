import{a as f,S as L,i as l}from"./assets/vendor-3b3b6793.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=s=>s.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:n,downloads:g})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes"><span class="text-body">Likes:</span> <span class="quantity">${e}</span></small>
        <small class="text-body-views"><span class="text-body">Views:</span> <span class="quantity">${r}</span></small>
        <small class="text-body-comments"><span class="text-body">Comments:</span> <span class="quantity">${n}</span></small>
        <small class="text-body-downloads"><span class="text-body">Dowloads:</span> <span class="quantity">${g}</span></small>
    </div>
 
    </li>
`).join(""),b="https://pixabay.com/api/",w="43896740-362a21d10e9d41ec216c05f15",y=async(s,t=1,a=15)=>{const o=new URLSearchParams({key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a});try{return(await f.get(`${b}?${o}`)).data}catch(e){throw console.log(e),e}},c=document.querySelector(".js-gallery"),E=document.querySelector(".js-search-form"),i=document.querySelector(".js-load-more"),m=document.querySelector(".js-loader");let u=1,d="";const h=15;let P=new L(".js-gallery a");async function x(s){if(s.preventDefault(),d=s.target.elements.searchKeyword.value.trim(),d===""){c.innerHTML="",s.target.reset(),l.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}u=1,c.innerHTML="",i.classList.add("is-hidden"),m.classList.remove("is-hidden");try{const t=await y(d,u,h);t.totalHits===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(c.innerHTML=p(t.hits),P.refresh(),t.hits.length<h?i.classList.add("is-hidden"):i.classList.remove("is-hidden"))}catch(t){console.log(t),l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:2e3})}finally{s.target.reset(),m.classList.add("is-hidden")}}async function S(){u+=1,m.classList.remove("is-hidden"),i.classList.add("is-hidden");try{const s=await y(d,u,h);if(s.hits.length===0)l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"red"}),i.classList.add("is-hidden");else{const t=p(s.hits);c.insertAdjacentHTML("beforeend",t);const{height:a}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}}catch(s){console.error(s),l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:2e3})}finally{m.classList.add("is-hidden")}}E.addEventListener("submit",x);i.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map

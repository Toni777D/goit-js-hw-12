import{a as b,S as w,i as d}from"./assets/vendor-3b3b6793.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y=s=>s.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:r,comments:n,downloads:L})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${i}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes"><span class="text-body">Likes:</span> <span class="quantity">${e}</span></small>
        <small class="text-body-views"><span class="text-body">Views:</span> <span class="quantity">${r}</span></small>
        <small class="text-body-comments"><span class="text-body">Comments:</span> <span class="quantity">${n}</span></small>
        <small class="text-body-downloads"><span class="text-body">Dowloads:</span> <span class="quantity">${L}</span></small>
    </div>
 
    </li>
`).join(""),E="https://pixabay.com/api/",P="43896740-362a21d10e9d41ec216c05f15",g=async(s,t=1,a=15)=>{const i=new URLSearchParams({key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a});try{return(await b.get(`${E}?${i}`)).data}catch(e){throw console.log(e),e}},m=document.querySelector(".js-gallery"),v=document.querySelector(".js-search-form"),o=document.querySelector(".js-load-more"),p=document.querySelector(".js-loader");let l=1,h="";const u=15;let f=new w(".js-gallery a"),c=0;async function x(s){if(s.preventDefault(),h=s.target.elements.searchKeyword.value.trim(),h===""){m.innerHTML="",s.target.reset(),d.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}l=1,c=0,m.innerHTML="",o.classList.add("is-hidden"),p.classList.remove("is-hidden");try{const t=await g(h,l,u);c=t.totalHits,c===0?d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(m.innerHTML=y(t.hits),f.refresh(),t.hits.length<u||c<=l*u?o.classList.add("is-hidden"):o.classList.remove("is-hidden"))}catch(t){console.log(t),d.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:2e3})}finally{s.target.reset(),p.classList.add("is-hidden")}}async function S(){l+=1,p.classList.remove("is-hidden"),o.classList.add("is-hidden");try{const s=await g(h,l,u);if(s.hits.length===0||c<=l*u)d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"red"}),o.classList.add("is-hidden");else{const t=y(s.hits);m.insertAdjacentHTML("beforeend",t),f.refresh(),o.classList.remove("is-hidden");const{height:a}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}}catch(s){console.error(s),d.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:2e3})}finally{p.classList.add("is-hidden")}}v.addEventListener("submit",x);o.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map

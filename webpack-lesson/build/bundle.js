!function(){"use strict";window.addEventListener("load",(function(){const e=document.querySelector(".nav_menu"),t=document.querySelector(".mobile_menu_btn"),r=document.querySelector("#lightBtn"),n=document.querySelector("#darkBtn"),a=document.querySelector("body"),o=document.querySelector(".current_language"),s=document.querySelector(".all_languages"),i=e.nextElementSibling,c=document.querySelector(".user_favorites"),l=document.querySelector(".favorite_wrapper"),d=document.querySelector(".favorite_wrapper__close");function u(){window.innerWidth<=960?(e.insertAdjacentElement("beforeend",i),i.classList.add("whenUserFromMobile")):(e.after(i),i.classList.remove("whenUserFromMobile"))}function p(e){document.querySelectorAll(".swiper.swiper-big .swiper-wrapper .swiper-slide .path").forEach((t=>{t.innerHTML=`<img src="img/${e}.svg" alt="path">`}))}setTimeout((()=>{try{document.querySelector(".loader").remove()}catch{}}),1500),window.localStorage.getItem("dark")&&(a.classList.add("dark_mode"),p("dark-path")),window.addEventListener("resize",u),u();try{const m=new Swiper(".swiper.swiper-big",{loop:!0,spaceBetween:10,slidesPerView:1,watchSlidesProgress:!0}),v=(new Swiper(".swiper.swiper-nav",{loop:!0,spaceBetween:10,slidesPerView:3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:m}}),{loop:!0,spaceBetween:24,slidesPerView:5,autoplay:{delay:1500},breakpoints:{420:{slidesPerView:1},768:{slidesPerView:2},960:{slidesPerView:3},1320:{slidesPerView:4}}}),w=new Swiper(".swiper.left",v),y=new Swiper(".swiper.right",v);function _(e,t){document.querySelectorAll(t).forEach((t=>{t.addEventListener("mouseover",(()=>{e.autoplay.stop()})),t.addEventListener("mouseleave",(()=>{e.autoplay.start()}))}))}_(w,".swiper.left .swiper-wrapper .swiper-slide"),_(y,".swiper.right .swiper-wrapper .swiper-slide")}catch{}try{const h=document.querySelectorAll("[data-add-to-fav]");l.querySelector(".favorite_wrapper__content"),document.querySelector(".favorite_wrapper__header h3 span"),h.forEach(((e,t)=>{e.addEventListener("click",(function(){const e=this.parentElement.parentElement.parentElement;e.querySelector("a").href,e.querySelector("img").src,e.querySelector("img").alt,e.querySelector("span").textContent,e.querySelector("h3").textContent,e.querySelector("p.status").textContent,e.querySelector(".product_body__tp p").textContent,fetch("favorite.json").then((e=>e.json())).then((e=>console.log(e)))}))}))}catch{}try{const f=document.querySelector(".index__fifth__section__right form"),S=f.querySelectorAll("input, textarea");f.addEventListener("submit",(e=>{let t;e.preventDefault();const r=new FormData(e.target),n={};r.forEach(((e,t)=>{n[t]=e})),S.forEach((e=>{t=""!==e.value.trim()})),t?fetch("url",{method:"POST",headers:{"content-type":"application/json"},body:n}):e.target.insertAdjacentHTML("afterend",'\n\t\t\t\t\t<p style="margin-top:24px;color:#d00;font-weight:normal;letter-spacing:1.5px;">\n\t\t\t\t\t\t*Please fill all fields\n\t\t\t\t\t</p>\n\t\t\t\t')}))}catch{}try{const g=document.querySelector("#minus"),L=document.querySelector("#plus"),q=document.querySelector("#countOfProduct"),E=document.querySelector("#productPrice");L.addEventListener("click",(function(){let e=parseInt(q.value);q.value=++e,E.textContent=parseInt(E.textContent)+parseInt(E.textContent)})),g.addEventListener("click",(function(){let e=parseInt(q.value);e>1&&(q.value=--e)}))}catch{}t.addEventListener("click",(function(){this.classList.contains("open")?(this.classList.remove("open"),e.classList.remove("active_nav")):(this.classList.add("open"),e.classList.add("active_nav"))})),r.addEventListener("click",(()=>{a.classList.add("dark_mode"),p("dark-path"),window.localStorage.setItem("dark",!0)})),n.addEventListener("click",(()=>{a.removeAttribute("class"),p("light-path"),window.localStorage.removeItem("dark",!0)})),o.addEventListener("click",(()=>{s.classList.add("active_all_langs")})),s.addEventListener("mouseleave",(e=>{const t=setTimeout((()=>{e.target.classList.remove("active_all_langs")}),1e3);s.matches(".active_all_langs")||clearTimeout(t)})),c.addEventListener("click",(()=>{if(l.classList.contains("favorite_wrapper__active"))l.classList.remove("favorite_wrapper__active");else{l.classList.add("favorite_wrapper__active");const r=document.createElement("div");r.classList.add("layer"),r.style.cssText="\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100vh;\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\t\t\t\ttransition: all 0.6s;\n\t\t\t\tz-index: 99999;\n\t\t\t",document.body.prepend(r),t.matches(".open")&&e.matches(".active_nav")&&(t.classList.remove("open"),e.classList.remove("active_nav"))}})),d.addEventListener("click",(()=>{l.classList.remove("favorite_wrapper__active"),document.querySelector(".layer").remove()}))})),console.log("I'm ready")}();
//# sourceMappingURL=bundle.js.map
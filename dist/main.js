(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};e.d({},{_:()=>d,i:()=>l});var t={};e.r(t);const n=e=>{const t=document.createElement("div");let n;switch(e){case"menu":t.id="imgBoxMenu",t.classList.add("imgBoxMenu"),n="";break;case"about":t.id="imgBoxAbout",n="about";break;case"home":t.id="imgBox",n="terrazzo<br><h6>modern italian</h6>"}const a=document.createElement("div");a.classList.add("titleText");const o=document.createElement("h3");return o.innerHTML=n,a.appendChild(o),t.appendChild(a),{hero:t}};let a;const o=()=>{a=!a,i()},i=async function(){if(a){let e=document.querySelector(".imgBoxMenu"),t=0;const n=[url("./assets/menu.jpeg")];for(;a;)await d(2e3),e.style.opacity=0,await d(1e3),e.style.backgroundImage=n[t],console.log(n[t]),await d(1e3),e.style.opacity=1,t++,t===n.length&&(t=0)}},c=((()=>{let e=document.createElement("div");e.classList.add("navBar");const t=document.createElement("a");t.classList.add("navLink"),t.classList.add("active"),t.id="home",t.href="#",t.innerHTML="home";const n=document.createElement("a");n.classList.add("navLink"),n.id="menu",n.href="#",n.innerHTML="menu";const a=document.createElement("a");a.classList.add("navLink"),a.id="about",a.href="#",a.innerHTML="about",e.appendChild(t),e.appendChild(n),e.appendChild(a),document.body.appendChild(e)})(),function(e){let t=n("home").hero;e.appendChild(t)}),s=document.querySelector(".content");function d(e){return new Promise((t=>setTimeout(t,e)))}const l=async e=>{let a=e.target.id,i=t.NavBar.getcurrent();if(t.NavBar.toggleActive(a),a!==i){switch("menu"===i&&o(),s.classList.toggle("hide"),await d(200),s.classList.toggle("close"),await d(700),s.innerHTML="",a){case"menu":(e=>{let t=n("menu").hero;e.appendChild(t);let a=document.createElement("div");a.classList.add("menuBox"),a.innerHTML='<img class = "menuImg" src = "./assets/winterMenu.jpg">',e.appendChild(a);const o=document.createElement("div");o.classList.add("titleTextArrow");const i=document.createElement("h3");i.innerHTML="\n    <a id = 'openBtn' href ='#'>\n        <i class=\"far fa-snowflake\"></i>\n    </a>",o.appendChild(i),e.appendChild(o),document.querySelector("#openBtn").addEventListener("click",(async()=>{a.classList.toggle("open")}))})(s),o();break;case"home":c(s);break;case"about":aboutFactory(s)}s.classList.toggle("close"),await d(200),s.classList.toggle("hide"),await d(400)}};(e=>{document.querySelectorAll(".navlink").forEach((e=>{e.addEventListener("click",l)})),c(e)})(s)})();
if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const l=e=>n(e,r),c={module:{uri:r},exports:t,require:l};i[r]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.b454cde7.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"8ee8780434bd5c64944f500a19b7b6e8"},{url:"icon-192x192.png",revision:"1ddf1f71fe5338573fa06d480c9ab6c7"},{url:"icon-512x512.png",revision:"7cfd20e845682c76a846114a0321a89d"},{url:"icon-512x512-mask.png",revision:"4e68ea1f7c7fd0bad29014fb26492ebe"},{url:"manifest.webmanifest",revision:"e56c4a72f9eb46f084b1aa4a5e88fb62"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
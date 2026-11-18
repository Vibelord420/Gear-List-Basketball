const C="gc-v16",A=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./img/aar.jpg","./img/termine.jpg","./img/ausruestung.jpg","./img/benutzer.jpg","./img/anmeldung.jpg","./img/alles-drin.jpg","./img/leer.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)));
});

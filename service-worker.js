"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/guiahotelera/index.html","fa74d287e9e38cf9c45c2c4d3cd9b2af"],["/guiahotelera/static/css/main.450306a0.css","e5784b293b7479ee527ef4d6f01755e8"],["/guiahotelera/static/js/main.f911de39.js","39a9d06a58629afeec3b22fa220d6a66"],["/guiahotelera/static/media/Buenos-Aires-4.8b96d1e6.jpg","8b96d1e6a3c56fbcdabb64a2f736ec2a"],["/guiahotelera/static/media/ad_350x350.bb9a4044.jpg","bb9a4044c82e9ad46a8503b2e1131d4c"],["/guiahotelera/static/media/fontawesome-webfont-.32400f4e.eot","32400f4e08932a94d8bfd2422702c446"],["/guiahotelera/static/media/fontawesome-webfont-v=4.6.3.32400f4e.eot","32400f4e08932a94d8bfd2422702c446"],["/guiahotelera/static/media/fontawesome-webfont-v=4.6.3.a35720c2.woff","a35720c2fed2c7f043bc7e4ffb45e073"],["/guiahotelera/static/media/fontawesome-webfont-v=4.6.3.a3de2170.ttf","a3de2170e4e9df77161ea5d3f31b2668"],["/guiahotelera/static/media/fontawesome-webfont-v=4.6.3.db812d8a.woff2","db812d8a70a4e88e888744c1c9a27e89"],["/guiahotelera/static/media/fontawesome-webfont-v=4.6.3.f775f9cc.svg","f775f9cca88e21d45bebe185b27c0e5b"],["/guiahotelera/static/media/fontello.3b7d6a22.ttf","3b7d6a22080928329b6a66b739844cbd"],["/guiahotelera/static/media/fontello.439783c4.eot","439783c49121fbbfa2aaf652058cd843"],["/guiahotelera/static/media/fontello.9fa4825f.woff","9fa4825f8b1b2fc3ce730672443ecf10"],["/guiahotelera/static/media/fontello.a500a902.svg","a500a902f81850993c167e6d8c34b36d"],["/guiahotelera/static/media/iconsmind--rdmvgc.2864469c.woff","2864469c0e8a84417f318ee2cac54b04"],["/guiahotelera/static/media/iconsmind--rdmvgc.5a93ca37.eot","5a93ca370c17dfa3cb9d26d5f993716b"],["/guiahotelera/static/media/iconsmind--rdmvgc.f0409337.ttf","f0409337cef4caa891f01a833caf73d0"],["/guiahotelera/static/media/iconsmind-.5a93ca37.eot","5a93ca370c17dfa3cb9d26d5f993716b"],["/guiahotelera/static/media/logo-argentina.3b65fd73.jpg","3b65fd7380d1b8aeb0db2f63a2e0eddc"],["/guiahotelera/static/media/plus-icon.d77f0aed.svg","d77f0aed64d5541b69764cd4b014842b"],["/guiahotelera/static/media/simple-line-icons-thkwh4.44cdf281.eot","44cdf28149680d852145333e3a787743"],["/guiahotelera/static/media/simple-line-icons-thkwh4.8ee4c7dc.woff","8ee4c7dc034539f8c55307acec45bedc"],["/guiahotelera/static/media/simple-line-icons-thkwh4.b086c71b.ttf","b086c71b8b7d9097697af91899695ebe"],["/guiahotelera/static/media/simple-line-icons-thkwh4.d2a8b3de.svg","d2a8b3dea654b228163eb941c3e85d28"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/guiahotelera/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
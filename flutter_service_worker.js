'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "61a6cdb46f5bb33379f16b72a6dc7208",
".git/config": "0b4e5ad1d731e74fb0d1c27b35dea08d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1abc438ef140947b41053b3192ddf97e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6a400fef3c0ec4ff6c3547245340e90c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a03c6cfaf3c84b0684672ebb0032469",
".git/logs/refs/heads/main": "9a03c6cfaf3c84b0684672ebb0032469",
".git/logs/refs/remotes/origin/HEAD": "5fb0d2d5b27a7fa3c8e15408eaf73077",
".git/logs/refs/remotes/origin/main": "a07bf0da3dd8752279d7dbad1e2cc715",
".git/objects/01/570d2fad389437a507602f20fd4eecc4f60049": "b88137db93d9b525867fd994b09be369",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/3b08e2d2f5cb3f8737e9c833d628cfeba71c22": "1d268107414d2f49eaa913c2382fbf70",
".git/objects/11/afec58c7983a455d7f95c50584cc8464bc49d9": "b83a0c4e21f86ea8bc916a035993b2e6",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/09c42889e84b660c908f0dd19b9b762ad82100": "9ac157adbcd0e805d5b9a6485b342ca7",
".git/objects/26/b5be6c4d4fbd2e56b77e719b3d07d291adff2c": "610f83136baf1f146e05c7f5eab90614",
".git/objects/28/f9726a2f47d1f0f90435ce6e450d85d6a5455c": "d5df8db14bf84aa3092255c3f1c16326",
".git/objects/35/1979e45c46f42bea8a860a195ea3c6f17b0305": "082cfd611215e084a64c3fc2e1654e81",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/b6d979905c73cf347258c33a3c03b71bfdbfd5": "37ea500c1f7426d61f601782a6a120b1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/335bc71a0bcea7bcf22e4820755cf007a0a45a": "bcc017e0761ddafa508093adb3e20e16",
".git/objects/4a/ba30052e553adb352614b6bc7ea7a391846fcf": "0722b2d8fa3c1d85c1ba18b658c2f37d",
".git/objects/4b/a1ffc7dbc626403b8657c4f3b367828e92ae15": "20fb47fc39127a54bf2ee50abdb2c74f",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/07de585776e5680e48eda66573cff008ef8975": "510cdb60d181b5e1631ffd55761be2da",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/61/95414d2293e5afd4e744a171ed35248664fbe3": "e3c6abac45bc0de44cb5994470b09fe8",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/ca1d307cbc69d898387dff525ff2c3ef286e1c": "5ebc58c779ffa7d8a397e427e094bce1",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/732365ea169229430af31f00cbcf7549f03ea7": "925493cde81eb7503b459cb78463c15c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/c5d0fc64ecd9cd8a34d38d856addcaa44437cf": "21f89357cd13e223a23586a9ac7fadaa",
".git/objects/80/79e3068067c7aae6d7af3ba6064ba1b58d03fc": "1ee384da24168c062da1d0518050b3dc",
".git/objects/84/d7cfebcf495b086969cec21cb3382ecbcf3be5": "bbd22f6653a510adc8ab7e774425a478",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/dbedbd002388ce66237d944cab9b6910bf042a": "c7f569902b1c4e42a60bb56441196e0f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/164685f507faa7e6277af3b5324306da52124c": "85e4184a3d03aa541ae77be18aafbf29",
".git/objects/ad/9f76325b36eb019b70eabe7c85855e3fc4a1d8": "ef2b5d16d1080b9b8e0e115450e2aeb4",
".git/objects/b5/49143c78ec0e8169abee5f73413cc7a7e32b30": "4536dc1a31143aa239eccf7fcec7c7a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/fa76e432c0cdaa2eec1621ac6e5abec9449886": "907b44c436d776df4db6d271fef630d7",
".git/objects/ca/67ad5891d8c3798ecdc19f0f845be232c82ef2": "2276f32182102c0bc676346122674120",
".git/objects/d1/14d491a9a3192d26b1ee12282a540a3c4db290": "c7c0385b10d7f3f532ad1848ba6d9deb",
".git/objects/d3/c1b0ab2915fef5cd84f653c9da3574adb4a60f": "c8fe6a7381715edb15165fa37ac4983c",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c86de07e3c9f5d8d1b4fb1a077afb4b6b1d7e4": "f924479a4205a5e38d7b8d5c84276f56",
".git/objects/d9/fb5e36c7053005cddcfc86e7f2612b096845e3": "8d52924916d49a38235f21fbd5f89fc9",
".git/objects/e2/6be0b5cb1303de0023f0f4080aed4bf805c8b3": "74d21e11986ef038cc7e0a7739e1518c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/ea/c0396c2a7165e8351ca031f3573ca40be9719e": "1763a58c4df7e7a496fe16ca7e2d26e2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/510bc3d5d4299db6733b46db451fa6ed53e58b": "724581cd43c4d87c9f9a68fb0ab11bce",
".git/objects/f0/da2a379a21abe96901b03a1e836fb7140659ba": "5501ac706a2577d8c07717c88922cdc7",
".git/objects/f2/57e30b751b04e76a93ac5ed712d165ccc0dc0d": "4db66a1b351011aa67360918fe9a2621",
".git/objects/f7/7e424bb907b05d54f13b857ba7a77dc3c0dee7": "4db0ebcdb1724bda604404eb52523653",
".git/refs/heads/main": "b0e34e558516edcc6c0ea2f9de78f4f2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b0e34e558516edcc6c0ea2f9de78f4f2",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/assets/logo.png": "a847d62ecf96b8d97782f445c6108b25",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bc6e300dbe4a9f0f766e99d80ed3b8b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "b9c86fcde2cda5478d0b59297128bf45",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "9f6094cb36168d73ae51690774ff3aab",
"icons/Icon-512.png": "f98684d071ce757017e8e1911b8f4035",
"icons/Icon-maskable-192.png": "9f6094cb36168d73ae51690774ff3aab",
"icons/Icon-maskable-512.png": "f98684d071ce757017e8e1911b8f4035",
"index.html": "9720530ce72c87fcc273fa12b9654a62",
"/": "9720530ce72c87fcc273fa12b9654a62",
"main.dart.js": "644362f3deae1a8bc9fbef2f8574d11a",
"manifest.json": "95fd7c47274438ad3a3f841fd5153e5a",
"version.json": "45d00254d846bb8cef8def8f619d1b72"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

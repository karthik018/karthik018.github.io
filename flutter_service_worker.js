'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "058b429971be3e9148e2fe52701a2725",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/FETCH_HEAD": "0a3eacb3ee961120798d709692fa9445",
".git/ORIG_HEAD": "9d19caf26d5ededf1a9002b3931c8d56",
".git/refs/remotes/origin/master": "0a8e9dd3d5720d80b3be40924488d243",
".git/refs/heads/master": "0a8e9dd3d5720d80b3be40924488d243",
".git/index": "31aac48629e94bb0a40e101c6f42106d",
".git/objects/c5/283551f67c4bac69277f39942cdd7ee9b71e32": "e5c68a0c9a9143f80a0ef4842a3e499e",
".git/objects/c5/21f4e446f7ff4a959ffd77a5b31f1fe73a27f4": "3a3590cfee5527ab20646413fdd786f9",
".git/objects/db/425c817507a7b48c0fac3015b0d1d26fec1d94": "f26f9e4ffde92200ff40539e421c5636",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/85/a69caf3b5b67ea0b4d2f5a29578d08401636ff": "a3d57b58f75572b742afafb177110674",
".git/objects/7c/9bdb7ae767a19158ceef316cf9dc50ebecf11b": "563e96a08c393c35fdca747b98b548f0",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b3/de861eb35dd0578f45bb2b216f98a893f5b3dc": "194a2f84a74327ec8085c24fd08db7bd",
".git/objects/e3/5e91b01d40af248acc078ae6cb70abf87a667f": "d074cec6b9b7445d3dba624f17a1929f",
".git/objects/e6/eb5897ab69432ea7c66db7117115c6dcfaa3a3": "c9e7bb797982012ec14974cca6d2e458",
".git/objects/41/006798249f4c131a38227bd715dbe2a1f0a510": "587c2d20036751dc11ca6e6cf5a0de5f",
".git/objects/8c/befabecf5fe828a37a78ca4257b28a33e9bb0a": "dfc7502309c25515d71bac1bdc7c22b1",
".git/objects/e9/60390a1df950ed892bf2309face504340a48b1": "1d8240f8fd660ea3f5409eb4abdc37fb",
".git/objects/e4/3b902676d390749cc76733884842514b91ea5f": "1c2ceff13c7d48813801013ca9f32c46",
".git/objects/1b/a0c0e27d8ce29f0174310a83051f21d204c9f4": "b7793dd35a40b3aed46c6863610565e0",
".git/objects/5b/ad9cad53f038ef1d6cc178cd358d445e2acecc": "e31d80728ed8b7817d1c88c816ffa3fe",
".git/objects/ac/0355ea22edc86cb66a268802719328ac61ca9b": "eae6e982f8c1fec2bb96a205e54d768f",
".git/objects/aa/87907b48b5c5dd5727549707a3cd5055102c88": "ef350593209b45be26e3907309712440",
".git/objects/94/221fab6f033dfabf65b1e8519329178763744a": "07d0c3ea4f98a38dbb5dc4ad3872210d",
".git/objects/f8/ce12321d1d0a74f37f028a4a10ded0732117ce": "bc772e692fed7784ad6758e6d6d60e73",
".git/objects/4b/539c35ff24251e6041ddd27dca31f8b9f95d84": "bc0bd7dec4e627c5f2d32f153ef6a659",
".git/objects/f0/8e75da0da2af03183415be4dddcb4090b4abc8": "20bedfdb4747bc0ac77f67f57a111475",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/pack/pack-87e5b515b11ca0d70d9e99fa66e9011f00f86238.pack": "a6252b819a958927cafcdbf568c416e3",
".git/objects/pack/pack-87e5b515b11ca0d70d9e99fa66e9011f00f86238.idx": "f9483dd730f18f6d89899bd18ed58639",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/05/6a0f8f9ca3d7d52ff9dc93d4614cedc5477d6d": "2045455df8757fddca0ff4a96f92482b",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/04/67333c5644164ed082f90e94a8604e930e3c88": "d7972acffa7273684af565e3906bd2ba",
".git/objects/11/0bcd3d8b837da5858fa53c8decfdbc509f7546": "fa99e6eeb6f4387d4fdcd5cb7e41a63e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/e2/8c495df7fb3cc1ecd4398ff6e3729d1e36d1c8": "ef65ebf99a37db9182b5a05202b322dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/26/4d801fb96d1d712459b9097c9eabc1e9ea275b": "6f1070d905396537c02a566c15d63996",
".git/objects/3a/c430dd6dd109b7f41ee2dfccd76e189a41ec66": "43c389181f162f51d2673b00cfa00095",
".git/objects/16/2779e3255245c34f54a08e50a3794d039cc84b": "f191028240f1901305a55ccd12b1c536",
".git/objects/e0/341473e946a6a2540f1956da5f90cc8fff325b": "f806f254992508efa6e295a0c2ddfae8",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/3c/9d34bcedc97f46ee739d0be82f8cad32dd6645": "1c7050128fa076046d55a4afb8b6e7b6",
".git/objects/47/5d347613c6243eced3f523fa1ab57b0e3e8988": "00795306400d100d3f48e8995e92e74d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f3/09924f461215befa834b9bb8f009ed6398b8b0": "c53c55e2a05b46f229440d080b1ddf8c",
".git/objects/f3/e0358637e8f754b0180a390d4a01dfcd844843": "afcc0d6617a42935df6a6fbe72e7953b",
".git/objects/e8/d3a1ff3bc071f039982bef60715f3d628be663": "27562ed7c609434ca80889ba7ea5825b",
".git/objects/d6/3f1f2a3ea9c910c2224aeb09514cffe2b59027": "63441a4d7659f01afeb283ca78659715",
".git/objects/02/6b1288dc429bf83bca7e9d4e5076982598db14": "73f9d1eca93d0117e191e32cb3dfbce0",
".git/objects/13/48ec759afe67c9a141cbd571ae2bbf9557cffd": "99232a84b28e432ed9285fb6e233227a",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/logs/HEAD": "3af9a0533938753698f8d841a3a64351",
".git/logs/refs/remotes/origin/master": "35b64b9e6bbf9f861fd4af45ae822984",
".git/logs/refs/heads/master": "3af9a0533938753698f8d841a3a64351",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "49112da1df90511f09066946a72a90aa",
".git/COMMIT_EDITMSG": "ce5987a371be20d098be70e3d4b7f8c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "aaafa928a4f8616604eca12d830fe765",
"assets/FontManifest.json": "bce859f4429f0f43acf351cc0a41cc0e",
"assets/NOTICES": "da10e05902be010ff9a31218edcc1a1c",
"assets/fonts/RocknRollOne-Regular.ttf": "68e244d0fb0459efd86703125cb44164",
"assets/fonts/Facebook.ttf": "9adeb72c3c2d8028426cdbed99c15761",
"assets/fonts/LinkedIn.ttf": "0bc82b28410a28b0b2abc472c3127764",
"assets/fonts/RobotoSlab-VariableFont_wght.ttf": "0b2aeb1c9f580b22533476443b47f0ad",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/images/facebook.png": "df931b54c270884d8bdec5fb2061e085",
"assets/assets/images/chess.jpg": "8df72b7776d28058c14c6064eac5d333",
"assets/assets/images/linkedin.png": "f53c4c9b041001471a7a447872a09ce6",
"assets/assets/images/my_pubg.jpg": "c5bc386ca3e6d44c720940f43b75cba0",
"assets/assets/images/Me.jpg": "a2f453bd31b3c958130f13cd3b92aede",
"assets/assets/images/anime.jpg": "fd90f59dedd4f6236209ff656a338feb",
"assets/assets/images/draw_2.jpg": "f9b5196b51882925678fa84639580d9d",
"assets/assets/images/draw_1.jpg": "1eb43796c62356a0e87f411de986d81f",
"assets/assets/images/programming_1.jpeg": "5b3eead8f6d24b19d1835fd1d235f2ab",
"assets/assets/images/programming.jpg": "f76bf07945a4093a18b732a9c8998d3e",
"assets/assets/images/artist.jpg": "8646e92b98bf69bfdcd00adb134bd065",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/images/facebook.png": "df931b54c270884d8bdec5fb2061e085",
"assets/images/chess.jpg": "8df72b7776d28058c14c6064eac5d333",
"assets/images/linkedin.png": "f53c4c9b041001471a7a447872a09ce6",
"assets/images/my_pubg.jpg": "c5bc386ca3e6d44c720940f43b75cba0",
"assets/images/Me.jpg": "a2f453bd31b3c958130f13cd3b92aede",
"assets/images/anime.jpg": "fd90f59dedd4f6236209ff656a338feb",
"assets/images/draw_2.jpg": "f9b5196b51882925678fa84639580d9d",
"assets/images/draw_1.jpg": "1eb43796c62356a0e87f411de986d81f",
"assets/images/programming_1.jpeg": "5b3eead8f6d24b19d1835fd1d235f2ab",
"assets/images/programming.jpg": "f76bf07945a4093a18b732a9c8998d3e",
"assets/images/artist.jpg": "8646e92b98bf69bfdcd00adb134bd065",
"assets/AssetManifest.json": "ff4ba1acaf42da5d2afa6c61bf92632f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "97996913aafaaff0d69ce98dc70cb533",
"/": "97996913aafaaff0d69ce98dc70cb533",
"manifest.json": "60091747cc42c4f25033351cba54fc65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

const CACHE_NAME = "posthog-cache-v1";
const POSTHOG_URLS = [
  "https://eu-assets.i.posthog.com/static/array.js",
  "https://eu-assets.i.posthog.com/static/surveys.js",
  "https://eu-assets.i.posthog.com/static/web-vitals.js",
  "https://eu-assets.i.posthog.com/static/dead-clicks-autocapture.js",
];

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.hostname === "eu-assets.i.posthog.com") {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          
          if (response) {
          
            fetch(event.request).then((fetchResponse) => {
              cache.put(event.request, fetchResponse.clone());
            });
            return response;
          }

          
          return fetch(event.request).then((fetchResponse) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

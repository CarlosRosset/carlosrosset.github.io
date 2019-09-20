importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
  );

  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: 'css-cache',
    })
  );

  workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      // Use a custom cache name.
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images.
          maxEntries: 20,
          // Cache for a maximum of a week.
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );

  workbox.precaching.precacheAndRoute([
    '/js/script.js',
    '/no/i400/css/ionic.bundle.css',
    'no/i400/dist/ionic.js',
    'no/i400/dist/ionic.js',
    'no/i400/dist/ionic/svg/ios-bug.svg',
    'no/i400/dist/ionic/svg/md-bug.svg',
    'no/i400/dist/ionic/svg/ios-microphone.svg',
    { url: '/index.html', revision: '383676' },
  ]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
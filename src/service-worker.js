/* global workbox */
if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest)
  workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('index.html'))
}

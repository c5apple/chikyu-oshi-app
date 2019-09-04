ngsw-worker.js

onFetch(event) に以下のコードを追記する。

```
// for safari
if (event.request && event.request.headers && event.request.headers.get('range')) {
  var CACHE_VERSION = 2;
  var CURRENT_CACHES = {
    prefetch: 'prefetch-cache-v' + CACHE_VERSION
  };
  var pos = Number(/^bytes\=(\d+)\-$/g.exec(event.request.headers.get('range'))[1]);
  console.log('Range request for', event.request.url,
    ', starting position:', pos);
  event.respondWith(
    caches.open(CURRENT_CACHES.prefetch)
    .then(function(cache) {
      return cache.match(event.request.url);
    }).then(function(res) {
      if (!res) {
        return fetch(event.request)
        .then(res => {
          return res.arrayBuffer();
        });
      }
      return res.arrayBuffer();
    }).then(function(ab) {
      return new Response(
        ab.slice(pos),
        {
          status: 206,
          statusText: 'Partial Content',
          headers: [
            // ['Content-Type', 'video/webm'],
            ['Content-Range', 'bytes ' + pos + '-' +
              (ab.byteLength - 1) + '/' + ab.byteLength]]
        });
    }));
} else {
            // Past this point, the SW commits to handling the request itself. This could still
            // fail (and result in `state` being set to `SAFE_MODE`), but even in that case the
            // SW will still deliver a response.
            event.respondWith(this.handleFetch(event));
}
```

参考
https://googlechrome.github.io/samples/service-worker/prefetch-video/

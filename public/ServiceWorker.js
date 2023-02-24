let cacheData="appV1"
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/'
            ])
        })
    )
})


this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp)
            {
                return resp
            }
        })
    )
})

this.addEventListener("fetch",(event)=>{
    event.waitUntil(
        this.registration.showNotification("Hello",{
            body:"Helo there !",
        })
    )
})
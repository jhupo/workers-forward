
/**
 * https://github.com/jhupo
 * rules:[forward] 
 */

const defaults = "https://jhupo.cc/";

const urls = [
    ["blog",${defaults}]
];

addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)) })

async function forwardMessage(url){
    return new Response(null, {
        status: 301,
        headers: {
          'Location': url,
         },
      });
}

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const target = path.substring(1);
    const valid = urls.find(item => item[0] === target);
    if(valid){
        return forwardMessage(valid[1]);
    }
    return forwardMessage(defaults);
}


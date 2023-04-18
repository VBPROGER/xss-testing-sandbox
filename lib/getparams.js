#!/usr/bin/env node
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})
const isparamnull = function(param){
    return (param == null || param == 'null')
}
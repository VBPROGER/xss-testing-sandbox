#!/usr/bin/node
// Get ?x=y \ &x=y * arguments
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const isparamnull = function(param){
      if (param == null || param == 'null'){
          return true
      } else{
          return false
      }
  }
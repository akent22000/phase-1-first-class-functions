
function receivesAFunction(spices) {
    spices();
}


function returnsANamedFunction() {
    return function funSpices() {};
}
  
function returnsAnAnonymousFunction() {
    return () => {};
}
function receivesAFunction(anyFunction){
    anyFunction();
}
function returnsANamedFunction(){
    return function returnFunction(){return 1+2;};
}
function returnsAnAnonymousFunction(){
    return function (){1+2};
}
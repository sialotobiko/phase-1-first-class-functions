function receivesAFunction(callback){
    console.log('We are learning JavaScript!')
    callback();
}

returnsANamedFunction = () => function returnME(){};

function returnsAnAnonymousFunction(){
   return function(){}; 
}
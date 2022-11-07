function receivesAFunction(callback) {
     callback();
}

function returnsANamedFunction() {
    function greeting() {
        return "This is a function"
    }
    return greeting
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}




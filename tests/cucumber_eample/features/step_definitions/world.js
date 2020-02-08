const {setWorldConstructor} = require('cucumber');

function WorldConstructor() {
    console.log("Before");
    //this.apply(this, arguments);
    console.log("After");
}

setWorldConstructor(WorldConstructor);
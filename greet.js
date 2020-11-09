function greet (args){
    console.log("Hello"+args);
    console.log(module.filename);
}

module.exports=greet;
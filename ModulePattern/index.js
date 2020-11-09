
// import all the file in folder and export in a module.exports object.
let englishGreet=require('./greetEn.js');
let hindiGreet=require('./greetHn');

module.exports={
    eng:englishGreet,
    hnd:hindiGreet,
}

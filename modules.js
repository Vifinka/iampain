// const xyz = require('./people');

// console.log(xyz);                            [loads the whole object]
// console.log(xyz.people, xyz.ages);           [loads the specific parts of the object]


// ----------------------------------------------------------------------------------

const { people, ages } = require('./people');

console.log(people, ages);

const os = require('os');
console.log(os.platform(), os.homedir);
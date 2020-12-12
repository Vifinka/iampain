const fs = require('fs');

// Gets chunk and then when it's here we convert it to human in console
// const readStream = fs.createReadStream('./text/running.txt');

// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK ------');
//     console.log(chunk.toString());
// })


// Gets chunk and converts it automatically, then it pastes it into another file
const readStream = fs.createReadStream('./text/running.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./text/sleeping.txt');

// readStream.on('data', (chunk) =>{
//     console.log("------ new chunk ------");
//     console.log(chunk);

//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk)
// })

// basically the same but quicker and shorter
readStream.pipe(writeStream);

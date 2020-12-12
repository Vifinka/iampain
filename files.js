const fs = require('fs');

// reading files

// fs.readFile('./text/crying.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// writing files

// fs.writeFile('./text/crying.txt', 'DRAGONS are the best', () => {
//     console.log("the file has been rewritten")
// })

// fs.writeFile('./text/laughing.txt', 'No, dinos are the best', () => {
//     console.log("Since the file didn't exist, it was created and the text was added to it :)")
// })

// directories

// if(!fs.existsSync('./clonetroopers_names')){
//     fs.mkdir('./clonetroopers_names', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('directory [folder] created')
//     });
// }
// else{
//     fs.rmdir('./clonetroopers_names', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log("directory [folder] deleted")
//     })
// }

// deleting files

// if(fs.existsSync('./text/delete.me')){
//     fs.unlink('./text/delete.me', (err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted");
//     })
// }

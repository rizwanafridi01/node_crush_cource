
const fs = require('fs');


//read file
// fs.readFile('./blog/blog.txt', (error, data)=>{
//     if(error){
//                 console.log(error);
//     }
//     else
//     {
//         console.log(data.toString());
//     }
// });

////testing
// fs.readFile('./blog/blog.txt',(err, data) => {
//     if(err){
//             console.log(err);
//     }
//     else{
//             console.log(data.toString());
//     }
// });

// fs.readFile('./docs/blog.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });




//writing file

// fs.writeFile('./blog/blog.txt','Waisal Afridi', ()=>{
//     console.log('file is written');
// });


// fs.writeFile('./blog/blog2.txt','Junaid Afridi',()=>{
//     console.log('File is written');
// });

// fs.writeFile('./docs/blog.txt','Sania Princess', () => {
//     console.log('file created');
// });



//////// create Directory
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) =>{
//         if(err)
//         {
//             console.log(err);
//         }
//             console.log('dir created');
//     });
// }
// else{
//       fs.rmdir('./assets',(err) =>{
//         if(err){
//                 console.log(err);
//         }
//         else{
//             console.log('Directory Removed');
//         }
//       });
// }


//// delete directory

// if(fs.existsSync('./docs/blog2.txt')){

//     fs.unlink('./docs/blog2.txt',(err) =>{
//         if(err){
//                 console.log(err);
//         }
//         else{
//             console.log('deleted');
//         }
//     });
// }



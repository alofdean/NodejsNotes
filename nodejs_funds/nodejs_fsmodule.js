// FS Modülünü Dahil Ettik.
const fs = require("fs");

// -- Dosya Okumak -- \\

// fs.readFile("./nodejs_funds/pass.txt", "utf-8", (err, data) => {    // fs.readFile('path of file', 'encoding type', callback func)
//   if (err) console.log(err);
//   console.log(data);
//   console.log("DOSYA OKUNDU!");
// });

// -- Dosya'ya Yazmak -- \\

// fs.writeFile("./nodejs_funds/message.txt", "selam!", "utf-8", (err) => {     //fs.writeFile('path of file', 'write smth.' , 'encoding type', callback func)
//   if (err) console.log(err);
//   console.log("Dosya basarili bir sekilde olusturuldu.");
// });

// -- Veri Eklemek -- \\

// fs.appendFile("./nodejs_funds/message.txt","\n smth added!", "utf-8",(err) => {        //fs.appendFile('path of file', 'write smth.' , 'encoding type', callback func)
//     if (err) console.log(err);
//     console.log("Yeni veri eklendi!");
//   }
// );

// -- Dosya Silmek --\\

// fs.unlink("./nodejs_funds/message.txt", (err) => {  //fs.unlink('path of file', callback func)
//   if (err) console.log(err);
//   console.log("Dosya Silindi!");
// });

// -- Klasor Olusturmak -- \\

// fs.mkdir("uploads/img", {recursive: true}, (err) => {    //fs.mkdir('path of directory', eger iki tane ic ice olusturmak istiyorsak recursive : true parametresi gerekli, callback func)
//   if (err) console.log(err);
//   console.log("Klasor Olusturuldu!");
// });

// -- Klasor Silmek -- \\

fs.rmdir("uploads", {recursive: true}, (err) => {
  //fs.rmdir('path of directory', callback func)
  if (err) console.log(err);
  console.log("Klasor Silindi!");
});

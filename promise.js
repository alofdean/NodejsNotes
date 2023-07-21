//Resolve ve reject, Eğer cevap olumlu olursa resolve dönüşü olursa bu işi yap, eğer olumsuz olursa reject dönüşü olursa şunu yap. Ama bu cevapları bekleme çalışmaya devam et.
//Promise bir işlemin sonucunu temsil eden js nesnesi

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Veriler Alindi!'); //Resolve durumundaki değer
//     reject('Veriler Alinamadi!'); //Reject durumundaki değer
// });

// promise1.then(value => {
//     console.log(value);     //Resolve durumunda ne yapılacağı
// } );

// promise1.catch(error => {
//     console.log(error);     //Reject durumunda ne yapılacağı
// } );

// promise1
//     .then(value => {
//         console.log(value);     //Resolve durumunda ne yapılacağı
//     } ).catch(error => {                                            //Bu şekilde de yazılabilir.
//         console.log(error);     //Reject durumunda ne yapılacağı
//     } );

//CALLBACK TO PROMISE

const books = [
  {title: "Kitap 1", author: "Yazar 1"},
  {title: "Kitap 2", author: "Yazar 2"},
  {title: "Kitap 3", author: "Yazar 3"},
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.title);
  });
};

const addBook = (newBook) => {
  const Promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    //reject("bir hata olustu!");
  });
  return Promise1;
};

addBook({title: "Kitap 4", author: "Yazar 4"})
  .then(() => {
    console.log("YENI OLUSAN LISTE");
    listBooks();
  })
  .catch(() => {
    console.log("Hata!");
  });

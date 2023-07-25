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

//   addBook({title: "Kitap 4", author: "Yazar 4"})
//     .then(() => {
//       console.log("YENI OLUSAN LISTE");
//       listBooks();
//     })
//     .catch((error) => {
//       console.log(error);
//     });

async function showBooks() {
  await addBook({title: "Kitap 4", author: "Yazar 4"});
  listBooks();
}
showBooks();

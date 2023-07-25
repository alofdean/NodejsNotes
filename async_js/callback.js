//Database veya api olmadığı için objelerden oluşan bir array tanımladık.
const books = [
  {title: "Kitap 1", author: "Yazar 1"},
  {title: "Kitap 2", author: "Yazar 2"},
  {title: "Kitap 3", author: "Yazar 3"},
];

//Kitap Listeleme fonksiyonu oluşturduk. foreach gibi çalışan map fonksiyonu için book tanımlandı ve booksun içinde her book un başlığını ekrana yazdırır.
const listBooks = () => {
  books.map((book) => {
    console.log(book.title);
  });
};

//listBooks();

//İki parametre alan bir kitap ekleme fonksiyonu oluşturduk. Biri eklenecek olan yeni kitap "newBook" parametresi
//Diğeri ise eklendikten sonra listeyi yazdırması için callback fonksiyonudur.
const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

//Eklenecek kitabı ve callback fonksiyonunu verdik.
addBook({title: "Kitap 4", author: "Yazar 4"}, listBooks);

//Database veya api olmadığı için objelerden oluşan bir array tanımladık.
const posts = [
  {title: "1. Post", author: "1. Yazar", post: "selamlar!"},
  {title: "2. Post", author: "2. Yazar", post: "merhabalar!"},
  {title: "3. Post", author: "3. Yazar", post: "tekrardan selam!"},
];

//Parametre almayan listeleme fonksiyonumuzu oluşturduk.
listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

//Parametre olarak yeni eklenecek postu alan bir fonksiyon oluşturduk.
const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost); // Yeni kitabı array'e pushladık.
    resolve(posts);
  });
  return promise1;
};

async function showPosts() {
  try {
    await addPost({
      title: "4. Post",
      author: "4.Yazar",
      post: "allam nerdeyim",
    });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();

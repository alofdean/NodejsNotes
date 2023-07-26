const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  if (ctx.path === "/") {
    ctx.type = "text/html";
    ctx.body = "<h1>Index Sayfasina Hosgeldin!</h1>";
  } else if (ctx.path === "/hakkimda") {
    ctx.type = "text/html";
    ctx.body = "<h1>Hakkimda Sayfasina Hosgeldin!</h1>";
  } else if (ctx.path === "/iletisim") {
    ctx.type = "text/html";
    ctx.body = "<h1>Iletisim Sayfasina Hosgeldin!</h1>";
  } else {
    ctx.type = "text/html";
    ctx.body = "<h1>Sayfa Bulunamadi!</h1>";
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port}'da baslatildi!`);
});

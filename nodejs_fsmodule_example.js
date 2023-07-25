const fs = require("fs");

fs.writeFile(
  "./nodejs_funds/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Dosya Olusturuldu!");
  }
);

fs.readFile("./nodejs_funds/employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Dosya Okundu!");
});

fs.appendFile(
  "./nodejs_funds/employees.json",
  "Bir veri daha",
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("yeni veri eklendi");
  }
);

fs.unlink("./nodejs_funds/employees.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya Silindi!");
});

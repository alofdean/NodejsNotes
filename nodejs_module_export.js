//Diğer dosyada export ettiğimiz fonksiyonu bu dosyada dahil ederek kullanabildik.
//Bu şekilde iki yöntem mevcut

// const daireHesaplari = require("./nodejs_module_pratik1");
// daireHesaplari.circleArea(10);
// daireHesaplari.circleCircumference(4);

const {circleArea, circleCircumference} = require("./nodejs_module_pratik1");

circleArea(10);
circleCircumference(5);

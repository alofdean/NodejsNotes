function circleArea(yaricap) {
  let alan = yaricap * yaricap * 3.14;
  console.log(alan);
}

function circleCircumference(yaricap) {
  let cevre = 2 * 3.14 * yaricap;
  console.log(cevre);
}

circleArea(5);
circleCircumference(10);

//Export işlemi için bu şekilde iki yazım şekli mevcut\\

// module.exports = circleArea;
// module.exports = circleCircumference;

module.exports = {
  circleArea,
  circleCircumference,
};

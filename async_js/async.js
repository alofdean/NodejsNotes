//Promise yapısı ile async

function getData(data) {
  const Promise1 = new Promise((resolve, reject) => {
    console.log("Veriler alinmaya calisiliyor");

    if (data) {
      resolve("Veriler alindi!");
    } else {
      reject("Veriler Alinamadi!");
    }
  });
  return Promise1;
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor");

    if (receivedData) {
      resolve("Veriler Düzenlendi");
    } else {
      reject("Veriler Düzenlenemedi");
    }
  });
}

// getData(false)
//   .then((result) => {
//     console.log(result);
//     return cleanData(true);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Async - await yapısı

async function processData() {
  try {
    const receivedData = await getData(true); //Promise dönene kadar beklenir.
    console.log(receivedData); // data yı yazdır.
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}

processData();

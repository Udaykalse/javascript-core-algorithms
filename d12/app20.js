function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("API Data Received");
    }, 2000);
  });
}

async function fetchData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData()
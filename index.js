const url = "https://api1.binance.com/api/v3/ticker/price?symbol=RVNUSDT";

async function fetchPrice() {
  const response = await fetch(url);
  const priceObject = await response.json();
  return priceObject.price;
}

fetchPrice().then(function (price) {});

//Update each minute
setInterval(fetchPrice, 60 * 1000);

import * as ReactDOM from "react-dom";
import * as React from "react";

function App() {
  const [price, setPrice] = React.useState(0);
  const [priceBTC, setPriceBTC] = React.useState(0);
  const [input, setInput] = React.useState(10);

  const runOnce = [];
  React.useEffect(() => {
    const fetchPrice = () => {
      fetch("https://api1.binance.com/api/v3/ticker/price?symbol=RVNUSDT")
        .then((response) => response.json())
        .then((data) => {
          setPrice(parseFloat(data.price));
          document.title = parseFloat(data.price).toLocaleString() + "$ RVN";
        });

      fetch("https://api1.binance.com/api/v3/ticker/price?symbol=RVNBTC")
        .then((response) => response.json())
        .then((data) => {
          setPriceBTC(parseFloat(data.price));
        });
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 20 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, runOnce);
  let dollarValue = input > 0 && input.toLocaleString();
  let ravenValue = "";
  if (input > 0) {
    if (input > 3) {
      ravenValue = Math.round(input / price).toLocaleString();
    } else {
      ravenValue = (input / price).toFixed(3).toLocaleString();
    }
  }

  if (input < 0) {
    ravenValue = "";
    dollarValue = "";
  }
  return (
    <div>
      <div className="ravencoin-price-calculator__main-container ravencoin-price-calculator__glass-container">
        <h1>Calculator</h1>
        <div style={{ position: "relative", top: "-30px" }}>Ravencoin</div>
        <div className="ravencoin-price-calculator__subtitle">
          <div>
            <small> ${price && price.toFixed(3)}</small>
          </div>
          <div>
            <small> SATS {priceBTC && priceBTC * 100000000}</small>
          </div>
        </div>
        <section className="ravencoin-price-calculator__glass-container">
          <h5>Enter price in USD</h5>
          <input
            className="ravencoin-price-calculator__input"
            type="number"
            value={input}
            onChange={(event) => {
              const str = event.target.value;
              const n = parseFloat(str);
              setInput(n);
            }}
          />

          <table className="ravencoin-price-calculator__table ">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$</td>
                <td> {dollarValue}</td>
              </tr>
              <tr>
                <td>RVN</td>
                <td>{ravenValue}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className="ravencoin-price-calculator__footer">
          Brought to you by Raven Rebels. <br />
          Feel free to give us 💙 over at{" "}
          <a
            href="https://twitter.com/RavenRebels"
            className="ravencoin-price-calculator__footer-link"
          >
            Twitter
          </a>
          <p>
            <small>Live prices from <a
                href="http://binance.com/"
                className="ravencoin-price-calculator__footer-link"
              >
                Binance
              </a>
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

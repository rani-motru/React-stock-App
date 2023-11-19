import { Link } from "react-router-dom";

function Currencies() {
    const currencies = [
        // { name: "Bitcoin", symbol: "BTC" },
        // { name: "Litecoin", symbol: "LTC" },
        // { name: "Ethereum", symbol: "ETH" },
        // { name: "Ethereum Classic", symbol: "ETC" },
        // { name: "Stellar Lumens", symbol: "XLM" },
        // { name: "Dash", symbol: "DASH" },
        // { name: "Ripple", symbol: "XRP" },
        // { name: "Zcash", symbol: "ZEC" },
        {name: "Apple Inc.", symbol: "AAPL"},
        {name: "Microsoft Corporation", symbol: "MSFT"},
        {name: "Alphabet Inc.", symbol: "GOOGL"},
        {name: "Facebook, Inc.", symbol: "FB"},
        {name: "Oracle Corporation", symbol: "ORCL"},
        {name: "Intel Corporation", symbol: "INTL"}
      ];

return (
    <div className="currencies">
        {currencies.map((stock) => {
            const {name, symbol } = stock;
            // this is destructuring coin
            // so we can use name instead of coin.name
            // and symbol instead of coin.symbol

            return(
                <Link to={`/price/${symbol}`}>
                    <h2>{name}</h2>
                </Link>
            )
        })}

    </div>

  )
}
export default Currencies
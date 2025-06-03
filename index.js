
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/gold-prices', (req, res) => {
res.json({
{
  "timestamp": 1748932281,
  "metal": "XAU",
  "currency": "SAR",
  "exchange": "GOLDAPI",
  "symbol": "GOLDAPI:XAUSAR",
  "open_time": 1748908800,
  "ask": 12617.0887,
  "bid": 12613.0751,
  "price": 12615.2132,
  "ch": -69.281,
  "price_gram_24k": 405.5885,
  "price_gram_22k": 371.7895,
  "price_gram_21k": 354.89,
  "price_gram_20k": 337.9904,
  "price_gram_18k": 304.1914,
}
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

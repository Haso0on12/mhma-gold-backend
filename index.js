
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/gold-prices', (req, res) => {
  res.json({
    "24K": { sell: "280", buy: "285" },
    "22K": { sell: "260", buy: "265" },
    "21K": { sell: "250", buy: "255" },
    "18K": { sell: "220", buy: "225" }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

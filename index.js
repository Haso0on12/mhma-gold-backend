
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/gold-prices', (req, res) => {
res.json({
  "24K": { sell: "287.90", buy: "290.00" },
  "22K": { sell: "263.85", buy: "266.00" },
  "21K": { sell: "251.50", buy: "254.00" },
  "18K": { sell: "215.50", buy: "218.00" }
});

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

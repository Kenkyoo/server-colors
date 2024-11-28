const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    let data = fs.readFileSync('colornames.json');
    let colorNames = JSON.parse(data);
    res.json(colorNames);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

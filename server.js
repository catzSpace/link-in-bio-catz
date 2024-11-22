const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use(express.static(path.join(__dirname, 'public')));

// main route
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

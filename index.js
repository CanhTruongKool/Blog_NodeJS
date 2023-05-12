const express = require('express')
const app = express()
const port = 3000
// neu then trangchu vao sau / thi luc duyet web cung phai them trang chu sau port
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
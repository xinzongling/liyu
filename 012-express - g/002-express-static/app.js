const express = require('express')
const app = express()



app.use(express.static('static'));

app.get('/', (req, res) => res.send('<h1>Hello World! 世界</h1>'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
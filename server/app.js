const express = require('express');
const cors = require('cors')

const PORT = 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

const index = require('./routes/index')

app.use('/', index);

app.listen(PORT, () => {
  console.log('Server start on port ', PORT)
})

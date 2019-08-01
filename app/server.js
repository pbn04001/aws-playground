#!/usr/bin/env node

// server.js
const express = require('express')

const app = express()
const port = 3000

app.use(express.json());

require('./routes')(app, {})

app.listen(port, () => {
  console.log('We are live on ' + port)
});


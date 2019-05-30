const express = require('express');
const bodyParser = require('body-parser');
const data = require('./order.json');
let app = express();
let code = '';
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.listen(8081,() => {
	
})
app.get('/list',(req,res) => {
	res.send(data)
})
app.get('/video',(req,res) => {
	res.send(data.video)
})
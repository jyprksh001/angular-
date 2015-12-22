var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var mysql=require('mysql');

app.use(bodyparser.json()); 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@nurAdh2',
  database : 'remitr',
  port: 3306,
  multipleStatements: true
});

connection.connect(function(err) {
  if (err) console.log(err);
  console.log('connection established');
});

exports.data = app.get('/exchangedata',function(req,res){
	var sql='SELECT 1 + 1 AS solution';
   	connection.query(sql,function(err,rows){
		if(err) throw err;
		console.log(rows[0].solution);
		res.json(rows[0].solution);
	});

})



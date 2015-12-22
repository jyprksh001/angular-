var express=require('express');
var app=express();
var mysql=require('mysql');
app.use(express.static(__dirname+'/public'))
//app.use('/api',api)
app.get('/test',function(req,res){
	res.json({});
})

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

app.get('/exchangedata',function(req,res){
var sql="SELECT * FROM `fx_rate_web_scraped` WHERE ts=(SELECT MAX(ts) from `fx_rate_web_scraped` where dst_curr in ("
	+'"GBP","LBP","EGP","JOD","OMR","KWD","BHD","QAR","SAR","INR","PKR","YER","MAD","CHF","CAD","THB","SGD","JPY","AUD","MYR","PHP","TND","IDR","BDT","LKR","NZD","EUR","USD","NPR","SEK","DKK","NOK","BND","TWD","ETB","CNY","DZD") AND exchange_house='+"'Alan Sarie Exchange')";
   	connection.query(sql,function(err,rows){
		if(err) throw err;
		console.log(rows);
		res.json(rows);
	});
})

app.get('*', function(req,res){
		res.sendFile(__dirname+'/public/main.html')
	}).listen(3000);



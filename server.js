var express = require('express');
var app = express();
var request = require('request');
var qs = require('qs');

app.use(express.static('root'));

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'),function(){
	console.log(`Expressサーバー（localhost:${port}）を起動しました。`);
});

app.get('/api/',function(req,res){

	const locationQuery = qs.stringify(req.query);
	const requestUrl = `https://qiita.com/api/v2/items?per_page=20&${locationQuery}`;
	const token = '3fe2983f7495c537ce2eb404d7dd730ad64aa4a3';

	const headers = {
		'Authorization': `Bearer ${token}`
	};

	const option = {
		url: requestUrl,
		headers: headers
	}

	request(option,function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const article = JSON.parse(body);
			const head = response.headers
			
			res.json(article);
		}
	})
});
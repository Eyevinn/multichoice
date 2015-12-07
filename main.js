
var http        = require( 'http'        );
var fs          = require( 'fs'          );
var express     = require( 'express'     );
var url         = require( 'url'         );
var qstring     = require( 'querystring' );
var bodyParser  = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/channels', function (req, res)
{

    res.send(
        [
            { checked: 1, 
              url: "http://host1.com/path?arg=something", name:"Hobby channel" },
            { checked: 0, 
              url:"http://host2.com/path?arg=something", name:"Work channel" },
            { checked: 0, 
              url: "http://host3.com/path?arg=something", name:"Leisure channel" },
            { checked: 0, 
              url:"http://host4.com/path?arg=something", name:"Money channel" },
        ] );


});

app.put('/channels', function(req,res)
{
    console.log( req );

    res.status(200);
    res.end();
});


// app.listen(8080);
var server = app.listen(8080, function ()
{
	console.log('multichoice test app listening at http://%s:%s', 'localhost', server.address().port);
});

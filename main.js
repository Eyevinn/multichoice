
var http        = require( 'http'        );
var fs          = require( 'fs'          );
var express     = require( 'express'     );
var url         = require( 'url'         );
var qstring     = require( 'querystring' );

var app = express();

app.use(express.static('public'));

app.get('/channels', function (req, res)
{

    res.send(
        [
            { num:1, name:"hobby"    },
            { num:2, name:"work"     },
            { num:3, name:"leisure"  },
            { num:4, name:"contract" },
        ] );


});

app.post('/channels', function(req,res)
{
    console.log( req.body );

    res.status(200);
    res.end();
});

// app.listen(8080);
var server = app.listen(8080, function ()
{
	console.log('multichoice test app listening at http://%s:%s', 'localhost', server.address().port);
});

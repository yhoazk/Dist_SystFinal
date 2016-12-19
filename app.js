/*var express = require("express");
var app = express();
var geohash = require("geohash").GeoHash;
 
// route routing is very easy with express, this will handle the request for root directory contents.
// :id is used here to pattern match with the first value after the forward slash.
app.get("/:id",function (req,res)
    {
                //decode the geohash with geohash module
        var latlon = geohash.decodeGeoHash(req.params["id"]);
        console.log("latlon : " + latlon);
        var lat = latlon.latitude[2];
        console.log("lat : " + lat);
        var lon = latlon.longitude[2];
        console.log("lon : " + lon);
        zoom = req.params["id"].length + 2;
        console.log("zoom : " + zoom);
        // now we use the templating capabilities of express and call our template to render the view, and pass a few parameters to it
        res.send("index.html", { layout: false, lat:lat, lon:lon, zoom:zoom, geohash:req.params["id"]});
    });
 
app.listen(9999);*/

var express = require("express");
var app     = express();
var path    = require("path");
app.set('views', __dirname + '/views');

// set the view engine to ejs
app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies

var hive = require('node-hive').for({server:'localhost'})
var json_arr = [ {lat: 20.6909, lng: -103.3556},
                      {lat: 20.6929, lng: -103.3536},
                      {lat: 20.6949, lng: -103.3516},
                      {lat: 20.6969, lng: -103.3496},
                      {lat: 20.6989, lng: -103.3476}];
app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'/index.html'));
  res.render('index', {lat: "20.693", lon:"-103.35", zoom:"13", json_arrc:json_arr})
  console.log("b4");
//  hive.fetch("show tables;", function(err, data) {
//  data.each(function(record) {
//    console.log(record);
//  });
//  console.log("aftr");
//});
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.post('/id', function(req,res){
        var id = req.body.id;
        var x = req.body.xcoord;
        function t (d){ return {'lat':d.lat, 'lng':d.lng}} 
        console.log("id"+req.url);
     //   json_arr = (Object.keys(req.body))
        json_arrFull = JSON.parse("["+Object.keys(req.body)+"]")
        json_arr = json_arrFull.map(t)

        console.log("id"+req.url);
        console.log("bdy"+Object.keys(req.body));
        console.log("js"+json_arr[1].id);
        console.log("js"+json_arr[1].lat);
        console.log("js"+json_arr[1].lng);
        //console.log("x"+x);
        //console.log("q"+res);
        res.end('rec')
    });

app.listen(3000);

console.log("Running at Port 3000");

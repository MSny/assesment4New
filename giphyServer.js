// Declare dependencies 
var request = require('request');
var url = require('url') 

var express = require('express')
var app = express();

var ejs = require('ejs');
app.set("view_engine", "ejs");
// save search term
var searchTerm = "";
// save gif URL globally
var gifUrl = ""
//declare port
var port = 3000;

//create a redirect to compensate for misspelling
app.get("/", function (req, res){
	res.redirect("/search")
});

//
app.get("/search", function (req, res){
	//console.log(res)
	if(req.method == "GET"){
       var url_parts = url.parse(req.url,true);
       searchTerm = url_parts.query.search;
       console.log(searchTerm);
       //save API call route to variable 
    var giphyAPI = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&limit=2&api_key=dc6zaTOxFJmzC"
       // consume API
request(giphyAPI, function(err, response, body){
	if (err){
		console.log(err)
	} else {
		var parsed = JSON.parse(body)
		 gifUrl = parsed.data[0].images.original.url
		console.log(giphyAPI)
		console.log(gifUrl)
		//var gifs = 
	}
})
   }
	
	res.render("searchPage.ejs", {thisUrl: gifUrl});
});
//show result page
app.get("/search/results", function (req, res){
	var thisUrl = gifUrl
	//console.log(req.params.id)
	//console.log(thisStudent.id)
	res.render('resultPage.ejs', {thisUrl: thisUrl})
});

//create listen function
app.listen(3000)
console.log("listening on 3000")

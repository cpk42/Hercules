// get walking directions from central park to the empire state building
var http = require('http');
const request = require("request");
// var request = require('request');

// const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
var url = "http://api.intra.42.fr";
request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(
	  
    //`City: ${json.results[0].formatted_address} -`,
    // `Latitude: ${json.results[0].geometry.location.lat} -`,
    // `Longitude: ${json.results[0].geometry.location.lng}`
  );
});


var config = {
	uid: 'b2e9c81e391c7285a5a54e07144eb25cb357d37db22faa9c37abe89a5ed136f0',
	secret: '4674381edd5086bf512aa61c7733393d6b7fa4dd1b0904031f5a830dd366a845',
	grant_type: 'client_credentials'
}

console.log(config.uid + '\n' + config.secret)

// // get is a simple wrapper for request()
// // which sets the http method to GET
// var request = http.get(url, function (response) {
//     // data is streamed in chunks from the server
//     // so we have to handle the "data" event
// var buffer = "",
//     data,
//     route;
//
// response.on("data", function (chunk) {
//     buffer += chunk;
// });
//
// response.on("end", function (err) {
//     // finished transferring data
//     // dump the raw data
//     console.log(buffer);
//     console.log("\n");
//     data = JSON.parse(buffer);
//     // route = data.routes[0];
//
//     // extract the distance and time
//     // console.log("Walking Distance: " + route.legs[0].distance.text);
//     // console.log("Time: " + route.legs[0].duration.text);
//     });
// });


// // get walking directions from central park to the empire state building
// var http = require("http");
//     url = "http://maps.googleapis.com/maps/api/directions/json?origin=Central Park&destination=Empire State Building&sensor=false&mode=walking";
//
// // get is a simple wrapper for request()
// // which sets the http method to GET
// var request = http.get(url, function (response) {
//     // data is streamed in chunks from the server
//     // so we have to handle the "data" event
//     var buffer = "",
//         data,
//         route;
//
//     response.on("data", function (chunk) {
//         buffer += chunk;
//     });
//
//     response.on("end", function (err) {
//         // finished transferring data
//         // dump the raw data
//         console.log(buffer);
//         console.log("\n");
//         data = JSON.parse(buffer);
//         route = data.routes[0];
//
//         // extract the distance and time
//         console.log("Walking Distance: " + route.legs[0].distance.text);
//         console.log("Time: " + route.legs[0].duration.text);
//     });
// });



// require('dotenv').config();
// const jQuery = require('jquery')
// const ajax = require('ajax')
//
// jQuery.ajax({
// 	url: "/rest/abc",
//     type: "GET",
//
//     contentType: 'application/json; charset=utf-8',
//     success: function(resultData) {
// 			console.log("here")
// 			//here is your json.
// 			// process it
// 	},
//     error : function(jqXHR, textStatus, errorThrown) {
// 	},
// 	timeout: 120000,
// });
//
//




/*const fetch = require("http")

fetch("https://api.intra.42.fr")

.then(function() {
		console.log(users.location);
	})
.catch(function() {
		console.log("error");
})

var xhr = new XMLHttpRequest();
xhr.open("GET", "api.intra.42.fr", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);*/

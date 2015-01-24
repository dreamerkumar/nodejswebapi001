
var request = require('request');
var should = require("should");
var portNumber = 1234; //change this to a different port if this is not available
var hostUrl = "http://localhost"; //change this to the hosted url if not deployed locally

describe("test setup", function(){

	var url = hostUrl + ":" + portNumber;
	
	before(function(done){
		require('../module')(portNumber);
		done();
	});

	describe("web api service", function(){
		it("returns a response", function(done){
			
			request(url, function (error, response, body) {
			  	
			  	describe("response", function(){
				  	it("should not return error", function(){
					  	console.log('here');
					  	should.not.exist(error);
					  	should.exist(response);
				  	});

				  	it("should return a status code of 200", function(){
				  		response.statusCode.should.equal(200);
				  	});
				  	
				  	it("should return a content type of json", function(){
				  		should.exist(response.headers);
				  		response.headers['content-type'].should.equal('application/json');		
				  	});	  	
				  	
				  	it("should return a json with a fixed value for the site property", function(){
					  	should.exist(response.body);
					  	var responseJson = JSON.parse(response.body);
					  	should.exist(responseJson);
					    responseJson.site.should.equal("My take on IT");
					});
				});
			 
			  	done();
			});	
		});
	});
});
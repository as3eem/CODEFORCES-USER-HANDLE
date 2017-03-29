function reqListener () {
  console.log(JSON.parse(this.responseText));
  var a = JSON.parse(this.responseText);
  //var b = document.createElement("img");
  //b.src = a.result[0].avatar;
  document.getElementById("handle").src=a.result[0].avatar;
  var c=document.getElementById("un");
  c.innerHTML="Handle : "+ a.result[0].handle;
  var names =document.getElementById("names");
  names.innerHTML="Name: "+a.result[0].firstName+" "+a.result[0].lastName;



  //separated 


  
  var email=document.getElementById("email");
  var city=document.getElementById("city");
  var organisation=document.getElementById("organisation");
  var contrib=document.getElementById("contrib");
  var friendOfCount=document.getElementById("friendOfCount");
  var maxRank=document.getElementById("maxRank");
  var maxRating=document.getElementById("maxRating");
  var rank=document.getElementById("rank");
  var rating=document.getElementById("rating");
  var lastOnline=document.getElementById("lastOnline");
  var regTime=document.getElementById("regTime");





  email.innerHTML="E-mail : "+ a.result[0].email;
  organisation.innerHTML="Organisation : "+ a.result[0].organization;
  contrib.innerHTML="Contribution : "+ a.result[0].contribution;
  friendOfCount.innerHTML="Friend of count : "+ a.result[0].friendOfCount;
  city.innerHTML="City : "+ a.result[0].city;
  maxRating.innerHTML="Max Rating : "+ a.result[0].maxRating;
  maxRank.innerHTML="Max Rank : "+ a.result[0].maxRank;
  rank.innerHTML="Rank : "+ a.result[0].rank;
  rating.innerHTML="Rating : "+ a.result[0].rating
  lastOnline.innerHTML="Time since last login : "+ a.result[0].lastOnline;
  regTime.innerHTML="Time since registered : "+ a.result[0].regTime;


  //var alpha = document.createElement("p");
  //alpha.innerHTML = this.responseText;
  //document.body.appendChild(alpha);
}

function errorDisplay(){
	var error=document.getElementById("error");
	error.innerHTML="USERNAME DOES NOT EXIST";

  var email=document.getElementById("email");
  var city=document.getElementById("city");
  var organisation=document.getElementById("organisation");
  var contrib=document.getElementById("contrib");
  var friendOfCount=document.getElementById("friendOfCount");
  var maxRank=document.getElementById("maxRank");
  var maxRating=document.getElementById("maxRating");
  var rank=document.getElementById("rank");
  var rating=document.getElementById("rating");
  var lastOnline=document.getElementById("lastOnline");
  var regTime=document.getElementById("regTime");




  var c=document.getElementById("un");
  c.innerHTML="";
  var names =document.getElementById("names");
  names.innerHTML="";
  document.getElementById("handle").src="";
  email.innerHTML="";
  organisation.innerHTML="";
  contrib.innerHTML="";
  friendOfCount.innerHTML="";
  city.innerHTML="";
  maxRating.innerHTML="";
  maxRank.innerHTML="";
  rank.innerHTML="";
  rating.innerHTML="";
  lastOnline.innerHTML="";
  regTime.innerHTML="";


}


function abc(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.addEventListener("error", errorDisplay)
oReq.open("GET", url);
oReq.send();
}

function loadDoc(){
	document.getElementById("handle").innerHTML = "";
var inpu = document.getElementById("username");
abc("http://codeforces.com/api/user.info?handles="+inpu.value);
var error=document.getElementById("error");
	error.innerHTML="";
	
}
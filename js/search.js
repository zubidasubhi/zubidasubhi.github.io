var APIkey = "api_key=a1d7aeadeab7b9ed2ce660fff95dc200";
//Sectret=
//c915a2554ca01bbc186323c48505b494
//DMS facebook page ID = 1493089840986763
FB.init({appId:'1493089840986763', xfbml: true, version:'v2.5' });

	
$(document).ready(function () {
	getAlbum();
    $('#go').click(function () {
    $('#splash').slideUp();
    $('#thumbView').slideDown(3000);
    $('#ani').hide();
    });

    $('#backBtn').click(function(){
    $('#splash').slideDown(1000);
    $('#thumbView').hide();
    $('#ani').slideDown(3000);
    });
    
    $('#go').click(function() {
    $('#sideMenu').hide();
    $('#sideMenu').show(1000);
    });

    $('#searchBtn').click(function(){
        sizesReturn = 0;
        searchPhoto();
    });
    
    //kb event handling
    $(function printKey(event){
        var tf = document.getElementById("searchTxt");
        $('#searchTxt').keydown(function(event) {       
            if (event.keyCode == 13) {
                sizesReturn = 0;
                searchPhoto();

            }
        });
    });
});

 
function myFunction(){
    alert("This Feature Isn't Available");
}



  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      //testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
FB.login(function(response) { 
	if (response.authResponse) { 
	console.log('You are logged in.'); 
	console.log(response);	
	FB.api('/me', function(response) { 
	console.log(response); 
	FB.api('/815157038515764','get',
	{"fields": "description"},
	function(response) {
      console.log("description is here");
			console.log(response);
				var htmlStr = response.description;
				$('#description').html(htmlStr);
				});
				
	});			
	getAlbum();			
	
	} else { console.log('User cancelled login or did not fully authorize.'); }}, 
{scope: 'publish_actions'});

//getting all the pictures from the album in DMS by using the Graph Api
function getAlbum(){
	FB.api('/815157038515764', 'get', {"fields": "albums{location}"}, function(location){
		FB.api('/815157038515764', 'get', {"fields": "albums{photos(images)}"}, function(covers){
			FB.api('/815157038515764', 'get', {"fields": "albums"}, function(response){
				var names =[];
				var coverImg = [];
				var locals =[];
				
				for(var i =0; i < response.albums.data.length; i++) {
					names.push(response.albums.data[i]);
					console.log('response', response);
				}
				/*for (var i = 0; i< covers.albums.data.length; i++){
					for (var j = 0; j < covers.albums.data[i].photos.data.length; j++) {
						coverImg.push(covers.albums.data[i].photos.data[j].images[0].source);
						console.log('covers', covers);
					}
				}
				for(var i =0; i< location.albums.data.length; i++){
					var country = location.albums.data[i].location;
					console.log('location', location);
					locals.push(location.albums.data[i].location);
					console.log('location2', location);
				}*/
				var htmlStr = '';
				for (var i =0; i< names.length; i++){
					if(names[i].id != '823234927707975' || names[i].id != '81931054476780'){
					htmlStr += "<figure id='"+names[i].id+"'><img src='"+coverImg[i]+"' alt='"+names[i].name+"' width='320' height='320'><figcaption>"+names[i].name+"</figcaption></figure>";
					}
				}
				$('#albums').html(htmlStr);
				console.log('names', names);
				console.log('coverImg',coverImg );
				console.log('locals',locals );
			});
		});
	});
}




  

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
   statusChangeCallback(response);
  });
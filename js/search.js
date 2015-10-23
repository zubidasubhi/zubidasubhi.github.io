var APIkey = "api_key=a1d7aeadeab7b9ed2ce660fff95dc200";
//Sectret=
//969413b3fc01015c
//DMS facebook page ID = 815157038515764

$(document).ready(function () {
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

 /* $(document).ready(function() {
    $.getJSON('https://graph.facebook.com/815157038515764/photos/uploaded?limit=50', function(fbResults) {
        $.each(fbResults.data, function() {
            var urlLarge = this.images[0].source;
			var urlSmall = this.images[this.images.length-2].source;
			
			$('<figure><a href="'+urlLarge+'" data-lightbox="image-i" data-title="'+this.name+'"><img src="'+urlSmall+'" width="320" height ="320"></a><figcaption>"'+this.name+' | '+this.likes.data.length+' Likes"</figcaption></figure>').appendTo('#thumbnails');
			  
               //$('<figure><a href="'+urlLarge+'" data-lightbox="image-i" data-title="'+this.name+'"><img src="'+urlSmall+'" width="320" height ="320"></a><figcaption>'+this.name+' <br> Number of Likes: '+this.likes.data.length+'</figcaption></figure>').appendTo('#thumbnails')
                
            })

            console.log(urlLarge);
			})
        });
		*/
			/*urlLarge = this.images[0]
			urlSmall = this.images[this.images.length-2]
			$('<figure><a href="+urlLarge+'" data-lightbox="image-1" data-title="''"><img src="'+urlSmall+'" id="" width="320" height ="320"></a><figcaption>''</figcaption></figure>').appendTo('#thumbnails');
    */
/* $(document).ready(function() {
    $.getJSON('https://graph.facebook.com/815157038515764', function(fbDesc) {
        $('#aboutDesc').append('<div><p>'+fbDesc.description+'</p></div>');
})
}); */
function myFunction(){
    alert("This Feature Isn't Available");
}

function getDesc(){
	var descStr = 'https://graph.facebook.com/v2.1/815157038515764?fields=description' + '&' + 'CAACEdEose0cBAFZCRJx10etgRBcmRScWYP2VxQpbLl0Oqu2v2ifdPQ70Afo0FbdgAZAlbtWq2jBdTZCMSaVUJgCQocKyLz8JFEFif7MAJDV1ZCkIZCwZC6M6DDhevkDSFZAwP4Ych1qdBlGLMF5eREOIuJy1PMEc8P6PKMC8cDJMdZBFAlig0CkAivpxv9OCkUnaxpaBJaZCKaQZDZD';
	//$.get(descStr, function(descData){
		console.log(descData);
	//});
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
      testAPI();
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
});
} else { console.log('User cancelled login or did not fully authorize.'); }}, {scope: 'publish_stream'});

  

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

  
  
  
  
  //FB.getLoginStatus(function(response) {
   // statusChangeCallback(response);
  //});

 

  // Load the SDK asynchronously


  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.




/*
function getDMSPhoto(){
	var DMSStr = 'https://graph.facebook.com/v2.1/815157038515764?fields=albums{photos.limit(15),description,id,name,likes}'+APIkey+'&text='+searchTxt.value+'&per_page=20&format=json&nojsoncallback=1';
    $.get(DMSStr,function(data){
        //console.log(data);
        fetchLink(data);
        });
}

function fetchLink(data){
    photos = [];
    numPhotos = data.photos.photo.length;
    for(var i = 0; i < data.photos.photo.length; i++){
        //console.log(data.photos.photo[i].id);
        var photoObj = {id: data.photos.photo[i].id, description: data.photos.photo[i].title};
        
        photos.push(photoObj);
        getImage(photoObj);
    }
}
*/


window.onload = function() {
    
    gapi.load('auth2', function () {
      gapi.auth2.init();
    });
    }
    
    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      var id_token = googleUser.getAuthResponse().id_token;  
      console.log(id_token);
      
      $.post( "/authenticate", {token: id_token}, function( data ) {
      //  alert(data);
      //you will want to redirect when authentication is complete
      });
    
      // $.ajax({
      //   type: "POST",
      //   url: "",
      //   data: id_token,
      //   dataType: 'application/x-www-form-urlencoded'
      // });
      // console.log('Signed in as: ' + xhr.responseText);
      // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      // console.log('Name: ' + profile.getName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    };
    
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
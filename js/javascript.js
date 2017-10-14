    var projectName1 = '';
    var proposedBudget1 = '';
    var actualBudget1 = '';
    var proposedTimeline1 = '';
    var actualTimeline1 = '';

    var projectName2 = '';
    var proposedBudget2 = '';
    var actualBudget2 = '';
    var proposedTimeline2 = '';
    var actualTimeline2 = '';

    var projectName3 = '';
    var proposedBudget3 = '';
    var actualBudget3 = '';
    var proposedTimeline3 = '';
    var actualTimeline3 = '';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDl9cmuim4Z2_e6Mc3CQMTrS11gphe8RJg",
    authDomain: "coconstruct-471a8.firebaseapp.com",
    databaseURL: "https://coconstruct-471a8.firebaseio.com",
    projectId: "coconstruct-471a8",
    storageBucket: "coconstruct-471a8.appspot.com",
    messagingSenderId: "922787842286"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#contact-submit").on("click", function(event) {
    event.preventDefault();
    // Save our user inputs into variables
    var clientName = $("#name-input").val().trim();
    var address = $("#address-input").val().trim();
    var email = $("#email-input").val().trim();
    var phone = $("#phone-input").val().trim();

    // Store our 4 variables into the object clientInfo
    var clientInfo = {
        clientName: clientName,
        address: address,
        email: email,
        phone: phone
    };
   
    // Push our variables onto firebase using the .push method which is used instead of .set because we want a new entry to save for each train rather than overwriting the same one
    database.ref("/clientInfo").push(clientInfo);
});

$("#budget-submit").on("click", function(event) {
    event.preventDefault();
    // Save our user inputs into variables


    var projectName1 = $("#project-input1").val().trim();
    var proposedBudget1 = $("#budget-input1").val().trim();
    var actualBudget1 = $("#actualBudget-input1").val().trim();
    var proposedTimeline1 = $("#timeline-input1").val().trim();
    

    var projectName2 = $("#project-input2").val().trim();
    var proposedBudget2 = $("#budget-input2").val().trim();
    var actualBudget2 = $("#actualBudget-input2").val().trim();
    var proposedTimeline2 = $("#timeline-input2").val().trim();
    

    var projectName3 = $("#project-input3").val().trim();
    var proposedBudget3 = $("#budget-input3").val().trim();
    var actualBudget3 = $("#actualBudget-input3").val().trim();
    var proposedTimeline3 = $("#timeline-input3").val().trim();
   

    // Store our 5 variables into the object completeTrainInfo
    var budgetInfo = {

        projectName1: projectName1,
        proposedBudget1: proposedBudget1,
        actualBudget1: actualBudget1,
        proposedTimeline1: proposedTimeline1,
       

        projectName2: projectName2,
        proposedBudget2: proposedBudget2,
        actualBudget2: actualBudget2,
        proposedTimeline2: proposedTimeline2,
       

        projectName3: projectName3,
        proposedBudget3: proposedBudget3,
        actualBudget3: actualBudget3,
        proposedTimeline3: proposedTimeline3
        
    };

    // Push our variables onto firebase using the .push method which is used instead of .set because we want a new entry to save for each train rather than overwriting the same one
    database.ref("/budgetInfo").push(budgetInfo);
});

// Anytime the page is loaded or a new contact is added we want to update all the trains using the firebase database.
database.ref("/budgetInfo").on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    // Store firebase data into these variables

    var projectName1 = childSnapshot.val().projectName1;
    var proposedBudget1 = childSnapshot.val().proposedBudget1;
    var actualBudget1 = childSnapshot.val().actualBudget1;
    var proposedTimeline1 = childSnapshot.val().proposedTimeline1;
    

    var projectName2 = childSnapshot.val().projectName2;
    var proposedBudget2 = childSnapshot.val().proposedBudget2;
    var actualBudget2 = childSnapshot.val().actualBudget2;
    var proposedTimeline2 = childSnapshot.val().proposedTimeline2;
    

    var projectName3 = childSnapshot.val().projectName3;
    var proposedBudget3 = childSnapshot.val().proposedBudget3;
    var actualBudget3 = childSnapshot.val().actualBudget3;
    var proposedTimeline3 = childSnapshot.val().proposedTimeline3;
    

var countDownDate1 = new Date(proposedTimeline1).getTime();


// Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now1 = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now1;
    
    // Time calculations for days, hours, minutes and seconds
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    

    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days1 + "d " + hours1 + "h "
    + minutes1 + "m " + seconds1 + "s ";
    
    // If the count down is over, write some text 
    if (distance1 < 0) {
        clearInterval(x);
        document.getElementById("demo1").innerHTML = "EXPIRED";
        console.log(document.getElementById("demo1"))
    }
}, 1000);

if (proposedTimeline2 != "") {

var countDownDate2 = new Date(proposedTimeline2).getTime();


// Update the count down every 1 second
    var y = setInterval(function() {

    // Get todays date and time
    var now2 = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance2 = countDownDate2 - now2;
    
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    

    // Output the result in an element with id="demo"
    document.getElementById("demo2").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";
    
    // If the count down is over, write some text 
    if (distance2 < 0) {
        clearInterval(y);
        document.getElementById("demo2").innerHTML = "EXPIRED";
    }
}, 1000);

}

if (proposedTimeline3 != "") {

var countDownDate3 = new Date(proposedTimeline3).getTime();


// Update the count down every 1 second
    var z = setInterval(function() {

    // Get todays date and time
    var now3 = new Date().getTime();coo
    
    // Find the distance between now an the count down date
    var distance3 = countDownDate3 - now3;
    
    // Time calculations for days, hours, minutes and seconds
    var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    

    // Output the result in an element with id="demo"
    document.getElementById("demo3").innerHTML = days3 + "d " + hours3 + "h "
    + minutes3 + "m " + seconds3 + "s ";
    
    // If the count down is over, write some text 
    if (distance3 < 0) {
        clearInterval(z);
        document.getElementById("demo3").innerHTML = "EXPIRED";
    }
}, 1000);

}

$("#display1").html("<tr><td>" + projectName1 + "</td><td>" + proposedBudget1 + "</td><td>" +
        actualBudget1 + "</td><td>" + proposedTimeline1 + "</td><td>" + "<p id='demo1'></p>" + "</td></tr>");

    $("#display2").html("<tr><td>" + projectName2 + "</td><td>" + proposedBudget2 + "</td><td>" +
        actualBudget2 + "</td><td>" + proposedTimeline2 + "</td><td>" + "<p id='demo2'></p>" + "</td></tr>");

     $("#display3").html("<tr><td>" + projectName3 + "</td><td>" + proposedBudget3 + "</td><td>" +
        actualBudget3 + "</td><td>" + proposedTimeline3 + "</td><td>" + "<p id='demo3'></p>" + "</td></tr>");

    $("#clientViewProject1").html("<tr><td>" + projectName1 + "</td><td>" + proposedBudget1 + "</td><td>" +
        actualBudget1 + "</td><tr>");

    $("#clientViewProject2").html("<tr><td>" + projectName2 + "</td><td>" + proposedBudget2 + "</td><td>" +
        actualBudget2 + "</td><tr>");

    $("#clientViewProject3").html("<tr><td>" + projectName3 + "</td><td>" + proposedBudget3 + "</td><td>" +
        actualBudget3 + "</td><tr>");

    $("#clientViewTimeline1").html("<tr><td>" + projectName1 + "</td><td>" + proposedTimeline1 + "</td><td>" +
        "<p id='demo1'></p>" + "</td><tr>");

    $("#clientViewTimeline2").html("<tr><td>" + projectName2 + "</td><td>" + proposedTimeline2 + "</td><td>" +
        "<p id='demo2'></p>" + "</td><tr>");

    $("#clientViewTimeline3").html("<tr><td>" + projectName3 + "</td><td>" + proposedTimeline3 + "</td><td>" +
        "<p id='demo3'></p>" + "</td><tr>");

    $("#project-input1").val(projectName1);
    $("#budget-input1").val(proposedBudget1);
    $("#actualBudget-input1").val(actualBudget1);
    $("#timeline-input1").val(proposedTimeline1);
   

    $("#project-input2").val(projectName2);
    $("#budget-input2").val(proposedBudget2);
    $("#actualBudget-input2").val(actualBudget2);
    $("#timeline-input2").val(proposedTimeline2);
    

    $("#project-input3").val(projectName3);
    $("#budget-input3").val(proposedBudget3);
    $("#actualBudget-input3").val(actualBudget3);
    $("#timeline-input3").val(proposedTimeline3);

});


    // $("#display1").html("<tr><td>" + projectName1 + "</td><td>" + proposedBudget1 + "</td><td>" +
    //     actualBudget1 + "</td><td>" + proposedTimeline1 + "</td><td>" + "<p id='demo1'></p>" + "</td></tr>");

    // $("#display2").html("<tr><td>" + projectName2 + "</td><td>" + proposedBudget2 + "</td><td>" +
    //     actualBudget2 + "</td><td>" + proposedTimeline2 + "</td><td>" + "<p id='demo2'></p>" + "</td></tr>");

    //  $("#display3").html("<tr><td>" + projectName3 + "</td><td>" + proposedBudget3 + "</td><td>" +
    //     actualBudget3 + "</td><td>" + proposedTimeline3 + "</td><td>" + "<p id='demo3'></p>" + "</td></tr>");

    // $("#clientViewProject1").html("<tr><td>" + projectName1 + "</td><td>" + proposedBudget1 + "</td><td>" +
    //     actualBudget1 + "</td><tr>");

    // $("#clientViewProject2").html("<tr><td>" + projectName2 + "</td><td>" + proposedBudget2 + "</td><td>" +
    //     actualBudget2 + "</td><tr>");

    // $("#clientViewProject3").html("<tr><td>" + projectName3 + "</td><td>" + proposedBudget3 + "</td><td>" +
    //     actualBudget3 + "</td><tr>");

    // $("#clientViewTimeline1").html("<tr><td>" + projectName1 + "</td><td>" + proposedTimeline1 + "</td><td>" +
    //     actualTimeline1 + "</td><tr>");

    // $("#clientViewTimeline2").html("<tr><td>" + projectName2 + "</td><td>" + proposedTimeline2 + "</td><td>" +
    //     actualTimeline2 + "</td><tr>");

    // $("#clientViewTimeline3").html("<tr><td>" + projectName3 + "</td><td>" + proposedTimeline3 + "</td><td>" +
    //     actualTimeline3 + "</td><tr>");

    // $("#project-input1").val(projectName1);
    // $("#budget-input1").val(proposedBudget1);
    // $("#actualBudget-input1").val(actualBudget1);
    // $("#timeline-input1").val(proposedTimeline1);
   

    // $("#project-input2").val(projectName2);
    // $("#budget-input2").val(proposedBudget2);
    // $("#actualBudget-input2").val(actualBudget2);
    // $("#timeline-input2").val(proposedTimeline2);
    

    // $("#project-input3").val(projectName3);
    // $("#budget-input3").val(proposedBudget3);
    // $("#actualBudget-input3").val(actualBudget3);
    // $("#timeline-input3").val(proposedTimeline3);
   
  


database.ref("/clientInfo").on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    // Store firebase data into these variables
    var clientName = childSnapshot.val().clientName;
    var address = childSnapshot.val().address;
    var email = childSnapshot.val().email;
    var phone = childSnapshot.val().phone;


    $("#address").html(address);
    $("#phone").html(phone);
    $("#email").html(email);

    $("#name-input").val(clientName);
    $("#address-input").val(address);
    $("#email-input").val(email);
    $("#phone-input").val(phone);

});

database.ref("/images").on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val().uri);

        var image = childSnapshot.val().uri;
    
    $("#displayImages").append("<a href=" + image + "><img 'class=img-thumbnail height=250px width=100% src=" + image + "></a><br><br>");
    
});

const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = uri
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = storage.ref('client').child(`${sessionId}`)
    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
    })
  })
}

 var fileButton = document.getElementById("fileButton");
              
              fileButton.addEventListener('change', function(e){

                  var file = e.target.files[0];
                  console.log('File name being uplaoded is : ' + file.name);
                  var storageRef = firebase.storage().ref("files").child(file.name);
                  storageRef.put(file);
                  console.log('successfully uploaded');


                  storageRef.getDownloadURL().then(function(url) {
                    console.log('getting download url');
                    var downloaduri = url;

                    $("#lblFile").text(downloaduri); //store this url for opening the file


                    //open the file using below statement. make sure you allow the site to open popups in Chrome
                    window.open(downloaduri);
                    
                 });  
                });
           


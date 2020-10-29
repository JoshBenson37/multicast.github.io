 // width="560" height="315"
// YOUTUBE PLAYER
// https://www.youtube.com/watch?v=NGvGk8rg0E4

var count = 0
var vidEmbed = ""
var vidLink = ""
var hash = "#header"


function scrollTo(hash) {
    location.hash = "#" + hash;
}

scrollTo()

function sc() {
  var scInput = prompt("Please enter the SoundCloud song link")

  var scLink = "https://w.soundcloud.com/player/?url=!";
  var scOutput = scLink.concat(scInput);
  document.getElementById("scEmbed").src = scOutput
}

window.onkeypress = function(event) {
   if (event.keyCode == 171) {
    document.getElementById("videoC").checked = true;
   }
}


function toggleFullScreen() {


        


  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}


function mirrorFunction() {
  if (document.getElementById("mirrorV").checked == true) {
    document.getElementById('videoElement').id = 'videoElementMirrored';
  }
  if (document.getElementById("mirrorV").checked == false) {
    document.getElementById('videoElementMirrored').id = 'videoElement';
  }
}


function checkFunction() {
  
        document.getElementById('iframeid').src += '';
  // All
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "50%"
      document.getElementById('div2').style.width = "50%"
      document.getElementById('div3').style.width = "50%"
      document.getElementById('div4').style.width = "50%"
      // Height
      document.getElementById('div1').style.height = "46.9%"
      document.getElementById('div2').style.height = "46.9%"
      document.getElementById('div3').style.height = "46.9%"
      document.getElementById('div4').style.height = "46.9%"

      

      
  }
  // Video
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "100%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "94%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "0%"

      

      
  }
// Webcam
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "100%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "94%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "0%"

      

      
    }

  // Slideshow
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "100%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "94%"
      document.getElementById('div4').style.height = "0%"

      

      
  }

  // Whiteboard
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "94%"

      

      
  }
  // Webcam, Video
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "100%"
      document.getElementById('div2').style.width = "100%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "0%"

      

      
  }
  // Webacm, Slideshow
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "100%"
      document.getElementById('div3').style.width = "100%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "47%"
      document.getElementById('div4').style.height = "0%"

      

      
  }
  // Webcam, Whiteboard
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "100%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
  // Video, Slideshow
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "100%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "100%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "47%"
      document.getElementById('div4').style.height = "0%"

      

      
  }
  // Video, Whiteboard
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "100%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
  // Slideshow, Whiteboard
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "100%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "47%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
  // Webcam, Video, Whiteboard
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "50%"
      document.getElementById('div2').style.width = "50%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
  // Webcam, Slideshow, Whiteboard
  if (document.getElementById("videoC").checked == false && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "0%"
      document.getElementById('div2').style.width = "50%"
      document.getElementById('div3').style.width = "50%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "0%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "47%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
  // Webcam, Whiteboard, Video
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == false && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "50%"
      document.getElementById('div2').style.width = "50%"
      document.getElementById('div3').style.width = "0%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "0%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
  // Webcam, Slideshow, Video
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == true && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == false) {
      // Width
      document.getElementById('div1').style.width = "50%"
      document.getElementById('div2').style.width = "50%"
      document.getElementById('div3').style.width = "100%"
      document.getElementById('div4').style.width = "0%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "47%"
      document.getElementById('div3').style.height = "47%"
      document.getElementById('div4').style.height = "0%"

      

      
  }
  //Video, Slideshow, Whiteboard
  if (document.getElementById("videoC").checked == true && document.getElementById("webcamC").checked == false && document.getElementById("slideshowC").checked == true && document.getElementById("whiteboardC").checked == true) {
      // Width
      document.getElementById('div1').style.width = "50%"
      document.getElementById('div2').style.width = "0%"
      document.getElementById('div3').style.width = "50%"
      document.getElementById('div4').style.width = "100%"
      // Height
      document.getElementById('div1').style.height = "47%"
      document.getElementById('div2').style.height = "0%"
      document.getElementById('div3').style.height = "47%"
      document.getElementById('div4').style.height = "47%"

      

      
  }
}



function myFunction() {
  var vidLink = prompt("Please enter the YouTube video link:", "");
  if (vidLink == vidLink) {
    var vidEmbed = vidLink.replace("watch?v=", "embed/");
 // if (vidLink == null) {
 //   var vidEmbed = vidLink.replace("");
 //   document.getElementById('video').src += '';

  var vidEmbed = vidLink.replace("watch?v=", "embed/");

 // }

    // alert("The original link is: " + vidLink)
    // alert("The embed link is: " + vidEmbed)

  
  }
  document.getElementById("video").src = vidEmbed;
}


// Slideshow link
function slideFunction() {
  var slideLink = prompt("Please enter the Google Slide Embed Code:");


var slideLinkFinal = slideLink.replace("pub","embed")
  document.getElementById("slideshow").src = slideLinkFinal;
}

function toggleFunction() {
  if (document.getElementById("setting").checked == true) {
    document.getElementById('settings').style.height = "20px"
    document.getElementById("mirrorV").id = 'mirrorV1';
    document.getElementById
  }
  if (document.getElementById("setting").checked == false) {
    document.getElementById('settings').style.height = "0px"
  }

  }


 /* Changing Layouts
function videoFunction() {
  var x = document.getElementById("div1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById('div2-1').id = 'div2';
    count = count - 1
    alert(count)

  } 
  


  else {
    x.style.display = "none";
    document.getElementById('div2').id = 'div2-1';
    count = count + 1
    alert(count)
    
  }
}

function webcamFunction() {
  var y = document.getElementById("div2");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById('div1-1').id = 'div1';
    
    
  } else {
    y.style.display = "none";
    document.getElementById('div1').id = 'div1-1';
    
  }
}







/* Layouts ---------------------- >>>

// Video
function vidFunction() {
  // Get the checkbox
  var videoBox = document.getElementById("videoC");
  // Get the output text
  var divOne = document.getElementById("div1");

  // If the checkbox is checked, display the output text
  if (videoBox.checked == true){
    divOne.style.display = "block";
  } else {
    divOne.style.display = "none";
  }
}

// ***********************************
// Webcam
function webcamFunction() {
  // Get the checkbox
  var webcamBox = document.getElementById("webcamC");
  // Get the output text
  var divTwo = document.getElementById("div2");

  // If the checkbox is checked, display the output text
  if (webcamBox.checked == true){
    divTwo.style.display = "block";
  } else {
    divTwo.style.display = "none";
  }
}

// ***********************************
// Presentation
function webcamFunction() {
  // Get the checkbox
  var slideBox = document.getElementById("presentationC");
  // Get the output text
  var divThree = document.getElementById("div3");

  // If the checkbox is checked, display the output text
  if (webcamBox.checked == true){
    divThree.style.display = "block";
  } else {
    divThree.style.display = "none";
  }
}

// ***********************************
// Paint App
function webcamFunction() {
  // Get the checkbox
  var paintBox = document.getElementById("paintC");
  // Get the output text
  var divFour = document.getElementById("div4");

  // If the checkbox is checked, display the output text
  if (webcamBox.checked == true){
    divFour.style.display = "block";
  } else {
    divFour.style.display = "none";
  }
}

*/

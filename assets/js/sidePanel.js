
var temp = document.getElementById("mySidePanel");
function openNav() {
    document.getElementById("mySidePanel").style.visibility = "visible";
    document.getElementById("header-date-event").style.right = "280px";
  }
  

$(document).ready( function() {
    $("#header-date-event").click(function() {
        if ($(this).css("right")=="280px") {
          document.getElementById("header-date-event").style.right = "0px";
          document.getElementById("mySidePanel").style.visibility = "hidden";
        }
    });
});



  document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('mySidePanel');
    if (!container.contains(e.target)) {
      container.style.visibility = "hidden";
      document.getElementById("header-date-event").style.right = "0px";
    }
  });
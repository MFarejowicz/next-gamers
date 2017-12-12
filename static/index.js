$(document).ready(function(){
  var contact = document.getElementById("contact");
  var clipboard = new Clipboard(contact);

  $("#tooltip").click(function(){
    $("#tooltipText").fadeIn(200);
    setTimeout(() => {
      $("#tooltipText").fadeOut();
    }, 3000);
  });
});

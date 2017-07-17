//business logic


//UI logic

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedLocale = $("input#new-place").val();

    $("#reveal-location").append("<li>" + inputtedLocale + "</li>");
    $("#reveal-location").show();

  });
});

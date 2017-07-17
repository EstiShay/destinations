//business logic
function Location(placeName, landmark, timeOfYear, accomodations, activities, notes) {
  this.placeName = placeName;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.accomodations = accomodations;
  this.activities = activities;
  this.notes = notes;
}

Location.prototype.displayLocation = function () {
  return this.placeName;
}

//UI logic

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedLocaleName = $("input#new-place").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeOfYear = $("input#new-toy").val();
    var inputtedAccomodations = $("input#new-accom").val();
    var inputtedActivities = $("input#new-activities").val();
    var inputtedNotes = $("input#new-notes").val();

    var newLocation = new Location(inputtedLocaleName, inputtedLandmark, inputtedTimeOfYear, inputtedAccomodations, inputtedActivities, inputtedNotes);

    $("#reveal-location").append("<li><span class='locale'>" + newLocation.displayLocation() + "</span></li>");
    $("#reveal-location").show();

    $(".locale").last().click(function(){
      $("#full-details").show();
      $("#full-details h2").text(newLocation.placeName);
      $(".landmark").text(newLocation.landmark);
      $(".toy").text(newLocation.timeOfYear);
      $(".accomodations").text(newLocation.accomodations);
      $(".activities").text(newLocation.activities);
      $(".notes").text(newLocation.notes);
    });

    $("input#new-place").val("");
    $("input#new-landmark").val("");
    $("input#new-toy").val("");
    $("input#new-accom").val("");
    $("input#new-activities").val("");
    $("input#new-notes").val("");

  });
});

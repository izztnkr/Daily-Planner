$(document).ready(function () {
  //display current time
  var currentTime = document.getElementById("currentDay");
  var todayDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentTime.innerHTML = "Today's date is " + todayDate;
});

function colorCoder() {
  let currentHour = moment().hour();
  //add the color coder here
  $(".hourblock").each(function () {
    let activityHour = parseInt($(this).attr("id"));

    //if hour is in the past, color it grey
    if (activityHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }

    //if hour is in the present, color it red
    else if (activityHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }

    //if hour is in the future, color it green
    else if (activityHour > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
}

colorCoder();

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

//local storage

$(".saveBtn").on("click", function () {
  let activityDescription = $(this).siblings(".description").val();
  let activityTime = parseInt($(this).parent().attr("id"));
  console.log(activityTime);
  console.log(activityDescription);
  if (activityTime < 12) {
    localStorage.setItem(activityTime + "AM", activityDescription);
  } else if (activityTime >= 12) {
    localStorage.setItem(activityTime + "PM", activityDescription);
  }
});

//load saved data

$("#9 .description").val(localStorage.getItem("9AM"));
$("#10 .description").val(localStorage.getItem("10AM"));
$("#11 .description").val(localStorage.getItem("11AM"));
$("#12 .description").val(localStorage.getItem("12PM"));
$("#13 .description").val(localStorage.getItem("13PM"));
$("#14 .description").val(localStorage.getItem("14PM"));
$("#15 .description").val(localStorage.getItem("15PM"));
$("#16 .description").val(localStorage.getItem("16PM"));
$("#17 .description").val(localStorage.getItem("17PM"));

//timer to continuously check the time and live update
let timer = setInterval(colorCoder, 60000);

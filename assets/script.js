$(document).ready(function () {
  //display current time
  var currentTime = document.getElementById("currentDay");
  var todayDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentTime.innerHTML = "Today's date is " + todayDate;
});

function colorCoder() {
  let currentHour = moment().hour();
  //add the color coder here
}

colorCoder();

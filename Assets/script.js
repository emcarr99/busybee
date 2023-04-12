// copied comments in to separate doc to be able to make my own
$(document).ready(function () {
  // will display the date in the designated p tag
  let dailyDate = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(dailyDate);

  let currentTime = moment().format("HH");
  // current time judged from 8-17
  $(document).ready(function () {
    // tells app to 'listen' for click on the save button
    // user input (text added by user) is the sibling of the save button
    $(".savebtn").on("click", function () {
      let userInput = $(this).siblings(".description").val();
      // time attr is the parent of the save button
      // attaching the hour id of 'split by -'
      let inputTime = $(this).parent().attr("id").split("-")[1];
      // saving input to local storage (time is key, the text is value)
      localStorage.setItem(inputTime, userInput);
    });
  });

  // for each class hourly, decide if the current time is = to < or > than the current hour
  // removes or adds for color based on hour
  $(".hrly").each(function () {
    let hourBlock = $(this).attr("id").split("-")[1];

    if (currentTime == hourBlock) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (currentTime > hourBlock) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currentTime < hourBlock) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("future");
    }
  });

  // saves userinput (text value) to local storage and prints it to the corresponding time slot using HH
  $("#hour-08 .description").val(localStorage.getItem("08"));
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));

  // clears all saved inputs
  $(".clearBtn").click(function () {
    // sets text input to empty string
    $(".description").val("");
    // clears local storage so page remains clear on refresh
    localStorage.clear();
  });
});

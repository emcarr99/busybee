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
    }
    else if (currentTime > hourBlock) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    else if (currentTime < hourBlock) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("future");
    }
  })



});

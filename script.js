// copied comments in to separate doc to be able to make my own

let timeShow = $("#currentDay");
// fix time display
function showTime() {
  let rn = dayjs().format(
    "MMM DD, YYYY [at] hh:mm:ss a"
  );
  timeShow.text(rn);
}

showTime();
setInterval(showTime, 1000);

// save button function
$(".saveBtn").click(function () {
  let description = $(this).siblings(".description").val();
  // text input is the sibling of the save btn
  let inputTime = $(this).parent().attr("id").split("-")[1];
  // time is the parent of save btn + attaching hour id

  localStorage.setItem(inputTime, description);
  // stores user input
});
// assigns color & compares chunk to present time

$(".time-block").each(function () {
  let hourHour = dayjs().format("HH");
  let rowHour = parseInt($(this).attr("id").split("-")[1]);

  if (rowHour === hourHour) {
    $(this).addClass("present");
  } else if (rowHour > hourHour) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

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

// button to clear all input
$(".cleanBtn").click(function () {
  $(".description").val("");

  localStorage.clear();
});

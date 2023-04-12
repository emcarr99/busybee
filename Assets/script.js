// copied comments in to separate doc to be able to make my own
let timeShow = $('#currentDay');
// fix time display
function showTime() {
  let rn = dayjs().format('[Current Date & Time:] MMM DD, YYYY [at] hh:mm:ss a');
  timeShow.text(rn);
};

showTime();
setInterval(showTime, 1000);

// save button function
$('.saveBtn').click(function(){
  let description = $(this).siblings('.description').val();
  // text input is the sibling of the save btn
  let inputTime = $(this).parent().attr('id');
  // time is the parent of save btn + attaching hour id

  localStorage.setItem(inputTime,description);
  // stores user input
});


// copied comments in to separate doc to be able to make my own
let timeShow = $('#currentDay');
// fix time display
function showTime() {
  let rn = dayjs().format('[Current Date & Time:] MMM DD, YYYY [at] hh:mm:ss a');
  timeShow.text(rn);
};

showTime();
setInterval(showTime, 1000);




var displayTime = function() {
  var time = moment().format('D. MMMM YYYY H:mm:ss');
  $('#currentTime').text(time);
  setInterval(displayTime, 1000);
};

exports.displayTimeModule = displayTime;

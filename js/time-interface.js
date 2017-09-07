var displayTime = require('./../js/time.js').displayTimeModule;

$(document).ready(function() {
  displayTime();

});

$(document).ready(function() {
      $('form#inputTime').submit(function(event) {
        event.preventDefault();
        var alarmSet = $('input#setAlarm').val();
        $('input#setAlarm').val("");
        $('#alarmTime').text(alarmSet);
      })

      if (displayTime() == alarmSet) {
      	var snd = new Audio('assets/audio-files/alarm.mp3');
      	snd.play();

      }


        $('#snooze').click(function() {
        	alert('clicked');


           })

        $('#dismiss').click(function() {
          console.log('hello2');

      })


    
 });

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var displayTime = function() {
  var time = moment().format('D. MMMM YYYY H:mm:ss');
  $('#currentTime').text(time);
  setInterval(displayTime, 1000);
};

exports.displayTimeModule = displayTime;

},{}],2:[function(require,module,exports){
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

},{"./../js/time.js":1}]},{},[2]);

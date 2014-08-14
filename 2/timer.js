/* global $,alert*/
"use strict";

$(document).ready(function() {
  var Time = {
    Time : Time,
    now : 0,
    sec : 0,
    finish : 0
  };

  function getInput(arg) {
    return parseInt($(arg).val()) || 0;
  }

  function inputSec() {
    if(getInput(".min") < 0 || getInput(".sec") < 0){
        alert("Input positive values!");
        clearInterval(args.Time);
        return;
    }
    else return getInput(".min")*60 + getInput(".sec");
  }

  function plusSecLoop(Time) {
    clearInterval(Time.Time);
    setTimer(Time.now);

    return setInterval(function() {
      if(Time.now === Time.finish) {
        clearInterval(Time.Time);
        return;
      }
        Time.now = Time.now + Time.sec;
        setTimer(Time.now);
    }, 1000);
  }

  var setTimer = function(sec) {
    $(".mfd").text(parseInt(sec / 600) % 10);
    $(".msd").text(parseInt(sec / 60) % 10);
    $(".sfd").text(parseInt(sec % 60 / 10));
    $(".ssd").text(sec % 10);
  };


  $(".up").on("click", function() {
    Time = plusSecLoop({
        Time : Time,
        now: 0,
        sec: 1,
        finish: inputSec()
    });
  });

  $(".down").on("click", function() {
    Time = plusSecLoop({
      Time: Time,
      now: inputSec(),
      sec: -1,
      finish: 0
      });
  });

  $(".stop").on("click", function() {
    clearInterval(Time);
    setTimer(0);
  });

});

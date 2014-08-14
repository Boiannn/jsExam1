"use strict";

var beerAndFries = function(menu) {
  var beer = [];
  var fries = [];

  for(var x in menu) {
    if (menu[x].type === "beer") {
      beer.push(menu[x].score);
    }

    if (menu[x].type == "fries") {
      fries.push(menu[x].score);
    }
  }

  beer = beer.sort(function(a,b){return a-b;});
  fries.sort(function(a,b){return a-b;});

  var score = function mixArrays (b,f ) {
    if (b && b.length) {
      return parseInt(b.pop()) * parseInt(f.pop()) + mixArrays(b,f);
    }
    return 0;
  };

  return score(beer, fries);
};

exports.beerAndFries = beerAndFries;

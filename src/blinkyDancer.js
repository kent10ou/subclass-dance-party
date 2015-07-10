// PSEUDOCLASSICAL INSTANTIATION PATTERN

var BlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer BlinkyDancer"><img src="http://gifdanceparty.giphy.com/dancers/smooch.gif"></span>')
  this.setPosition(top, left);
};

//pseudoclassical plumbing-boiler plate
BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

//class methods
BlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};



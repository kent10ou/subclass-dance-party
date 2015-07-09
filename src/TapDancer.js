// tapDancer

var TapDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer tapdancer"><img src="https://38.media.tumblr.com/tumblr_mak5glJAlz1r9uuuso1_500.gif"></span>')
  this.setPosition(top, left);
};

//pseudoclassical plumbing-boiler plate
TapDancer.prototype = Object.create(makeDancer.prototype);
TapDancer.prototype.constructor = TapDancer;

//class methods
TapDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};



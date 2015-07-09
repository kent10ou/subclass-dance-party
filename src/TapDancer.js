// tapDancer

var TapDancer = function (top, left, timeBetweenSteps) {
  // this.$node = $('<span class="tapdancer"></span>')
  makeDancer.call(this, top, left, timeBetweenSteps);
};

//pseudoclassical plumbing-boiler plate
TapDancer.prototype = Object.create(makeDancer.prototype);
TapDancer.prototype.constructor = TapDancer;

//class methods
TapDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};



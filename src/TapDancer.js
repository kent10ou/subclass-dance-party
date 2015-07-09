// tapDancer

var TapDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer tapdancer"><img src="http://stream1.gifsoup.com/view2/1327451/cool-guy-in-red-shirt-o.gif"></span>')
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



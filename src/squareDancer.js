var SquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer SquareDancer"><img src="http://img1.wikia.nocookie.net/__cb20150120175059/walkingdead/images/3/3b/Seduction_dance_-funny_animation_gif_2290171412.gif"></span>')
  this.setPosition(top, left);
};

//pseudoclassical plumbing-boiler plate
SquareDancer.prototype = Object.create(makeDancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

//class methods
SquareDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
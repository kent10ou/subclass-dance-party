var SquareDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer SquareDancer"><img src="https://31.media.tumblr.com/4a43f0686525b965c23279a2aee202ef/tumblr_n93cq6AtTC1snslrwo1_500.gif"></span>')
  this.setPosition(top, left);
};

//pseudoclassical plumbing-boiler plate
SquareDancer.prototype = Object.create(makeDancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

//class methods
SquareDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // this.$node.fadeToggle();
};

SquareDancer.prototype.lineup = function () {
  this.$node.css("left", 0);
};
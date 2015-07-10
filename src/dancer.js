// PSEUDOCLASSICAL INSTANTIATION PATTERN

var makeDancer = function(top, left, timeBetweenSteps) { 
  this.$node = $('<span class="dancer"></span>')
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  // this.top = top;
  // this.left = left;
};

// plumbing
makeDancer.prototype = Object.create(makeDancer.prototype);
makeDancer.prototype.constructor = makeDancer;


//class methods
makeDancer.prototype.step = function (timeBetweenSteps){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
this.$node.css(styleSettings);
}

makeDancer.prototype.lineUp = function (time) {
  this.$node.animate({left: 10}, time)
}







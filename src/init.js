$(document).ready(function(){
  //global array of our instantiated dancers
  window.dancers = [];
  
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    //pushing dancers that appear on our dancefloor to the global window dancers array
    window.dancers.push(dancer)
    //console.log('dancer: ', dancer)
  });

    //console.log('windowdancers" ', window.dancers);

  //upon clicking on 'lineup' button, dancers will line up on the left side of screen at varying speeds
  $(".lineupClass").on('click', function (event) {
    for (var i = 0; i < dancers.length; i++) {
      window.dancers[i].lineUp(Math.random() * 10000)
    }
  })  

  
  //make dancers interact with each other
  //loop through window.dancers array
  //find every dancer's position/distance from each other using pythagorean theorum

  // for(var i = 0; i < window.dancers.length; i++) {
  //   for(var j = 0; j < window.dancers.length; j++) {
  //   var x = window.dancers[i].left;
  //   var y = window.dancers[i].top;
  //   var x2 = window.dancers[j].left;
  //   var y2 = window.dancers[j].left;
  //   }
  // }

  //use jQuery mouseover 
  // $(".dancer").mouseover(function () {
  //   $(this).css("left", 200)
  // })


});
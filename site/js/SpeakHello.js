(function (window) {
  var helloSpeaker={};
  var speakword = "Hello";
  
  helloSpeaker.speak = function (names){
  	console.log(speakword + " " + names)
  }

  window.helloSpeaker=helloSpeaker;

})(window);


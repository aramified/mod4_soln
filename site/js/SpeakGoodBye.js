(function (window) {
  var byeSpeaker={};
  var speakword = "Goodbye";
  
  byeSpeaker.speak = function (names){
  	console.log(speakword + " " + names)
  }

  window.byeSpeaker=byeSpeaker;

})(window);
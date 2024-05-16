(function () {

    var names = ["Arti", "Ganesh", "Huzefa", "Tony", "Krish", "Pappu", "Ali", "Jonny", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'a') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    
    
    
    
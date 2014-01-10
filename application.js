var mole = {

  init: function()
  {
    var gameId = document.getElementById('game');
    var children = gameId.children;
    console.log(children);
    var hole = this.selectHole(children);
    console.log(hole);
  },

  selectHole: function(children)
  {
    var numberOfChildren = children.length;
    return Math.floor(Math.random() * numberOfChildren);
  },

  show: function()
  {
    // show the mole
  },

  hide: function()
  {
    // hide the mole
  },


  // Select id of game
  // Random select div
  // Change div class to dark with timeout
  // Click must happen within time out
  // Add score and good job
}

mole.init();

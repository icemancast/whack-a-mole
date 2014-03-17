var mole = {

  // Get Id of game div
  gameId: $('#game'),
  selectedDiv: '',
  scoreDiv: $('#score'),

  init: function()
  {
    // Get all child divs
    children = this.gameId.children();

    // Interval for time loop
    setInterval(function() {
      // Call method to select hole randomly
      mole.selectedDiv = $(mole.selectHole());
      mole.show();

      // If click call hit method
      mole.selectedDiv.click(function() {
        mole.hit();
        console.log('hit');
      });

      setTimeout(function() {
        mole.hide(mole.selectedDiv);
        //mole.selectedDiv = '';
      }, 800);

    }, 1500);
  },

  selectHole: function()
  {
    numberOfChildren = children.length;
    hole = Math.floor(Math.random() * numberOfChildren);
    return children[hole];
  },

  show: function()
  {
    this.selectedDiv.addClass('hole-selected');
    //selectedDiv.className = selectedDiv.className + ' hole-selected';
  },

  hide: function()
  {
    this.selectedDiv.removeClass('hole-selected');
  },

  hit: function()
  {
    this.selectedDiv.removeClass('mole-hit');
    score = parseInt(this.scoreDiv.html()) + 1;
    this.scoreDiv.html(score);
  }

}

mole.init();

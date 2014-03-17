var mole = {

  moleDivs: $('.mole'),
  selectedDiv: '',
  scoreDiv: $('#score'),

  init: function()
  {
    // Interval for time loop
    setInterval(function() {
      // Call method to select hole randomly
      mole.selectedDiv = $(mole.selectHole());
      mole.show();

      setTimeout(function() {
        mole.hide(mole.selectedDiv);
      }, 800);

    }, 1500);
  },

  selectHole: function()
  {
    numberOfChildren = mole.moleDivs.length;
    hole = Math.floor(Math.random() * numberOfChildren);
    return mole.moleDivs[hole];
  },

  show: function()
  {
    this.selectedDiv.fadeIn(200, function() {

      // If click call hit method
      mole.selectedDiv.click(function() {
        mole.hit();
      });
    });
  },

  hide: function()
  {
    this.selectedDiv.fadeOut(200, function() {
      mole.selectedDiv.removeClass('mole-hit');
    });
  },

  hit: function()
  {
    this.selectedDiv.addClass('mole-hit');
    score = parseInt(this.scoreDiv.html()) + 1;
    this.scoreDiv.html(score);
  }

}

mole.init();


var gameId, children, hole, selectedDiv, numberOfChildren;

gameId = document.getElementById('game');
children = gameId.children;

var mole = {

  selectHole: function()
  {
    numberOfChildren = children.length;
    hole = Math.floor(Math.random() * numberOfChildren);
    return children[hole];
  },

  show: function()
  {
    selectedDiv.className = selectedDiv.className + ' hole-selected';
  },

  hide: function()
  {
    selectedDiv.className = 'mole';
  },

  hit: function()
  {
    selectedDiv.className = selectedDiv.className + ' mole-hit';
    var score = document.getElementById('score');
    score.innerHTML = parseInt(score.innerHTML) + 1;
  }

}

setInterval(function() {
  selectedDiv = mole.selectHole(children);
  mole.show();

  selectedDiv.onclick = function() {
    mole.hit();
  }

  setTimeout(function() {
    mole.hide(selectedDiv);
    selectedDiv.onclick = null;
  }, 800);

}, 1500);

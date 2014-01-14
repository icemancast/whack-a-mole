var gameId, children, hole, selectedDiv, numberOfChildren;

gameId = document.getElementById('game');
children = gameId.children;

var mole = {

  selectHole: function(children)
  {
    numberOfChildren = children.length;
    hole = Math.floor(Math.random() * numberOfChildren);
    return children[hole];
  },

  show: function(hole)
  {
    selectedDiv.className = selectedDiv.className + ' hole-selected';
  },

  hide: function()
  {
    selectedDiv.className = 'mole';
  },

}

setInterval(function() {
  selectedDiv = mole.selectHole(children);
  mole.show(selectedDiv);

  //console.log(selectedDiv);
  //console.log(selectedDiv.id);

  selectedDiv.onclick = function() {
    console.log('click');
  }

  setTimeout(function() {
    mole.hide(selectedDiv);
  }, 800);

}, 1500);

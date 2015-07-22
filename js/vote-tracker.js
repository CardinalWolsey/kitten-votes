//This is our vote tracker!!!

var Image = function(path) {
  this.path = path;
  this.votes = 0;
}

var cat0 = new Image ('images/0.jpg');
var cat1 = new Image ('images/1.jpg');
var cat2 = new Image ('images/2.jpg');
var cat3 = new Image ('images/3.jpg');
var cat4 = new Image ('images/4.jpg');
var cat5 = new Image ('images/5.jpg');
var cat6 = new Image ('images/6.jpg');
var cat7 = new Image ('images/7.jpg');
var cat8 = new Image ('images/8.jpg');
var cat9 = new Image ('images/9.jpg');
var cat10 = new Image ('images/10.jpg');
var cat11 = new Image ('images/11.jpg');
var cat12 = new Image ('images/12.jpg');
var cat13 = new Image ('images/13.jpg');

var catArray = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13];

//random number generator
randomNumber = function() {
  var random = parseInt(Math.floor(Math.random() * (this.catArray.length)));
  return random;
};

chooseCats = function() {
  var leftImageRandom = randomNumber();
  var rightImageRandom = randomNumber();

  while (leftImageRandom === rightImageRandom) {
    rightImageRandom = randomNumber();
  }
  return [leftImageRandom, rightImageRandom];
};

var imgIdx = chooseCats();
var imageCtl = ['left', 'right'];


// store the cats and the web controls that display them
var Tracker = function() {
  this.catArray = catArray;
  this.imageControls = imageCtl;
};


Tracker.prototype.display = function(imgIdx) {
  this.imageIdx = imgIdx;
  for (var i = 0; i < this.imageControls.length; i++) {
    var catPic = document.getElementById(this.imageControls[i]);
    console.log(this.imageControls[i], imgIdx[i], catPic, catArray[imgIdx[i]]);
    catPic.src = catArray[imgIdx[i]].path;
  };

};

Tracker.prototype.tallyVote = function(idx) {
  catArray[imgIdx[idx]].votes += 1;
};


var render = new Tracker();

//the page buttons
var nextRound = document.getElementById('button');
nextRound.addEventListener('click', function() {
  render.display(chooseCats());
}, false);

var newRightVote = document.getElementById('right');
  newRightVote.addEventListener('click', function() {
    render.tallyVote(1);
}, false);

var newLeftVote = document.getElementById('left');
  newLeftVote.addEventListener('click', function() {
    render.tallyVote(0);
  }, false);



render.display(chooseCats());

// Tracker **could** have 'photos' property that is an array of the photo instances, and methods such as isVoting(), declareWinner(), voting(), declaring(),  updateTally(), resetResults(), castVote(), and so on.

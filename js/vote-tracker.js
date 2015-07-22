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
var image = ["left", "right"]



  leftImage = catArray[leftImageRandom].path;

  this.rightImageRandom = randomNumber();
  this.rightImage = this.catArray[this.rightImageRandom].path;


// log this.leftImageRandom, this.rightImageRandom
// return this.leftImageRandom, this.rightImageRandom]



//display both images
var Tracker = function() {
  this.catArray = catArray;
}


Tracker.prototype.display = function(imgs, imgIdx) {

  for (var i = 0; i <imgs.lengt0; i++) {
    var catPic = document.getElementById(imgs[i]);
    catPic = catArray[imgIdx[i]];
  };

}




var render = new Tracker()

//more cats button
var nextRound = document.getElementById('button');
nextRound.addEventListener('click', function() {
  imgs = render.images();
  render.display();
}, false);

var newRightVote = document.getElementById('right');
  newRightVote.addEventListener('click', function() {
    catArray[imgs[3]].votes += 1;
}, false);

var newLeftVote = document.getElementById('left');
  newLeftVote.addEventListener('click', function() {
    catArray[imgs[2]].votes += 1;
  }, false);



render.display();

// Tracker **could** have 'photos' property that is an array of the photo instances, and methods such as isVoting(), declareWinner(), voting(), declaring(),  updateTally(), resetResults(), castVote(), and so on.

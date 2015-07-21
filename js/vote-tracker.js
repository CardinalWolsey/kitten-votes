//This is our vote tracker!!!

var image = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];

var Photo = function() {
  this.image = image;
}

Photo.prototype.randomNumber = function() {
  this.random = parseInt(Math.floor(Math.random() * (this.image.length)));
  return this.random;
}

Photo.prototype.images = function() {
  this.leftImage, this.rightImage;
  this.leftImage = this.image[this.randomNumber()];
  this.rightImage = this.image[this.randomNumber()];
  while (this.leftImage == this.rightImage) {
    this.rightImage = this.image[this.randomNumber()];
  }
  return [this.leftImage, this.rightImage];
}

Photo.prototype.display = function() {
  var left = document.getElementById('left');
  var right = document.getElementById('right');
  var imgs = this.images();
  left.src = imgs[0];
  right.src = imgs[1];
}

var render = new Photo()
render.display();

var nextRound = document.getElementById('button');
nextRound.addEventListener('click', function() {
  render.display();
}, false);

// var Voting = function() {
//   this.votes = [];
// }

// Voting.prototype.vote = function () {
//   this.leftVote = document.getElementById('left');
//   this.leftVote.addEventListener('click', function() {
//     this.votes.push
//   }
//     )
// }




// Tracker **could** have 'photos' property that is an array of the photo instances, and methods such as isVoting(), declareWinner(), voting(), declaring(),  updateTally(), resetResults(), castVote(), and so on.

//This is our vote tracker!!!

var Image = function(path) {
  this.path = path;
  this.votes = 0;
}

//enstanchiate all cats
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

//declare array of cats
var catArray = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13];


var Tracker = function() {
  this.catArray = catArray;
 }

//random number generator
Tracker.prototype.randomNumber = function() {
  this.random = parseInt(Math.floor(Math.random() * (this.catArray.length)));
   return this.random;
 }

 Tracker.prototype.images = function() {
   this.leftImage, this.rightImage;

  this.leftImageRandom = this.randomNumber();
  this.leftImage = this.catArray[this.leftImageRandom].path;

  this.rightImageRandom = this.randomNumber();
  this.rightImage = this.catArray[this.rightImageRandom].path;

  while (this.leftImageRandom === this.rightImageRandom) {
    this.rightImageRandom = this.randomNumber();
    this.rightImage = this.catArray[this.rightImageRandom].path;
   }

  console.log(this.leftImage, this.rightImage, this.leftImageRandom, this.rightImageRandom);

  return [this.leftImage, this.rightImage, this.leftImageRandom, this.rightImageRandom];
 }

//display both images
Tracker.prototype.display = function() {
   var left = document.getElementById('left');
   var right = document.getElementById('right');
   var imgs = this.images();
   left.src = imgs[0];
   right.src = imgs[1];
   //store the indexing number in the dataset attribute of the HTML element
   left.dataset.number = imgs[2];
   right.dataset.number = imgs[3];
 }

//left click event listner and incrementer
$('#left').on('click', function() {
  catArray[left.dataset.number].votes += 1;
});

//right click event listner and incrementer
$('#right').on('click', function() {
  catArray[right.dataset.number].votes += 1;
});

var render = new Tracker()
render.display();

//more cats button
$('#button').on('click', function() {
  render.display();
});

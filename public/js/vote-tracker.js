//This is our vote tracker!!!

//ajax call
function getImgurAlbum() {
  $.ajax({
    url: 'https://api.imgur.com/3/album/DDoWy.json',
    method: 'GET',
    headers :{
      'Authorization': 'Client-ID 8ef9bb425e4333d'
    }
  })
  .done(function(res) {
    //console.log(res.data.images);
    imgurArray = res.data.images;
    //make cat images
    var catImageArray = make_cat_images(imgurArray);
    render_page(catImageArray);

    console.log(imgurArray);
    console.log(catImageArray);
  })
}
var imgurArray;
console.log(imgurArray);
getImgurAlbum();

//enstanciate image
var Image = function(path, label) {
  this.path = path;
  this.label = label;
  this.votes = 0;
}


function make_cat_images( arr ) {
  //enstanchiate all cats
  //could do a for loop to enstanciate all the cat images, but this works for now.
  var cat0 = new Image (arr[0].link, 'cat0');
  var cat1 = new Image (arr[1].link, 'cat1');
  var cat2 = new Image (arr[2].link, 'cat2');
  var cat3 = new Image (arr[3].link, 'cat3');
  var cat4 = new Image (arr[4].link, 'cat4');
  var cat5 = new Image (arr[5].link, 'cat5');
  var cat6 = new Image (arr[6].link, 'cat6');
  var cat7 = new Image (arr[7].link, 'cat7');
  var cat8 = new Image (arr[8].link, 'cat8');
  var cat9 = new Image (arr[9].link, 'cat9');
  var cat10 = new Image (arr[10].link, 'cat10');
  var cat11 = new Image (arr[11].link, 'cat11');
  var cat12 = new Image (arr[12].link, 'cat12');
  var cat13 = new Image (arr[13].link, 'cat13');

  //declare array of cats
  return [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13];
}

function render_page( catArray ) {

// localStorage.setItem("voteTracking", JSON.stringify(catArray));

//local storage check
if (typeof(Storage) !== "undefined") {
  console.log('local storage is working');
} else {
  console.log('local storage is not activated');
}

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

if (localStorage.getItem("voteTracking") === null) {
  localStorage.setItem("voteTracking", JSON.stringify(catArray));
}

//****parse local storage string into an array
var catArrayString = localStorage.getItem("voteTracking");
var catArray = JSON.parse(catArrayString);
localStorage.removeItem("voteTracking");

//increment data
catArray[left.dataset.number].votes += 1;


//create chart
//pie chart data
var leftVote = document.getElementById('left');
var leftVoteValue = catArray[leftVote.dataset.number].votes
console.log(leftVoteValue);
var rightVote = document.getElementById('right');
var rightVoteValue = catArray[rightVote.dataset.number].votes
console.log(rightVoteValue);

var pieData = [
  {
    value: rightVoteValue,
    color: '#e74c3c'
  },
  {
    value: leftVoteValue,
    color: '#2980b9'
  }
];

//pie chart options
var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}

//call a new pie chart
var chart = document.getElementById('chart').getContext('2d');
new Chart(chart).Pie(pieData, pieOptions);

//put array back up into local storage
localStorage.setItem("voteTracking", JSON.stringify(catArray));

//end of create chart
//end of left button event listner
});


//right click event listner and incrementer
$('#right').on('click', function() {

if (localStorage.getItem("voteTracking") === null) {
  localStorage.setItem("voteTracking", JSON.stringify(catArray));
}

//****parse local storage string into an array
var catArrayString2 = localStorage.getItem("voteTracking");
var catArray = JSON.parse(catArrayString2);
localStorage.removeItem("voteTracking");

catArray[right.dataset.number].votes += 1;

//create chart
//pie chart data
var leftVote = document.getElementById('left');
var leftVoteValue = catArray[leftVote.dataset.number].votes
console.log(leftVoteValue);
var rightVote = document.getElementById('right');
var rightVoteValue = catArray[rightVote.dataset.number].votes
console.log(rightVoteValue);

var pieData = [
  {
    value: rightVoteValue,
    color: '#e74c3c'
  },
  {
    value: leftVoteValue,
    color: '#2980b9'
  }
];

//pie chart options
var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}

//call a new pie chart
var chart = document.getElementById('chart').getContext('2d');
new Chart(chart).Pie(pieData, pieOptions);

//put array back up into local storage
localStorage.setItem("voteTracking", JSON.stringify(catArray));


//end of create chart
//end of right button even listner
});



var render = new Tracker()
render.display();

//more cats button
$('#button').on('click', function() {
  render.display();
});
}

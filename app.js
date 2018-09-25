var imgElement1 = document.getElementById('my-image1');
var imgElement2 = document.getElementById('my-image2');
var imgElement3 = document.getElementById('my-image3');
var detail = document.getElementById('detail');

var allImages = [];

function Images(filepath, filename,numberOfTimesShown, votes){
  this.imgSource = filepath;
  this.filename = filename;
  this.numberOfTimesShown = numberOfTimesShown;
  this.votes = votes;
  allImages.push(this);
}

function eventHandler(){
  
  var randomNum1 = Math.floor(Math.random()*allImages.length);
  var randomNum2 = Math.floor(Math.random()*allImages.length);
  var randomNum3 = Math.floor(Math.random()*allImages.length);
  imgElement1.src = allImages[randomNum1].imgSource;
  imgElement1.alt = allImages[randomNum1].filename;
  allImages[randomNum1].numberOfTimesShown++;
  allImages[randomNum1].votes++;
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  li.textContent = allImages[randomNum1].filename+ ' has'+ allImages[randomNum1].votes+ ' votes and '+ allImages[randomNum1].numberOfTimesShown+ ' views';
  detail.style = 'border: 2px solid black; width: 70%';
  ul.style = 'margin: 0; padding: 0';
  li.style = 'border-bottom: 1px solid black; padding: 20px';
  detail.appendChild(ul);
  ul.appendChild(li);
  allImages[randomNum1].numberOfTimesShown;
  imgElement2.src = allImages[randomNum2].imgSource;
  imgElement2.alt = allImages[randomNum2].filename;
  allImages[randomNum2].numberOfTimesShown++;
  console.log(allImages[randomNum2].numberOfTimesShown);
  imgElement3.src = allImages[randomNum3].imgSource;
  imgElement3.alt = allImages[randomNum3].filename;
  allImages[randomNum3].numberOfTimesShown++;
  console.log(allImages[randomNum2].numberOfTimesShown); 
 }

imgElement1.addEventListener('click', eventHandler);
imgElement2.addEventListener('click',eventHandler);
imgElement3.addEventListener('click',eventHandler);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/bag.jpg','bag',1,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/banana.jpg','banana',1,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/bathroom.jpg','bathroom',1,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/boots.jpg','boots',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/breakfast.jpg','breakfast',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/bubblegum.jpg', 'bubblegum', 0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/chair.jpg','chair',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/cthulhu.jpg', 'cthulhu',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/dog-duck.jpg', 'dog-duck', 0, 0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/dragon.jpg','dragon',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/pen.jpg','pen',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/pet-sweep.jpg','pet-sweep',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/scissors.jpg','scissors',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/shark.jpg','shark',0,0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/sweep.png', 'sweep', 0, 0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/tauntaun.jpg', 'tauntaun', 0, 0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/unicorn.jpg', 'unicorn', 0, 0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/usb.gif', 'usb', 0, 0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/water-can.jpg', 'water-can', 0, 0);
new Images('https://raw.githubusercontent.com/codefellows/seattle-201d39/master/class-11-av-practical-clicktracker/lab/assets/wine-glass.jpg', 'wine-glass', 0, 0);

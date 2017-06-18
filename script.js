$(document).ready(function() {

var lcp;
var building;
var selected;
var dataNumber = $('.building').attr('data-indexNumber');
var blueBuilding;
var allBuildings = $('.building');

// SET INDEX VALUE FOR DROPDOWN OPTION SELECTED TO MATCH LCP AND BUILDING NUMBER
$('#lcp').change(function() {
selected = document.getElementById("lcp").selectedIndex;
document.getElementById('buildingNo').selectedIndex=selected;

if (selected == 8) {
  $('.building').attr('class', 'building');
  $('#building8').attr('class', 'highlight building');
}
if (selected == 7) {
  $('.building').attr('class', 'building');
  $('#building7').attr('class', 'highlight building');
}
if (selected == 6) {
  $('.building').attr('class', 'building');
  $('#audio').attr('class', 'highlight building');
}
if (selected == 5) {
  $('.building').attr('class', 'building');
  $('#liveAction1').attr('class', 'highlight building');
}
if (selected == 4) {
  $('.building').attr('class', 'building');
  $('#building3').attr('class', 'highlight building');
}
if (selected == 3) {
  $('.building').attr('class', 'building');
  $('#liveAction2').attr('class', 'highlight building');
}
if (selected == 2) {
  $('.building').attr('class', 'building');
  $('#shipping').attr('class', 'highlight building');
}
if (selected == 1) {
  $('.building').attr('class', 'building');
  $('#pixel').attr('class', 'highlight building');
}
if (selected == 0) {
  $('.building').attr('class', 'building');
}

})

$('#buildingNo').change(function() {
selected = document.getElementById("buildingNo").selectedIndex;
document.getElementById('lcp').selectedIndex=selected;  

if (selected == 8) {
  $('.building').attr('class', 'building');
  $('#building8').attr('class', 'highlight building');
}
if (selected == 7) {
  $('.building').attr('class', 'building');
  $('#building7').attr('class', 'highlight building');
}
if (selected == 6) {
  $('.building').attr('class', 'building');
  $('#audio').attr('class', 'highlight building');
}
if (selected == 5) {
  $('.building').attr('class', 'building');
  $('#liveAction1').attr('class', 'highlight building');
}
if (selected == 4) {
  $('.building').attr('class', 'building');
  $('#building3').attr('class', 'highlight building');
}
if (selected == 3) {
  $('.building').attr('class', 'building');
  $('#liveAction2').attr('class', 'highlight building');
}
if (selected == 2) {
  $('.building').attr('class', 'building');
  $('#shipping').attr('class', 'highlight building');
}
if (selected == 1) {
  $('.building').attr('class', 'building');
  $('#pixel').attr('class', 'highlight building');
}
if (selected == 0) {
  $('.building').attr('class', 'building');
}

})


// Click on building
/*function selectBuilding() {
  $('.building').css('fill','#7b8383');
  $(this).css('fill', 'blue');
  selected = $(this).attr("data-indexNumber");
  document.getElementById('lcp').selectedIndex=selected;  
  document.getElementById('buildingNo').selectedIndex=selected;
}*/
function selectBuilding() {
  $('.building').attr('class','building');
  $(this).attr('class', 'highlight building');
  selected = $(this).attr("data-indexNumber");
  document.getElementById('lcp').selectedIndex=selected;  
  document.getElementById('buildingNo').selectedIndex=selected;
}

$('.building').click(selectBuilding);

})


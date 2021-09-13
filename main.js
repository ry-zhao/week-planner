var $popUpAddEntry = document.querySelector('#popUpAddEntry');
var $addEntry = document.querySelector('#addEntry');
var $form = document.querySelector('form');
var $scheduled = document.querySelector('h3');
var $week = document.querySelector('#week');
var $tbody = document.querySelector('tbody');

var data = {
  sun: [],
  mon: [],
  tues: [],
  wed: [],
  thurs: [],
  fri: [],
  sat: []
};

$addEntry.addEventListener('click', showPopUp);
$form.addEventListener('submit', addSubmission);

var previousEntriesJSON = localStorage.getItem('entry-list');

if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}

function handleUnload(event) {
  var entriesJSON = JSON.stringify(data);
  localStorage.setItem('entry-list', entriesJSON);
}

/*
- access data by button clicked
- create DOM tree
-
*/

function changeScheduled(event) {
  $scheduled.textContent = 'Scheduled Events for ' + event.target.textContent;
  renderTable(event.target.getAttribute('data-date'));
}

function renderTable(date) {
  var daySchedule = data[date];
  for (var i = 0; i < daySchedule.length; i++) {
    var $tr1 = document.createElement('tr');
    var $tdTime = document.createElement('td');
    $tr1.appendChild($tdTime);
    $tdTime.textContent = daySchedule[i].time;
    var $tdDescription = document.createElement('td');
    $tr1.appendChild($tdDescription);
    $tdDescription.textContent = daySchedule[i].description;
    $tbody.appendChild($tr1);
  }
}

$week.addEventListener('click', changeScheduled);

window.addEventListener('beforeunload', handleUnload);

function addSubmission(event) {
  event.preventDefault();
  var entry = {};
  entry.time = $form.elements.time.value;
  entry.description = $form.elements.description.value;
  $popUpAddEntry.className = 'hidden dimmer container';
  data[$form.elements.day.value].push(entry);
  $form.reset();
}

function showPopUp(event) {
  $popUpAddEntry.className = 'dimmer container';
}

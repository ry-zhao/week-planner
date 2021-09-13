var $popUpAddEntry = document.querySelector('#popUpAddEntry');
var $addEntry = document.querySelector('#addEntry');
var $form = document.querySelector('form');
var $scheduled = document.querySelector('h3');
var $week = document.querySelector('#week');

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

function changeScheduled(event) {
  $scheduled.textContent = 'Scheduled Events for ' + event.target.textContent;
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

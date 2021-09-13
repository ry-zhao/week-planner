var $popUpAddEntry = document.querySelector('#popUpAddEntry');
var $addEntry = document.querySelector('#addEntry');
var $form = document.querySelector('form');

var data = [];

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

window.addEventListener('beforeunload', handleUnload);

function addSubmission(event) {
  event.preventDefault();
  var entry = {};
  entry.day = $form.elements.day.value;
  entry.time = $form.elements.time.value;
  entry.description = $form.elements.description.value;
  data.push(entry);
  $popUpAddEntry.className = 'hidden dimmer container';
  $form.reset();
}

function showPopUp(event) {
  $popUpAddEntry.className = 'dimmer container';
}

var $popUpAddEntry = document.querySelector('#popUpAddEntry');
var $addEntry = document.querySelector('#addEntry');
var $form = document.querySelector('form');

var data = { entries: [] };

$addEntry.addEventListener('click', showPopUp);
$form.addEventListener('submit', addSubmission);

function addSubmission(event) {
  var entry;
  entry.day = $form.elements.day;
  entry.time = $form.elements.time;
  entry.description = $form.elements.description;
  localStorage.setItem();
}

function showPopUp(event) {
  $popUpAddEntry.className = 'dimmer container';
}

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
$week.addEventListener('click', changeScheduled);
window.addEventListener('beforeunload', handleUnload);


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
  console.log(data);
  console.log(date);
  console.log(data[date]);
  console.log(daySchedule);
  $tbody.innerHTML = '';
  for (var i = 0; i < daySchedule.length; i++) {
    var $tr = document.createElement('tr');
    var $tdTime = document.createElement('td');

    $tr.appendChild($tdTime);
    $tdTime.textContent = daySchedule[i].time;
    var $tdDescription = document.createElement('td');
    $tdDescription.className = 'row';

    $tr.appendChild($tdDescription);
    $tdDescription.textContent = daySchedule[i].description;

    var $row = document.createElement('div');
    $row.className = 'row justify-space';
    $tdDescription.appendChild($row);

    var $colText = document.createElement('div');
    $colText.className = 'col-two-thirds';
    $row.appendChild($colText);

    var $colButtons = document.createElement('div');
    $colButtons.className = 'col-one-third';
    $row.appendChild($colButtons);

    var $updateButton = document.createElement('button');
    $updateButton.className = 'update-button';
    $colButtons.appendChild($updateButton);

    var $deleteButton = document.createElement('button');
    $deleteButton.className = 'delete-button';
    $colButtons.appendChild($deleteButton);

    $tbody.appendChild($tr);
  }
}

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

var $popUpAddEntry = document.querySelector('#popUpAddEntry');
var $addEntry = document.querySelector('#addEntry');

$addEntry.addEventListener('click', showPopUp);

function showPopUp(event) {
  $popUpAddEntry.className = 'dimmer container';
}

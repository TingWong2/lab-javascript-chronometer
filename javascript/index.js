const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  
  console.log('printTime')
  printMinutes()
  printSeconds()
}

function printMinutes() {

  let currentMinute = chronometer.getMinutes()
  let printableCurrentMinute = chronometer.computeTwoDigitNumber(currentMinute)

  let minParts = printableCurrentMinute.split('')

  console.log("printableCurrentMinute", printableCurrentMinute, minParts[0], minParts[1])
  minDecElement.innerHTML = minParts [0]
  minUniElement.innerHTML = minParts [1]

}

function printSeconds() {
  let currentSecond = chronometer.getSeconds()
  let printableCurrentSecond = chronometer.computeTwoDigitNumber(currentSecond)

  let secParts = printableCurrentSecond.split('')

  console.log("printableCurrentSecond", printableCurrentSecond, secParts[0], secParts[1])
  secDecElement.innerHTML = secParts[0]
  secUniElement.innerHTML = secParts[1]
}

// ==> BONUS
function printMilliseconds() {
  let currentMillisecond 
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle ('stop')
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.classList.toggle ('start')
}

function setResetBtn() {
 

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (chronometer.isRunning === true) {
    chronometer.stop()
  } else  
    chronometer.start(printTime)

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  chronometer.reset()
  printTime()
});

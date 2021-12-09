class Chronometer {

  constructor( ) {
    this.currentTime = 0 
    this.intervalId = null;
    this.isRunning = false;
  }

  start(callback) {
    this.isRunning = true;
    this.intervalId = setInterval(() => {

      this.currentTime += 1;
      console.log("currentTime", this.currentTime);

      if(typeof callback === 'function') callback()

    }, 1000)
  }

  getMinutes() {
    //return this.currentTime/60 
    return Math.floor(this.currentTime/60); 
  }

  getSeconds() {
    return this.currentTime % 60; 
  }

  /**
   * 0 => "0" => "0".length -> 1 -> "0" + ...
   * 12 => "12" => "12".length -> 2
   */
  computeTwoDigitNumber(value) {
    return String(value).length === 2 ? String(value) : '0' + value
  /*  let result = value.toString (); 
      if(result.length === 1)
      result ='0' + result
  */
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0; 
  }
  
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes()); 
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ':' + seconds; 
    //return `${this.computeTwoDigitNumber (this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

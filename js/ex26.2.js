const storm = {
    // add code here
    p: (function() {
       superPower = 'fly';
       printSuperPower();
      })()
    
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}



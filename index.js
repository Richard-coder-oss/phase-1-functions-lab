// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
  }
  
  function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // 1 block is 264 feet
    return distanceFromHqInBlocks(location) * blockInFeet;
  }
  
  function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264; // 1 block is 264 feet
    return Math.abs(start - end) * blockInFeet;
  }
  

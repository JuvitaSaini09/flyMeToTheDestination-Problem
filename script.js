var findMinFlights = function (fuelAtAirportsArr) {
  if (fuelAtAirportsArr[0] == 0) return -1;
  else {
    let fuelAtAirportsArrLength = fuelAtAirportsArr.length;
    let flightCount = 0;
    let leftAirport = 0;
    let rightAirport = 0;

    while (rightAirport < fuelAtAirportsArrLength - 1) {
      let max = 0;
      for (let i = leftAirport; i <= rightAirport; i++) {
        max = Math.max(max, i + fuelAtAirportsArr[i]);
      }

      leftAirport = rightAirport + 1;
      rightAirport = max;
      flightCount++;
    }
    return flightCount;
  }
};

//console.log(findMinFlights([3,0,0,3,1]));


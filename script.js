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

console.log(findMinFlights([3,0,0,3,1]));

//Algo Explantion
/*
1) If
check whether the first element is zero or not and if it is 0 then return -1;

2) Else

a) Initialise variables:
- fuelAirportsArrLength for length of the array
- flightCount to track the number of flights
- leftAirport and rightAirport to keep track of the starting and max reachable index in array for current flight

b) Iterate while loop till last second airport (rightAirport < fuelAtAirportsArrLength - 1)
For loop for one flight :
- intialise the max varibale which will contain the max value among the possible jumps from current position
- iterate the array from leftAirport to rightAIrport to compute the max value among the possible jumps and save it into the max varible
- here one Jump completes and update the rightAirport,leftAirport and flightCount
- Again while loop will run if we have not reached the last airport

c) return flightCount

    

*/

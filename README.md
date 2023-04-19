# flyMeToTheDestination-Problem Explanation

**1) If** </br> 
     check whether the first element is zero or not and if it is 0 then return -1;</br></br>
**2) Else** </br></br>
       **a)  Initialise variables:** </br>
           - `fuelAirportsArrLength` for length of the array </br >
           - `flightCount` to track the number of flights </br>
           - `leftAirport` and `rightAirport` to keep track of the starting and max reachable index in array
           for current flight </br></br>
       **b) Iterate while loop till last second airport (rightAirport < fuelAtAirportsArrLength - 1)**</br>
         For loop for one flight : </br>
            - intialise the max varibale which will contain the max value among the possible 
              jumps from current position </br>
            - iterate the array from leftAirport to rightAIrport to compute the max value
              among the possible jumps and  save it into the max varible</br>
             - here one Jump completes and update the rightAirport,leftAirport and flightCount</br>
             - Again while loop will run if we have not reached the last airport</br></br>
         **c) return flightCount**

    

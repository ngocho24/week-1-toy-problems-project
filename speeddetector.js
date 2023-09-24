// function that calculates the demerit points
function demeritPoints (speed){

// Assigning the speed limit is 70
 const speedLimit = 70;

 // declaration of const variable for maximum points for 5km above speed limit
 const maximumPoints = 12;

    //If the speed is less than speedLimit(70), it should print “Ok”. 
    if (speed <= speedLimit){
        console.log ("OK!")

// if the speed is above 70 (the differnce of speed >70 and the speed limit 70)
// divided by the 5 km/s above the speed limit (70) gives us the demerit points of the speed.
     } else {
const distanceAbove5km =((speed - speedLimit)/5);

// if the total number of demerit points is above maximumPoints(12) the licence is suspended
if (distanceAbove5km > maximumPoints) {
            console.log ("Licence is suspended!");
        
    // if the speed is above speedLimit(70) the driver should get one demerit point and 
    // print the total number of demerit points 
        } else{
            console.log("Points :" + distanceAbove5km);
        }
    }
}

//calling the demeritPoints Function to calculate the number of points
//  if the speed is 80, it should print: “Points: 2”.
demeritPoints (speed = 80); 
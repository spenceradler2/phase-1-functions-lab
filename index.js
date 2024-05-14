function distanceFromHqInBlocks(pickup){
const distance = Math.abs(pickup - 42)
return distance;
}

function distanceFromHqInFeet(pickup){
const distanceinft = distanceFromHqInBlocks(pickup) * 264
return distanceinft;
}

function distanceTravelledInFeet(start, destination){
const distanceTraveled = Math.abs((start-destination) * 264)

return distanceTraveled;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination)  <= 400){
    return 0;}
else if (distanceTravelledInFeet(start,destination)  > 400 && distanceTravelledInFeet(start,destination) < 2000){
return (distanceTravelledInFeet(start, destination)-400) *.02 ;}
else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
return 25;}
else if (distanceTravelledInFeet(start,destination) >= 2500){
return 'cannot travel that far';}
}
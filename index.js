// Code your solution in this file!

//const headQuaters = 42;
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks- 42);
}

function distanceFromHqInFeet(blocks){
    return Math.abs(distanceFromHqInBlocks(blocks)*264);
}


function distanceTravelledInFeet(start,destination){
    return 264*Math.abs(destination-start);


}


function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }
    else if (distance <= 2000){
        return  .02 * (distance - 400);
    }
    else if (distance < 2500){
        return 25;
    }
    else{
      return 'cannot travel that far';
    }

}
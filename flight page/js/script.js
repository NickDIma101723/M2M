let fuelLevel = 100;
let speed = 1000;
let altitude = 500000; 
let distance = 225000000; 
let orbitSpeed = 20000; 
let thrusterOutput = 75; 
let temperature = -100;

function updateStats(){
    if (fuelLevel > 0){
        fuelLevel -= 0.01;
    }
    
    document.getElementById("fuel").innerText = `Fuel level: ${fuelLevel.toFixed(2)}%`;
    document.getElementById("fuel-bar").style.width = `${fuelLevel}%`;
    document.getElementById("speed").innerText = `Speed: ${speed} km/h`;
    document.getElementById("altitude").innerText = `Altitude: ${altitude} km`;
    document.getElementById("distance").innerText = `Distance: ${distance} km`;
    document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;

    if (fuelLevel > 0){
        orbitSpeed +=10;
        thrusterOutput -= 0.01;
    }

    if (thrusterOutput < 0){
        thrusterOutput = 0;
    }

    if (temperature < 0){
        temperature += 1;
    }

    document.getElementById("thruster").innerText = `Thruster: ${thrusterOutput.toFixed(2)}%`;
    document.getElementById("orbit").innerText = `Orbit Speed: ${orbitSpeed} km/h`;

    if (distance > 0){
        distance -= 1000;
    }

   let timeRemaining = distance / speed.toFixed(2);
   document.getElementById("time-remaining").innerText = `Time Remaining: ${timeRemaining.toFixed(2)} hours`;

    speed += 10000;
    altitude += 500;
}

setInterval(updateStats, 4000);



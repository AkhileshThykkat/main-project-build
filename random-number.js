let current = Math.round( Math.random() * 20);
let monthly_current = 200 - Math.round((Math.random() * 2));
document.getElementById("current-now").innerHTML = current + " kW";
document.getElementById("current-monthly").innerHTML = monthly_current + " kW";
let current = (25 + Math.random()*1.75) ;
var monthly_current = 200 +(Math.random() * 0.25);


document.getElementById("current-now").innerHTML = current.toFixed(2) + " V";
document.getElementById("current-monthly").innerHTML = monthly_current.toFixed(2) + " kW";
setTimeout(() => {
    document.location.reload();
  }, 5500);
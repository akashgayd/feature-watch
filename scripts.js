

let hours = document.getElementById("hours");
let minites = document.getElementById("minutes");
let secondes = document.getElementById("secound");




setInterval(()=>{



let data = new Date();

hours.textContent = data.getHours();

minites.textContent = data.getMinutes();

secondes.textContent = data.getSeconds();
},1000)
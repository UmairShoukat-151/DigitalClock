setInterval(() => {
  a = new Date();
  hours = a.getHours();
  minutes = a.getMinutes();
  seconds = a.getSeconds();

  document.getElementById("hour").innerHTML = String(hours).padStart(2, "0");
  document.getElementById("min").innerHTML = String(minutes).padStart(2, "0");
  document.getElementById("sec").innerHTML = String(seconds).padStart(2, "0");

  document.getElementById("date").innerHTML = a.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  document.getElementById("day").innerHTML = a.toLocaleDateString("en-US", {
    weekday: "long",
  });
}, 1000);

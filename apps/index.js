// set the age
const ageEl = document.getElementById("age");
ageEl ? ageEl.innerHTML = (new Date()).getFullYear() - 1994 : "";

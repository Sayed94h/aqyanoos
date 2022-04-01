
// set the age
const ageEl = document.getElementById("age");
ageEl ? ageEl.innerHTML = (new Date()).getFullYear() - 1994 : "";

const today = Date.now();

const difFRhrc = Math.round((new Date(today) - (new Date("2022-02-09"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRhrc").innerText = difFRhrc + " Days ago";

const difFRtextEditor = Math.round((new Date(today) - (new Date("2022-02-23"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRtextEditor").innerText = difFRtextEditor + " Days ago";



// set the age
const ageEl = document.getElementById("age");
ageEl ? ageEl.innerHTML = (new Date()).getFullYear() - 1994 : "";

// let url_ = "https://play.google.com/store/apps/details?id=com.aqyanoos.httpresponsecode";

// fetch(url_, { mode: "no-cors" }).then(re => {
//     console.log("res: ", re);
// });

const today = Date.now();

const difFRhrc = Math.round((new Date(today) - (new Date("2022-02-09"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRhrc").innerText = difFRhrc + " Days ago";

const difFRtextEditor = Math.round((new Date(today) - (new Date("2022-02-23"))) / 1000 / 60 / 60 / 24);
document.getElementById("dif-FRtextEditor").innerText = difFRtextEditor + " Days ago";


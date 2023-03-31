const printPage = document.getElementById("print-page");

function removeExtras() {
	document.title = "";
	//document.location.href = "";
	document.URL = "";
	document.documentURI = "";
	document.timeline.currentTime = "";
	window.print();
}

printPage.onclick = removeExtras;

// window.onbeforeprint = function (e) {
// 	e.preventDefault();
// 	console.log("before print", e);
// 	e.URL = "";
// 	e.currentTime = "";
// 	e.timeStamp = "";
// 	e.title = "";
// 	// removeExtras();
// };
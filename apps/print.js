const printPage = document.getElementById("print-page");

function removeExtras() {
	document.title = "";
	window.print();
}

printPage.onclick = removeExtras;

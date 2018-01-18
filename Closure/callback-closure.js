function initButtons() {
	var body = document.body;
    var button = '';

    for (var i = 1; i <= 5; i++) {
    	button = document.createElement("button");
        button.innerHTML = "Button " + i;
        button.addEventListener("click", function (e) {
            alert(i);
        }, false);
        body.appendChild(button);
    }
}
initButtons();
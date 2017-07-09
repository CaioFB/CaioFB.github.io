var text = document.getElementById("content");

var button = document.getElementsByClassName("button-more")

for(var i=0; i<button.length; i++)
{
	button[i].addEventListener("click", function() {
		toggle(this);
	});
}

function toggle(button) {

	var text = document.getElementById(button.id);

	text.classList.toggle("show");

	if (button.innerHTML == "Mais")
		button.innerHTML = "Menos";
	else if (button.innerHTML == "Menos")
		button.innerHTML = "Mais";
	else
		button.innerHTML = "Mais";
}
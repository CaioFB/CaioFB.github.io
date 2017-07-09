  
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

	if (button.innerHTML == "Mostrar Mais")
		button.innerHTML = "Mostrar Menos";
	else if (button.innerHTML == "Mostrar Menos")
		button.innerHTML = "Mostrar Mais";
	else
		
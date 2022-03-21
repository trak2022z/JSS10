//The display property also allows the author to show or hide an element. It is similar to the visibility property. However, if you set display:none, it hides the entire element, while visibility:hidden means that the contents of the element will be invisible, but the element stays in its original position and size.
function demoDisplay() {
  document.getElementById("myP1").style.display = "none";
}

function demoVisibility() {
  document.getElementById("myP2").style.visibility = "hidden";
}
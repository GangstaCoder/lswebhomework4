/*2. Link it to a JavaScript file that you will edit

## Using the JavaScript file *only* (not using a CSS file) ##

1. Change the background color of the entire document to red
2. Change the background color of just the "about me" portion to blue
3. Change the font-style of the entire document to sans-serif
4. Add your nickname 
5. Add your favorites
6. Add your hometown

## Extra Credit (still only using JavaScript) ##

1. Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
2. Create a new `img` element and set its src attribute to a picture of you. Append that element to the page.*/
document.getElementById("blue").style.color = "blue";
document.body.style.backgroundColor = "red";
document.getElementById("blue").innerHTML = "whatever we want"
document.body.style.fontFamily = "Helvetica, sans-serif";
document.body.style.fontStyle = "italic";
document.getElementById("nickname").innerHTML = "Elbonzorino";
document.getElementById("favorites").innerHTML = "lime";
document.getElementById('hometown').innerHTML = "Manzini";



var x = document.createElement("IMG");
x.setAttribute("src", "truck.jpg");
x.setAttribute("width", "304");
x.setAttribute("height", "228");
document.body.appendChild(x);
<h1>data-* attribute</h1>
https://www.w3schools.com/tags/att_data-.asp#:~:text=The%20data%2D*%20attribute%20is,attributes%20on%20all%20HTML%20elements.

Used for custom attributes that do not exist in html. In this case there are no 'key' attributes so we created `data-key`. We then can use it as a selector in CSS.
[data-key="68"] {
  /* Styles */
}

<h1>How do you select an element and add a class with JS?</h1>
https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

If you are only targeting modern browsers:
element.classList.add("my-class");

If you need to target below IE9:
var d = document.getElementById("div1");
d.className += " otherclass";

<h1>You can get an element by an ID or class name, but how do you get an element by an attribute?</h1>
https://stackoverflow.com/questions/2694640/find-an-element-in-dom-based-on-an-attribute-value
document.querySelectorAll('[data-foo="value"]');

For IE9 and below you can use Jquery

<h1>ES6 template strings</h1>
ocument.querySelector(`div[data-key="${keyCode}"]`
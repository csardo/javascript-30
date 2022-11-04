<h1>How do you rotate something?</h1>
You can use CSS with `transform: rotate(45deg);`

If you want to rotate along the Zaxis as well, you can use `rotate: 45deg;`

But in the case of a clock, you don't want to rotate it around the center, but on one end. 

That means, you need to use: `transform-origin: right;`

https://css-tricks.com/almanac/properties/r/rotate/

Units:
* deg: One degree is 1/360 of a full circle.
* rad: A radian is the length of a circle’s diameter around the shape’s arc. One radian is 180deg, or 1/2 of a full circle. One full circle is 2π radians, which is equal to 6.2832rad or 360deg.
* grad: One gradian is 1/400 of a full circle.
* turn: One turn is one full circle. So, halfway around a circle is equal to .5turn, or 180deg.

<h1>Difference between HTMLCollection and array?</h1>
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.

Pre ES6, you can convert:
var arr = Array.prototype.slice.call( htmlCollection )
var arr = [].slice.call(htmlCollection) // although this creates an empty, unused array
var arr = [...htmlCollection];

After ES6:
var arr = Array.from(htmlCollection);

<h1>Using SetInterval</h1>
You need to add the arguments to the function in the first parameter via the optional parameters after the time. 
If you do this
`setInterval(moveHand(secHand), 1000);`

Instead of this
`setInterval(moveHand, 1000, secHand);`

Then you invoke the function and it is only called once.

<h1>CSS3 variables vs SASS variables</h1>
Sass variables are defined in the Sass file, but once compiled to CSS the values cannot be updated.

CSS3 variables can have their values updated through the use of JavaScript. So everywhere on the page that variable is referenced, it will update itself.

<h1>getElementById</h1>
    // Note you can't use a lamba function here or 'this' will refer
    // to the window.
    // Instead of 'input' use 'change' so the event only fires onces as you 
    // click and drag
    spacingElement.addEventListener('change', function(e) {
        // you also need to parse as an int as the default input is string value
        console.log(parseInt(this.value))
    });


<h1>data-sizing</h1>
Note Wes made a data attribute (an attribute that is made up, just prefix it with -data) to remember if the input needs to add a suffix or not. 

For example:
`<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">`
The value is `10` but what we want is `10px`, so we have the `data-sizing` to know what the suffix will be.

You can access this in an event handlet via `this.dataset.sizing` where  `dataset` is an object with all of the keys corresponding to the attributes that you have added
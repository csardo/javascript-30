<h1>querySelectorAll</h1>
Note that you can use querySelectorAll on any element, not just on `document`
So this works:
    const category = document.querySelectorAll('.mw-category-group');
    const links = category.querySelectorAll('a'); 
As well as this:
    const category = document.querySelectorAll('.mw-category-group a');

<h1>Array.reduce()</h1>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Note the reduce function needs to return the total.
`reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)`
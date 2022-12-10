<h1>What is the Difference Between textContents, innerText, and innerHtml?</h1>

 - `textContents` is all text contained by an element and all its children that are for formatting purposes only.
 - `innerText` returns all text contained by an element and all its child elements.
 - `innerHtml` returns all text, including html tags, that is contained by an element.

 <h1>setIntervals</h1>

 If you scroll, then setInterval doesn't run in some browsers (may be a perf improvement).

 Note `setInterval` doesn't run immediately, it will take a second to get started on it's first run. So you need to invoke the function first, then setInterval can take it from there.

<h1>Date.now()</h1>

 You used to have to use `new Date()).getTime()` but now you can use `Date.now()`.

<h1>preventDefault</h1>

Don't forget to `e.preventDefault();` on button event listeners.

<h1>Selecting named elements</h1>

Because our `<form name="customForm" id="custom">` has a name, we can select it without using querySelector, like so: 

    document.customForm
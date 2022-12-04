<h1>Passing function arguments to an event listener function</h1>

You can use bind. First argument ie `this` (which doesn't matter this case).
`stopButton.addEventListener('click', toggle.bind(null, false))`

Or, what's popular in React, is to have an inline function.

`stopButton.addEventListener('click', () => toggle(false));`
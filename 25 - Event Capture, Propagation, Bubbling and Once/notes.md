<h1>bubbling</h1>

The browser will figure out what you clicked on, but it will also ripper the event to the wrapped event listeners.

In this case three->two->one->document body->window

So if you're listening for a click on multiple nexted elements, it will trigger the event listener for all nested elements.

<h3>How does this happen?</h3>

It actually starts at the top down and adds the eventListeners to a stack, and then once it hits the bottom, it calls them all (and since it's a stack, it starts at the bottom most element and works it's way up).

<h1>Vocab</h1>

 - Capture: event is captured from top down
 - Bubble: event is bubbled up 

<h1>eventListener parameters</h1>

<b>capture</b> makes it so the event listener is called on the way down (when the event is captured). Default is false.

`divs.forEach(div => div.addEventListener('click', logText, { capture: true}));`

<b>once</b> will listen for a click then un-bind itself so the event listener won't be triggered again.

`divs.forEach(div => div.addEventListener('click', logText, { capture: false, once: true }))`

<b>e.stopPropagation</b> inside your event listener will stop bubbling the event up.

`  function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
  }`


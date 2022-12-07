<h1>Get children of element</h1>

https://developer.mozilla.org/en-US/docs/Web/API/Element/children

`Element.children` includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use `Node.childNodes`.

Or, you can get all the direct decsendents with a selector like so: `document.querySelectorAll('.cool > li');`

<h1>mouseover/out, mouseenter/leave</h1>

https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave

The mouseover event occurs when a mouse pointer comes over an element, and mouseout – when it leaves.

<h1></h1>

The way this exercise hides the dropdown is with `opacity: 0` and `display: none`. This is because you cannot go from opacity 0 to 1, as well as display none to block.

If we did it at the same time then you lose the animation of opacity fading in, which is why it's broken up into two classes.

    .trigger-enter .dropdown {
        display: block;
    }

    .trigger-enter-active .dropdown {
        opacity: 1;
    }

But you can remove all in one line `this.classList.remove('trigger-enter', '.trigger-enter-active');`

<h1>getBoundingClientRect</h1>

https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

Gets the info about where on the page the element is. But unfortunately it gives you info about where on the page it is relative to the page, so if you add another element to above it, then the coords are off.
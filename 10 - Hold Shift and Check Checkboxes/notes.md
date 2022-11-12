<h1>keydown vs keypress vs keyup</h1>
The order of events:

1. The keydown event is triggered first when user presses a key
2. The keyup event is triggered last when user releases a key
3. In between, the keypress event is triggered
These events serve different purposes.

The keydown and keyup events are often used to <b>handle the physical keys,</b> while the keypress event is used to <b>handle characters which are being typed.</b>

The keypress ignores keys such as delete, arrows, page up, page down, home, end, ctrl, alt, shift, esc, etc. So, if we need to handle those keys, it's better to use either keydown or keyup event.

<h1>How to pass in params to an eventListener</h1>
<a href="https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function"></a>

JavaScript is a prototype-oriented language, remember! So you can add methods/fields on the element itself:

    const someInput = document.querySelector('button');
    someInput.addEventListener('click', myFunc, false);
    someInput.myParam = 'This is my parameter';
    function myFunc(evt)
    {
        window.alert(evt.currentTarget.myParam);
    }
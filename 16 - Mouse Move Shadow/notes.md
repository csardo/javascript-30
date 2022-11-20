<h1>ES6 destructuring</h1>
You can set multiple object values in one line. The below lines of code are equivalent:

    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;

<h1>this vs event.target</h1>

For event listeners, `this` will always be the object that the event listener was defined on (for ` hero.addEventListener('mousemove', shadow);` then `this` will always be the `hero` element), while `event.target` is the object that the listener was actually triggered on.

But target can be a child of the element that the event listener is on.
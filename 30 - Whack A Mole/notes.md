<h1>Math.random()</h1>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Returns float [0, 1)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    console.log(getRandomInt(3));
    // expected output: 0, 1 or 2

    console.log(getRandomInt(1));
    // expected output: 0

    console.log(Math.random());
    // expected output: a number from 0 to <1

<h1>isTrusted</h1>

You can fake a click with JavaScript, you can find out when that happens with `e.isTrusted === true`
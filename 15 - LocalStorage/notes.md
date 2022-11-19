<h1>When using a form, listen to submit event</h1>
Rather than click or enter, because submit covers all of your bases.

<h1>Reminders:</h1>

`this` in a event listener is <i>the element on which the event listener was created on</i>. So you can narrow down your query selector but using `this.` 

Also remember you can query for a custom attribute with brackets like `[name=item]` below.

    const addItem = function(e) {
        e.preventDefault();
        const item = {
            text: 'Item Name',
            done: false
        };

        item.text = this.querySelector('[name=item');
    };

<h1>ES6 shorthand</h1>

You can set an object property to the same name as the local:

    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };

You can also use a variable for a property name using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015">computed property names</a>.

    var foo = "bar";
    var ob  = { [foo]: "something" }; // ob.bar === "something"

<h1>form element this.reset()</h1>

Form elements have a `reset` method on them that clears the form fields.

<h1>localStorage</h1>

You can add things to localStorage with `localStorage.addItem()`

But if you open Dev Tools and look at Application -> Local Storage, you will see `[Object, object]`

That's because localStorage is simply just a key-value store, and the value can only hold things as strings. The key is the name of the variable. So you have to use `JSON.stringify(items)`. Then when you want to load it back as objects you use `JSON.parse(items)`.
;
You can find a list of methods here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
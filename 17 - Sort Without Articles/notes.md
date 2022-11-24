<h1>Functions to remember</h1>

appendChild to add a child to an element. Remember you still need to create the element itself:

    const el = document.createElement('li');
    el.innerText = titleTuple[0];
    parentList.appendChild(el);

But in this case, instead of creating and appending all of the elements, just do it once with innerHTML.

    document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

<h1>Using regex to replace</h1>

1. `^`: starts with
2. `a |the |an `: OR match any of them. Make sure you include the space so you don't catch 'Another'
3. `/i`: ignore case
4. `''`: replace with nothing

`bandName.replace(/^(a |the |an )/i, '').trim();`

<h1>Implicit Return</h1>

With one line arrow functions you can implicit return.

  const stripedTitleSort = (a, b) =>  a[1] < b[1] ? -1 : 1;

Instead of

  const stripedTitleSort = function(a, b) {
    return a[1] < b[1] ? -1 : 1;
  };
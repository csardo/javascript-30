<h1>getFullYear()</h1>
The getYear() method returns the year in the specified date according to local time. Because getYear() does not return full years ("year 2000 problem"), it is no longer used and has been replaced by the getFullYear() method.

<h1>Gotcha's</h1>
Don't forget about `<=` and `=>` instead of just `<` and `>`

If you want to create a new array when deleteing (common with Redux), you can do:

    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];

<h1>Vocab</h1>
<b>Implicit Return:</b> `comments.findIndex(c => c.id === 823423)`
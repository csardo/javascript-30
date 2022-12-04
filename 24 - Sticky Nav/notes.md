<h1>Making nav bar stick top of page</h1>

We can add/remove style `fixed-nav` to our css, but there's more to do.

    .fixed-nav nav {
        position: fixed;
        box-shadow: 0 5px rgba(0, 0, 0, 0.1);
    }

If we just do the above, when it snaps to the top of the page the content jumps up. This is because when you make the nav fixed, it's no longer taking up space in the document. It sort of floats on top of the browser. 

And by doing that, it causes a reflow on the page, which is why the content snaps up to the top the exact amount of space that the nav gave up.

So, we need to add padding to the body the exact amount of space of the nav to make up for it.


    if (offset < 0) {
      document.body.classList.add('fixed-nav');
      document.body.style.paddingTop = nav.offsetTop + 'px';
    } 

<h1>Transitions and width</h1>

Why did we set the max width here and not `width: auto` ?

    .fixed-nav li.logo {
        max-width: 500px; /* make it bigger than it ever witll be */
    }

That's because above. in `li.logo`, we set `transition: all 0.5s;` and you cannot animate the width of something to be from zero to auto. You have to use `max-width` for that transistion to kick in.

<h1>Accessing custom attribute</h1>
Need to use brackets [].

    const skipButtons = player.querySelectorAll('[data-skip]');

<h1>Calling a method with a string</h1>
You can access a method on an object by using it's name as a string.
The two code snippets below are the same:

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

    const method = video.paused ? 'play' : 'pause';
    video[method]();

<h1>Reminder: accessing dataset custom attributes</h1>

Use `this.dataset`

    <button data-skip="-10" class="player__button">« 10s</button>
    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }

<h1>offsetWidth</h1>
Just like the canvas tutorial, we can access offsetY and offsetX.
offsetWidth gives us the width of the bar:

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
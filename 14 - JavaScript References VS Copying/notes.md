<h1>console.log is pass by reference</h1>
If you're wondering why

    const wes = {
        name: 'Wes',
        age: 100,
        social: {
          twitter: '@wesbos',
          facebook: 'wesbos.developer'
        }
      };
      
      console.log(wes); // THIS HAS @coolio in the object before it's assigned

      const dev = {...wes};
      dev.social.twitter = '@coolio';

It's because console.log is pass by reference.
https://developer.mozilla.org/en-US/docs/Web/API/Console/log

<i> Please be warned that if you log objects in the latest versions of Chrome and Firefox what you get logged on the console is a reference to the object, which is not necessarily the 'value' of the object at the moment in time you call console.log(), but it is the value of the object at the moment you open the console.</i>
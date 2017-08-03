/*
Note that in HTML, event listener names are written in all lowercase,
such as onclick or onmouseover.
In JSX, event listener names are written in camelCase,
such as onClick or onMouseOver.
*/

//Problem below involved:
//Add an onClick attribute to the <img /> element. Set onClick value equal to the makeDoggy function.
//result is to have a pic of a kitty load, thenclick on the browser image to change the kitty into a doggy.

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty"
    onClick={makeDoggy}   //this attribute was added
    />
);

ReactDOM.render(kitty, document.getElementById('app'));

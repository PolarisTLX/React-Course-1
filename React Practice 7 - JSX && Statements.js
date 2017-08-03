//&& works best in conditionals that will sometimes do an action, but other times do nothing at all.

//Here's an example:

const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

//Every time that you see && in this example, either some code will run, or else no code will run.



//Example: judging my favorite foods:

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods,
	document.getElementById('app')
);

/*this expression:

<li>Nacho Cheez Straight Out The Jar</li>

... will only appear if !judgmental. Feel free to use the example code as a guide.

Once you click Run, then every time that you refresh the browser,
there will be a 50% chance that judgmental will be true.
*/

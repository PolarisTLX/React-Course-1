/*
Here's a rule that you need to know:
you can NOT inject an if statement into a JSX expression.

This code will break:

(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
The reason why has to do with the way that JSX is compiled.
You don't need to understand the mechanics of it for now,

What if you want a JSX expression to render, but only under certain circumstances? You can't inject an if statement. What can you do?

You have lots of options. Here are some simple ways to write conditionals
(expressions that are only executed under certain conditions) in JSX.



One option is to write an if statement, and not inject it into JSX.

import React from 'react';
import ReactDOM from 'react-dom';

let message;
*/

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claires!
    </h1>
  );
}

ReactDOM.render(
  message,
  document.getElementById('app')
);

/*
This Example works, because the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.

This is a common way to express conditionals in JSX.
*/


//Heads or Tails Example:

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty}/>;
} else {
  img = <img src={pics.doggy}/>;
}


//Ternary method is shorter like so (explained a few lines below):
//const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
  img,
  document.getElementById('app')
);



//Another method is to use a ternary operator in a JSX expression:

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

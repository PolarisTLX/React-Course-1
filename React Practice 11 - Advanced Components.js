//Multi-line JSX:

//Until now, your render function return statements have looked like this, without any parentheses:

return <h1>Hello world</h1>;

//However, a multi-line JSX expression should always be wrapped in () parentheses!
//That is why QuoteMaker's return statement has parentheses around it.


import React from 'react';
import ReactDOM from 'react-dom';

class QuoteComp extends React.Component {
  render() {
    return (  //here is the added parentheses
      <blockquote>
        <p>   What is important now is to recover our senses.  </p>
       <cite>
         <a target="_blank"
          href="http://bit.ly/1LvSLUA">
          Susan Sontag
         </a>
       </cite>
     </blockquote>
   )           //here is the added parentheses
 }
}

ReactDOM.render(
  <QuoteComp />,
  document.getElementById('app')
)


//EXAMPLE:  Post a picture of a red panda:

import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
  src: 'http://bit.ly/1U92LL3',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);


//EXAMPLE:
//A render() function must have a return statement.
//However, that isn't all that it can have.
//Here's an example of some calculations inside of a render function:


class Random extends React.Component {
  render() {

    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random()*10+1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}

//NOTE that the const n MUST be declacred INSIDE the render() {..}?

//EXAMPLE: Photo of chosen friend:

import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {

    let friend = friends[1];

    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <Friend/>,
  document.getElementById('app')
);


//EXAMPLE:  use a conditional statement inside of a render() function:
//Notice that the if statement is located inside of the render function, but before the return statement.
//This is pretty much the only way that you will ever see an if statement used in a render function.

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let plans;
    if (!fiftyFifty){
      plans = 'Tonight I\'m going to bed WOOO'
    } else {
      plans = 'Tonight I\'m going out WOOO'
    }
    return <h1>{plans}</h1>
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
);

//You can, and often will, pass functions as props.
//It is especially common to pass event handler functions.

//This example, passed an event handler function as a prop.
//However, you have to define an event handler before you can pass one anywhere.


//You define an event handler as a method on the component class, just like the render method.
//Almost all functions that you define in React will be defined in this way, as methods in a class.

//NOTE Event handlers must be defined WITHIN a call component



//EXAMPLE:

//BEFORE:
//File Button.js:
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}


//File Talker.js:
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);


//If a user clicks on this <button></button> element, then you want your passed-in talk function to get called.
//That means that you need to attach talk to the <button></button> as an event handler.
//How do you do that? The same way that you attach any event handler to a JSX element: you give that JSX element a special attribute. The attribute's name should be something like onClick or onHover. The attribute's value should be the event handler that you want to attach.

//handleEvent, onEvent, and this.props.onEvent
//Let's talk about naming things.
//When you pass an event handler as a prop, there are two names that you have to choose.
//The first name that you have to choose is the name of the event handler itself.

//in the Talker.js file, hour event handler we chose to be named "talk()".

//The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.
//For our prop name, we also chose talk, as shown on line 15:

return <Button talk={this.talk} />;

//These two names can be whatever you want.
//However, there is a naming convention that they often follow.
//You don't have to follow this convention,
//but you should understand it when you see it.

//If you are listening for a "click" event,
//then you name your event handler handleClick.
//If you are listening for a "keyPress" event,
//then you name your event handler handleKeyPress:


//AFTER:

//File: Button.js:
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}

//File: Talker.js:
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//One major source of confusion is the fact that names
// like onClick have special meaning,
//but ONLY if they're used on HTML-like elements.

//Look at Button.js. When you give a <button></button> an attribute named onClick,
<button onClick={this.props.onClick}> Click me! </button>
//then the name onClick has special meaning creates an event listener,

//But in Talker.js. Here, giving <Button /> an attribute named onClick
//doesn't do anything special / does not create an event listener
//Because <Button /> is not an HTML-like JSX element; it's a component instance.
//Remmeber the Capital Letter in <Button> (a component) versus <button> (A JSX HTML Element)

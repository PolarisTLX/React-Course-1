//this   keyword in React:

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() {
    return 'Paul';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

/*
Why don't you need parentheses after this.food?
Shouldn't it be this.food()?

You don't need those parentheses, because .food is a getter method???
You can tell this from the get in the above class declaration body???

There's nothing React-specific about getter methods,
nor about this behaving in this way! However,
in React you will see this used in this way almost constantly.
*/



//Event Listener in a Component
//Here's an example of an event listener in a render function:

render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}

//NOTE an event handler is a function that gets called in response to an event.
//In the above example, the event handler is myFunc().
//In React, you define event handlers as methods on a component class.
//Like this:

class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>;
    );
  }
}

//.myFunc() will be called any time that a user hovers over the rendered <div></div>.


//EXAMPLE 2:
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return (
      <button onClick={this.scream}>  //don't need .scream() even without "get"???
        AAAAAH!
      </button>
    );
  }
}

ReactDOM.render (
  <Button />,
  document.getElementById('app')
);

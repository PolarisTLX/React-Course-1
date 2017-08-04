//state:

//props and state are all that you need to set up an ecosystem of interacting React components.

//The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

//There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.


//Unlike props, a component's state is not passed in from the outside.
//A component decides its own state.


//To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />


//this.state should be equal to an object, like in the example above.
//This object represents the initial "state" of any component instance.

//constructor and super are both features of ES6, not unique to React.
//It is important to note that React components ALWAYS have to call
//"super" in their constructors to be set up properly.

//IMPORTATE NOTE:
//Make sure not to separate constructor and render with a comma! Methods should never be comma-separated, if inside of a class body.


//To read a component's state, use the expression this.state.name-of-property:

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        "I'm feeling {this.state.mood}!"  //remove double quotes
      </h1>
    );
  }
}


//Update state with this.setstate
//A component can do more than just read its own state. A component can also change its own state.

//A component changes its state by calling the function this.setState().

this.setState()
//takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.


//<Example /> has a state of:
{
  mood:   'great',
  hungry: false
}

//Now, let's say that <Example /> were to call:
this.setState({ hungry: true });

//After that call, here is what <Example />'s state would be:
{
  mood:   'great',
  hungry: true
}


//missing a bunch of notes about this.bind



//EXAMPLE:  Change color page:
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

//changeColor() {
//  if (this.state.color == green ? this.state.color = yellow : this.state.color = green);
//  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor})
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>  Change color </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
);


//NOTE:  Any time that you call this.setState(),
//this.setState() AUTOMATICALLY calls .render()
//as soon as the state has changed.

//That is why you can't call this.setState() from inside of the .render() method!
//this.setState() automatically calls .render(). If .render() calls this.setState(),
//then an infinite loop is created.

//Previously, you learned one way that components can interact:
//a component can render another component.

//In this lesson, you will learn another way that components can interact:
//a component can pass information to another component.

//Information that gets passed from one component to another
// is known as "props."

//Every component has something called props.

//A component's props is an object. It holds information about that component.

//To see a component's props object, you use the expression this.props.


//Here's an example of this.props being used inside of a render method:

render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}

//Most of the information in this.props is pretty useless!
//But some of it is extremely important, as you'll see.


//You can pass information to a React component
// by giving that component an attribute:

<MyComponent foo="bar" />

//Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:

<Example message="This is some top secret info." />
//In the above example, we used the name message. You can use any name you want.


//If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:
<Greeting myInfo={["top", "secret", "lol"]} />

//In this next example, we pass several pieces of information to <Greeting />. The values that aren't strings are wrapped in curly braces:
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />


import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
          <PropsDisplayer myProp="Hello" />, //this goes on the screen (because it goes in the properties)
          document.getElementById('app')
  );

//The page thus renders like this:

  CHECK OUT MY PROPS OBJECT
    {"myProp":"Hello"}


//Here's how to make a component display passed-in information:
//1 - Find the component class that is going to receive that information.
//2 - Include this.props.name-of-information in that component class's render method's return statement.

//At the bottom of the ReactDOM .render()
<Greeting firstName="Esmerelda" />

//Back up in the class's render()
render() {
  return <h1>{this.props.firstName}</h1>;
}

//Full example:
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Paul' />,
  document.getElementById('app')
);


//How to pass a prop from one component to another:
//pass a prop from a component to a different component, access that prop from the receiver component, and render it

//BEFORE:
//Greeting.js
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

ReactDOM.render(
  <Greeting name='Groberta' />,
  document.getElementById('app')
);

//App.js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>

        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


//AFTER:
//Greeting.js
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}



//App.js
import React from 'react';
import ReactDOM from 'react-dom';

import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="name" />

        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

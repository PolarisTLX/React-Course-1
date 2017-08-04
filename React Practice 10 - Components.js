//This code will create and render a new React component:

//a React component is a small, reusable chunk of code that is responsible for one job,
//which often involves rendering HTML.

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);



//Smaller pieces:

//you get the React library via

import React from 'react';.

//This line of code creates a new variable. That variable's name is React, and its value is a particular, imported JavaScript object:

// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }

//For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all.
//React.createElement() must be available in order for JSX to work.


import ReactDOM from 'react-dom';

//there is a difference from the first one!
//The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().
//The methods imported from 'react' don't deal with the DOM at all. They don't engage directly with anything that isn't part of React.
//To clarify: the DOM is used in React applications, but it isn't part of React.



//Component Class

 //every component must come from a component class.
 //A component class is like a factory that creates components.
 //If you have a component class, then you can use that class to produce as many components as you want.

 //To make a component class, you use a base class from the React library: React.Component.
 //You can do this by using the syntax:
 //   class YourComponentNameGoesHere extends React.Component {}.


 import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);


//Component class variable names must begin with capital letters!
//This adheres to JavaScripts class syntax.
//Programming convention in which class names are written in UpperCamelCase.



//below is what your class body would look like on its own,
//without the rest of the class declaration syntax:

{
 render() {
   return <h1>Hello world</h1>;
 }
}

//That doesnt look lik a set of instructions explaining how to build a React component!
//Yet that's exactly what it is.

class ComponentFactory extends React.Component {
    // instructions go here, between the curly braces
}

//There is only one property that you MUST to include in your instructions:
//a render method. And this render method MUST contain a return statement.
//Usually, this return statement returns a JSX expression:

class ComponentFactory extends React.Component {
  render() {
    return //some JSX expression with <></>;
  }
}



//To make a React component, it only takes one more line:

<MyComponentClass />

//You write a JSX element and give it the same name as your componenet class.
//Instead of something like h1 or div like you've done before.
//Voilà, there's your component instance!

//JSX elements can be either HTML-like, or component instances.
//JSX uses capitalization to distinguish between the two!
//That is the React-specific reason why component class names must begin with capital letters.
//In a JSX element, that capitalized first letter says,
//"I will be a component instance and not an HTML tag."


class MyComponentClass extends React.Component {
  // everything in between these curly-braces is instructions
  //for how to build components

  render() {
    return <h1>Hello world</h1>;
  }
}



//Whenever you make a component, that component inherits all of the methods of its component class.
//MyComponentClass has one method: MyComponentClass.render().
//Therefore, <MyComponentClass /> also has a method named render.


//Since your component has a render method, all that's left to do is call it.
//To call a component's render method, you pass that component to ReactDOM.render().

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

//ReactDOM.render() will tell <MyComponentClass /> to call its render method.

//<MyComponentClass /> will call its render method,
//which will return the JSX element <h1>Hello world</h1>.
//ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM.
//This will make "Hello world" appear on the screen.

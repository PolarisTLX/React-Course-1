//React components Interating:

//Render methods can also return another kind of JSX: component instances.

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

//Above, Crazy's render method returns an instance of the OMG component class.
//You could say that Crazy renders an <OMG />.



//EXAMPLE NavBar:

//File NavBar.js
import React from 'react';

export class NavBar;  //THIS LINE IS IMPORTANT!!!

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

//File ProfilePage.js:
import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar';    //this line is IMPORTANT!!!


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}


//If you want to use a variable that's declared in a different file,
//such as NavBar, then you have to import the variable that you want.
//To import a variable, you can use an import statement:

import { NavBar } from './NavBar.js';

//We've used import before, but not like this!
Notice the differences between the above line of code and this familiar line:

import React from 'react';

//The first important difference is the curly braces around NavBar. We'll get to those soon!

//The second important difference involves the contents of the string at the end of the statement:
'react' vs './NavBar.js'.

//If you use an import statement, and the string at the end begins with either a dot or a slash  './...',
//then import will treat that string as a filepath.
//import will follow that filepath, and import the file that it finds.

//If your filepath doesn't have a file extension,
//then ".js" is assumed. So the above example could be shortened:

import { NavBar } from './NavBar';

//One final, important note:
//None of this behavior is specific to React!
//Module systems of independent, importable files are a very popular way to organize code.
//React's specific module system comes from ES6

//You also need an export statement, written in the other file!


//There are a few different ways to use export.
//In this course, we will be using a style called "named exports."
//Here's how named exports works:

//In one file, place the keyword export immediately before something that you want to export.
//That something can be any top-level var, let, const, function, or class:



//You can export multiple things from the same file:
// Manifestos.js:

export const faveManifestos = {
  futurist: 'http://bit.ly/1lKuB2I',
  SCUM:     'http://bit.ly/1xWjvYc',
  cyborg:   'http://bit.ly/16sbeoI'
};
export const alsoRan = 'TimeCube';


//followed by the import in the receiving file:

import { faveManifestos, alsoRan } from './Manifestos';

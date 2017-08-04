//this.props.children
//Every component's props object has a property named children.

//this.props.children

//will return everything in between a component's opening and closing JSX tags.



//So far, all of the components that you've seen have been self-closing tags,

//such as <MyComponentClass />.

//They don't have to be! You could write:

//<MyComponentClass></MyComponentClass>,

//and it would still work.



//BigButton EXAMPLE:

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>

// Example 2
<BigButton>
  <LilButton />
</BigButton>

// Example 3
<BigButton />

//In Example 1, <BigButton>'s this.props.children would equal
//the text "I am a child of BigButton."

//In Example 2, <BigButton>'s this.props.children would equal
//a <LilButton /> component.

//In Example 3, <BigButton>'s this.props.children would equal
//undefined.


//If a component has more than one child between its JSX tags,
//then this.props.children will return those children in an array.
//However, if a component has only one child,
//then this.props.children will return the single child, not wrapped in an array.


//Example where there is more than one child in one case, but not the other:

//File App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//File List.js:
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    //this adds an 's' to the title is there is more than one child,
    //because it comes back as an array if there is more than one
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}



//Default props:

//The received text will be displayed inside of a <button></button> element.
//What if nobody passes any text to Button?

//If nobody passes any text to Button, then Button's display will be blank. It would be better if Button could display a default message instead.

//Inside of this object, write properties for any default props that you'd like to set:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps = { text: 'yo' };

//If an <Example /> doesn't get passed any text, then it will display "yo."

//If an <Example /> DOES get passed some text, then it will display that passed-in text.


//Full EXAMPLE:
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button'};

ReactDOM.render(
  <Button />,
  document.getElementById('app')
);

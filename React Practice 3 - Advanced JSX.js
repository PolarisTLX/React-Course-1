/*
In JSX, you can't use the word class! You have to use className instead:

<h1 className="big">Hey</h1>

This is because JSX gets translated into JavaScript,
and class is a reserved word in JavaScript.

*/

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
let myDiv = (
  <div className="big">I AM A BIG DIV</div>
  )

ReactDOM.render(
  myDiv,
  document.getElementById("app")
)

//If your rendered <div></div> has a class of "big", then it should look big in the browser!




/*Self-closing tags:

When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:

Fine in HTML with a slash:

  <br />

Also fine, without the slash:

  <br>


  But in JSX, you have to include the slash! If you write a self-closing tag in JSX and forget the slash, you will raise an error:

  Fine in JSX:

    <br />

  NOT FINE AT ALL in JSX:

    <br>


Bascially always include the end / everywhere as practice can avoid this

  */



/*JSX Curly Braces

Any code in between the tags of a JSX element will be read as JSX,
not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.

Example prints  "2 + 3"  just like a string instead of  "5":
    ReactDOM.render(
      <h1>2 + 3</h1>,
      document.getElementById('app')
    );

to write code that says:
 "Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX."

You can do this by wrapping your code in curly braces.


Example prints  "5"  because of the curly braces {}
    ReactDOM.render(
      <h1>{2 + 3}</h1>,
      document.getElementById('app')
    );


EXAMPLE:  This prints  "2 + 3 = 5"  :
    let math = (
      <h1>2 + 3 = {2 + 3}</h1>
    );

    ReactDOM.render(
      math,
      document.getElementById('app')
    );


*/

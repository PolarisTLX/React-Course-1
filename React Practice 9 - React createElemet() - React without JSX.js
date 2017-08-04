/*React.createElement
You can write React code without using JSX at all!

The majority of React programmers do use JSX, and we will use it for the remainder of this tutorial, but you should understand that it is possible to write React code without it.

The following JSX expression:*/

const h1 = <h1>Hello world</h1>;

//can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

/*
When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: React.createElement().
Every JSX element is secretly a call to React.createElement().
*/


//ANOTHER EXAMPLE:

//Create this element without using JSX:
const greatestDivEver = <div>i am div</div>;

//ANSWER
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);

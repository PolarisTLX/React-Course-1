If you want to create a list of JSX elements,
then .map() is often your best bet. It can look odd at first:

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
In the above example, we start out with an array of strings.
We call .map() on this array of strings, and the .map() call returns a new array of <li>s.

On the last line of the example, note that {listItems} will evaluate to an array, because it's the returned value of .map()! JSX <li>s don't have to be in an array like this, but they can be.

// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

const liArray = [
  <li>item 1</li>,
  <li>item 2<li>,
  <li>item 3</li>
];

<ul>{liArray}</ul>


//Example: create a list of people's names, into an <ul><li></li>...<li></li></ul>
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
<li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
 );



/*
 Keys
When you make a list in JSX, sometimes your list will need to include something called keys:

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

A key is a JSX attribute. The attribute's name is key.
The attribute's value should be something unique, similar to an id attribute.

keys don't do anything that you can see!
React uses them internally to keep track of lists.
If you don't use keys when you're supposed to,
React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys.
A list needs keys if either of the following are true:

- The list-items have memory from one render to the next.
Like for a to-do list, each item must "remember" whether it was checked off. You want this state preserved when it is rendered.

-A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

If neither of these conditions apply, then you don't have to worry about keys.
If you aren't sure then it never hurts to use them!
*/


//EXAMPLE:  List of people that need to be in a specific order:

On line 8, give your <li></li> a key attribute.

What should keys value be? In this case, the answer is surprisingly tricky.

.map() is going to loop over your expression on line 8, creating a new <li></li> with a new key attribute on each loop. You need every key to be unique! How can you get .map() to produce a unique key, each time it loops?

First, add an i parameter to .map()'s inner function, so that you can access each person's unique index:

const peopleLIs = people.map((person, i) =>
Now, you can get a unique key on each loop, by adding the following attribute to your <li></li>:

key={'person_' + i}


import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

//Original:
//const peopleLis = people.map((person, i) =>
//<li>{person}</li>
//);
//CORRECTED TO GIVE A NEW KEY Each Time:
const peopleLis = people.map((person, i) =>
  // expression goes here:
<li key={'person_' + i}>{person}</li>
);

ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
  );

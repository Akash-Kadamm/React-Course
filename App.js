// Creating React element is the responsibility of react core library
// Creating root and render h1  inside root and do dom manupulation is the responsibility of REACT DOM library
// most costly operation in browser is dom manipulation.
// all these freamework and libraries try to optimize it -- thats why we use react / angular
// {}--> this objecvt contains attribute.
// heading--> is an javascript object/React Element.
// React.createElement()--> which creates an javascript object/React Element its not a h tag yet.
// root.render(heading)--> will get heading object convert into html tag and put it on to the DOM.
// if there is siblings than we can use array to pass two childrens . as i passed 2nd h2 tag below.
// we can pass single children or array of childrens.
// react can write in javascript not only in jsx syntex.-- below code is the example where we create elements and manupulate dom by using only javascript syntex.
// below js code looks like ugly. think about its just 1 nesting if depper nesting is there than it makes code ugly and difficult to understand.so here jsx syntex comes into picture.
// jsx--> makes programers life easy.
// we can use react in small portion of your app UI just like root . inject react through react cdn links and use it . thats why its a light weight java script library.
// its not full fleg freamework like Angular.


const heading = React.createElement(
  "h1",
  { color: "red", id: "heading" },
  "Hello from react"
);

const heading2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    heading,
    React.createElement("h2", {}, "Hello from 2nd tag"),
  ])
);

console.log(heading2);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);

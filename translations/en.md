# GG.js
Interfaces much more complex | Development much more simple

![GitHub Logo](https://imgur.com/izjGIx2.png)

# Introduction
  
### What is GG.js?
  
GG.js is a single-function javascript templating engine.

Its usefulness is to develop much more complex interfaces in a much simpler way.

This one function may seem trivial. But, you may be surprised.


### Version minified
```js
const gg = function(a){var d="area base br col embed hr img input keygen link meta param source track wbr".split(" ");if(a){a.style?a.style=a.style.split("\n").join(" "):se=0;a.tag?se=0:a.tag="div";var b="<"+a.tag,c;for(c in a)"tag"!=c&&"html"!=c?b+=" "+c+"='"+a[c]+"'":se=0;d.includes(a.tag)?a=b+"/>":(b=a.html?b+(">"+a.html):b+">",a=b+("</"+a.tag+">"));return a}};
```

### Version no minified
```js
const gg = function(obj){
  const emptyElements = ['area','base','br','col','embed','hr','img','input','keygen','link','meta','param','source','track','wbr']   
  const mount = (obj) => {  
    obj.style ? obj.style = obj.style.split('\n').join(' ') : 0 
    !obj.tag ? obj.tag = 'div' : 0    
    let el = '<'+obj.tag 
    for(let index in obj ) index != 'tag' && index != 'html' ? el+= (" "+index+"='"+obj[ index ]+"'") : 0
    if(emptyElements.includes( obj.tag )) return el+'/>' 
    else if(obj.html) el+= '>' + obj.html
    else el+='>'  
    return el+='</'+obj.tag+'>'
  }
  if(obj) return mount(obj)
}
//The elements = <div></div>, <span></span>, etc.
//The emptyElements = <input/>, <img/>, etc.
```


# Usage

### Comparison with React
#### React
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('#root'));
```
#### GG
```js
var DIV = {}

DIV.welcome = props => {   
  return gg({
    tag:"h1",
    html: `Hello, ${props.name}`
  })
}     

DIV.app = () => {
  return gg({
    html: DIV.welcome({name:"Sara"}) +
          DIV.welcome({name:"Cahal"}) +
          DIV.welcome({name:"Edite"})
  })
}

document.getElementById('#root').innerHTML = DIV.app()
```
GG.js is pure Javascript.

Without babel. Without webpack. Without NPM. Without vulnerabilities.

Without unused code.

Without having to consult documentation to know how to use it.

# Context

### Contextualization

Web applications are becoming increasingly complex.

This complexity produces a diversity of problems.

One of the problems with web programming is the development of dynamic HTML/CSS interfaces.

For example, creating elements with the conventional DOM API implementation is tremendously verbose and bureaucratic:

```js
var imgNodeToAdd = document.createElement("img")
nodeToAdd.setAttribute("class", "myImage")
var newText = document.createTextNode("Hello!")
nodeToAdd.appendChild(newText)
```

To deal with problems like this, a new library and framework appears every day.


### The usefulness of technologies

In the best cases, programmers look for certain technology
because it really is the best option to solve a certain problem.

In the worst cases, programmers abandon simplicity
because the complexity of the frameworks brings with it a certain status.

There are many projects that we develop alone.
In 99% of these projects, Libraries and Frameworks like React, Vue and Angular are overengineering.
That is, they have more resources than necessary for the intended use.

In such cases, when the technology used is not the best option, problems arise:

- This slows down the performance of application.
- We do not have full knowledge and control of the code.
- We are limited to what the framework determined to be the best for most cases.
- We waste time researching how to do things that were previously extremely simple.
- We waste time learning a variety of features that are not relevant.
 

### Usage recommendation

Wanting to "reinvent the wheel" is not always a good idea.
To work as a team all the bureaucracy of frameworks pays off in the end.

However, many times, less is more.
And these times, if you don't need to use something, don't use it.

GG.js is recommended mainly for creating interfaces that constantly change places.
Which is what happens in most applications today.
 
 
### Why use GG.js?

Using GG.js can bring advantages:

- Create templates and HTML interfaces in a simpler way.
- Do not need to learn anything other than the javascript we already know.
- Remain with full understanding of the code we have developed.
- Get the maximum performance from the application. For example, getting 100% rates at Google Audits Lighthouse,
which reflects something truly useful about the user experience.
- Make the code more intelligible, modular, flexible and reusable than you ever imagined.

You can create complex interfaces with any framework.

However, with GG.js the "mental wear" to "manage the same puzzle" is much less.

### Project complexity level

When the project requires many programmers, each one can "take care of their square".
In projects like this, there is no such "greater mental wear" to manage and expand complexity.

Now, depending on the level of complexity of the project,
code management and expansion should be the role of architects, not programmers.

Unfortunately we are obliged to develop the tracks with the train moving.
And we only know how far we can go, making mistakes. There's no way!
 
### Functional approach like ECS (Entity-Component-System)

GG.js was inspired by Mithril. However, it is much simpler.
With GG.js "componentization" becomes much more functional.

You can import ready-made classes and components as in classic object orientation.
And, if you want, you can also modify and create new classes and components at run time.
This makes the code more flexible, easier to expand and modify.

This type of approach is widely used in games that are very complex applications.

### Conclusion

Anyone using GG.js will hardly want to use anything else to create HTML interfaces.

Even better if this were a native feature of ECMAScript.


# Illustrative examples

  
### Example 01:
```js
var div = gg({ 
  id: 'id',
  class: 'classe',
  html: 'gg.js is rocks!'
})

console.log( div ) 
/*
<div id='id' class='classe'>gg.js is rocks!</div>
*/
```
  

### Example 02:
```js
var div = ( value ) => gg({ 
  id: 'id',
  class: 'classe',
  html: value
})

console.log( div("gg.js is rocks!") ) 
/*
<div id='id' class='classe'>h.js is rocks!</div>
*/
```
-------------------------------------------------------------

### Example 03:
```js
// Templating

var li = ( name ) => gg({ 
  tag: "li",
  html: name
}) 

var ul = ( lists ) => gg({ 
  tag: "ul",
  html: lists
})

// Combining

var div = ul(
  li("Hello") +
  li("World")
) 

console.log( div ) 
/*
<ul>
  <li>Hello</li>
  <li>World</li>
</ul>
*/
```
-------------------------------------------------------------

### Example 04:

```js
// Templating

var div = ( val ) => gg({ 
  id: 'root',
  html: val
}) 

var li = ( name ) => gg({ 
  tag: 'li',
  html: name
}) 

var ul = ( lis ) => gg({ 
  tag: 'ul',
  html: lis
})

var button = ( name, events ) => gg({ 
  tag: 'button',
  html: name,
  onclick: events
})

var image = ( url, classe ) => gg({
  tag: 'img',
  class: 'classe',
  src: url
})

// Combining

var template = div( 
  ul( 
    li('name1') + 
    li('name2') +
    li('name3') +
    button('name3', 'click()') +
    image('favicon.ico', 'image')
  ) 
) 

console.log( template ) 
/*
<div id='root'>
  <ul>
    <li>name1</li>
    <li>name2</li>
    <li>name3</li>
    <button onclick='click()'>name3</button>
    <img class='image' src='favicon.ico'/>
  </ul>
</div>
*/
```

-------------------------------------------------------------

### Example 05:

```js
// Templating

var header = ( val ) => {
  
  var title = gg({    
    tag: 'h1',
    html: val
  })
  
  var div = gg({ 
    id: val,
    html: title
  })
  
  return div  
}

var footer = ( val ) => {
  
  var footer = gg({    
    tag: 'h1',
    html: val
  })
  
  var div = gg({  
    id: val,
    html: footer
  })
  
  return div  
}

  
var message = ( val ) => gg({   
  html: val,
  class: 'message',
  style: `
color: red;
font-size: 14px;
`
})

var chat = () => gg({
  id: 'chat',
  html: message('Hello world')
})


var root = gg({
  id: 'root',
  html: header('header') + chat() + footer('footer')
})

console.log( root ) 
/*
<div id='root'>

  <div id='header'>
    <h1>header</h1>
  </div>
  
  <div id='chat'>
    <div class='message' style=' color: red; font-size: 14px; '>Hello world</div>
  </div>
  
  <div id='footer'>
    <h1>footer</h1>
  </div>
  
</div>
*/
```


## Size
 
595 bytes
 
## License

 [MIT](http://opensource.org/licenses/MIT)

Copyright (c) Gurigraphics, 2020.


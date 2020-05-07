![alt tag](https://imgur.com/Dn8tWkp.png)

# Introduction
  
### What is gg.js?
  
gg.js is a single-function javascript templating engine.


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
```
The emptyElements = <input/>, <img/>, etc.
The elements = <div></div>, <span></span>, etc.

### Motivation

React, Vue, Angular, etc., are overengineering in 99% of the projects that you develop alone.

These libraries and frameworks has more resources than necessary for its intended use.

### Problems

1. This slows down the performance of your application.
2. You do not know and do not have full control of the code.
3. You waste time learning a lot of features that are not relevant.
4. You waste time researching how to make things extremely simple.

And that is not exactly problems of these libraries and frameworks.

All of this is because of the conventional implementation of The DOM API.

That forces us to use these libraries and frameworks.

For example, creates elements is very verbose and bureaucratic.

```js
var imgNodeToAdd = document.createElement("img")
nodeToAdd.setAttribute("class", "myImage")
var newText = document.createTextNode("Hello!")
nodeToAdd.appendChild(newText)
```

### So, why use gg.js?

1. To extract as much performance as possible. For example, for you get 100% rate's in Google Audits Lighthouse.
2. For you to have total control of the code.
3. For you don't need to learn anything other than the javascript you already know.
4. For you to create HTML templates in the simplest way.
5. Your code will be more intelligible, modular, flexible and reusable than you ever imagined before.

Whoever uses gg.js will hardly want to use anything else in most of their projects.

Even better if that were a native feature of ECMAScript.
  

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
 
**gg.js**: 595 bytes
 
## License

 [MIT](http://opensource.org/licenses/MIT)

Copyright (c) Gurigraphics, 2020.

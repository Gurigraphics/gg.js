# GG.js
Interfaces muito mais complexas | Desenvolvimento muito mais simples

![GitHub Logo](https://imgur.com/izjGIx2.png)  

# Introdução
  
### O que é gg.js?
  
gg.js é uma single-function javascript templating engine.

Sua utilidade é desenvolver interfaces muito mais complexas de forma muito mais simples.

Essa única função pode parecer algo trivial. Mas, você pode se surpreender.


### Versão minificada
```js
const gg = function(a){var d="area base br col embed hr img input keygen link meta param source track wbr".split(" ");if(a){a.style?a.style=a.style.split("\n").join(" "):se=0;a.tag?se=0:a.tag="div";var b="<"+a.tag,c;for(c in a)"tag"!=c&&"html"!=c?b+=" "+c+"='"+a[c]+"'":se=0;d.includes(a.tag)?a=b+"/>":(b=a.html?b+(">"+a.html):b+">",a=b+("</"+a.tag+">"));return a}};
```

### Versão não minificada
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

# Utilização

### GG object tag
```js
var div = gg({
 tag: "tagName",
 src: "image.png",
 data: "123",
 class: "classe",
 onclick: "func(event)""
})
```

### Results HTML XML tag
```js
<tagName src="image.png" data="123" class="classe" onclick="func(event)"></tagName>
```

# Comparação com React
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
GG.js é puro Javascript. 

Sem babel. Sem webpack. Sem NPM. Sem vulnerabilidades.

Sem código não utilizado.
Sem ter que consultar documentação para saber como utilizar.

# Contexto

### Contextualização

As aplicações web se tornam cada dia mais complexas.
Essa complexidade produz uma diversidade de problemas.
Um dos problemas da programação web é o desenvolvimento de interfaces dinâmicas HTML/CSS.

Por exemplo, criar elementos com a implementação convencional do DOM API é tremendamente verboso e burocrático:

```js
var imgNodeToAdd = document.createElement("img")
nodeToAdd.setAttribute("class", "myImage")
var newText = document.createTextNode("Hello!")
nodeToAdd.appendChild(newText)
```

Para lidar com problemas como este, todo dia surge uma nova library e framework.


### A utilidade das tecnologias

Nos melhores casos, os programadores buscam determinada tecnologia 
porque ela realmente é a melhor opção para resolver determinado problema.

Nos piores casos, os programadores abandonam a simplicidade 
porque a complexidade dos frameworks trás consigo um certo status.

Há muitos projetos que desenvolvemos sozinhos.
Em 99% desses projetos, as Libraries e Frameworks como React, Vue e Angular são overengineering.
Ou seja, possuem mais recursos do que o necessário para o uso pretendido.

Nesses casos, quando a tecnologia utilizada não é a melhor opção, surgem problemas:

- A performance da aplicação é prejudicada.
- Não temos total conhecimento e controle do código.
- Somos limitados aquilo que o framework determinou como sendo o melhor para uma generalidade de casos.
- Perdemos tempo pesquisando como fazer coisas que antes eram extremamente simples.
- Perdemos tempo aprendendo uma diversidade de features que não são relevantes.


### Recomendação de uso

Querer "reinventar a roda" nem sempre é uma boa ideia.
Para trabalhar em equipe toda a burocracia dos frameworks compensa no final.

Porém, muitas vezes, menos é mais. 
E nestas vezes, se você não precisa usar algo, não use.

GG.js é recomendado principalmente para a criação de interfaces que tudo muda constantemente de lugar.
Que é o que ocorre em grande parte das aplicações atualmente.
 
 
### Por que usar GG.js?

Utilizar GG.js pode trazer uma série de vantagens:

- Criar templates e interfaces HTML de uma maneira mais simples.
- Não precisar aprender nada além do javascript que já conhecemos.
- Permanecer com o total entendimento do código que desenvolvemos.
- Obter o máximo de performance da aplicação. Por exemplo, obter nota máxima no Google Audits Lighthouse,
que reflete algo verdadeiramente útil quanto a experiência do usuário.
- Tornar o código mais inteligível, modular, flexível e reutilizável do que você jamais imaginou.

Você pode criar interfaces complexas com qualquer framework.
Contudo, com GG.js o "desgaste mental" para "gerenciar o mesmo puzzle" é muito menor.

### Nível de complexidade do projeto

Quando o projeto requer muitos programadores, cada um pode "cuidar do seu quadrado".
Em projetos assim, não ocorre esse tal "maior desgaste mental" para gerenciar e expandir a complexidade.

Agora, conforme o nível de complexidade do projeto, 
o gerenciamento e expansão do código deveria ser o papel de arquitetos e não de programadores.

Infelizmente nós somos obrigados a desenvolver os trilhos com o trem andando.
E só conseguimos saber até onde conseguimos ir, errando. Não tem jeito! 
 
### Abordagem funcional like ECS(Entity-Component-System)

GG.js foi inspirado no Mithril. Porém é muito mais simples.
Com GG.js a "componentização" se torna muito mais funcional.

Você pode importar classes e componentes como na orientação a objetos clássica.
E, se quiser, também pode modificar e criar novas classes e componentes em tempo de execução.
Com isso, o código se torna mais flexível, mais fácil de expandir e modificar.

Este tipo de abordagem é muito utilizada em games que são uma das aplicações mais complexas que existem.

### Conclusão

Quem usa o gg.js dificilmente vai querer usar outra coisa para criar interfaces HTML.

Melhor ainda se isso fosse uma feature nativa do ECMAScript.




# Exemplos

  
### Exemplo 01:
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
  

### Exemplo 02:
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

### Exemplo 03:
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

### Exemplo 04:

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

### Exemplo 05:

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


## Tamanho
 
595 bytes
 
## Licença

 [MIT](http://opensource.org/licenses/MIT)

Copyright (c) Gurigraphics, 2020.


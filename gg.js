/*
 *  gg.js
 *  Version 1.0.0
 *  https://github.com/Gurigraphics/gg.js
 *
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/MIT
 *  
 *  gg.js is a single-function javascript templating engine.
 *  
 */  
var gg=function(a){var d="area base br col embed hr img input keygen link meta param source track wbr".split(" ");if(a){a.style?a.style=a.style.split("\n").join(" "):se=0;a.tag?se=0:a.tag="div";var b="<"+a.tag,c;for(c in a)"tag"!=c&&"html"!=c?b+=" "+c+"='"+a[c]+"'":se=0;d.includes(a.tag)?a=b+"/>":(b=a.html?b+(">"+a.html):b+">",a=b+("</"+a.tag+">"));return a}};

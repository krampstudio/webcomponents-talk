# Web Components, the future starts today

## Web development is a hack, semantic is a lie

 Developing web site and web app is hard. Perpetual problems:
  - maintanbility 
  - style consistency
  - 3rd part tools integration
  - productivity
 
 Let see how some examples I had to deal with in my carrier



```html
<CENTER><FONT size=+4>
    <A href="javascript:void(0); alert('ok');">
        <TABLE BORDER=0 WIDTH="450" >
            <TR>
                <TD WIDTH="40" <BR></TD>
                <TD>&NBSP;</TD>
                <TD WIDTH="410">
                    <FONT SIZE=+2>C</FONT>lick me
                </TD>
            </TR>
            <TR>
                <TD><IMG src="1x1.gif" BORDER=0 HEIGHT=1 WIDTH=1></TD>
            </TR>
        </TABLE>
    </A>
</FONT></CENTER>
```

```html
<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="320" HEIGHT="240" id="Button" ALIGN="">
<PARAM NAME=movie VALUE="button.swf">
<PARAM NAME=quality VALUE=high>
<PARAM NAME=bgcolor VALUE=#333399>
<EMBED src="button.swf" quality=high bgcolor=#333399 WIDTH="320" HEIGHT="240" NAME="Yourfilename" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>
```

```html
<STYLE>

.start {color:yellow; background:navy}
.end {color:green; background:#ff00ff}

</STYLE>
<SCRIPT LANGUAGE="javascript">

function highlightButton(s) {
if ("INPUT"==event.srcElement.tagName)
    event.srcElement.className=s
}
</SCRIPT>
<FORM NAME=highlight onMouseover="highlightButton('start')" onMouseout="highlightButton('end')">
    <INPUT TYPE="button" VALUE="Pass Your Mouse Over Me" onClick="location.href='http://www.htmlgoodies.com'">
</FORM>
```

```html
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script>
$(document).ready(function(){
   for ( var i = 0; i < 10; i++){
      $('#container').append($('<div class="item" id="item-' + i +'"> Item ' + i + '</div>'));
   }
   $('.item').click(function(){
       alert('Select item ' + $(this).attr('id').replace('item-', ''));
   });
});
</script>
<div id="container"></div>
```

```html
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
```

```html
<div class="ng-app">
    <form ng-submit="saveEdits(todo, 'submit')">
        <input class="edit" ng-trim="false" ng-model="todo.title" todo-escape="revertEdits(todo)" ng-blur="saveEdits(todo, 'blur')" todo-focus="todo == editedTodo">
    </form>
</div>
```

```html
<div class="container"></div>
<script type="text/babel">
  ReactDOM.render(
    <a>Hello, world!</a>,
    document.getElementById('container')
  );
</script>
```

## Web components to save our soul

```html
<ks-button>Click me</ks-button>
```

A mail reader ?

```html
<header>
    <h1>My mail box</h1>
    <nav>
        <user-profile gravatar="true"></user-profile>
    </nav>
</header>
<main>
    <aside>
        <mail-list>
            <mail-item status="read" label="social,important" selected>Next JsLuxembourg</mail>
            <mail-item status="unread" label="spam">Enlarge your knowledge</mail>
        </mail-list>
    </aside>
    <section>
       <header>Next Js Luxembourg</header>
       <mail-reader></mail-reader>
    </section>
    <mail-button-new></mail-button-new>
</main>
```

A real example : my unmaintaned web blog [krampstudio.com](http://krampstudio.com/en/index.html)


## By the way, what are exactly _Web Components_


The gang of 4 w3c specs Google is pushing for (the Google / Polymer point of view)
 - Custom Element  - Shadow DOM
 - HTML Templates  - HTML Impports

But this is not the only way

### Custom element

 - Define new DOM elements

```js
document.registerElement('x-cow', {
   prototype : Object.create(HTMLElement.prototype)
});
```

```
<x-cow></x-cow>
```
 
 - Extend existing elements

```js
document.registerElement('x-cow', {
   prototype : Object.create(HTMLAnchorElement.prototype)
});
```

```
<a is="x-cow" href="#moo"></a>
```

 - Element attributes and methods

```js
const species = new Set('holstein', 'abondance', 'limousine');
const xCowPrototype = Object.create(HTMLElement.prototype,{
   specy : {
      get(){
         let current =  this.getAttribute('specy');
         if(!current || species.has(current)){
             return 'holstein';
         }
         return current;
      },
      set(val){
         if(species.has(val)){
             this.setAttribute('specy', val);
         }
      }
   }
   moo : {
      value(){
         console.log(this.id + ' does a ' + this.specy + ' moo ');
      }
   }
});
document.registerElement('x-cow', {
   prototype : xCowPrototype
});
```

```html
<x-cow id="cow-1"></x-cow>
<x-cow id="cow-2" specy="abondance"></x-cow>
```

```js
for( let cow of document.querySelecotorAll('x-cow')){
  cow.moo();
}
```

see Object.create and Object.defineProperties


 - Lifecycle 
 
```js
const xCowPrototype = Object.create(HTMLElement.prototype);
xCowPrototype.createdCallback = function(){
   console.log('A' + this.getAttribute('specy') + ' moo ');
};
document.registerElement('x-cow', {
   prototype : xCowPrototype
});
```

```html
<x-cow specy="abondance"></x-cow>
```

 createdCallback, attachedCallback, detachedCallback, attributeChangedCallback
 

### Shadow dom

 - Hide a part of the DOM and scope styles
 
```html
<p id="hostElement"></p>
<script>
  // Create shadow DOM
  var shadow = document.querySelector('#hostElement').createShadowRoot();
  // Add some text to shadow DOM
  shadow.innerHTML = '<p>Here is some new text</p>';
  // Add some CSS to make the text red
  shadow.innerHTML += '<style>p { color: red };</style>';
</script>
```

###  HTML Template

- Standardize client side templates

```html
<template id="menu-item-tpl">
   <li><a href="#"></a></li>
</template>
<ul id="menu"></ul>
```

```js
const items = ['foo', 'bar', 'baz'];
const menuELt = document.querySelector('#menu');
const tplELt = document.querySelector('#menu-item-tpl');
items.forEach( item => {
    let clone = document.importNode(tplELt.content, true);
    let a = clone.querySelector('a')
    a.textContent(item);
    a.href = "#" + item;
    menuELt.appendChild(clone);
});
```

### HTML Import

- Import a part of the DOM and it's assets 

```html
<link rel="import" href="aComponent.html">
```

### All together

EXAMPLE

## Early implementation  

### Polymer

- declarative approach 
- polyfill + util + everything is a web component

EXAMPLE

### X-tag

 - custom element only 
 
### Bosonic

 - 100% w3c then transpiling to old school
 
## The hangover

Vendors implementation nightmare
Google wants HTML imports / Mozilla prefers ES2015 modules
The polyfills doesn't really work 
Shadow DOM is difficult to implement (HTML Import even more)
The reality has caught up the fantasy : React

## A new hope

In the last monthes
- Polymer 1.0
- Bosonic revival
- FirefoxOS web components (gaia-components)
- aws-ui ?

### Future.js

EXAMPLE
WEB SITE

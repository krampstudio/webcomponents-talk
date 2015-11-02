# Web Components, the future starts today

## Web development is a hack, semantic is a lie

 Developing web site and web app is hard. Perpetual problems:
  - maintanbility 
  - style consistency
  - 3rd part tools integration
  - productivity

-> html samples

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

-> html countdown

## Early implementation  

### Polymer

- declarative approach 
- polyfill + util + everything is a web component

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



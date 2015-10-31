# Web Components, the future starts today

## Web development is a hack, semantic is a lie

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
```

```html
<ks-button>Click me</ks-button>
```

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


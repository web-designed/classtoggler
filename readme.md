## A simple css class toggler for all kind of dropdowns, accordions, menus, also with a grouping option.

### Usage

#### Import & initiate

```
1. npm i classtoggler
2. import { classtoggler, classtogglerRemoveClassByGroup } from 'classtoggler';
3. classtoggler();
4. if you need to close the group use: classtogglerRemoveClassByGroup('your-group-name')
```

#### Markup Options
1. data-toggler-target - target the element
2. data-toggler-class - define the css class name
3. data-toggler-group - define the group

#### Default active classes

```html
<a href="#" data-toggler-target="#sub-menu">Item 1</a>
<ul class="sub-menu" id="sub-menu">
   <li><a href="#">Sub-item 1</a></li>
   <li><a href="#">Sub-item 2</a></li>
   <li><a href="#">Sub-item 3</a></li>
</ul>
```

#### Custom css class

```html
<a href="#" data-toggler-target="#sub-menu" data-toggler-class="test-class">Item 1</a>
<ul class="sub-menu" id="sub-menu">
   <li><a href="#">Sub-item 1</a></li>
   <li><a href="#">Sub-item 2</a></li>
   <li><a href="#">Sub-item 3</a></li>
</ul>
```

#### Grouping

the grouped elements will be holding the active css class only one at the time. (good for dropdowns, accordions..)

```html
<ul>
   <li>
      <a href="#" data-toggler-target="#sub-menu-1" data-toggler-group="navigation">Item 1</a>
      <ul class="sub-menu" id="sub-menu-1">
         <li><a href="#">Sub-item 1</a></li>
         <li><a href="#">Sub-item 2</a></li>
         <li><a href="#">Sub-item 3</a></li>
      </ul>
   </li>
   <li>
		<a href="#" data-toggler-target="#sub-menu-2" data-toggler-group="navigation">Item 2</a>
		<ul class="sub-menu" id="sub-menu-2">
         <li><a href="#">Sub-item 1</a></li>
         <li><a href="#">Sub-item 2</a></li>
         <li><a href="#">Sub-item 3</a></li>
      </ul>
	</li>
</ul>
```

#### Chaining

One element controlling two (or more) containers

```html

<p class="text-center">
   <a class="btn" href="#" data-toggler-target="#section-1, #section-4">Red</a>
   <a class="btn btn-blue" href="#" data-toggler-target="#section-2, #section-3">Blue</a>
</p>
<div class="row">
   <div id="section-1" class="col-md-6 collapse active">
      <div class="card red">
         <h2>Red</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
   </div>
   <div id="section-2" class="col-md-6 collapse active">
      <div class="card blue">
         <h2>Blue</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
   </div>
   <div id="section-3" class="col-md-6 collapse active">
      <div class="card blue">
         <h2>Blue</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
   </div>
   <div id="section-4" class="col-md-6 collapse active">
      <div class="card red">
         <h2>Red</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
   </div>
</div>

```

#### Chaining classes


```html
<p>
   <a href="#" class="btn btn-blue" data-toggler-target="#my-button" data-toggler-class="btn, btn-blue">Toggle classes</a>
</p>
<p>
   <a href="#" id="my-button">My button</a>
</p>
```



#### Remove Class by a group name

Great for closing menus, dropdowns etc.. on a custom event.

Imagine the following scenario: You opened a navigation via the classtoggler. Without closing it, you start interacting with the content. F.ex. you clicked on a button somewhere in the text. You expect the menu to get closed automaticaly.

```html
<ul>
   <li>
      <a href="#" data-toggler-target="#sub-menu-1" data-toggler-group="navigation">Item 1</a>
      <ul class="sub-menu" id="sub-menu-1">
         <li><a href="#">Sub-item 1</a></li>
         <li><a href="#">Sub-item 2</a></li>
         <li><a href="#">Sub-item 3</a></li>
      </ul>
   </li>
   <li>
      <a href="#" data-toggler-target="#sub-menu-2" data-toggler-group="navigation">Item 2</a>
      <ul class="sub-menu" id="sub-menu-2">
         <li><a href="#">Sub-item 1</a></li>
         <li><a href="#">Sub-item 2</a></li>
         <li><a href="#">Sub-item 3</a></li>
      </ul>
   </li>
</ul>
```

```javascript

   classtogglerRemoveClassByGroup('navigation');

```

#### Update the classtoggler after dynamic elements were added to the DOM

```javascript

   classtogglerUpdate();

```

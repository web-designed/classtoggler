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

   classtogglerRemoveClassByGroup('navigation')

```

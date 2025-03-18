# Directives

Directives are custom elements or attributes
that are created in angular that can be applied
both inbuilt elements as well as angular components

There are three major kinds of Directives

* Component Directives
* Structural Directives
* Attribute Directives

#### Component Directives

Custom elements are nothing but component Directives

In angular all components are component Directives

#### Structural Directives

Structural Directives are applied to both inbuilt html elements
as well as custom html elements

Structural attributes are prefixed with letter *

Structural directives 
* Generates Templates( Generates html)
* It hides/unhides templates

Inbuilt Structural Directives: ngFor,ngSwitch,ngIf

if listx:string[]=["apple","boy","cat"]

<ul>
   <li *ngFor="let x of listx">{{x}} </li>
</ul>

For the above examples three li are generated as listx contains three elements

if valid=false

<div class="data" *ngIf="valid"> </div>

the above division will not be visible because valid is false

Attribute Directives:
-----------------------

Attribute directives typically impact the behavior of the target
element on which it is applied

There are three kinds of attribute directives

* Input Directive
* Output Directive
* Input Output Directive

#### Input Directive

* Input directives receive values 
* it impacts the target elements behavior
* Input directives are usually enclosed with []

 some inbuilt input attribute directives: ngClass, ngStyle,style,routerLink

 <h1 [style.backgroundColor]='mycolor'>text</h1>

 in the above case mycolor is a variable if mycolor is red the h1 will be having
 red background

if you avoid [], the right side value is not considered a variable but string

<div ngClass="box"></div>

  here box is value, box is a string

<div [ngClass]="theme"></div>

   Here theme is a variable and the value of the theme variable is
   substituted

#### Output Directive

* output directives listens to a particular event on the target
* if event occurs the function in the right is called
* Output Attribute are enclosed within ()

<button (click)="fun()"></button>

here click is output attribute
when button clicked fun() is called

some inbuilt output attributes : click,hover, keyup,keydown,change,mouseover
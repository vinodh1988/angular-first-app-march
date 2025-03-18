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

### Input Output Directives

* This directive does both input and output directive job
* It is two way bound
* Generally enclosed within [()]

example : ngModel

<input type="text" [(ngModel)]="name">

if name is Jack --> text box will be filled with jack
if you type Kiran in text box --> Kiran will be stored in name

### Parent Child Communication

Decorators @Input and @Output
----------------------------

@Input
---------

If a child component wants to receive data from the parent
the child component needs to declare a variable and decorate it
wit @Input

if you do like this the variable will behave like input attribute
for child component
@Component(
    {
        selector:'app-box'
    }
)
class Child{
  Input()  data:String=""
}

<app-box [data]="x"></app-box>

@Output
--------
if child wants to send some data
to parent,(its possible only upon an event)

you need to declare a variable of type EventEmitter in the
child and should declare it as @Output

now the variable will behave as an output attribute
to the child component

@Output() listenme:EventEmitter<String>=new EventEmitter<String>()

<app-child (listenme)="fun($event)"></app-child>
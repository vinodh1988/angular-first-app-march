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
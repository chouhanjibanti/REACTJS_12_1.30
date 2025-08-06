Prerequisite for the React js

HTML :- html tag -> div , form , input

CSS basics :- Selector
Combinator Selector :- child , adjacent , descendent , general
Box model :- content , padding , border , margin
flex box model :-
justify content :- main axis - x-axis
Align item :- cross axis - y axis
Grid :- 2 dimensional ->
media queries
Position :- 5 -> static , Relative , Absolute , Sticky , fixed

Javascript :-

variable :- var , let and const
Datatype :- PDT , NDT
PDT - number , boolean , String , Null , undefined , bigint
NPDT - Array , String ,function , Object
DOM :- Methods of DOM
Event :- how many types of event.

onclick :- function -> print Hello Debugshala
Promises :- pending , resolve /fulfil,reject /failed
finally :-
Async and Await :-
JAVASCRIPT ES6 :-

1. let , const
2. Arrow function
3. Template literal ``
4. promises and Async and Await

Array :- map , reduce , filter
Ternary Operator :- condition ? true : false
setTimeout / setInterval
forin and forof , foreach ->

REACTJS :-
React is a JavaScript library for building user interfaces. It is used for building web applications because it allows developers to create reusable UI components and manage the state of the application in an efficient and organized way.

features :-

1. Component based :- build reusable component that makes development easier.
2. Virtual DOM :- improves performance by updating only the necessary parts and ui.
3. Fast rendering :- uses a diffing algorithm to update only changes components.
4. State management :- easily manage application state with useState , useReducer , [REDUX]
5. Easy Integration :- works with other libraries and frameworks.
6. Strong Community support :- Large ecoSystem with many libraries and tool.

7. Virtual DOM :-
   how does the virtual dom work :-
8. react create a virtual dom - lightweight copy of real dom
9. react compare old and new -> find only the parts that have changes.
10. react update only the changes part in the real dom : instead of reloading the whole page , it updates the specific element .

without virtual dom :-

1. clicking "like" refreshes the whole pages
2. the slow down the website .

with virtual dom :-

1. React crate copy
2. compare old and new copies to find changes -> diffing
3. update only the like button in the real web pages , it making faster. -> reconciliation

why we use the virtual dom important
better performance
faster updates
smooth user experience.

3. Setting up a react Project / App
   we can create the app in 2 ways

   a. create react app CRA 
   b. vite

   a1. npx create-react-app Debugshala
   b1 . npm create vite@latest

npm create vite@latest
Project name - first-project
Type -> Javascript
cd first-project
npm install




Folder Structure :- 

Second-Project :-
    node-modules - folder 
    public :- static files  images , 
    src :- assests - images ,font
          App.css -> css [provide ]
          App.jsx - file -> second entry point 
          index.css -> css provide 
          index.html -> file
          main.jsx -> entry point
          Form.jsx -> name start with uppercase 
          Components -> folder 
                      -> Form.jsx -> file 
         package.json -> dependencies -> key and value
         .gitignore -> files , 
         .env -> protected data , secure
         README.md -> Information about the project  



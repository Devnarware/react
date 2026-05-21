## How to create React folder using vite


Step 1 :- run these commands
```
npm create vite
        or
npm create vite@latest

```
## 
Step 2 :- Select the option acc to the need
## 
Step 3 :- Remove the files which is not needed like 
```
App.css
```
## 

What is component
```
Components are the small resuable block of code which is used to create the UI of the application. It is a function which returns a JSX element. It can be created using function or class.
That piece of code can be reused again and agian as per use
```
##

What is Props
```
Props are the short form of properties. It is used to pass data from the parent component to child component. It is a read only data which can not be modified by the child component. It is used to make the component dynamic. Means same component can be reused with different data.
```
##

Destructuring

Destructuring is a feature of JavaScript which allows us to extract values from an array or an object or from the function's parameter and assign them to variables. 

```
Example: function({name, age}) {
    console.log(name);
    console.log(age);
}

in the above the above example we are destructuring the props object and extracting the name and age properties and assigning them to variables name and age. So we can use these variables in our component instead of using props.name and props.age. This makes our code cleaner and more readable.
```
##

## How to add tailwind css in react project

step 1 :-  Create a react project using vite

step 2 :-  Install tailwind css using this command
```
npm install tailwindcss @tailwindcss/vite
```

step 3 :-  import tailwind in the vite.config.js file by adding this code  
``` 
import tailwindcss from '@tailwindcss/vite';
```
step 4 :-  Add tailwind in the vite.config.js file or add tailwind pluggin, by adding this after react plugin
```
tailwindcss()
```
Step 5 :-  to use tailwind in project, import it in the index.css file by importing this code 
``` 
@import "tailwindcss";
```

##



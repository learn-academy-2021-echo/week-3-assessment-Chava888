# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:
  The word "this" refers to a property or method within an object or instance of a class. In order to access properties or methods within an object we need to use "this". 

  Researched answer:
  "this" is a keyword that refers to an object and used for accessing the value within the object. It is used as a reference to call upon properties and methods within the object. The this refers to the object itself.


2. What is React? Why would you use it?

  Your answer:
  React is a front-end library that combines html, css, and js to create function and class components. React uses JSX (javascript XML) language, and has three phases of lifecyle; mounting, updating, unmounting. We would use React to create apps because it allows us to manipulate and minimize the code for rendering components and in addition have a virtual DOM that allows us to change states of properties without making a request to the backend server.

  Researched answer:
  React is a library to create components for web applications. It combines javascript and markup language. React is considered flexible, creates a virtual DOM, and a large community to support the technology. We would use React because of its effeciency with updating state of the DOM by having a virtua DOM. The virtual DOM gets updated and sync with the real DOM by ReactDOM. In addition, readibility is easier, since html is used inside javascript. 


3. Which lifecycle method is required in a React class component?

  Your answer:
  The required lifecycle method for a class component is Render(). The method Render() is used in the mounting and updating phase of the react lifecyle. Render() allows the visual view of the components in the browser.

  Researched answer:
  The render() method is the only required lifecycle method for class components. The method controls the items that will be passed on to the DOM. If items have been passed to the DOM previously, the render() will mutate the DOM with the new updated items.


4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer:
  JSX stands for Javascript with XML, one notable difference is JSX uses objects and methods as OOP(object oriented programming), while html is only tags and elements and cannot store information. The use of JSX allows the tracking of properties and any changes, while html main purpose is to render the content in a browser based on its inputs without any storage of information.

  Researched answer:
  JSX is known as Javascript Syntax Extension or JavaScript XML. JSX is the combination of Javascript and HTML together. One notable difference between JSX and HTML is that JSX can only return one single element in contrast HTML can return multiple elements.


5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
  yarn is a package management file system that tracks the dependencies of an application. When yarn is run by itself, we are basically telling the package management file system to download all the dependencies from a yarn log file that is located in the app folder, lists all required dependencies with version. The node module file gets generated afterwards in the app folder and contains all the files for the required dependencies. 

  Researched answer:
  Yarn is a package manager for the javascript language. It manages the dependency files of applications. When yarn is run the dependencies that are listed in the package.json are downloaded and a node_modules file is created/updated to store all the dependencies files.


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:
  An anonymous function is a function with no name, it means the function was not declared explicitly and invoked. The syntax of an anonymous function is () => {--Some code--}. Anonymous functions can have parameters where arguments may pass in, an example of where anonymous function is called is on the .map method.

  Researched answer:
  An anonymous function is a nameless function. An example of an anonymous function is arrow functions () => {}, typically stored in variables for later future use. In addition, anonymous functions are typically used in higher order functions.

## Looking Ahead: Terms for Next Week

1. Conditional rendering:
  Is the use of conditional operators in react to render something based on true or false. Their are many ways to implement conditionals for rendering items based on the true/false. For example, react allows terinary operators, "true" && {if true run expression}, if(condition){code statement}, etc. 

2. Props:
  Props stands for properties and is a keyword in react for passing methods and properties from parent to child component. Props is immutable, which means the child component only reads the props that are been passed from the parent without changing the props.

3. JavaScript Events:
  These are event listeners for the DOM and considered instances of the class Event; onclick, onchange, onsubmit, etc. In react the event listeners are camelCase while in normal HTML is lowercase. It is conventional to have an event listener with a handleChange function associated with it. The event listeners are listening in the DOM for a change that will trigger an action.

4. Object-oriented programming:
  OOP is the use of objects to interact with data and methods. Objects are containers of code that contain properties and methods. The application of OOP allows encapsulation, abstraction, inheritance and polymorphism. In simple terms encapsulation is the code within the object, abstraction is the accessiblity of only relevant information from an object, inheritance is the passing of information from parent to child, and polymorphism is idea that something can be many forms.


5. Ruby:
  Ruby is a OOP language that is open source and has a large community to support the language. The language is dynamic and can be use for backend of applications. In essential ruby treats everything as an object.

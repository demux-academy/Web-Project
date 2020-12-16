# Javascript

## Basics

1. Prinitng 

```javascript
console.log('Hello World!');
console.log('Semicolon is optional.')
```

2. Data Types

```javascript
var a = 16;                                     // Number
var b = "Johnson";                              // String
var c = {firstName:"John", lastName:"Doe"};     // Object
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
```

3. String

```javascript
var str = 123;
console.log('String');
console.log("Also a String");
console.log(`Hello ${str}`);
```

4. Number

```javascript
var intNumber = 123;
var floatNumber = 123.0;
console.log(typeof intNumber);
console.log(typeof floatNumber);
```

5. Equality Operator

```javascript
var a = "123";
var b = 123;
var x = 1;
var y = true;
console.log(a == b);
console.log(a === b);
console.log(x == y);
console.log(x === y);
```

6. Data Types Advanced 

```javascript
var a = null;
var b = [1, 2, 3];
var c = { name: 'Mridul', age: 18 };
var d = function add(a, b) {
    return a + b;
};
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
```

7. Not a Number

```javascript
var x = 123
var y = 'Knock knock'
console.log(x + y)
console.log(x * y)
```

8. More arithmetic operations

```javascript
console.log(( 10 / 3 ) * 3)
console.log(100 / "Apple")
console.log(10/0)
console.log(10.0)
```

9. Functions returning functions

```javascript
function addNumber(a) {
  return function(b) {
    return a + b;
  }
}

var addOne = addNumber(1);
var addTwo = addNumber(2);

console.log(addOne(1))
console.log(addTwo(1))
```

10. Callback pattern of programming

```javascript

// Assume this is on the server
function compute (a, b) {
  return a + b;
}

// Option 1
function getComputation(a, b) {
  return compute(a, b);
}
console.log(getComputation(1, 2));

// Option 2
function getComputation(a, b, callback) {
  callback(compute(a, b));
}
getComputation(1, 2, function(result) { console.log(result); })
```
## Javascript Key Differentiating points

1. Weakly typed.
2. Can follow object oriented or functional programming approaches.
3. Single threaded but Asynchronous.
4. Asynchronous operations defined by the runtime ( browser/nodejs ).
5. Scoping rules can be complicated to understand. ( Example 1 in advanced ).

## Event loop

![Event Loop](./eventloop.png)

## Advanced

1. Execution Context

```javascript
var x = {
    firstName: 'Mridul',
    getFirstName: function() { return this.firstName }
}
var y = x.getFirstName

console.log( x.getFirstName() )
console.log( y() )
console.log( y.call(x) )
```

2. Array functions

```javascript
var x = ["Red", "Blue", "Green", [1, 2, 3]];
var y = x.map(item => item.length)
var z = y.reduce((a,b) => a + b)
```

3. Variable Hoisting
// let and const -> Block level scoping
// var -> function level scoping

```javascript
function hoisting() {
    console.log(i); 
    // Block starts
    for (var i = 0; i < 2 ; i++) {
        console.log(i); 
    }
    // Block ends here
    console.log(i); 
}
hoisting();  
```
// Good coding -> Only use let or const. Never use var.

4. Function Chaining

```javascript
class Chainable {
  firstMethod() {
    console.log('This is the First Method');
    return this;
  }
  
  secondMethod() {
    console.log('This is the Second Method');
    return this;
  }
  
  thirdMethod() {
    console.log('This is the Third Method');
    return this;
  }
}

const chainableInstance = new Chainable()
chainableInstance
  .firstMethod()
  .secondMethod()
  .thirdMethod();
```

5. Immediately Invoked Function Expression

```javascript
(function() {
  var x = 5;
  var y = 6;
  console.log(x + y);
})()

// Compare above code with below : 
  var x = 5;
  var y = 6;
  console.log(x + y);

// Hint : Compare global scope

```

## Key Terms

1. Nodejs - Javascript runtime. Used for backend.
2. Npm - Node package manager.
3. Typescript - Compiled to javascript
    - Variable type definitions
    - Class based syntax
4. SCSS - Compiled tp css
    - Variables supported
    - Imports supported

## Angular Terms

1. Module
    - Defines/Declares/Exports Components and Service
    - Imports other modules

2. Component
    - View + Associated Behaviour
    - Html + Scss + Typescript

3. Service
    - Singleton
    - No associated view
    - Typescript

## References 

1. JS Tutorial : https://www.w3schools.com/js/ 
2. Angular : https://angular.io/start 
3. Angular CLI : https://cli.angular.io/
4. Npm packages : https://www.npmjs.com/package/browse

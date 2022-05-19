'use strict';

/**
 * ############# Chapter 1: Primitive and Reference Types
 */

// let color1 = 'red';
// let color2 = color1;

// console.log(color1); // red
// console.log(color2); // red

// color1 = 'blue';

// console.log(color1); // blue
// console.log(color2); // red

// console.log(typeof null);

// ///////////

// const items = new Array('red', 'blue', 'green', true, 26);
// console.log(items);

// console.log([1, 2, 3] instanceof Array);
// console.log({} instanceof Object);
// console.log(function () {} instanceof Function);

// ///////// Primitive Wrappers Types

// const name = 'Edwin';
// name.lastName = 'Cardenas'; // TypeError in strict mode
// console.log(name.lastName); // undefined

/**
 * ############# Chapter 2: Functions
 */

// var result = add(5, 5);
// var add = function (a, b) { // Type Error: add is undefined, so it could not be invoqued
//     return a + b;
// };

// //////////

// function reflect(value) {
//     return value;
// }

// console.log(reflect('Hi!'));
// console.log(reflect('Hi!', 25));
// console.log(reflect.length);

// reflect = function () {
//     return arguments[0];
// };

// console.log(reflect('Hi!', 25));
// console.log(reflect('Hi!', 25));
// console.log(reflect.length);

// ////////////

// function sum() {
//     let result = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }

//     return result;
// }

// console.log(sum(1, 2, 3, 4));

// ///////////

// const myObject = {
//     a: 1,
//     b: 2,
// };

// console.log(myObject);

// delete myObject.a;

// console.log(myObject);

// ///////////

// function sayNameForAll(label) {
//     console.log(label + ': ' + this.name);
// }

// const person1 = {
//     name: 'Edwin',
// };

// const person2 = {
//     name: 'Ana Maria',
// };

// var name = 'Keyla';

// sayNameForAll.call(this, 'global'); // undefined
// sayNameForAll.call(person1, 'person 1');
// sayNameForAll.call(person2, 'person 2');

// function sayNameForAll(label) {
//     console.log(label + ': ' + this.name);
// }

// const person1 = {
//     name: 'Edwin',
// };

// const person2 = {
//     name: 'Ana Maria',
// };

// const name = 'Keyla';

// sayNameForAll.apply(this, ['global']); // undefined
// sayNameForAll.apply(person1, ['person 1']);
// sayNameForAll.apply(person2, ['person 2']);

// ///////////

// function sayNameForAll(label) {
//     console.log(label + ': ' + this.name);
// }

// const person1 = {
//     name: 'Edwin',
// };

// const person2 = {
//     name: 'Ana Maria',
// };

// const sayNameForAll1 = sayNameForAll.bind(person1);
// const sayNameForAll2 = sayNameForAll.bind(person2, 'person 2');

// sayNameForAll1('person 1');
// sayNameForAll2();

/**
 * ############# Chapter 3: Understanding Objects
 */

// const value = ``;

// if (value) {
//     console.log('Truthy: ' + value);
// } else {
//     console.log('Falsy: ' + value);
// }

// console.log(undefined && 'Hi');

// ///////////

// const people = {
//     state: 'Alive'
// }

// const person1 =  {
//     name: 'Edwin',
//     age: 26,
//     sayName: function () {
//         console.log(
//             `Hi, my name is ${this.name} and I'm ${this.age} years old.`
//         );
//     },
// }

// const person1 = Object.create(people, {
//     name: {
//         value: 'Edwin',
//         enumerable: true
//     },
//     age: {
//         value: 26,
//         enumerable: true
//     },
//     sayName: {
//         value: function() {
//             console.log(`Hi, mi name is ${this.name} and I'm ${this.age} years old!`);
//         },
//         enumerable: true
//     }
// });

// console.log(person1);
// console.log('sayName' in person1);
// console.log(person1.hasOwnProperty('sayName'));
// console.log(person1.hasOwnProperty('state'));
// console.log('state' in person1)
// console.log(Object.keys(person1)); // only own properties

// for (let i in person1) {
//     console.log(i + ": " + person1[i]); // also prototype properties
// }

// ////////////////

// const person = {
//     name: "Edwin"
// };

// console.log("name" in person);
// console.log(person.propertyIsEnumerable("name"));

// const properties = Object.keys(person);
// console.log(properties);
// console.log("toString" in properties);
// console.log(person.propertyIsEnumerable("toString"));

// ///////////
// accessor properties

// const person = {
//     _name: "Edwin", // the '_' is a convention to indicate that the property is "private"
//     get name() {
//         console.log('Getting name...');
//         return this._name
//     },
//     set name(value) {
//         console.log(`Setting name to ${value}`);
//         this._name = value
//     },
//     _age: 26,
//     get age() {
//         console.log('Getting age...');
//         return this._age
//     },
//     set age(value) {
//         console.log(`Setting age to ${value}`);
//         this._age = value
//     }
// }

// console.log(person.name) // Edwin
// console.log(person.age); // 26
// person.name = "Keyla"
// person.age = 27
// console.log(person.name); // Keyla
// console.log(person.age); // 27

// /////////

// const myObject = {}

// Object.defineProperty(myObject, 'name', {
//     value: 'Edwin',
//     enumerable: true,
//     configurable: true,
//     writable: false
// })

// console.log(myObject) // { name: 'Edwin' }

// delete myObject.name

// console.log(myObject); // {}

// myObject.name = "Keyla" // we can redeclare the property because we previously delete it, so it's a different property with writable 'true'

// console.log(myObject); // { name: 'Edwin' }

// ///////////////

// const person = {
//     _name: "Edwin"
// };

// Object.defineProperty(person, 'name', {
//     get: function() {
//         console.log('Getting name...');
//         return this._name
//     },
//     set: function(value) {
//         console.log('Setting name to ' + value);
//         this._name = value
//     },
//     enumerable: true,
//     configurable: true
// })

// console.log(person.name)
// person.name = "Keyla"

// ///////// defining multiple properties on an object

// const person = {};

// Object.defineProperties(person, {
//     name: {
//         value: "Edwin",
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     age: {
//         value: 26,
//         // enumerable: true,
//         writable: true,
//         configurable: true

//     }
// })

// console.log(person);

// //////////

// function sumaDeArray(array) {
//     const suma = array.reduce((curr, prev) => curr + prev, 0);
//     return suma;
// }

// console.log(sumaDeArray([5, 9]));

///////////////////

// const myObject = {
//     name: "Edwin"
// }

// console.log(Object.isExtensible(myObject));
// Object.preventExtensions(myObject);
// console.log(Object.isExtensible(myObject));

// myObject.sayHi = function() {
//     console.log("Hi, mi name is " + this.name); // Error, object is not extensible
// }

// ///////////

// const person = {
//     name: "Edwin"
// };

// console.log(Object.isExtensible(person));
// console.log(Object.isSealed(person));

// Object.seal(person);

// console.log(Object.isExtensible(person));
// console.log(Object.isSealed(person));
// const personNameDescriptor = Object.getOwnPropertyDescriptor(person, "name")
// console.log(personNameDescriptor);

/**
 * ############# Chapter 4:
 */

// const Person = {
//     alive: true,
// }

// const person = Object.create(Person, {
//     name: {
//         value: "Edwin",
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// })

// console.log(person);
// console.log(person.alive);

// /////////

// function Person() {
//     this.alive = true;
// }

// function Edwin() {
//     Person.call(this);

//     this.name = 'Edwin';
//     this.age = 26;
// }

// const edwin = new Edwin();
// console.log('ES5 classes:', edwin);
// console.log(Edwin.prototype.constructor); // Edwin
// console.log(edwin instanceof Edwin); // true
// console.log(edwin instanceof Person); // false

// //////

// class Person {
//     constructor() {
//         this.alive = true
//     }
// }

// class Edwin extends Person {
//     constructor() {
//         super()
//         this.name = "Edwin";
//         this.age = 26
//     }
// }

// const edwin = new Edwin()

// console.log("ES6 classes:", edwin);

// ////////////

// const myObject = {
//     job: "web developer"
// }

// const anotherObject = Object.assign({}, myObject)

// anotherObject.seniority = "junior"

// console.log(myObject);
// console.log(anotherObject);

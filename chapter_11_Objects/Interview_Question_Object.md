# JavaScript Objects: Interview Questions & Answers

## Entry Level (Basics)

### 1. What is an Object in JavaScript, and how do you create one? What are the "types" of objects?
**Answer:**
An Object in JavaScript is a standalone entity, with properties and a type. It is a collection of key-value pairs stored in heap memory. The keys (properties) are strings or Symbols, and the values can be anything (primitives, other objects, or functions).

**How to create:**
There are multiple ways to create an object:
1. **Object Literal:** (Most common)
   ```javascript
   const person = { name: "John", age: 30 };
   ```
2. **Object Constructor:**
   ```javascript
   const person = new Object();
   person.name = "John";
   ```
3. **Constructor Function:**
   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   const john = new Person("John", 30);
   ```

**Types of Objects:**
- **Built-in Objects:** Provided by the JavaScript environment (e.g., `Math`, `Date`, `RegExp`, `Array`, `Function`, `Promise`).
- **Custom Objects:** User-defined objects created using the methods outlined above.

---

### 2. How do you add Methods inside an Object? Explain with an example.
**Answer:**
A method is simply a regular function that is stored as an object property.

**Example:**
```javascript
const calculator = {
  num1: 10,
  num2: 20,
  // Standard function syntax
  add: function() {
    return this.num1 + this.num2; 
  },
  // ES6 Shorthand syntax
  subtract() {
    return this.num1 - this.num2;
  }
};

console.log(calculator.add()); // Output: 30
```
> **Note:** We use the `this` keyword inside methods to refer to the current object. Arrow functions should generally be avoided for object methods because they do not bind their own `this` automatically (they inherit it from the surrounding scope).

---

### 3. What is the difference between Primitive and Reference types when dealing with Objects?
**Answer:**
- **Primitive Types:** (Number, String, Boolean, null, undefined, Symbol) are stored by **value**. Variables hold the actual data.
- **Reference Types:** (Objects, Arrays, Functions) are stored by **reference**. Variables do not hold the object itself; they hold a reference pointer (memory address) to the location in heap memory where the object actually lives.

This means whenever you assign an object to another variable, it **copies the reference**, not the actual object data. 

**Example:**
```javascript
const obj1 = { name: "Alice" };
const obj2 = obj1; // Copies the reference, not the value!

obj2.name = "Bob";
console.log(obj1.name); // Output: "Bob" (Both objects point to the same memory location)
```

---

### 4. How do `let` and `const` behave differently when working with Objects?
**Answer:**
- **`let`:** Allows reassignment of the variable identifier to an entirely new object or different data type.
- **`const`:** Prevents the variable identifier from being reassigned to a new reference. However, the properties *inside* the object are fully **mutable**. You can change, add, or delete properties, but you cannot point the variable to a brand-new object block.

**Example:**
```javascript
const myObj = { status: "active" };

// Valid: Changing existing properties
myObj.status = "inactive"; 

// Valid: Adding/Deleting new properties
myObj.newProp = "test"; 
delete myObj.status;

// Invalid: Reassigning the variable pointer throws an error!
// myObj = { status: "deleted" }; // TypeError: Assignment to constant variable.
```

---

## Intermediate Level

### 5. What is the Object Spread Operator (`...`)? Provide examples.
**Answer:**
The spread operator (`...`) in ES6 is used to extract the properties of an object into a new object. It widely simplifies tasks like cloning an object or merging multiple objects together. 

> **Important note:** The spread operator performs a **shallow copy**. It only copies top-level properties. If an object contains a nested object, the nested object's memory reference is copied, not deeply cloned.

**Example 1: Shallow Cloning**
```javascript
const original = { a: 1, b: 2 };
const clone = { ...original };

clone.a = 99;
console.log(original.a); // 1 (unchanged)
console.log(clone.a);    // 99
```

**Example 2: Merging Objects**
```javascript
const defaultSettings = { theme: "light", showSidebar: true };
const userSettings = { theme: "dark" };

// Merge objects. Properties on the right overwrite properties on the left.
const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings); // Output: { theme: "dark", showSidebar: true }
```

---

### 6. What is the use of GETTER and SETTER in Objects? Explain in detail with an example.
**Answer:**
Getters and Setters (`get` and `set` keywords) allow you to safely expose object properties. They allow you to execute functions when you retrieve (get) or update (set) a property, yet they behave syntactically like normal variables rather than functions calling `()`.

- **`get` (Getter):** Binds a function to an object property. Called dynamically when the property is accessed.
- **`set` (Setter):** Binds a function to an object property. Called automatically when a value is assigned to the property.

**Why use them?** They provide data encapsulation, allow input validation, and allow you to serve dynamically computed properties (like combining a first and last name automatically).

**Example:**
```javascript
const user = {
  firstName: "John",
  lastName: "Doe",
  
  // Getter: computing full name on the fly
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter: reverse engineering full name, with safe checks
  set fullName(name) {
    if(typeof name !== 'string') return;
    const parts = name.split(" ");
    this.firstName = parts[0] || "";
    this.lastName = parts[1] || "";
  }
};

// Accessing the getter (Notice no parenthesis '()')
console.log(user.fullName); // "John Doe"

// Assigning to the setter (Triggers the set function)
user.fullName = "Jane Smith";
console.log(user.firstName); // "Jane"
```

---

### 7. What are `Object.keys()`, `Object.values()`, and `Object.entries()`?
**Answer:**
These are built-in static methods available on the `Object` constructor to extract an object's contents into iteratable Arrays without manually looping over them.

- **`Object.keys(obj)`**: Returns an array of the object's keys (property names).
- **`Object.values(obj)`**: Returns an array of the object's property values.
- **`Object.entries(obj)`**: Returns an array of `[key, value]` pairs (array of arrays).

**Example:**
```javascript
const person = { name: "Tom", age: 25, role: "Admin" };

console.log(Object.keys(person));   // ["name", "age", "role"]
console.log(Object.values(person)); // ["Tom", 25, "Admin"]
console.log(Object.entries(person));// [["name", "Tom"], ["age", 25], ["role", "Admin"]]
```

---

## Advanced Level

### 8. What is an Object Property Descriptor?
**Answer:**
A property descriptor is an internal JavaScript object containing the configuration and metadata of a specific property within an object. You can view the configuration using `Object.getOwnPropertyDescriptor(obj, propName)`.

A data descriptor has the following keys describing the state of the property:
- **`value`**: The data associated with the property.
- **`writable`**: If `true`, the value can be changed via simple reassignment.
- **`enumerable`**: If `true`, the property shows up during loops like `for...in` and `Object.keys()`.
- **`configurable`**: If `true`, the property can be deleted from the object, and its descriptor features can be modified.

You use `Object.defineProperty()` to lock down and dictate exactly how properties should behave.

**Example:**
```javascript
const car = {};
Object.defineProperty(car, "brand", {
  value: "Toyota",
  writable: false,  // Making it truly Read-only
  enumerable: true,
  configurable: false
});

car.brand = "Ford"; // In strict mode, this throws an error. Non-strict fails silently.
console.log(car.brand); // "Toyota"
```

---

### 9. What is the difference between `Object.freeze()` and `Object.seal()`?
**Answer:**
Both methods restrict changes applied to an object, but with different levels of strictness to preserve state integrity.

- **`Object.freeze()`**: The strictest level.
  - Prevents adding new properties.
  - Prevents removing existing properties.
  - **Prevents changing** the values of existing properties (makes them entirely read-only).
  - *(It performs a shallow freeze, meaning nested objects can technically still be mutated)*.

- **`Object.seal()`**: More lenient.
  - Prevents adding new properties.
  - Prevents removing existing properties.
  - **Does ALLOW changing** the values of existing properties (provided they were originally writable).

---

### 10. When should you use a `Map` instead of an `Object`?
**Answer:**
While both structurally store key-value pairs, they behave differently behind the scenes:
- **Keys:** `Object` keys must be Strings or Symbols. A `Map` can have keys of **any data type**, including whole objects or functions.
- **Iteration:** `Map` objects are directly iterable (using `for...of`). Objects require extracting their keys using `Object.keys()` first to traverse natively.
- **Order:** `Map` strictly preserves the chronological insertion order. While `Objects` mostly preserve order now, complex edge cases like integer keys can behave unpredictably.
- **Size Check:** `Map` objects have a built-in `.size` property. Evaluating object length requires retrieving all keys first (`Object.keys(obj).length`).

**Conclusion:** Use Maps if you need non-string keys, guaranteed predictable element ordering, or if you will be frequently adding and removing key-value pairs (Maps have superior performance in dynamic scenarios). Stick to general Objects for predictable state models and simple structured data.

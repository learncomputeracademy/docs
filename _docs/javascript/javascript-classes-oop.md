---
layout: documentation
title: JavaScript Classes and OOP | Learn Computer Academy
permalink: javascript/javascript-classes-oop/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-general.html %}
            <div class="page-content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-9 content">
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>JavaScript Classes and OOP (Object-Oriented Programming)</h1>
                                <p><em>(Modeling real-world data using objects and blueprints)</em></p>
                                <hr>
                                <h2>What is Object-Oriented Programming?</h2>
                                <p>Object-Oriented Programming (OOP) is a <strong>programming style based on objects</strong>. JavaScript supports OOP using both <strong>constructor functions</strong> and <strong>ES6 classes</strong>.</p>
                                <p>Key OOP concepts:</p>
                                <ul>
                                  <li><strong>Class</strong>: A blueprint/template</li>
                                  <li><strong>Object</strong>: An instance of a class</li>
                                  <li><strong>Constructor</strong>: Special function that initializes an object</li>
                                  <li><strong>Method</strong>: A function inside an object</li>
                                  <li><strong>Inheritance</strong>: One class inherits properties/methods from another</li>
                                </ul>
                                <h2>Creating Classes</h2>
                                <h3>ES6 Class Syntax</h3>
                                <pre class="snippet"><code class="js">class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
                                
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
                                
const alice = new Person("Alice", 25);
alice.greet(); // Hello, my name is Alice</code></pre>
                                <ul>
                                  <li><code>constructor()</code> is called automatically when creating a new object using <code>new</code>.</li>
                                  <li><code>this</code> refers to the new object being created.</li>
                                </ul>
                                <h2>Inheritance (Extending a Class)</h2>
                                <p>You can create a child class that inherits from a parent class using <code>extends</code>.</p>
                                <pre class="snippet"><code class="js">class Employee extends Person {
  constructor(name, age, role) {
    super(name, age); // Calls parent constructor
    this.role = role;
  }
                                
  work() {
    console.log(`${this.name} is working as a ${this.role}`);
  }
}
                                
const bob = new Employee("Bob", 30, "Developer");
bob.greet(); // Hello, my name is Bob
bob.work();  // Bob is working as a Developer</code></pre>
                                <h2>Encapsulation (Private Properties)</h2>
                                <p>JavaScript supports private fields using <code>#</code> syntax (ES2022+).</p>
                                <pre class="snippet"><code class="js">class BankAccount {
  #balance = 0;
                                
  deposit(amount) {
    this.#balance += amount;
  }
                                
  getBalance() {
    return this.#balance;
  }
}
                                
const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// console.log(acc.#balance); // ❌ Error: Private field</code></pre>
                                <h2>Method Overriding</h2>
                                <p>Child classes can override parent methods:</p>
                                <pre class="snippet"><code class="js">class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
                                
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
                                
const d = new Dog();
d.speak(); // Dog barks</code></pre>
                                <h2>Class vs Constructor Function</h2>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Feature</th>
                                          <th scope="col">Constructor Function</th>
                                          <th scope="col">ES6 Class Syntax</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>Syntax</td>
                                          <td>Function-based</td>
                                          <td>Cleaner, class-based</td>
                                      </tr>  
                                      <tr>
                                          <td>Inheritance</td>
                                          <td>Via <code>prototype</code></td>
                                          <td>Using <code>extends</code>, <code>super</code></td>
                                      </tr>                                       
                                      <tr>
                                          <td>Private fields</td>
                                          <td>Not supported (older)</td>
                                          <td>Supported with <code>#</code></td>
                                      </tr>                                      
                                      <tr>
                                          <td>Readability</td>
                                          <td>Moderate</td>
                                          <td>Better</td>
                                      </tr>
                                  </tbody>
                              </table>
                              <h2>Real-Life Analogy</h2>
                              <p>Think of a <code>Car</code> class as a <strong>blueprint</strong>.</p>
                              <p>Each object created from it (like <code>myCar</code>, <code>yourCar</code>) is an actual car with its own data but follows the same design.</p>
                              <h2>Summary</h2>
                              <ul>
                                <li>Classes are blueprints for creating objects.</li>
                                <li>Use <code>constructor()</code> to initialize values.</li>
                                <li>Inheritance allows code reuse with <code>extends</code> and <code>super()</code>.</li>
                                <li>Use <code>#</code> for private fields (ES2022+).</li>
                                <li>OOP helps organize code better using objects and relationships.</li>
                              </ul>
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                  <li>Create a <code>Book</code> class with title, author, and a <code>getSummary()</code> method.</li>
                                  <li>Extend <code>Book</code> into a <code>Magazine</code> class with an extra <code>issue</code> property.</li>
                                  <li>Create a class with a private field <code>#password</code> and methods to change it.</li>
                                  <li>Try method overriding in a class hierarchy (e.g., Animal → Dog → Bulldog).</li>                                   
                                  <li>Make a class that counts how many objects were created from it.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-closures" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/promises-and-async" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


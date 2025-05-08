---
layout: documentation
title: JavaScript this Keyword | Learn Computer Academy
permalink: javascript/javascript-this-keyword/
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
                                <h1>JavaScript <code>this</code> Keyword</h1>
                                <hr>
                                <h2>What is <code>this</code>?</h2>
                                <p>In JavaScript, <code>this</code> refers to the <strong>object that is executing the current function</strong>.</p>
                                <p>The value of <code>this</code> <strong>depends on how a function is called</strong>, not where it is written.</p>
                                <h2>Global Context</h2>
                                <p>In the <strong>global scope</strong>, <code>this</code> refers to the <strong>global object</strong>.</p>
                                <ul>
                                  <li>In browsers, the global object is <code>window</code>.</li>
                                </ul>
                                <pre class="snippet"><code class="js">console.log(this); // window</code></pre>
                                <h2>Inside an Object Method</h2>
                                <p>When used in an object method, <code>this</code> refers to the <strong>object</strong> itself.</p>
                                <pre class="snippet"><code class="js">const person = {
  name: "Alice",
  greet() {
    console.log("Hello, I'm " + this.name);
  },
};
                                
person.greet(); // "Hello, I'm Alice"</code></pre>
                                <p><code>this.name</code> points to <code>person.name</code>.</p>
                                <h2>❌ Detached Function (Loses Context)</h2>
                                <pre class="snippet"><code class="js">const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
                                
const sayHello = person.greet;
sayHello(); // undefined (in non-strict mode) or error (in strict mode)</code></pre>   
                                <p><code>this</code> is not bound, so it refers to the global object or <code>undefined</code> in strict mode.</p>   
                                <h2>🧲 Fixing <code>this</code> with <code>bind</code>, <code>call</code>, <code>apply</code></h2>                    
                                <pre class="snippet"><code class="js">const person = {
  name: "Bob",
};
                                
function greet() {
  console.log("Hello, " + this.name);
}
                                
greet.call(person);  // "Hello, Bob"
greet.apply(person); // "Hello, Bob"
                                
const greetPerson = greet.bind(person);
greetPerson();       // "Hello, Bob"</code></pre>
                                <ul>
                                  <li><code>call()</code> and <code>apply()</code> <strong>call the function immediately</strong>, passing a new <code>this</code>.</li>
                                  <li><code>bind()</code> returns a <strong>new function</strong> with the bound <code>this</code>.</li>
                                </ul>
                                <h2>Inside a Constructor Function</h2>
                                <p>In a constructor function, <code>this</code> refers to the newly created object.</p>
                                <pre class="snippet"><code class="js">function Car(brand) {
  this.brand = brand;
}
                                
const myCar = new Car("Toyota");
console.log(myCar.brand); // "Toyota"</code></pre>
                                <h2><code>this</code> in Arrow Functions</h2>
                                <p>Arrow functions <strong>don’t have their own</strong> <code>this</code>. They inherit <code>this</code> from their <code>parent scope</code>.</p>
                                <pre class="snippet"><code class="js">const user = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // undefined
  },
};
                                
user.greet();</code></pre>
                                <p>Arrow functions are great when you want to <strong>preserve the surrounding</strong> <code>this</code>.</p>
                                <pre class="snippet"><code class="js">function Timer() {
  this.seconds = 0;
                                
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
                                
new Timer(); // Correctly logs seconds</code></pre>
                                <h2>Summary Table</h2>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Context</th>
                                          <th scope="col"><code>this</code> Refers To</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>Global scope</td>
                                          <td>Global object (<code>window</code>)</td>
                                      </tr>  
                                      <tr>
                                          <td>Object method</td>
                                          <td>The object itself</td>
                                      </tr> 
                                      <tr>
                                          <td>Function (non-method) call</td>
                                          <td>Global object or <code>undefined</code> (strict)</td>
                                      </tr>
                                      <tr>
                                          <td>Constructor function</td>
                                          <td>The new object created</td>
                                      </tr>
                                      <tr>
                                          <td>Arrow function</td>
                                          <td>Inherits <code>this</code> from outer scope</td>
                                      </tr>
                                      <tr>
                                          <td>With <code>bind()</code>, <code>call()</code>, <code>apply()</code></td>
                                          <td>Manually defined object</td>
                                      </tr>                                      
                                  </tbody>
                              </table>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Create an object with a method and use <code>this</code> to access properties.</li>
                                    <li>Try detaching a method and calling it separately — observe <code>this</code>.</li>
                                    <li>Use <code>bind()</code> to fix <code>this</code> in a detached function.</li>
                                    <li>Use arrow functions inside <code>setTimeout</code> to preserve outer <code>this</code>.</li>
                                    <li>Create a constructor that sets properties using <code>this</code>.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-closures" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


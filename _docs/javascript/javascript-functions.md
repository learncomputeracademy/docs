---
layout: documentation
title: JavaScript Functions | Learn Computer Academy
permalink: javascript/javascript-functions/
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
                                <h1>JavaScript Functions</h1>
                                <hr>
                                <h2>What is a Function?</h2>
                                <p>A <strong>function</strong> is a block of reusable code that performs a specific task.</p>
                                <p>Instead of repeating the same code, we write it once inside a function and call it when needed.</p>
                                <h2>Why Use Functions?</h2>
                                <ul>
                                    <li>Reuse code (Write once, use many times)</li>
                                    <li>Make code organized and readable</li>
                                    <li>Break programs into smaller parts</li>
                                    <li>Avoid repetition</li>    
                                </ul>
                                <h2>Function Syntax</h2>
                                <h3>Basic Function Declaration</h3>
                                <pre class="snippet"><code class="js">function greet() {
  console.log("Hello, world!");
}

greet(); // Call the function</code></pre>
                                <h3>Parameters and Arguments</h3>
                                <p>You can pass values to a function using <strong>parameters</strong> (placeholders).</p>
                                <pre class="snippet"><code class="js">function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
greet("Bob");   // Output: Hello, Bob</code></pre>
                                <h3>Return Statement</h3>
                                <p>Use <code>return</code> to send a value back from the function.</p>
                                <pre class="snippet"><code class="js">function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8</code></pre>
                                <p>Once a <code>return</code> is hit, the function <strong>exits</strong>.</p>
                                <h3>Function Expressions</h3>
                                <p>Functions can also be assigned to variables.</p>
                                <pre class="snippet"><code class="js">const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20</code></pre>
                                <h3>Arrow Functions (ES6)</h3>
                                <p>A shorter way to write function expressions.</p>
                                <pre class="snippet"><code class="js">const square = (n) => {
  return n * n;
};

console.log(square(6)); // Output: 36</code></pre>
                                <pre class="snippet"><code class="js">const square = n => n * n;</code></pre>
                                <h3>Default Parameters</h3>
                                <p>You can set default values for parameters.</p>
                                <pre class="snippet"><code class="js">function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();        // Output: Hello, Guest
greet("John");  // Output: Hello, John</code></pre>
                                <h3>Function Scope</h3>
                                <p>Variables defined <strong>inside</strong> a function are not accessible <strong>outside</strong>.</p>
                                <pre class="snippet"><code class="js">function sayHi() {
  let message = "Hi!";
  console.log(message);  // OK
}

sayHi();
// console.log(message); // ❌ Error: message is not defined</code></pre>
                                <h3>Nested Functions</h3>
                                <p>Functions can be defined inside other functions.</p>
                                <pre class="snippet"><code class="js">function outer() {
  function inner() {
    console.log("Hello from inner");
  }
  inner();
}

outer(); // Output: Hello from inner</code></pre>
                                <h3>Anonymous Functions</h3>
                                <p>A function without a name — used often in event handlers or callbacks.</p>
                                <pre class="snippet"><code class="js">setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);</code></pre>
                                <h3>Callback Functions</h3>
                                <p>A <strong>callback</strong> is a function passed <strong>as an argument</strong> to another function, to be executed later.</p>
                                <pre class="snippet"><code class="js">function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();
}
                                
function showMessage() {
  console.log("Welcome to our site!");
}

greetUser("Alice", showMessage);</code></pre>
                                <h3>Immediately Invoked Function Expression (IIFE)</h3>
                                <p>A function that runs <strong>immediately after it's defined</strong>.</p>
                                <pre class="snippet"><code class="js">(function() {
  console.log("IIFE runs instantly!");
})();</code></pre>
                                <p>Useful for:</p>
                                <ul>
                                  <li>Avoiding global variable pollution</li>
                                  <li>Creating private scopes</li>
                                </ul>
                                <h2>Summary</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Feature</th>
                                            <th scope="col">Statement</th>
                                            <th scope="col">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Function Declaration</td>
                                            <td><code>function add() {}</code></td>
                                            <td>Hoisted (can be used before defined)</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Function Expression</td>
                                            <td><code>const add = function() {}</code></td>
                                            <td>Not hoisted</td>
                                        </tr>  
                                        <tr>
                                            <td scope="row">Arrow Function</td>
                                            <td><code>const add = (a, b) => a + b</code></td>
                                            <td>Short, modern syntax</td>
                                        </tr> 
                                        <tr>
                                            <td scope="row">Default Parameters</td>
                                            <td><code>function(a = 1) {}</code></td>
                                            <td>Sets fallback value</td>
                                        </tr>                                         
                                        <tr>
                                            <td scope="row">Return Value</td>
                                            <td><code>return x * y</code></td>
                                            <td>Sends result back</td>
                                        </tr>                                        
                                        <tr>
                                            <td scope="row">Callback Function</td>
                                            <td><code>func(callback)</code></td>
                                            <td>Used for async/events</td>
                                        </tr> 
                                        <tr>
                                            <td scope="row">IIFE</td>
                                            <td><code>(function() {})();</code></td>
                                            <td>Runs immediately</td>
                                        </tr>                                         
                                    </tbody>
                                </table>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Write a function <code>isEven(number)</code> that returns <code>true</code> if the number is even, else <code>false</code>.</li>
                                    <li>Write a function <code>greetUser(name, time)</code> that returns "Good Morning/Evening, [name]" based on the time (AM/PM).</li>
                                    <li>Create an arrow function that adds two numbers and returns the result.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-control-flow" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-objects" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include './includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>




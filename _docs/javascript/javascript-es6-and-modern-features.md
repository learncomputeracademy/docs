---
layout: documentation
title: JavaScript ES6 and Modern Features | Learn Computer Academy
permalink: javascript/javascript-es6-and-modern-features/
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
                                <h1>JavaScript ES6 and Modern Features</h1>
                                <p><em>(A major leap in JavaScript with cleaner syntax, better scoping, arrow functions, and more)</em></p>
                                <hr>
                                <h2>What is ES6?</h2>
                                <p><strong>ES6 (ECMAScript 2015)</strong> is a major update to JavaScript that introduced new syntax and features to make code more readable, maintainable, and powerful.</p>
                                <h2>It paved the way for modern JavaScript development.</h2>
                                <h2>1. <code>let</code> and <code>const</code> - Block Scoped Variables</h2>
                                <h3><code>let</code> - Replaces <code>var</code> for reassignable variables</h3>
                                <pre class="snippet"><code class="js">let name = "John";
name = "Doe"; // Allowed</code></pre>
                                <h3><code>const</code> - Immutable reference</h3>
                                <pre class="snippet"><code class="js">const age = 30;
// age = 31; // ❌ Error: Assignment to constant variable</code></pre>
                                <p class="note"><code>let</code> and <code>const</code> are <strong>block-scoped</strong> and don't hoist like <code>var</code>.</p>
                                <h2>2. Arrow Functions (Shorter Function Syntax)</h2>
                                <pre class="snippet"><code class="js">// Traditional function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greet = name => "Hello " + name;
</code></pre>
                                <p>If there are multiple lines or parameters:</p>
                                <pre class="snippet"><code class="js">const add = (a, b) => {
  return a + b;
};</code></pre>
                                <h2>3. Template Literals - Using Backticks <code>`</code></h2>
                                <pre class="snippet"><code class="js">const name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
</code></pre>
                                <p>You can also write multi-line strings:</p>
                                <pre class="snippet"><code class="html">const msg = `This is
a multiline
string`;
</code></pre>
                                <h2>4. Default Parameters</h2>
                                <pre class="snippet"><code class="js">function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Hello Guest
</code></pre>
                                <h2>5. Destructuring</h2>
                                <h3>Array Destructuring</h3>
                                <pre class="snippet"><code class="js">const [a, b] = [1, 2];
console.log(a); // 1
</code></pre>
                                <h3>Object Destructuring</h3>
                                <pre class="snippet"><code class="js">const user = { name: "Sam", age: 25 };
const { name, age } = user;
</code></pre>
                                <h2>6. Spread and Rest Operators (<code>...</code>)</h2>
                                <h3>Spread (expands)</h3>
                                <pre class="snippet"><code class="js">const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]</code></pre>
                                <h3>Rest (collects)</h3>
                                <pre class="snippet"><code class="js">function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}</code></pre>
                                <h2>7. Enhanced Object Literals</h2>
                                <pre class="snippet"><code class="js">const name = "Bob";
const user = {
  name,
  greet() {
    console.log("Hi " + this.name);
  }
};</code></pre>
                                <h2>8. for...of Loop (Array iteration)</h2>
                                <pre class="snippet"><code class="js">const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}</code></pre>
                                <p class="note">Use <code>for...of</code> with arrays, not objects.</p>
                                <h2>9. Promises (Covered in Chapter 18)</h2>
                                <pre class="snippet"><code class="js">const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};</code></pre>
                                <h2>10. Modules (import/export)</h2>
                                <h3>Export (in math.js)</h3>
                                <pre class="snippet"><code class="js">export const add = (a, b) => a + b;</code></pre>
                                <h3>Import (in another file)</h3>
                                <pre class="snippet"><code class="js">import { add } from './math.js';
console.log(add(2, 3));</code></pre>
                                <p class="note">Requires setting <code>type="module"</code> in your HTML script tag or using a bundler.</p>
                              <h2>Summary</h2>
                              <ul>
                                <li>ES6 brought powerful improvements to variable scoping (<code>let</code>, <code>const</code>), cleaner syntax (arrow functions, template literals), and more.</li>
                                <li>Spread/rest operators, destructuring, and modules simplify code and improve reusability.</li>
                                <li>These features are foundational for modern JavaScript and frameworks like React, Vue, and Angular.</li>
                              </ul>             
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                    <li>Rewrite a function using arrow function syntax.</li>
                                    <li>Use template literals to insert variables into a sentence.</li>
                                    <li>Use destructuring to extract values from an object.</li>
                                    <li>Create a <code>sum(...args)</code> function using the rest operator.</li>
                                    <li>Create and import a module in two separate files.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-fetch-api" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-module-import-export" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


---
layout: documentation
title: JavaScript Scope Hoisting | Learn Computer Academy
permalink: javascript/javascript-scope-hoisting/
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
                                <h1>JavaScript Scope and Hoisting</h1>
                                <hr>
                                <h2>What is Scope?</h2>
                                <p><strong>Scope</strong> determines where variables are accessible in your code. In JavaScript, you’ll mainly deal with:</p>
                                <ul>
                                  <li><strong>Global Scope</strong></li>
                                  <li><strong>Function (Local) Scope</strong></li>
                                  <li><strong>Block Scope</strong> (added in ES6)</li>
                                </ul>
                                <h2>Global Scope</h2>
                                <p>Variables declared <strong>outside</strong> of any function or block are global.</p>
                                <pre class="snippet"><code class="js">let name = "Alice";

function greet() {
  console.log("Hello, " + name); // can access global variable
}</code></pre>
                                <p>Global variables can be accessed from <strong>anywhere</strong> in the code.</p>
                                <h2>Function Scope</h2>
                                <p>Variables declared <strong>inside a function</strong> are only available inside that function.</p>
                                <pre class="snippet"><code class="js">function sayHello() {
  let message = "Hi!";
  console.log(message);
}
                                
sayHello();
// console.log(message); ❌ Error: message is not defined
</code></pre>
                                <h2>Block Scope (<code>let</code> and <code>const</code>)</h2>
                                <p>Variables declared with <code>let</code> or <code>const</code> inside <code>{}</code> are only available within that block.</p>
                                <pre class="snippet"><code class="js">if (true) {
  let age = 25;
  const city = "Delhi";
  console.log(age, city); // ✅ Works here
}
                                
console.log(age); // ❌ Error
console.log(city); // ❌ Error
</code></pre>
                                <p>But <code>var</code> is <code>not block-scoped</code>:</p>
                                <pre class="snippet"><code class="js">if (true) {
  var test = "Visible outside block";
}
console.log(test); // ✅ Works, but not recommended
</code></pre>
                                <h2>Hoisting in JavaScript</h2>
                                <p><strong>Hoisting</strong> is JavaScript's default behavior of moving declarations to the top of their scope <strong>before code is executed</strong>.</p>
                                <h2>Variable Hoisting</h2>
                                <p>Variables declared with <code>var</code> are <strong>hoisted</strong>, but not their values.</p>
                                <pre class="snippet"><code class="js">console.log(a); // undefined
var a = 10;</code></pre>
                                <p>Behind the scenes:</p>
                                <pre class="snippet"><code class="js">var a;
console.log(a); // undefined
a = 10;
</code></pre>
                                <p>⚠️ <code>let</code> and <code>const</code> are hoisted <strong>but not initialized</strong>, so accessing them before declaration throws an error.</p>
                                <pre class="snippet"><code class="js">console.log(b); // ❌ ReferenceError
let b = 20;
</code></pre>
                                <h2>Function Hoisting</h2>
                                <p><strong>Function declarations</strong> are hoisted — you can use them before defining:</p>
                                <pre class="snippet"><code class="js">greet(); // ✅ Works

function greet() {
  console.log("Hello!");
}</code></pre>
                                <p>But <strong>function expressions</strong> (assigned to variables) are not fully hoisted:</p>
                                <pre class="snippet"><code class="js">sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};</code></pre>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Keyword</th>
                                          <th scope="col">Scope Type</th>
                                          <th scope="col">Hoisted</th>
                                          <th scope="col">Re-assignable</th>
                                          <th scope="col">Block Scoped</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><code>var</code></td>
                                          <td>Function/global</td>
                                          <td>Yes</td>
                                          <td>Yes</td>
                                          <td>❌ No</td>
                                      </tr>
                                      <tr>
                                          <td><code>let</code></td>
                                          <td>Block</td>
                                          <td>Yes ❗(TDZ)</td>
                                          <td>Yes</td>
                                          <td>✅ Yes</td>
                                      </tr>                                      
                                      <tr>
                                          <td><code>const</code></td>
                                          <td>Block</td>
                                          <td>Yes ❗(TDZ)</td>
                                          <td>❌ No</td>
                                          <td>✅ Yes</td>
                                      </tr>
                                  </tbody>
                                </table> 
                                <p><strong>TDZ (Temporal Dead Zone)</strong>: The phase between entering scope and variable declaration where it can't be used.</p>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Declare a variable inside a function and try accessing it outside.</li>
                                    <li>Try accessing a <code>let</code> variable before it’s declared — observe the error.</li>
                                    <li>Use <code>var</code> in an <code>if</code> block and see if it leaks outside.</li>
                                    <li>Write a function that is called before it's declared using a function declaration.</li>
                                    <li>Compare the behavior of function declaration and function expression with hoisting.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-error-handling" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


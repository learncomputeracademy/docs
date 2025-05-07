---
layout: documentation
title: JavaScript Error Handling | Learn Computer Academy
permalink: javascript/javascript-error-handling/
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
                                <h1>JavaScript Error Handling</h1>
                                <hr>
                                <h2>Why Error Handling Matters</h2>
                                <p>Errors happen! Maybe the user enters invalid data, a server is down, or a function receives the wrong input.</p>
                                <p><strong>JavaScript provides</strong> <code>try...catch</code> blocks to handle errors gracefully instead of crashing the program.</p>
                                <h2><strong>Syntax</strong>: <code>try...catch</code></h2>
                                <pre class="snippet"><code class="js">try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}</code></pre>
                                <h2>Example:</h2>
                                <pre class="snippet"><code class="js">try {
  let result = someUndefinedVariable + 10;
} catch (err) {
  console.log("Something went wrong:", err.message);
}</code></pre>
                                <p>Output:</p>
                                <pre class="snippet"><code class="html">Something went wrong: someUndefinedVariable is not defined</code></pre>   
                                <p>Without <code>try...catch</code>, this error would stop the rest of your JavaScript from running!</p> 
                                <h2>The <code>finally</code> Block</h2>   
                                <p><code>finally</code> always runs — whether there was an error or not.</p>                        
                                <pre class="snippet"><code class="js">try {
  console.log("Trying something risky");
} catch (err) {
  console.log("Error happened!");
} finally {
  console.log("Always runs!");
}</code></pre>
                                <p>Use <code>finally</code> to clean up resources, close files/connections, or reset states.</p>
                                <h2>The <code>throw</code> Keyword</h2>
                                <p>You can throw custom errors manually using <code>throw</code>.</p>
                                <pre class="snippet"><code class="js">function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught:", err.message);
}</code></pre>
                                <h2>Built-in Error Types</h2>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Error Type</th>
                                          <th scope="col">Description</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><code>ReferenceError</code></td>
                                          <td>Variable not defined</td>
                                      </tr> 
                                      <tr>
                                          <td><code>TypeError</code></td>
                                          <td>Wrong type or invalid operation</td>
                                      </tr>                                       
                                      <tr>
                                          <td><code>SyntaxError</code></td>
                                          <td>Invalid JavaScript syntax</td>
                                      </tr>                                       
                                      <tr>
                                          <td><code>RangeError</code></td>
                                          <td>Number out of allowable range</td>
                                      </tr>
                                      <tr>
                                          <td><code>EvalError</code></td>
                                          <td>Error in <code>eval()</code> function</td>
                                      </tr>                                      
                                      <tr>
                                          <td><code>URIError</code></td>
                                          <td>Invalid URI functions like <code>decodeURI()</code></td>
                                      </tr>  
                                  </tbody>
                              </table> 
                              <h2>Real-Life Use Case: Form Validation</h2>
                              <pre class="snippet"><code class="js">function validateAge(age) {
  if (isNaN(age)) throw new Error("Age must be a number");
  if (age &lt; 18) throw new Error("You must be at least 18");
  return true;
}
                              
try {
  validateAge("hello");
} catch (err) {
  console.log("Validation error:", err.message);
}</code></pre>
                              <h2>Nesting and Re-throwing Errors</h2>
                              <p>You can catch an error, handle it partly, and re-throw it.</p>
                              <pre class="snippet"><code class="js">try {
  try {
    throw new Error("Original error");
  } catch (err) {
    console.log("Logging:", err.message);
    throw err; // Re-throwing
  }
} catch (e) {
  console.log("Final catch:", e.message);
}</code></pre>
                              <h2>Optional: Using <code>try...catch</code> with async/await</h2>
                              <pre class="snippet"><code class="js">async function fetchData() {
  try {
    let res = await fetch("https://invalid-url.com");
    let data = await res.json();
  } catch (error) {
    console.log("Network or JSON error:", error.message);
  }
}</code></pre>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Write a function that throws an error if the argument is not a string.</li>
                                    <li>Use <code>try...catch...finally</code> to divide two numbers.</li>
                                    <li>Validate a name field in a form — throw if it's empty.</li>
                                    <li>Write a nested <code>try...catch</code> block and re-throw the error.</li>
                                    <li>Handle a <code>fetch()</code> request error using <code>try/catch</code>.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-advanced-events" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


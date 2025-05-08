---
layout: documentation
title: JavaScript LocalStorage and SessionStorage | Learn Computer Academy
permalink: javascript/javascript-localstorage-and-sessionstorage/
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
                                <h1>JavaScript LocalStorage and SessionStorage</h1>
                                <p><em>(Storing data in the browser that persists between page reloads or sessions)</em></p>
                                <hr>
                                <h2>What is Web Storage?</h2>
                                <p>Web Storage is a browser feature that allows you to store key/value pairs in a web browser.</p>
                                <p>There are two types:</p>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Type</th>
                                          <th scope="col">Lifespan</th>
                                          <th scope="col">Scope</th>
                                      </tr>
                                  </thead>
                                  <tbody>  
                                      <tr>
                                          <td><code>localStorage</code></td>
                                          <td><strong>Persistent</strong> (until manually cleared)</td>
                                          <td>Same-origin</td>
                                      </tr>                                       
                                      <tr>
                                          <td><code>sessionStorage</code></td>
                                          <td><strong>Temporary</strong> (cleared on tab close)</td>
                                          <td>Same-tab only</td>
                                      </tr>
                                  </tbody>
                              </table>
                              <h2>Why Use Web Storage?</h2>
                              <ul>
                                <li>Save user preferences (e.g., theme)</li>
                                <li>Remember form input data</li>
                                <li>Save cart items in e-commerce</li>
                                <li>Avoid server calls for small data</li>
                              </ul>
                              <h2> localStorage: Persistent Storage</h2>
                              <h3>Set Item</h3>
                              <pre class="snippet"><code class="js">localStorage.setItem("username", "John");</code></pre>
                              <h3>Get Item</h3>
                              <pre class="snippet"><code class="js">const name = localStorage.getItem("username");
console.log(name); // John</code></pre>
                              <h3>Remove Item</h3>
                              <pre class="snippet"><code class="js">localStorage.removeItem("username");</code></pre>
                              <h3>Clear All Storage</h3>
                              <pre class="snippet"><code class="js">localStorage.clear();</code></pre>
                              <h2>sessionStorage: Temporary Storage</h2>
                              <p>Works the same way as <code>localStorage</code> but data is lost when the <strong>browser tab is closed</strong>.</p>
                              <pre class="snippet"><code class="js">sessionStorage.setItem("sessionUser", "Alice");
const sessionUser = sessionStorage.getItem("sessionUser");
console.log(sessionUser); // Alice</code></pre>
                              <h2>Note on Data Types</h2>
                              <p>Web Storage only stores <strong>strings</strong>.</p>
                              <p>To store objects/arrays, use <code>JSON.stringify()</code> and <code>JSON.parse()</code>:</p>
                              <pre class="snippet"><code class="js">const user = { name: "Alex", age: 28 };
localStorage.setItem("user", JSON.stringify(user));
                                
const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name); // Alex</code></pre>
                              <h2>Limitations of Web Storage</h2>
                              <ul>
                                <li>Storage limit: ~5MB per origin (varies by browser)</li>
                                <li>Only accessible on the <strong>same origin</strong> (protocol + domain + port)</li>
                                <li>Not secure for sensitive data — it's accessible via JavaScript</li>
                                <li>No expiration for <code>localStorage</code> unless manually removed</li>
                              </ul>
                              <h2>Common Use Cases</h2>
                              <ul>
                                <li>Save dark/light mode preference</li>
                                <li>Keep items in a shopping cart</li>
                                <li>Auto-fill form fields</li>
                                <li>Store temporary form draft</li>
                              </ul>
                              <h2>Summary</h2>
                              <ul>
                                <li><code>localStorage</code> persists data until cleared manually.</li>
                                <li><code>sessionStorage</code> clears when the tab is closed.</li>
                                <li>Use <code>setItem()</code>, <code>getItem()</code>, <code>removeItem()</code>, and <code>clear()</code> methods.</li>
                                <li>Store complex data (arrays/objects) using JSON methods.</li>
                                <li>Avoid storing sensitive or secure data.</li>
                              </ul>             
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                  <li>Save a user's name to <code>localStorage</code>, and greet them on the next visit.</li>
                                  <li>Save a form draft to <code>sessionStorage</code> and restore it if the tab refreshes.</li>
                                  <li>Use <code>JSON.stringify()</code> to save an object in localStorage.</li>
                                  <li>Create a function to clear the saved data with a button click.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-json-and-data-fetching" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


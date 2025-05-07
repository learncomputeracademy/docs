---
layout: documentation
title: JavaScript DOM | Learn Computer Academy
permalink: javascript/javascript-dom/
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
                                <h1>JavaScript DOM (Document Object Model)</h1>
                                <hr>
                                <h2>What is the DOM?</h2>
                                <p><strong>DOM</strong> stands for <strong>Document Object Model</strong>. It’s a tree-like structure that represents the contents of an HTML document.</p>
                                <p>When a webpage loads, the browser turns your HTML into a <strong>DOM tree</strong>, where:</p>
                                <ul>
                                    <li>Each HTML element becomes an <strong>object</strong></li>
                                    <li>JavaScript can access, update, add, or delete these elements</li>
                                </ul>
                                <p>📌 <strong>In short</strong>: JavaScript uses the DOM to interact with your web page dynamically.</p>
                                <h2>Visualizing the DOM Tree</h2>
                                <pre class="snippet"><code class="html">&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
                                <pre class="snippet"><code class="html">Document
└── html
    └── body
        ├── h1
        └── p
</code></pre>
                                <h2>Accessing Elements in the DOM</h2>  
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Method</th>
                                          <th scope="col">Description</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><code>getElementById()</code></td>
                                          <td>Finds element by ID</td>
                                      </tr>
                                      <tr>
                                          <td><code>getElementsByClassName()</code></td>
                                          <td>Finds elements by class name</td>
                                      </tr> 
                                      <tr>
                                          <td><code>getElementsByTagName()</code></td>
                                          <td>Finds elements by tag</td>
                                      </tr>                                       
                                      <tr>
                                          <td><code>querySelector()</code></td>
                                          <td>Finds first matching element (CSS)</td>
                                      </tr>                                         
                                      <tr>
                                          <td><code>querySelectorAll()</code></td>
                                          <td>Finds all matching elements (CSS)</td>
                                      </tr>
                                  </tbody>
                              </table>             
                              <pre class="snippet"><code class="html">&lt;p id="demo" class="text"&gt;Hello!&lt;/p&gt;</code></pre>
                              <pre class="snippet"><code class="js">document.getElementById("demo"); // By ID
document.getElementsByClassName("text");    // By class
document.querySelector("p");                // First &lt;p&gt;
document.querySelectorAll("p");             // All &lt;p&gt;
</code></pre>
                                <h2>Changing Content with JavaScript</h2>
                                <h3><code>innerHTML</code></h3>
                                <p>Replaces the HTML content inside an element.</p>
                                <pre class="snippet"><code class="js">document.getElementById("demo").innerHTML = "Updated!";</code></pre>
                                <h3><code>textContent</code></h3>
                                <p>Changes only the text (ignores HTML tags).</p>
                                <pre class="snippet"><code class="js">document.getElementById("demo").textContent = "Plain Text";</code></pre>                                
                                <h3>Changing Style</h3>
                                <pre class="snippet"><code class="js">const box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";</code></pre> 
                                <h3>Creating and Appending Elements</h3>
                                <pre class="snippet"><code class="js">const newP = document.createElement("p");
newP.textContent = "This is a new paragraph.";
                                  
document.body.appendChild(newP);</code></pre> 
                                <h3>Removing Elements</h3>
                                <pre class="snippet"><code class="js">const item = document.getElementById("removeMe");
item.remove();</code></pre> 
                                <p>Or using parent element:</p>
                                <pre class="snippet"><code class="js">item.parentNode.removeChild(item);</code></pre>
                                <h2>DOM Events Recap</h2>
                                <p>You can combine DOM selection with events:</p>
                                <pre class="snippet"><code class="js">document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("demo").textContent = "Button clicked!";
});</code></pre>     
                                <h2>Traversing the DOM</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>parentNode</code></td>
                                            <td>Access parent element</td>
                                        </tr>
                                        <tr>
                                            <td><code>children</code></td>
                                            <td>Access all child elements</td>
                                        </tr> 
                                        <tr>
                                            <td><code>firstElementChild</code></td>
                                            <td>First child element</td>
                                        </tr>  
                                        <tr>
                                            <td><code>lastElementChild</code></td>
                                            <td>Last child element</td>
                                        </tr>                                          
                                        <tr>
                                            <td><code>nextElementSibling</code></td>
                                            <td>Next element at the same level</td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>previousElementSibling</code></td>
                                            <td>Previous element at same level</td>
                                        </tr>                                         
                                    </tbody>
                                </table> 
                                <pre class="snippet"><code class="js">const list = document.getElementById("myList");
console.log(list.children); // HTMLCollection of li elements</code></pre>
                                  <h2>Attributes and Classes</h2>
                                  <h3>Getting & Setting Attributes</h3>
                                <pre class="snippet"><code class="js">const link = document.getElementById("myLink");
console.log(link.getAttribute("href")); // Get
                                  
link.setAttribute("href", "https://example.com"); // Set</code></pre>
                                <h3>Working with Classes</h3>
                                <pre class="snippet"><code class="js">const box = document.querySelector(".box");

box.classList.add("active");    // Add class
box.classList.remove("box");    // Remove class
box.classList.toggle("hidden"); // Toggle class</code></pre>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Change the text of a heading using <code>innerHTML</code>.</li>
                                    <li>Create a new <code>&lt;li&gt;</code> item and add it to an unordered list.</li>
                                    <li>Toggle a class on button click.</li>
                                    <li>Remove an element after a few seconds using <code>setTimeout()</code>.</li>
                                    <li>Change the <code>src</code> attribute of an image dynamically.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-events" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


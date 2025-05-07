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





























                                <p>JavaScript <strong>listens</strong> for these events and lets you run code when they occur.</p>
                                <h2>Common HTML Events</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Event Name</th>
                                            <th scope="col">Triggered When...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>click</code></td>
                                            <td>An element is clicked</td>
                                        </tr>
                                        <tr>
                                            <td><code>mouseover</code></td>
                                            <td>Mouse hovers over an element</td>
                                        </tr> 
                                        <tr>
                                            <td><code>mouseout</code></td>
                                            <td>Mouse leaves an element</td>
                                        </tr>
                                        <tr>
                                            <td><code>keydown</code></td>
                                            <td>A key is pressed</td>
                                        </tr>
                                        <tr>
                                            <td><code>keyup</code></td>
                                            <td>A key is released</td>
                                        </tr>
                                        <tr>
                                            <td><code>change</code></td>
                                            <td>Form field value changes</td>
                                        </tr>
                                        <tr>
                                            <td><code>submit</code></td>
                                            <td>A form is submitted</td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>load</code></td>
                                            <td>The page or image finishes loading</td>
                                        </tr> 
                                        <tr>
                                            <td><code>dblclick</code></td>
                                            <td>Element is double-clicked</td>
                                        </tr>                                                                                
                                    </tbody>
                                </table> 
                                <h2>3 Ways to Handle Events</h2>
                                <h3>1. Inline Event Handler (in HTML)</h3>
                                <pre class="snippet"><code class="html">&lt;button onclick="sayHello()"&gt;Click Me&lt;/button&gt;
&lt;script&gt;
  function sayHello() {
    alert("Hello from inline event!");
  }
&lt;/script&gt;</code></pre>
                                <h3>2. Internal Event Handler (using DOM)</h3>
                                <pre class="snippet"><code class="html">&lt;button id="btn"&gt;Click&lt;/button&gt;

&lt;script&gt;
  document.getElementById("btn").onclick = function () {
    alert("Clicked!");
  };
&lt;/script&gt;</code></pre>
                                <h3>3. <code>addEventListener()</code> Method</h3>                             
                                <pre class="snippet"><code class="js">const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("Event using addEventListener");
});</code></pre>
                                <p>This is the <strong>recommended way</strong> — it allows multiple listeners and better separation of HTML and JS.</p>
                                <h2>Mouse Events Example</h2>
                                <pre class="snippet"><code class="html">&lt;div id="box" style="width:100px;height:100px;background:red;"&gt;&lt;/div&gt;

&lt;script&gt;
  const box = document.getElementById("box");
                                    
  box.addEventListener("mouseover", () => {
    box.style.background = "blue";
  });
                                    
  box.addEventListener("mouseout", () => {
    box.style.background = "red";
  });
&lt;/script&gt;</code></pre>
                                <h2>Keyboard Events Example</h2>
                                <pre class="snippet"><code class="js">document.addEventListener("keydown", function (e) {
  console.log("Key pressed:", e.key);
});</code></pre>       
                                <p>You can capture key values like <code>'Enter'</code>, <code>'Escape'</code>, <code>'ArrowUp'</code>, etc.</p>  
                                <h2>Form Events Example</h2>                       
                                <pre class="snippet"><code class="html">&lt;form id="myForm"&gt;
  &lt;input type="text" name="username" /&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
                                  
&lt;script&gt;
  const form = document.getElementById("myForm");
                                  
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents actual form submission
    alert("Form submitted via JavaScript!");
  });
&lt;/script&gt;</code></pre> 
                                <h2>The <code>event</code> Object</h2>
                                <p>You can access event details like type, target element, key pressed, mouse position, etc.</p>
                                <pre class="snippet"><code class="js">document.addEventListener("click", function (event) {
  console.log(event.type);   // click
  console.log(event.target); // element clicked
});</code></pre>       
                                <h2>Removing an Event Listener</h2>                          
                                <pre class="snippet"><code class="js">function greet() {
  alert("Hello!");
}
                                  
btn.addEventListener("click", greet);
                                  
// Later...
btn.removeEventListener("click", greet);</code></pre>
                                <p class="note"><strong>Note: </strong>You must use a named function (not an anonymous one) to remove a listener.</p>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Add a click event to change the text of a paragraph.</li>
                                    <li>Use mouseover and mouseout to animate a box’s color.</li>
                                    <li>Create a form that prevents default submission and logs the input value.</li>
                                    <li>Display the key a user presses using keydown.</li>
                                    <li>Write a function that runs only once on the first button click.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-dates" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


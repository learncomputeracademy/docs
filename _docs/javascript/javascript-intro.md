---
layout: documentation
title: HTML Intro | Learn Computer Academy
permalink: html/html-intro/
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
                                <h1>Introduction to JavaScript</h1>
                                <hr>
                                <h2>What is JavaScript?</h2>
                                <p>JavaScript is a <strong>lightweight, interpreted programming language</strong> primarily used to make web pages interactive. It allows developers to create features like sliders, pop-ups, form validation, and dynamic content updates <strong>without reloading the page</strong>.</p>
                                <p>JavaScript is:</p>
                                <ul>
                                    <li><strong>Client-side</strong> (runs in the browser)</li>
                                    <li><strong>Object-based</strong></li>
                                    <li><strong>Event-driven</strong></li>
                                    <li>A key part of the <strong>web development trio</strong>: HTML (structure), CSS (style), JavaScript (behavior)</li>
                                </ul>
                                <hr>
                                <h2>History and Evolution</h2>
                                <ul>
                                    <li><strong>1995</strong>: JavaScript was created by <strong>Brendan Eich</strong> at Netscape and originally called Mocha.</li>
                                    <li>Later renamed <strong>LiveScript</strong>, and finally <strong>JavaScript</strong> (for marketing reasons, to ride Java's popularity).</li>
                                    <li>Standardized as <strong>ECMAScript (ES)</strong> by <strong>ECMA International</strong>.</li>
                                    <li>Major Versions:
                                        <ul>
                                            <li>ES3 (1999): First widely adopted version.</li>
                                            <li>ES5 (2009): Introduced <code>strict mode</code>, JSON, and more.</li>
                                            <li>ES6 (2015): Huge update — introduced <code>let</code>, <code>const</code>, arrow functions, classes, promises, etc.</li>
                                            <li>Later versions (ES7 to ES13): Continued improving language features, performance, and async programming.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2>JavaScript vs Other Languages</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Feature</th>
                                            <th scope="col">JavaScript</th>
                                            <th scope="col">Java</th>
                                            <th scope="col">Python</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Typing</td>
                                            <td>Dynamic</td>
                                            <td>Static</td>
                                            <td>Dynamic</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Execution</td>
                                            <td>Interpreted (in browsers)</td>
                                            <td>Compiled (JVM)</td>
                                            <td>Interpreted</td>
                                        </tr>  
                                        <tr>
                                            <td scope="row">Use Case</td>
                                            <td>Web interactivity, apps</td>
                                            <td>Enterprise apps, Android</td>
                                            <td>Data science, scripting</td>
                                        </tr>                                          
                                        <tr>
                                            <td scope="row">Syntax Simplicity</td>
                                            <td>Medium</td>
                                            <td>Complex</td>
                                            <td>Simple</td>
                                        </tr>                                         
                                        <tr>
                                            <td scope="row">Popularity</td>
                                            <td>Very High (Front-end dev)</td>
                                            <td>High</td>
                                            <td>High</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                <p>JavaScript is mainly used <strong>in the browser</strong>, unlike many languages that run on servers or local machines.</p>
                                <h2>How to Add JavaScript to HTML</h2>
                                <p>JavaScript can be added in <strong>three main ways</strong>:</p>
                                <h3>1. Inline Script</h3>
                                <p>You can write JavaScript directly inside an HTML element using the <code>onclick</code>, <code>onmouseover</code>, or similar attributes.</p>
                                <pre class="snippet"><code class="html">&lt;button onclick="alert('Hello!')">Click Me&lt;/button></code></pre>
                                <p>✅ Simple</p>
                                <p>❌ Not recommended for large projects (mixes JS with HTML)</p>
                                <h3>2. Internal Script</h3>
                                <p>JavaScript can be embedded within the <code>&lt;script&gt;</code> tag in the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> of your HTML file.</p>
                                <pre class="snippet"><code class="html">&lt!DOCTYPE html>
&lthtml>
&lthead>
    &ltscript>
    function greet() {
        alert("Welcome to JavaScript!");
    }
    &lt/script>
&lt/head>
&ltbody>
    &ltbutton onclick="greet()">Greet&lt/button>
&lt/body>
&lt/html>
</code></pre>
                                <p>✅ Good for small projects or testing</p>
                                <p>❌ Not reusable</p>
                                <h3>3. External Script</h3>
                                <p>JavaScript is placed in a separate <code>.js</code> file and linked using the <code>&lt;script src=""></code> tag.</p>      
                                <code><strong>index.html</strong></code>
                                <pre class="snippet"><code class="html">&lt;script src="app.js">&lt;/script></code></pre>
                                <code><strong>app.js</strong></code>
                                <pre class="snippet"><code class="js">function greet() {
                                    alert("Hello from external JS!");
                                  }</code></pre>
                                <p>✅ Clean, reusable, modular</p>
                                <p>✅ Recommended for real-world projects</p>
                                <h2>JavaScript Output Methods</h2>
                                <p>JavaScript can output data in various ways:</p>
                                <h4>1. <code>alert()</code></h4>
                                <p>Shows a pop-up message box to the user.</p>
                                <pre class="snippet"><code class="js">alert("Welcome!");</code></pre>
                                <h4>2. <code>console.log()</code></h4>
                                <p>Prints output to the browser's <strong>developer console</strong>. Useful for <strong>debugging</strong>.</p>
                                <pre class="snippet"><code class="js">console.log("This is a log message.");</code></pre>
                                <h4>3. <code>document.write()</code></h4>
                                <p>Writes directly into the HTML document.</p>
                                <pre class="snippet"><code class="js">document.write("Hello, World!");</code></pre>
                                <p>⚠️ Overwrites the whole document if used after the page loads — use with caution.</p>
                                <h4>4. <code>innerHTML</code></h4>
                                <p>Changes the content of an HTML element.</p>
                                <pre class="snippet"><code class="html">&lt;p id="demo">&lt;/p>
&lt;script>
    document.getElementById("demo").innerHTML = "Hello from JS!";
    &lt;/script>
</code></pre>
                                <p>✅ Most commonly used for dynamic content updates</p>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="js-syllabus.md" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-basic" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include './includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>




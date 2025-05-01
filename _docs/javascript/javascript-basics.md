---
layout: documentation
title: JavaScript Basics | Learn Computer Academy
permalink: javascript/javascript-basics/
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
                                <h1>JavaScript Basics</h1>
                                <hr>
                                <h2>JavaScript Syntax</h2>
                                <p>JavaScript syntax is the set of rules that define how a JavaScript program is written and interpreted.</p>
                                <ul>
                                    <li>JavaScript is <strong>case-sensitive</strong></li>
                                    <li>Statements end with a semicolon <code>;</code> (optional, but recommended)</li>
                                    <li>Statements are executed <strong>top to bottom</strong>, <strong>left to right</strong></li>
                                </ul>
                                <pre class="snippet"><code class="js">let message = "Hello!";
console.log(message);</code></pre>
                                <h2>JavaScript Statements</h2>
                                <p>A <strong>statement</strong> is a line of code that performs an action.</p>
                                <pre class="snippet"><code class="js">let x = 10;       // Statement 1
x = x + 5;        // Statement 2
console.log(x);   // Statement 3
</code></pre>
                                <p>Multiple statements can be grouped using <strong>curly braces</strong> <code>{}</code> (called a code block):</p>
                                <pre class="snippet"><code class="js">{
    let name = "John";
    console.log(name);
}</code></pre>
                                <h2>JavaScript Comments</h2>
                                <p>Comments are used to explain code and are ignored by the browser.</p>
                                <ul>
                                    <li><strong>Single-line comment:</strong></li>
                                </ul>
                                <pre class="snippet"><code class="js">// This is a single-line comment</code></pre>
                                <ul>
                                    <li><strong>Multi-line comment:</strong></li>
                                </ul>
                                <pre class="snippet"><code class="js">/* This is a 
multi-line comment */</code></pre>
                                <h2>Variables in JavaScript</h2>
                                <p>Variables store <strong>data values</strong>. You can declare them using:</p>
                                <h3><code>var</code> (Old way)</h3>
                                <pre class="snippet"><code class="js">var name = "Alice";</code></pre>
                                <h3><code>let</code> (Modern, block-scoped)</h3>
                                <pre class="snippet"><code class="js">let age = 25;</code></pre>
                                <h3><code>const</code> (Constant - value cannot change)</h3>
                                <pre class="snippet"><code class="js">const country = "India";</code></pre>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Keyword</th>
                                            <th scope="col">Can Reassign?</th>
                                            <th scope="col">Scope Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">var</td>
                                            <td>Yes</td>
                                            <td>Function-level</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">let</td>
                                            <td>Yes</td>
                                            <td>Block-level</td>
                                        </tr>  
                                        <tr>
                                            <td scope="row">const</td>
                                            <td>No</td>
                                            <td>Block-level</td>
                                        </tr>                                       
                                    </tbody>
                                </table>
                                <h2>JavaScript Data Types</h2>
                                <p>JavaScript is <strong>dynamically typed</strong>, meaning you don't need to declare a data type.</p>
                                <h3>Primitive Types:</h3>
                                <ul>
                                    <li><code>String</code> - <code>"Hello"</code></li>
                                    <li><code>Number</code> - <code>42</code>, <code>3.14</code></li>
                                    <li><code>Boolean</code> - <code>true</code>, <code>false</code></li>
                                    <li><code>Undefined</code> - variable declared but not assigned</li>
                                    <li><code>Null</code> - intentional absence of value</li>
                                    <li><code>Symbol</code> - unique identifiers (advanced use cases)</li>
                                    <li><code>BigInt</code> - very large numbers (added in ES2020)</li>
                                </ul>
                                <h3>Non-Primitive Types:</h3>
                                <ul>
                                    <li><code>Object</code></li>
                                    <li><code>Array</code></li>
                                    <li><code>Function</code></li>
                                </ul>
                                <pre class="snippet"><code class="js">let name = "Tom";           // String
let age = 30;               // Number
let isOnline = true;        // Boolean
let person = {name: "Tom", age: 30}; // Object
</code></pre>
                                <h2>JavaScript Operators</h2>
                                <p>JavaScript supports several kinds of operators:</p>
                                <h3>1. Arithmetic Operators</h3>
                                <pre class="snippet"><code class="js">+  -  *  /  %  **  ++  --</code></pre>
                                <h3>2. Assignment Operators</h3>
                                <pre class="snippet"><code class="js">=  +=  -=  *=  /=  %=  **=</code></pre>
                                <h3>3. Comparison Operators</h3>
                                <pre class="snippet"><code class="js">==   ===   !=   !==   >   &lt;   >=   &lt;=</code></pre>
                                <ul>
                                    <li><code>==</code> checks value only</li>
                                    <li><code>===</code> checks value and type (recommended)</li>
                                </ul>
                                <h3>4. Logical Operators</h3>
                                <pre class="snippet"><code class="js">&&   ||   !</code></pre>
                                <pre class="snippet"><code class="js">true && false // false
true || false // true
!false        // true
</code></pre>
                                <h3>5. String Concatenation Operator</h3>
                                <pre class="snippet"><code class="js">let fullName = "John" + " " + "Doe"; // "John Doe"</code></pre>
                                <h2>Type Conversion (Casting)</h2>
                                <h3>👉 Implicit (Automatic)</h3>
                                <pre class="snippet"><code class="js">let result = "5" + 2;    // "52" (number 2 converted to string)</code></pre>
                                <h3>👉 Explicit (Manual)</h3>
                                <pre class="snippet"><code class="js">Number("10");     // 10
String(20);       // "20"
Boolean(0);       // false
</code></pre>   
                                <h2><code>typeof</code> Operator</h2>
                                <p>Used to check the <strong>type</strong> of a variable.</p>
                                <pre class="snippet"><code class="js">typeof "hello";    // "string"
typeof 5;          // "number"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" (a quirk in JavaScript)
</code></pre>
                                <h2>🧪 Practice Tip:</h2>
                                <p>Create a small script that:</p>
                                <ol>
                                    <li>Declares variables using <code>let</code> and <code>const</code></li>
                                    <li>Uses arithmetic and logical operators</li>
                                    <li>Outputs results with <code>console.log()</code></li>
                                </ol>
                                <p>Example:</p>
                                <pre class="snippet"><code class="js">let a = 10;
let b = 5;
let sum = a + b;
                                    
console.log("Sum:", sum);
console.log("Are both greater than 0?", a > 0 && b > 0);
</code></pre>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-intro" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-basics" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include './includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>




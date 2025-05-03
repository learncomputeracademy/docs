---
layout: documentation
title: JavaScript Math and Numbers | Learn Computer Academy
permalink: javascript/javascript-math-and-numbers/
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
                                <h1>JavaScript Math and Numbers</h1>
                                <hr>
                                <h2>What are Numbers in JavaScript?</h2>
                                <p>JavaScript uses a single <strong>Number type</strong> to represent all kinds of numeric values — including:</p>
                                <ul>
                                    <li>Integers: <code>1</code>, <code>42</code>, <code>-5</code></li>
                                    <li>Floating-point numbers (decimals): <code>3.14</code>, <code>-0.99</code></li>
                                    <li>Exponential numbers: <code>1.5e3</code> (equals 1500)</li>
                                </ul>
                                <pre class="snippet"><code class="js">let a = 10;
let b = 3.14;</code></pre>
                                <p class="note"><b>NOTE:</b>JavaScript does <code>not</code> have different types for int and float like some other languages.</p>
                                <h2>Basic Arithmetic Operators</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Operator</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>+</code></td>
                                            <td>Addition</td>
                                            <td><code>5 + 3</code> → <code>8</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>-</code></td>
                                            <td>Subtraction</td>
                                            <td><code>5 - 2</code> → <code>3</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>*</code></td>
                                            <td>Multiplication</td>
                                            <td><code>5 * 3</code> → <code>15</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>/</code></td>
                                            <td>Division</td>
                                            <td><code>15 / 3</code> → <code>5</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>%</code></td>
                                            <td>Modulus (remainder)</td>
                                            <td><code>7 / 3</code> → <code>1</code></td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>**</code></td>
                                            <td>Exponentiation</td>
                                            <td><code>2**3</code> → <code>8</code></td>
                                        </tr>
                                    </tbody>
                                </table>  
                                <h2>Increment and Decrement</h2>
                                <pre class="snippet"><code class="js">let x = 5;
x++;  // x = 6
x--;  // x = 5
</code></pre>
                                <p>You can also use:</p>
                                <ul>
                                    <li>x += 2</li>
                                    <li>x *= 3</li>
                                    <li>x /= 2, etc.</li>
                                </ul>
                                <h2>Working with the <code>Math</code> Object</h2>
                                <p>JavaScript provides a built-in <code>Math</code> object with many methods and properties.</p>
                                <h2>Common Math Methods</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Method</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>Math.round()</code></td>
                                            <td>Rounds to nearest integer</td>
                                            <td><code>Math.round(4.6)</code> → <code>5</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>Math.floor()</code></td>
                                            <td>Rounds down</td>
                                            <td><code>Math.floor(4.9)</code> → <code>4</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>Math.ceil()</code></td>
                                            <td>Rounds up</td>
                                            <td><code>Math.ceil(4.1)</code> → <code>5</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>Math.trunc()</code></td>
                                            <td>Removes decimal part</td>
                                            <td><code>Math.trunc(4.8)</code> → <code>4</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>Math.abs()</code></td>
                                            <td>Absolute value</td>
                                            <td><code>Math.abs(-10)</code> → <code>10</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>Math.pow()</code></td>
                                            <td>Exponentiation</td>
                                            <td><code>Math.pow(2, 3)</code> → <code>8</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>Math.sqrt()</code></td>
                                            <td>Square root</td>
                                            <td><code>Math.sqrt(16)</code> → <code>4</code></td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>Math.max()</code></td>
                                            <td>Highest value</td>
                                            <td><code>Math.max(1, 5, 3)</code> → <code>5</code></td>
                                        </tr>  
                                        <tr>
                                            <td><code>Math.min()</code></td>
                                            <td>Lowest value</td>
                                            <td><code>Math.min(1, 5, 3)</code> → <code>1</code></td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>Math.random()</code></td>
                                            <td>Random number between 0 and 1</td>
                                            <td><code>Math.random()</code></td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                <h2>Random Number Between a Range</h2>
                                <pre class="snippet"><code class="js">// Random number between 1 and 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);</code></pre>
                                <h2>Number Conversion</h2>
                                <h3><code>parseInt()</code> - Converts string to integer</h3>
                                <pre class="snippet"><code class="js">let n = parseInt("42");  // 42</code></pre>
                                <h3><code>parseFloat()</code> - Converts string to float</h3>
                                <pre class="snippet"><code class="js">let n = parseFloat("3.14"); // 3.14</code></pre>
                                <h3><code>Number()</code> - Converts any type to number</h3>
                                <pre class="snippet"><code class="js">Number("10")      // 10
Number(true)      // 1
Number("abc")     // NaN</code></pre>
                                <h3><code>isNaN()</code> - Is Not a Number?</h3>
                                <pre class="snippet"><code class="js">console.log(isNaN("abc")); // true
console.log(isNaN(123));   // false</code></pre>
                                <h2>Dealing with Decimals</h2>
                                <p>Sometimes floating-point math can be imprecise:</p>
                                <pre class="snippet"><code class="js">console.log(0.1 + 0.2); // 0.30000000000000004 😕</code></pre>
                                <p>You can fix it using <code>toFixed()</code>:</p>
                                <pre class="snippet"><code class="js">let total = (0.1 + 0.2).toFixed(2); // "0.30" (as a string)</code></pre>
                                <h2>Number Methods</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Method</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>toFixed(n)</code></td>
                                            <td>Rounds to <code>n</code> decimal places</td>
                                            <td><code>(3.14159).toFixed(2)</code> → <code>"3.14"</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>toString()</code></td>
                                            <td>Converts number to string</td>
                                            <td><code>(100).toString()</code> → <code>"100"</code></td>
                                        </tr>  
                                        <tr>
                                            <td><code>typeof</code></td>
                                            <td>Checks if it's a number</td>
                                            <td><code>typeof 42</code> → <code>"number"</code></td>
                                        </tr>                                                                           
                                    </tbody>
                                </table>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Write a program that adds, subtracts, multiplies and divides two numbers.</li>
                                    <li>Generate a random number between 1 and 100.</li>
                                    <li>Round <code>4.675</code> to 2 decimal places using <code>toFixed()</code>.</li>
                                    <li>Convert <code>"123.45"</code> to a number and multiply it by <code>2</code>.</li>
                                    <li>Get the square root of any number using <code>Math.sqrt()</code>.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-strings" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


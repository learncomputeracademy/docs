---
layout: documentation
title: JavaScript Strings | Learn Computer Academy
permalink: javascript/javascript-strings/
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
                                <h1>JavaScript Strings</h1>
                                <hr>
                                <h2>What is a String?</h2>
                                <p>A <strong>string</strong> in JavaScript is a sequence of characters used to represent <strong>text</strong>.</p>
                                <pre class="snippet"><code class="js">const message = "Hello, world!";
const name = 'John Doe';</code></pre>
                                <p>Strings can be written using:</p>
                                <ul>
                                    <li>Double quotes <code>" "</code></li>
                                    <li>Single quotes <code>' '</code></li>
                                    <li>Backticks (Template literals) <code>` `</code></li>
                                </ul>
                                <h2>Declaring Strings</h2>
                                <pre class="snippet"><code class="js">let greeting = "Good morning";
let city = 'Mumbai';
let message = `Welcome, user!`;</code></pre>
                                <h2>String Length</h2>
                                <pre class="snippet"><code class="js">const msg = "Hello";
console.log(msg.length); // 5</code></pre>                                    
                                <h2>Accessing Characters</h2>
                                <p>You can access characters using index (starting from 0):</p>
                                <pre class="snippet"><code class="js">const word = "JavaScript";
console.log(word[0]);  // J
console.log(word.charAt(4)); // S</code></pre>                                     
                                <h2>Changing Case</h2>
                                <pre class="snippet"><code class="js">const text = "Learn JavaScript";

console.log(text.toUpperCase()); // LEARN JAVASCRIPT
console.log(text.toLowerCase()); // learn javascript</code></pre>    
                                <h2>Common String Methods</h2>
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
                                            <td><code>length</code></td>
                                            <td>Returns length</td>
                                            <td><code>str.length</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>toUpperCase()</code></td>
                                            <td>Converts to uppercase</td>
                                            <td><code>"hello".toUpperCase()</code> → <code>"HELLO"</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>toLowerCase()</code></td>
                                            <td>Converts to lowercase</td>
                                            <td><code>"HELLO".toLowerCase()</code> → <code>"hello"</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>includes()</code></td>
                                            <td>Checks if string contains text</td>
                                            <td><code>"abc".includes("b")</code> → <code>true</code></td>
                                        </tr>                                       
                                        <tr>
                                            <td><code>indexOf()</code></td>
                                            <td>Finds position of first occurrence</td>
                                            <td><code>"banana".indexOf("a")</code> → <code>1</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>lastIndexOf()</code></td>
                                            <td>Finds position of last occurrence</td>
                                            <td><code>"banana".lastIndexOf("a")</code> → <code>5</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>startsWith()</code></td>
                                            <td>Checks if string starts with given text</td>
                                            <td><code>"hello".startsWith("he")</code> → <code>true</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>endsWith()</code></td>
                                            <td>Checks if string ends with given text</td>
                                            <td><code>"hello".endsWith("o")</code> → <code>true</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>slice(start, end)</code></td>
                                            <td>Extracts part of string</td>
                                            <td><code>"abcdef".slice(1, 4)</code> → <code>"bcd"</code></td>
                                        </tr>   
                                        <tr>
                                            <td><code>substring()</code></td>
                                            <td>Similar to slice</td>
                                            <td><code>"hello".substring(0, 2)</code> → <code>"he"</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>replace()</code></td>
                                            <td>Replaces first match</td>
                                            <td><code>"I love cats".replace("cats", "dogs")</code></td>
                                        </tr>   
                                        <tr>
                                            <td><code>trim()</code></td>
                                            <td>Removes whitespace</td>
                                            <td><code>" hello ".trim()</code> → <code>"hello"</code></td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>split()</code></td>
                                            <td>Splits string into array</td>
                                            <td><code>"a,b,c".split(",")</code> → <code>["a", "b", "c"]</code></td>
                                        </tr>                                        
                                        <tr>
                                            <td><code>concat()</code></td>
                                            <td>Joins two strings</td>
                                            <td><code>"Hi".concat(" there")</code> → <code>"Hi there"</code></td>
                                        </tr>
                                    </tbody>
                                </table>  
                                <h2>Template Literals (ES6)</h2>
                                <p>Template literals use backticks (` `) to support:</p>  
                                <ul>
                                    <li>Multi-line strings</li>
                                    <li>Variable interpolation using <code>${}</code></li>
                                </ul>
                                <pre class="snippet"><code class="js">const name = "Amit";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Amit!</code></pre> 
                                <pre class="snippet"><code class="js">const fullMessage = `
Dear Student,
Your result is ready.
                                    
Regards,
Admin
`;
console.log(fullMessage);</code></pre> 
                                <h2>Escape Characters</h2>
                                <p>Use <code>\</code> (backslash) to escape special characters:</p>
                                <pre class="snippet"><code class="js">const quote = "He said, \"Let's go!\"";</code></pre>
                                <p>Other escape sequences:
                                <ul>
                                    <li><code>\n</code> - New line</li>
                                    <li><code>\t</code> - Tab</li>
                                    <li><code>\\</code> - Backslash</p></li>
                                </ul>
                                <h2>String Comparison</h2>
                                <p>Strings can be compared alphabetically using <code>==</code>, <code>===</code>, <code>&lt;</code>, <code>&gt;</code>:</p>
                                <pre class="snippet"><code class="js">console.log("apple" &lt; "banana"); // true
console.log("A" &lt; "a"); // true (uppercase comes before lowercase)</code></pre>    
                                <h2>String Immutability</h2>  
                                <p>Strings are immutable — you can't change a character directly:</p>  
                                <pre class="snippet"><code class="js">let msg = "hello";
msg[0] = "H";  // ❌ Invalid
msg = "Hello"; // ✅ Correct way</code></pre>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Create a string with your full name and print each character using a loop.</li>
                                    <li>Count how many times the letter <code>a</code> appears using <code>.split()</code> and <code>.length</code>.</li>
                                    <li>Use <code>slice()</code> to extract the first name from a full name.</li>
                                    <li>Convert <code>" Welcome! "</code> to <code>"welcome!"</code> (trim + lowercase).</li>
                                    <li>Use template literals to print:</li>
                                </ol>
                                <pre class="snippet"><code class="js">Hello, [Your Name]!
Welcome to JavaScript Strings.</code></pre>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-arrays" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/math-and-numbers" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>




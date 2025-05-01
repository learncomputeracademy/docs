---
layout: documentation
title: JavaScript Control Flow | Learn Computer Academy
permalink: javascript/javascript-control-flow/
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
                                <h1>JavaScript Control Flow</h1>
                                <hr>
                                <h2>What is Control Flow?</h2>
                                <p><strong>Control Flow</strong> in JavaScript refers to the <strong>order in which code is executed</strong>.</p>
                                <p>By default, JavaScript runs code from top to bottom, but control flow statements let you:</p>
                                <ul>
                                    <li>Make decisions (<code>if</code>, <code>else</code>)</li>
                                    <li>Repeat code using loops</li>
                                    <li>Handle multiple outcomes (<code>switch</code>)</li>
                                    <li>Exit early (<code>break</code>, <code>return</code>, <code>continue</code>)</li>    
                                </ul>
                                <h2>1. <code>if</code>, <code>else if</code>, <code>else</code> Statements</h2>
                                <h3>Syntax:</h3>
                                <pre class="snippet"><code class="js">if (condition) {
    // code runs if condition is true
} else if (anotherCondition) {
    // code runs if anotherCondition is true
} else {
    // code runs if none of the above are true
}
</code></pre>
                                <h3>Example:</h3>
                                <pre class="snippet"><code class="js">let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
</code></pre>
                                <h2>2. <code>switch</code> Statement</h2>
                                <p>The <code>switch</code> statement is used to handle <strong>multiple conditions</strong> more cleanly than many <code>else if</code>s.</p>
                                <h3>Syntax:</h3>
                                <pre class="snippet"><code class="js">switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
</code></pre>
                                <h3>Example:</h3>
                                <pre class="snippet"><code class="js">let color = "blue";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Get ready!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Unknown color");
}
</code></pre>
                                <h2>3. Loops in JavaScript</h2>
                                <p>Loops let you <strong>run a block of code repeatedly</strong>, either a set number of times or until a condition is false.</p>
                                <h3><code>for</code> Loop</h3>
                                <p>Use when you know <strong>how many times</strong> to loop.</p>
                                <pre class="snippet"><code class="js">for (let i = 1; i &lt;= 5; i++) {
  console.log("Count:", i);
}
</code></pre>
                                <h3><code>while</code> Loop</h3>
                                <p>Runs while a <strong>condition is true</strong>.</p>
                                <pre class="snippet"><code class="js">let i = 1;
while (i &lt;= 3) {
  console.log("While loop:", i);
  i++;
}                                    
</code></pre>
                                <h3><code>do...while</code> Loop</h3>
                                <p>Runs <strong>at least once</strong>, even if the condition is false.</p>
                                <pre class="snippet"><code class="js">let i = 1;
do {
  console.log("Do-While:", i);
  i++;
} while (i &lt;= 3);                                                   
</code></pre>
                                <h3><code>for...of</code> Loop</h3>
                                <p>Used to iterate <strong>over arrays or iterable objects</strong>.</p>
                                <pre class="snippet"><code class="js">let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}                                                                             
</code></pre>
                                <h3><code>for...in</code> Loop</h3>
                                <p>Used to iterate over <strong>object properties</strong>.</p>
                                <pre class="snippet"><code class="js">let person = { name: "Sam", age: 25 };

for (let key in person) {
    console.log(key, "=", person[key]);
}                                                                                                       
</code></pre>
                                <h2>4. <code>break</code>,<code>continue</code>,<code>return</code></h2>
                                <h3><code>break</code>:</h3>
                                <p>Exits the current loop or <code>switch</code> early.</p>
                                <pre class="snippet"><code class="js">for (let i = 1; i &lt;= 5; i++) {
if (i === 3) break;
    console.log(i);  // Output: 1, 2
}                                                                                                                                    
</code></pre>
                                <h3><code>continue</code>:</h3>
                                <p>Skips the current iteration and continues with the next one.</p>
                                <pre class="snippet"><code class="js">for (let i = 1; i &lt;= 5; i++) {
if (i === 3) continue;
    console.log(i);  // Output: 1, 2, 4, 5
}                                                                                                                                                                    
</code></pre>
                                <h3><code>return</code>:</h3>
                                <p>Ends function execution and returns a value (covered more in functions chapter).</p>
                                <pre class="snippet"><code class="js">function multiply(a, b) {
    return a * b;
}                                                                                                                                                                                                  
</code></pre>
                                <h2>Summary</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Control Type</th>
                                            <th scope="col">Statement</th>
                                            <th scope="col">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Decision</td>
                                            <td><code>if</code>, <code>else</code></td>
                                            <td>Run code conditionally</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Multi-condition</td>
                                            <td><code>switch</code></td>
                                            <td>Cleaner alternative to many <code>if</code>s</td>
                                        </tr>  
                                        <tr>
                                            <td scope="row">Repetition</td>
                                            <td><code>for</code>, <code>while</code></td>
                                            <td>Repeat code while condition holds</td>
                                        </tr> 
                                        <tr>
                                            <td scope="row">Break flow</td>
                                            <td><code>break</code></td>
                                            <td>Exit loop/switch early</td>
                                        </tr>                                         
                                        <tr>
                                            <td scope="row">Skip iteration</td>
                                            <td><code>continue</code></td>
                                            <td>Skip current loop iteration</td>
                                        </tr>                                        
                                        <tr>
                                            <td scope="row">Exit function</td>
                                            <td><code>return</code></td>
                                            <td>Return value from function</td>
                                        </tr> 
                                    </tbody>
                                </table>
                                <h2>🧪 Practice Challenge:</h2>
                                <h3>Task:</h3>
                                <p>Write a script that checks a number and prints:</p>
                                <ul>
                                    <li>"Fizz" if divisible by 3</li>
                                    <li>"Buzz" if divisible by 5</li>
                                    <li>"FizzBuzz" if divisible by both</li>
                                    <li>The number itself otherwise</li>
                                </ul>
                                <pre class="snippet"><code class="js">let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}
</code></pre>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-basics" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include './includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>




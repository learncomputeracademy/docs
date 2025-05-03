---
layout: documentation
title: JavaScript Arrays | Learn Computer Academy
permalink: javascript/javascript-arrays/
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
                                <h1>Arrays in JavaScript</h1>
                                <hr>
                                <h2>What is an Array?</h2>
                                <p>An <strong>array</strong> is a special variable used to <strong>store multiple values</strong> in a single place.</p>
                                <pre class="snippet"><code class="js">const colors = ["red", "green", "blue"];</code></pre>
                                <p>Think of it like a list or collection of items — each with an index starting from <code>0</code>.</p>
                                <h2>Why Use Arrays?</h2>
                                <ul>
                                    <li>Store related data (like names, scores, items)</li>
                                    <li>Loop through multiple values</li>
                                    <li>Perform operations like sorting, filtering, searching, etc.</li>
                                </ul>
                                <h2>Creating Arrays</h2>
                                <pre class="snippet"><code class="js">const fruits = ["apple", "banana", "cherry"];
const numbers = [10, 20, 30, 40];
const mixed = ["text", 100, true, null];</code></pre>
                                <p>You can also create an array using the <code>Array()</code> constructor:</p>
                                <pre class="snippet"><code class="js">const cars = new Array("Toyota", "Honda", "BMW");</code></pre>
                                <h2>Accessing Array Elements</h2>
                                <pre class="snippet"><code class="js">console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry</code></pre>
                                <h2>Modifying Array Elements</h2>
                                <pre class="snippet"><code class="js">fruits[1] = "mango";
console.log(fruits); // ["apple", "mango", "cherry"]</code></pre>
                                <h2>Array Length</h2>
                                <pre class="snippet"><code class="js">console.log(fruits.length); // 3</code></pre>
                                <h2>Adding & Removing Elements</h2>
                                <h3><code>push()</code> — Add to end</h3>
                                <pre class="snippet"><code class="js">fruits.push("grape");</code></pre>
                                <h3><code>pop()</code> — Remove from end</h3>
                                <pre class="snippet"><code class="js">fruits.pop();</code></pre>
                                <h3><code>unshift()</code> — Add to beginning</h3>
                                <pre class="snippet"><code class="js">fruits.unshift("orange");</code></pre>
                                <h3><code>shift()</code> — Remove from beginning</h3>
                                <pre class="snippet"><code class="js">fruits.shift();</code></pre>
                                <h2>Looping Through Arrays</h2>
                                <h3><code>for</code> loop</h3>
                                <pre class="snippet"><code class="js">for (let i = 0; i &lt; fruits.length; i++) {
  console.log(fruits[i]);
}</code></pre>
                                <h3><code>for...of</code></h3>
                                <pre class="snippet"><code class="js">for (let fruit of fruits) {
  console.log(fruit);
}</code></pre>
                                <h3><code>forEach()</code></h3>
                                <pre class="snippet"><code class="js">fruits.forEach(function(fruit) {
  console.log(fruit);
});</code></pre>
                                <h2>Common Array Methods</h2>
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
                                            <td><code>push()</code></td>
                                            <td>Add item to end</td>
                                            <td><code>arr.push("new")</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>pop()</code></td>
                                            <td>Remove last item</td>
                                            <td><code>arr.pop()</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>shift()</code></td>
                                            <td>Remove first item</td>
                                            <td><code>arr.shift()</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>unshift()</code></td>
                                            <td>Add item to start</td>
                                            <td><code>arr.unshift("start")</code></td>
                                        </tr>                                       
                                        <tr>
                                            <td><code>indexOf()</code></td>
                                            <td>Find index of an item</td>
                                            <td><code>arr.indexOf("banana")</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>includes()</code></td>
                                            <td>Check if item exists</td>
                                            <td><code>arr.includes("apple")</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>join()</code></td>
                                            <td>Join array to string</td>
                                            <td><code>arr.join(", ")</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>slice()</code></td>
                                            <td>Extract portion of array</td>
                                            <td><code>arr.slice(1, 3)</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>splice()</code></td>
                                            <td>Add/remove items</td>
                                            <td><code>arr.splice(1, 2, "new")</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>concat()</code></td>
                                            <td>Merge arrays</td>
                                            <td><code>arr1.concat(arr2)</code></td>
                                        </tr>
                                        <tr>
                                            <td><code>reverse()</code></td>
                                            <td>Reverse the array</td>
                                            <td><code>arr.reverse()</code></td>
                                        </tr> 
                                        <tr>
                                            <td><code>sort()</code></td>
                                            <td>Sort the array</td>
                                            <td><code>arr.sort()</code></td>
                                        </tr>                                                                                
                                    </tbody>
                                </table>
                                <h2>Searching in Arrays</h2>
                                <pre class="snippet"><code class="js">const pets = ["cat", "dog", "rabbit"];

console.log(pets.includes("dog")); // true
console.log(pets.indexOf("rabbit")); // 2</code></pre>
                                <h2>Array of Objects</h2>
                                <pre class="snippet"><code class="js">const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
                                  
console.log(users[0].name); // Alice</code></pre>
                                <h2>Modern Array Methods (ES6+)</h2>
                                <h3><code>map()</code> - transforms each item</h3>
                                <pre class="snippet"><code class="js">const nums = [1, 2, 3];
const squared = nums.map(n => n * n); // [1, 4, 9]</code></pre>
                                <h3><code>filter()</code> - keeps only matching items</h3>
                                <pre class="snippet"><code class="js">const ages = [12, 18, 22, 15];
const adults = ages.filter(age => age >= 18); // [18, 22]</code></pre>
                                <h3><code>find()</code> – returns first matching item</h3>
                                <pre class="snippet"><code class="js">const found = ages.find(age => age > 18); // 22</code></pre>
                                <h2>Destructuring Arrays</h2>
                                <p>Extract values into variables easily:</p>
                                <pre class="snippet"><code class="js">const cities = ["Delhi", "Mumbai", "Chennai"];
const [first, second] = cities;
                                    
console.log(first); // Delhi
console.log(second); // Mumbai</code></pre>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Create an array of your favorite movies and print each using a loop.</li>
                                    <li>Add and remove items using <code>push()</code> and <code>pop()</code>.</li>
                                    <li>Create an array of numbers and use <code>map()</code> to double each number.</li>
                                    <li>Filter an array to find all even numbers.</li>
                                    <li>Use <code>splice()</code> to replace an item in the array.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-basics" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-strings" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include './includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>




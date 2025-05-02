---
layout: documentation
title: JavaScript Objects | Learn Computer Academy
permalink: javascript/javascript-objects/
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
                                <h1>JavaScript Objects</h1>
                                <hr>
                                <h2>What is an Object?</h2>
                                <p>In JavaScript, an <strong>object</strong> is a collection of key-value pairs (also called properties).</p>
                                <p>Objects help store and organize <strong>related data</strong> and <strong>functions</strong> in one place.</p>
                                <h2>Object Syntax</h2>
                                <pre class="snippet"><code class="js">const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 30,
  isStudent: false
};</code></pre>
                                <ul>
                                    <li><code>firstName</code>, <code>lastName</code>, <code>age</code>, <code>isStudent</code> are <strong>keys (properties)</strong></li>
                                    <li><code>"Alice"</code>, <code>"Johnson"</code>, <code>30</code>, <code>false</code> are values</li>
                                </ul>
                                <h2>Accessing Object Properties</h2>
                                <h3>Dot Notation:</h3>
                                <pre class="snippet"><code class="js">console.log(person.firstName); // Output: Alice</code></pre>
                                <h3>Bracket Notation:</h3>
                                <pre class="snippet"><code class="js">console.log(person["lastName"]); // Output: Johnson</code></pre>
                                <p>Use brackets when:</p>
                                <ul>
                                    <li>Property name has spaces/special characters</li>
                                    <li>You access properties dynamically</li>
                                </ul>
                                <h2>Updating & Adding Properties</h2>
                                <h3>Update:</h3>
                                <pre class="snippet"><code class="js">person.age = 31;</code></pre>                                
                                <h3>Add New Property:</h3>
                                <pre class="snippet"><code class="js">person.country = "India";</code></pre>
                                <h2>Deleting Properties</h2>
                                <pre class="snippet"><code class="js">delete person.isStudent;</code></pre>                                    
                                <h2>Object Methods</h2>
                                <p>A <strong>method</strong> is a function inside an object.</p> 
                                <pre class="snippet"><code class="js">const car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    console.log("Engine started");
  }
};

car.start(); // Output: Engine started</code></pre>
                                <p>You can also use <strong>shorthand syntax</strong>:</p>                                   
                                <pre class="snippet"><code class="js">const car = {
  brand: "Toyota",
  start() {
    console.log("Engine started");
  }
};</code></pre>
                                <h2><code>this</code> Keyword</h2>
                                <p>Inside an object method, <code>this</code> refers to the <strong>object itself</strong>.</p>
                                <pre class="snippet"><code class="js">const user = {
  name: "Sara",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

user.greet(); // Output: Hi, I'm Sara</code></pre>
                                <h2>Nested Objects</h2>
                                <p>Objects can contain other objects.</p>
                                <pre class="snippet"><code class="js">const student = {
  name: "John",
  grades: {
    math: 90,
    english: 85
  }
};
                                  
console.log(student.grades.math); // Output: 90</code></pre>
                                <h2>Looping Through Objects</h2>
                                <h3><code>for...in</code> Loop:</h3>
                                <pre class="snippet"><code class="js">const book = {
  title: "1984",
  author: "George Orwell"
};
                                  
for (let key in book) {
  console.log(key + ": " + book[key]);
}</code></pre>
                                <h2>Built-in Object Methods</h2>
                                <h3><code>Object.keys(obj)</code></h3>
                                <p>Returns an array of keys.</p>
                                <pre class="snippet"><code class="js">Object.keys(book); // ['title', 'author']</code></pre>
                                <h3><code>Object.values(obj)</code></h3>
                                <p>Returns an array of values.</p>
                                <pre class="snippet"><code class="js">Object.values(book); // ['1984', 'George Orwell']</code></pre>
                                <h3><code>Object.entries(obj)</code></h3>
                                <p>Returns an array of [key, value] pairs.</p>
                                <pre class="snippet"><code class="js">Object.entries(book);
// [['title', '1984'], ['author', 'George Orwell']]
</code></pre>
                                <h2>Object Destructuring (ES6)</h2>
                                <p>Extract values into variables easily.</p>
                                <pre class="snippet"><code class="js">const user = {
  name: "Liam",
  age: 25
};
                                  
const { name, age } = user;
console.log(name); // Liam
console.log(age);  // 25</code></pre>
                                <h2>Object in Arrays</h2>
                                <p>Useful for storing lists of items (e.g., users, products).</p>
                                <pre class="snippet"><code class="js">const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 }
];
                                  
console.log(users[1].name); // Output: Bob</code></pre>
                                <h2>Summary</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Feature</th>
                                            <th scope="col">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Create object</td>
                                            <td><code>const obj = { key: value }</code></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Access property</td>
                                            <td><code>obj.key</code> or <code>obj["key"]</code></td>
                                        </tr>  
                                        <tr>
                                            <td scope="row">Add/update property</td>
                                            <td><code>obj.newKey = value</code></td>
                                        </tr> 
                                        <tr>
                                            <td scope="row">Delete property</td>
                                            <td><code>delete obj.key</code></td>
                                        </tr>                                         
                                        <tr>
                                            <td scope="row">Object method</td>
                                            <td><code>obj.method = function() {}</code></td>
                                        </tr>                                        
                                        <tr>
                                            <td scope="row">Use <code>this</code></td>
                                            <td>Inside method: refers to object</td>
                                        </tr> 
                                        <tr>
                                            <td scope="row">Loop object</td>
                                            <td><code>for (let key in obj)</code></td>
                                        </tr> 
                                        <tr>
                                            <td scope="row">Destructuring</td>
                                            <td><code>const { key } = obj</code></td>
                                        </tr>                                                                                 
                                    </tbody>
                                </table>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Create an object called <code>movie</code> with keys: <code>title</code>, <code>director</code>, <code>year</code>.</li>
                                    <li>Add a method <code>getDetails</code> that returns a formatted string using <code>this.title</code>, etc.</li>
                                    <li>Loop over the object to print all key-value pairs.</li>
                                    <li>Try destructuring the <code>movie</code> object.</li>
                                </ol>
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




---
layout: documentation
title: JavaScript JSON and Data Fetching | Learn Computer Academy
permalink: javascript/javascript-json-and-data-fetching/
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
                                <h1>JavaScript JSON and Data Fetching</h1>
                                <p><em>(Working with data using JSON and fetch API)</em></p>
                                <hr>
                                <h2>What is JSON?</h2>
                                <p><strong>JSON (JavaScript Object Notation)</strong> is a <strong>lightweight data format</strong> used for storing and transporting data, especially between a server and a web application.</p>
                                <h2>JSON Syntax Rules:</h2>
                                <ul>
                                  <li>Data is in <code>key/value pairs</code></li>
                                  <li>Keys and string values are enclosed in <code>double quotes</code></li>
                                  <li>Can hold objects, arrays, strings, numbers, booleans, and null</li>
                                </ul>
                                <h3>Example:</h3>
                                <pre class="snippet"><code class="js">{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "hobbies": ["coding", "music"]
}
</code></pre>
                                <h2>Converting Between JSON and JavaScript</h2>
                                <h3> JSON ➡️ JavaScript (Parsing)</h3>
                                <pre class="snippet"><code class="js">const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Alice
</code></pre>
                                <h3>JavaScript ➡️ JSON (Stringifying)</h3>
                                <pre class="snippet"><code class="js">const user = { name: "Bob", age: 40 };
const json = JSON.stringify(user);
console.log(json); // {"name":"Bob","age":40}
</code></pre>
                                <h2>The Fetch API</h2>
                                <p>The <code>fetch()</code> function is used to <strong>make network requests</strong> (GET, POST, etc.) and receive data—often in JSON format.</p>
                                <h3>Basic Fetch Example (GET request)</h3>
                                <pre class="snippet"><code class="js">fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
</code></pre>
                                <h3>Using async/await with Fetch</h3>
                                <pre class="snippet"><code class="js">async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
   } catch (error) {
    console.error("Failed to fetch:", error);
  }
}
                                
getUser();
</code></pre>   
                                <h3>Making a POST Request with Fetch</h3>                        
                                <pre class="snippet"><code class="js">const newUser = {
  name: "Charlie",
  email: "charlie@example.com"
};
                                
fetch("https://jsonplaceholder.typicode.com/users", {
   method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(res => res.json())
  .then(data => console.log("User added:", data))
  .catch(err => console.error(err));</code></pre>
                                <h2>Common JSON Mistakes</h2>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Mistake</th>
                                          <th scope="col">Explanation</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>Using single quotes	</td>
                                          <td>JSON requires <strong>double quotes</strong></td>
                                      </tr>  
                                      <tr>
                                          <td>Trailing commas</td>
                                          <td>Not allowed in JSON</td>
                                      </tr>                                       
                                      <tr>
                                          <td>Undefined values</td>
                                          <td>JSON does not support <code>undefined</code></td>
                                      </tr>                                      
                                      <tr>
                                          <td>Circular references</td>
                                          <td>JSON.stringify() fails on circular data</td>
                                      </tr>
                                  </tbody>
                              </table>
                              <h2>Summary</h2>
                              <ul>
                                <li>JSON is the standard format for data exchange on the web.</li>
                                <li>Use <code>JSON.parse()</code> to convert JSON to objects and <code>JSON.stringify()</code> for the reverse.</li>
                                <li>Use the <code>fetch()</code> API to get/post data from servers.</li>
                                <li>Always handle errors to ensure your app is stable.</li>
                              </ul>             
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                  <li>Convert a JSON string to a JS object and access its properties.</li>
                                  <li>Convert a JS object to a JSON string and log it.</li>
                                  <li>Use <code>fetch()</code> to get a list of posts from a dummy API and display them.</li>   
                                  <li>Post a new record using fetch() and JSON.stringify().</li>
                                  <li>Handle errors using <code>.catch()</code> or <code>try...catch</code>.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-promises-and-async" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


---
layout: documentation
title: JavaScript Fetch API & HTTP Requests (Advanced) | Learn Computer Academy
permalink: javascript/javascript-fetch-api/
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
                                <h1>JavaScript Fetch API & HTTP Requests (Advanced)</h1>
                                <p><em>(Mastering GET, POST, PUT, DELETE requests and advanced fetch handling)</em></p>
                                <hr>
                                <h2>What is the Fetch API?</h2>
                                <p>The <strong>Fetch API</strong> is a modern interface for making HTTP requests in JavaScript. It returns a <strong>Promise</strong> and is more powerful and flexible than older methods like <code>XMLHttpRequest</code>.</p>
                                <h2>Basic Structure of Fetch</h2>
                                <pre class="snippet"><code class="js">fetch(url, {
 method: 'GET' | 'POST' | 'PUT' | 'DELETE',
 headers: {},
 body: JSON.stringify(data) // for POST/PUT
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
</code></pre>
                                <h2>Common HTTP Methods</h2>
                                <table class="table table-striped table-bordered">
                                  <thead class="thead-shades">
                                      <tr>
                                          <th scope="col">Method</th>
                                          <th scope="col">Use Case</th>
                                      </tr>
                                  </thead>
                                  <tbody>  
                                      <tr>
                                          <td><code>GET</code></td>
                                          <td>Retrieve data</td>
                                      </tr>                                       
                                      <tr>
                                          <td><code>POST</code></td>
                                          <td>Send new data</td>
                                      </tr>
                                      <tr>
                                          <td><code>PUT</code></td>
                                          <td>Update existing data</td>
                                      </tr>
                                      <tr>
                                          <td><code>DELETE</code></td>
                                          <td>Remove data</td>
                                      </tr>
                                  </tbody>
                              </table>
                              <h2>GET Request Example</h2>
                              <pre class="snippet"><code class="js">fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));
</code></pre>
                            <h2>POST Request Example</h2>
                            <pre class="snippet"><code class="js">fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
   title: "My Post",
   body: "Hello World",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
</code></pre>
                            <h2>PUT Request Example</h2>
                            <pre class="snippet"><code class="js">fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "PUT",headers: { "Content-Type": "application/json" },
ody: JSON.stringify({
 id: 1,
 title: "Updated Title",
 body: "Updated Body",
userId: 1}) })
.then(res => res.json()
).then(data => console.log(data));
</code></pre>
                            <h2>DELETE Request Example</h2>
                            <pre class="snippet"><code class="js">fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "PUT",headers: { "Content-Type": "application/json" },
ody: JSON.stringify({
 id: 1,
 title: "Updated Title",
 body: "Updated Body",
userId: 1}) })
.then(res => res.json()
).then(data => console.log(data));
</code></pre>
                            <h2>Sending Authorization Headers</h2>
                            <pre class="snippet"><code class="js">fetch("https://api.example.com/data", {
  headers: {
    "Authorization": "Bearer your_token_here"
  }
});</code></pre>
                            <h2>Handling Non-JSON Responses</h2>
                            <pre class="snippet"><code class="js">fetch("/page.html")
.then(response => response.text())
.then(html => document.body.innerHTML =  html);                            
</code></pre>
                            <h2>⚠️ Handling HTTP Errors Manually</h2>
                            <p>Fetch does not throw errors for HTTP status codes like 404 or 500. You must handle them:</p>
                            <pre class="snippet"><code class="js">fetch("/notfound")
.then(response => {
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(err => console.error("Fetch error:", err));</code></pre>
                            <h2>Using <code>async/await</code> with Fetch</h2>
                            <pre class="snippet"><code class="js">async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}</code></pre>
                              <h2>Summary</h2>
                              <ul>
                                <li>The <code>fetch()</code> function is used to perform all kinds of HTTP requests.</li>
                                <li>Always handle <code>.ok</code> to catch non-200 status errors.</li>
                                <li>Use headers and body for POST/PUT requests.</li>
                                <li>Combine fetch with <code>async/await</code> for cleaner syntax.</li>
                                <li>Avoid sending sensitive tokens in the front end without proper security.</li>
                              </ul>             
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                    <li>Create a function that performs a GET request and displays a list of users.</li>
                                    <li>Add a form that submits data to an API using a POST request.</li>
                                    <li>Make a button that deletes a post via a DELETE request.</li>
                                    <li>Add error handling to display a message when fetch fails.</li>
                                    <li>Use <code>async/await</code> to fetch and display data on page load.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-json-and-data-fetching" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-es6-and-modern-features.md" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


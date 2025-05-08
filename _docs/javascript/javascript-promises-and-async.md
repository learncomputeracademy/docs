---
layout: documentation
title: JavaScript Classes and OOP | Learn Computer Academy
permalink: javascript/javascript-classes-oop/
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
                                <h1>JavaScript Promises and Async Programming</h1>
                                <p><em>(Handle asynchronous tasks like API calls, delays, and file loading)</em></p>
                                <hr>
                                <h2>Why Asynchronous Programming?</h2>
                                <p>JavaScript is <strong>single-threaded</strong>, meaning it executes one task at a time.</p>
                                <p>But real-world tasks (like fetching data or waiting for a timer) can take time.</p>
                                <p><strong>Asynchronous programming</strong> lets your code continue running <strong>without blocking</strong>.</p>
                                <h2>Common Async Tasks in JavaScript</h2>
                                <ul>
                                  <li>Fetching data from an API</li>
                                  <li>Reading/writing files (in Node.js)</li>
                                  <li>setTimeout / setInterval</li>
                                  <li>Event handling</li>
                                </ul>
                                <h2>Callbacks (Old Method)</h2>
                                <pre class="snippet"><code class="js">function getData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}
                                
getData((result) => {
  console.log(result); // Data loaded
});</code></pre>
                                <p>⚠️ <strong>Problem</strong>: Callback Hell — nested callbacks are hard to read and debug.</p>
                                <h2>Promises (Modern Way)</h2>
                                <p>A <strong>Promise</strong> is an object that represents the <strong>future value</strong> of an async operation.</p>
                                <h3>States of a Promise:</h3>
                                <ul>
                                  <li>Pending</li>
                                  <li>Fulfilled</li>
                                  <li>Rejected</li>
                                </ul>
                                <h3>Creating a Promise</h3>
                                <pre class="snippet"><code class="js">const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Success!");
    else reject("Error occurred");
  }, 1000);
});</code></pre>   
                                <h3>Consuming a Promise</h3>                              
                                <pre class="snippet"><code class="js">myPromise
  .then((value) => {
    console.log(value); // Success!
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise completed");
  });</code></pre>     
                                <h3>Real Example with fetch()</h3>                             
                                <pre class="snippet"><code class="js">fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));</code></pre>    
                                <h3>Async/Await (Syntactic Sugar for Promises)</h3>
                                <p><code>async</code> makes a function return a promise.</p>
                                <p><code>await</code> waits for the promise to resolve.</p>
                                <pre class="snippet"><code class="js">async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
                                
getPost();</code></pre>   
                                <p>More readable than <code>.then()</code> chaining.</p> 
                                <h2>setTimeout / setInterval (Delay functions)</h2>                              
                                <pre class="snippet"><code class="js">setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
                                
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter === 3) clearInterval(intervalId);
}, 1000);</code></pre>    
                                <h2>Promise.all and Promise.race</h2>   
                                <pre class="snippet"><code class="js">const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");
                                  
Promise.all([p1, p2]).then(values => console.log(values)); // [ "First", "Second" ]
                                  
Promise.race([p1, p2]).then(value => console.log(value)); // "First" (whichever resolves first)</code></pre>   
                                <h2>Summary</h2>  
                                <ul>
                                  <li>Promises handle async tasks more cleanly than callbacks.</li>
                                  <li><code>async/await</code> makes code cleaner and easier to read.</li>
                                  <li>Always use <code>catch()</code> or <code>try...catch</code> to handle errors.</li>
                                  <li><code>Promise.all</code> waits for all promises; <code>Promise.race</code> returns the first one.</li>
                                </ul>                                                 
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                  <li>Create a Promise that resolves after 2 seconds and logs a message.</li>
                                  <li>Use <code>fetch()</code> to get a list of users from a public API.</li>
                                  <li>Write an async function that uses <code>await</code> to fetch and display data.</li>                                  
                                  <li>Try catching errors using <code>try...catch</code> with <code>async/await</code>.</li>
                                  <li>Chain multiple <code>.then()</code> methods to process fetched data.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-classes-oop" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


---
layout: documentation
title: JavaScript Debugging Techniques | Learn Computer Academy
permalink: javascript/javascript-debugging-techniques/
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
                                <h1>JavaScript Debugging Techniques</h1>
                                <p><em>(Identify, inspect, and fix issues in your JavaScript code with confidence)</em></p>
                                <hr>
                                <h2>What is Debugging?</h2>
                                <p><strong>Debugging</strong> is the process of <strong>finding and fixing errors</strong> (bugs) in your code. JavaScript offers several tools and techniques to help you understand what's going wrong and why.</p>
                                <h2>1. Use <code>console.log()</code> Wisely</h2>
                                <p>The simplest and most common way to debug:</p>
                                <pre class="snippet"><code class="js">const total = calculateTotal(100, 5);
console.log("Total:", total);
</code></pre>
                                <h3>Tips:</h3>
                                <ul>
                                  <li>Use meaningful labels.</li>
                                  <li>Log objects or arrays to inspect them.</li>
                                  <li>Use <code>console.table()</code> to display data in a table.</li>
                                </ul>
                                <h2>2. Understanding Console Methods</h2>
                                <pre class="snippet"><code class="js">console.warn("This is a warning");
console.error("This is an error");
console.info("Some information");
console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]);
</code></pre>
                                <h2>3. Breakpoints in Developer Tools</h2>
                                <p>Most browsers (Chrome, Firefox, Edge) have built-in <code>DevTools</code>.</p>
                                <p>Use the Sources tab to:</p>
                                <ul>
                                  <li>Open your script files</li>
                                  <li>Click on a line number to set a <strong>breakpoint</strong></li>
                                  <li>Reload the page to pause code execution there</li>
                                </ul>
                                <p>You can:</p>
                                <ul>
                                  <li>Step through code line by line</li>
                                  <li>Inspect variables</li>
                                  <li>Watch expressions</li>
                                </ul>
                                <h2>4. Using <code>debugger</code> Keyword</h2>
                                <p>Insert the <code>debugger</code> statement in your code to trigger a breakpoint:</p>
                                <pre class="snippet"><code class="js">function calculate(a, b) {
  debugger; // Execution pauses here
  return a + b;
}
</code></pre>
                                <p>Open DevTools and reload the page — your code will pause at this line.</p>
                                <h2>5. Catching Errors with <code>try...catch</code></h2>
                                <p>Use <code>try...catch</code> to handle and inspect runtime errors gracefully:</p>
                                <pre class="snippet"><code class="js">try {
  riskyFunction();
} catch (error) {
  console.error("Error caught:", error.message);
}
</code></pre>
                                <p>Add optional <code>finally</code> for cleanup code that always runs:</p>
                                <pre class="snippet"><code class="js">finally {
  console.log("Cleaning up...");
}
</code></pre>
                                <h2>6. Understanding Stack Traces</h2>
                                <p>When an error occurs, JavaScript shows a <strong>stack trace</strong>:</p>
                                <pre class="snippet"><code class="js">TypeError: Cannot read properties of undefined
    at doSomething (app.js:12)
    at main (app.js:20)
</code></pre>
                                <p>This tells you:</p>
                                <ul>
                                  <li>What the error was</li>
                                  <li>Where it happened</li>
                                  <li>Which function calls led to it</li>
                                </ul>
                                <p>Use this to trace back to the bug source.</p>
                                <h2>7. Watching Variables</h2>
                                <p>In browser DevTools:</p>
                                <ul>
                                  <li>Use the <strong>Watch panel</strong> to track specific variables</li>
                                  <li>Use Call Stack to see the path of function calls</li>
                                  <li>Hover over variables during breakpoints to inspect values</li>
                                </ul>
                                <h2>8. Network Tab for API Debugging</h2>
                                <p>If you're fetching data from a server:</p>
                                <ul>
                                  <li>Open DevTools → <strong>Network</strong></li>
                                  <li>Check if the request succeeded</li>
                                  <li>View headers, payloads, and responses</li>
                                  <li>Identify HTTP errors like 404 or 500</li>
                                </ul>
                              <h2>Pro Debugging Tips</h2>
                              <li>Always check spelling and case sensitivity.</li>
                              <li>Log before and after function calls to track flow.</li>
                              <li>Use meaningful, descriptive variable names.</li>
                              <li>Comment out sections to isolate bugs.</li>
                              <li>Start from the most likely point of failure, not the first error.</li>
                              <h2>Summary:</h2>
                              <ul>
                                <li>Use <code>console.log()</code> and DevTools for simple debugging.</li>
                                <li><code>debugger</code> and breakpoints let you pause and step through code.</li>
                                <li>Use the Network tab and stack traces for deeper insights.</li>
                                <li>Good debugging saves time, reduces frustration, and builds confidence.</li>
                              </ul>
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                    <li>Create a function with a logic bug. Use <code>console.log()</code> to trace the issue.</li>
                                    <li>Insert a <code>debugger</code> and use Chrome DevTools to pause and inspect.</li>
                                    <li>Intentionally throw an error and handle it using <code>try...catch</code>.</li>
                                    <li>Make a <code>fetch()</code> request and inspect it via the Network tab.</li>
                                    <li>Use <code>console.table()</code> to debug an array of objects.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-tooling" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


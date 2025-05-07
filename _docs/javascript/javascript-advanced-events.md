---
layout: documentation
title: JavaScript Events Advanced | Learn Computer Academy
permalink: javascript/javascript-advanced-events/
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
                                <h1>JavaScript Events Advanced</h1>
                                <hr>
                                <h2>Introduction</h2>
                                <p>In this chapter, we’ll go deeper into how JavaScript handles events behind the scenes, including:</p>
                                <ul>
                                    <li>Event bubbling vs capturing</li>
                                    <li><code>event.target</code> vs <code>event.currentTarget</code></li>
                                    <li>Event delegation</li>
                                    <li>Preventing event propagation</li>
                                </ul>
                                <p>Understanding these concepts is essential for building scalable, dynamic UIs — especially in lists, tables, forms, and SPAs.</p>
                                <h2>Event Bubbling (Default Behavior)</h2>
                                <p>By default, events bubble up the DOM tree — starting from the target element and moving to its ancestors.</p>
                                <pre class="snippet"><code class="html">&lt;div id="parent"&gt;
  &lt;button id="child"&gt;Click Me&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                <pre class="snippet"><code class="js">document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
                                  
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});</code></pre>
                                <p>Output if you click the button:</p>
                                <pre class="snippet"><code class="js">Child clicked
Parent clicked</code></pre>
                                <p>👉 This is because the event “bubbles” from child to parent. Know more about <a href="https://www.youtube.com/watch?v=Pd70u1fBcxU" target="_blank">event bubbles</a>.</p>
                                <h2>Stopping Bubbling</h2>
                                <p>Use <strong>event.stopPropagation()</strong> to prevent the event from bubbling up.</p>
                                <pre class="snippet"><code class="js">document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Only child clicked");
});</code></pre>
                                <p>Now, clicking the button won’t trigger the parent’s listener.</p>
                                <h2>Event Capturing (Trickier)</h2>
                                <p>Capturing is the opposite of bubbling: the event goes top → bottom in the DOM before hitting the target.</p>
                                <p>Enable capturing with the 3rd parameter of <strong>addEventListener()</strong>:</p>
                                <pre class="snippet"><code class="js">element.addEventListener("click", handler, true);</code></pre>
                                <pre class="snippet"><code class="js">document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Capturing");
}, true);
                                  
document.getElementById("child").addEventListener("click", () => {
  console.log("Child Bubble");
});</code></pre>
                                <p>Capturing runs first (<strong>if enabled</strong>), then bubbling.</p>
                                <h2><strong>event.target</strong> vs <strong>event.currentTarget</strong></h2>
                                <ul>
                                    <li><code>event.target</code>: The <strong>actual element</strong> that triggered the event</li>
                                    <li><code>event.currentTarget</code>: The <strong>element the handler</strong> is attached to</li>
                                </ul>
                                <pre class="snippet"><code class="js">document.getElementById("parent").addEventListener("click", function (e) {
  console.log("Target:", e.target); // What was clicked
  console.log("Current Target:", e.currentTarget); // #parent
});</code></pre>
                                <h2>Event Delegation (Very Useful)</h2>
                                <p>Instead of adding event listeners to multiple child elements, add one listener to their parent and check which child triggered it using <code>event.target</code>.</p>
                                <p>Great for dynamic content like to-do lists or comment sections.</p>
                                <h2>Example: Click on dynamic list items</h2>
                                <pre class="snippet"><code class="html">&lt;ul id="myList"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                <pre class="snippet"><code class="js">document.getElementById("myList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    alert("You clicked " + e.target.textContent);
  }
});</code></pre>
                                <p>This works even if new <code>&lt;li&gt;</code> items are added later — no need to bind again!</p>
                                <h2>once Option (Run a Handler Only Once)</h2>
                                <pre class="snippet"><code class="js">button.addEventListener("click", function () {
  alert("You’ll see me only once!");
}, { once: true });</code></pre>
                                <h2>Combining It All: A Practical Example</h2>
                                <pre class="snippet"><code class="html">&lt;ul id="tasks"&gt;
  &lt;li&gt;Task 1 &lt;button&gt;Delete&lt;/button&gt;&lt;/li&gt;
  &lt;li&gt;Task 2 &lt;button&gt;Delete&lt;/button&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
                                <pre class="snippet"><code class="js">document.getElementById("tasks").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove(); // Remove &lt;li&gt;
  }
});</code></pre>
                                <p>This is cleaner and more efficient than assigning listeners to every button individually.</p>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Demonstrate event bubbling with nested elements.</li>
                                    <li>Prevent bubbling with <code>stopPropagation</code>.</li>
                                    <li>Use event delegation on a list where clicking an item changes its color.</li>
                                    <li>Create a "run once" button using <code>{ once: true }</code>.</li>
                                    <li>Log <code>target</code> and <code>currentTarget</code> and observe the difference.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-dom" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-error-handling" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


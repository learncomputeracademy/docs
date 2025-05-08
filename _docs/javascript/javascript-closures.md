---
layout: documentation
title: JavaScript Closures | Learn Computer Academy
permalink: javascript/javascript-closures/
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
                                <h1>JavaScript Closures</h1>
                                <p><em>(Functions remembering their outer scope — even after the outer function has finished)</em></p>
                                <hr>
                                <h2>What is a Closure?</h2>
                                <p>A <strong>closure</strong> is formed when a <strong>function "remembers" the variables from its outer (lexical) scope</strong>, even after the outer function has returned.</p>
                                <h2>Basic Concept</h2>
                                <pre class="snippet"><code class="js">function outer() {
  let name = "Alice";
                                
  function inner() {
    console.log("Hello, " + name); // name comes from outer()
  }
                                
  return inner;
}
                                
const greet = outer(); // outer() returns inner
greet(); // "Hello, Alice"</code></pre>
                                <p>Even though <code>outer()</code> has finished executing, <code>inner()</code> still remembers <code>name</code> because of closure.</p>
                                <h2>Why Closures Are Useful</h2>
                                <p>Closures are used in:</p>
                                <ul>
                                  <li>Data privacy (encapsulation)</li>
                                  <li>Function factories (customized functions)</li>
                                  <li>Maintaining state in async operations</li>
                                  <li>React hooks like <code>useState</code>, <code>useEffect</code></li>
                                </ul>
                                <h2>Closure for Data Privacy</h2>
                                <pre class="snippet"><code class="js">function secretHolder() {
  let secret = "1234";
                                
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}
                                
const vault = secretHolder();
console.log(vault.getSecret()); // "1234"
vault.setSecret("5678");
console.log(vault.getSecret()); // "5678"</code></pre>  
                                  <p><code>secret</code> can't be accessed directly — only through the returned methods.</p> 
                                  <h2>Closure in Loop Problem (var vs let)</h2>                          
                                  <pre class="snippet"><code class="js">for (var i = 0; i &lt; 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3 (Not 0 1 2!)</code></pre>
                                  <p>Fix with <code>let</code>:</p>
                                  <pre class="snippet"><code class="js">for (let i = 0; i &lt; 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2 ✅</code></pre>
                                  <p>Explanation: <code>let</code> creates a new block scope per iteration, so each <code>i</code> is preserved properly due to closure.</p>
                                  <h2>Function Factory (Function that creates other functions)</h2>
                                  <pre class="snippet"><code class="js">function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
                                  
const double = makeMultiplier(2);
console.log(double(5)); // 10
                                  
const triple = makeMultiplier(3);
console.log(triple(5)); // 15</code></pre>
                                    <p>Each returned function "remembers" its own value of <code>x</code>.</p>
                                    <h2>Summary</h2>
                                    <ul>
                                      <li>A <code>closure</code> gives you access to an outer function’s variables from an inner function.</li>
                                      <li>Closures <code>preserve state</code> across calls and <code>enable private</code> variables.</li>
                                      <li>Common in JavaScript features like event handlers, timeouts, and module patterns.</li>
                                    </ul>
                                <h2>🧪 Practice Exercise:</h2>
                                <h3>Task:</h3>
                                <ol>
                                    <li>Create a <code>counter()</code> function that returns a function that increments and logs the count.</li>
                                    <li>Build a <code>greeting(name)</code> function that returns another function saying "Hello, name".</li>
                                    <li>Use closure to protect a secret password (get/set it only through methods).</li>
                                    <li>Write a function that returns a multiplier function using closure.</li>
                                    <li>Explain in comments why a closure retains access to outer variables.</li>
                                </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-scope-hoisting" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


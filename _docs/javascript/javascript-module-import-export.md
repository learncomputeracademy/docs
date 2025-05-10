---
layout: documentation
title: JavaScript Modules and Import/Export in Depth | Learn Computer Academy
permalink: javascript/javascript-module-import-export/
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
                                <h1>JavaScript Modules and Import/Export in Depth</h1>
                                <p><em>(Organize code into reusable and maintainable blocks with ES Modules)</em></p>
                                <hr>
                                <h2>What Are JavaScript Modules?</h2>
                                <p>Modules allow you to split your code into multiple files, keeping your codebase clean and organized. Each file can export variables, functions, or classes, and other files can import them.</p>
                                <p>This modular approach helps in:</p>
                                <ul>
                                  <li><strong>Code Reusability</strong></li>
                                  <li><strong>Maintainability</strong></li>
                                  <li><strong>Namespace Isolation (no global scope pollution)</strong></li>
                                </ul>
                                <h2>Enabling Modules</h2>
                                <p>To use modules in the browser, add <code>type="module"</code> in your <code>&lt;script&gt;</code> tag:</p>
                                <pre class="snippet"><code class="html">&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code></pre>
                                <h2>Exporting from a Module</h2>
                                <p>You can <strong>export</strong> functions, variables, or classes from a module file.</p>
                                <h3>Named Exports</h3>
                                <pre class="snippet"><code class="js">// file: mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
</code></pre>
                                <p>You can also export after declaration:</p>
                                <pre class="snippet"><code class="js">const multiply = (a, b) => a * b;
export { multiply };</code></pre>
                                <h2>Importing Named Exports</h2>
                                <pre class="snippet"><code class="js">// file: main.js
import { add, subtract } from './mathUtils.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
</code></pre>
                                <p>You can also alias the import:</p>
                                <pre class="snippet"><code class="js">import { add as sum } from './mathUtils.js';</code></pre>
                                <h2>Default Exports</h2>
                                <p>A module can have one default export.</p>
                                <pre class="snippet"><code class="js">// file: greet.js
export default function greet(name) {
  console.log(`Hello, ${name}`);
}</code></pre>
                                <p>Importing a default export:</p>
                                <pre class="snippet"><code class="js">import greet from './greet.js';
greet('Alice'); // Hello, Alice</code></pre>
                                <h2>Mixing Named and Default Exports</h2>
                                <pre class="snippet"><code class="js">// file: utils.js
export const log = msg => console.log(msg);
export default function sayHi() {
  console.log("Hi!");
}</code></pre>
                                <pre class="snippet"><code class="js">import sayHi, { log } from './utils.js';</code></pre>
                                <h2>Export All from Another File</h2>
                                <p>You can re-export everything from another module:</p>
                                <pre class="snippet"><code class="js">// file: allUtils.js
export * from './mathUtils.js';</code></pre>
                                <h2>Importing All as an Object</h2>
                                <pre class="snippet"><code class="js">// file: main.js
import * as math from './mathUtils.js';

console.log(math.add(2, 3)); // 5
</code></pre>
                                <h2>Modules Are Strict Mode by Default</h2>
                                <p>You don't need <code>"use strict"</code> in module files — they run in strict mode automatically.</p>
                                <h2>Modules Run in Their Own Scope</h2>
                                <p>Variables in modules are <code>local</code> to that module. They don’t leak into the global scope.</p>   
                              <h2>Browser Compatibility and Notes</h2>
                              <ul>
                                <li>Modern browsers fully support modules.</li>
                                <li>When using modules locally, you must serve files using a local server (e.g., <code>Live Server</code> in VS Code or <code>http-server</code>) — otherwise, you may get CORS or loading errors.</li>
                                <li>In <strong>Node.js</strong>, use <code>.mjs</code> extension or set <code>"type": "module"</code> in <code>package.json</code> to use ES modules.</li>
                              </ul>
                              <h2>Summary</h2>
                              <ul>
                                <li>ES Modules let you organize code into small, reusable files.</li>
                                <li>Use <code>export</code> and <code>import</code> to share code across files.</li>
                                <li>Modules are scoped, strict, and avoid polluting the global namespace.</li>
                                <li>Mastering modules is essential for scalable applications and working with modern frameworks.</li>
                              </ul>
                              <h2>🧪 Practice Exercise:</h2>
                              <h3>Task:</h3>
                              <ol>
                                    <li>Create a <code>math.js</code> file and export <code>add</code>, <code>subtract</code>, <code>multiply</code>, <code>divide</code>.</li>
                                    <li>Create a <code>main.js</code> file that imports and uses all those functions.</li>
                                    <li>Use default export for a <code>greet()</code> function in a separate module.</li>
                                    <li>Use <code>import *</code> as syntax to bring all exports into one object.</li>
                                    <li>Try mixing named and default exports in a utilities file.</li>
                              </ol>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/javascript/javascript-es6-and-modern-features" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-tooling" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                    </div>
                </div>


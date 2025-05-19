---
layout: documentation
title: React Introduction | Learn Computer Academy
permalink: react/react-introduction/
---
<div class="loader">
  {% include innerpage-navigation.html %}
  {% include sidebar-syllabus.html %}
            <div class="page-content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-9 content">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Front-end Development</a></li>
                                    <li class="breadcrumb-item active">React JS</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h2>Introduction to React vs. Vanilla JS</h2>
                                <p>Welcome to the world of React! If you're new to web development or just starting with React, you're in the right place. In this guide, we’ll take a look at what React is, why it’s important, and the interesting story behind its creation. Let's begin!</p>
                                <p>React is a <strong>JavaScript library</strong> for building <strong>user interfaces</strong>. It was created by <strong>Facebook (now Meta)</strong> to help developers build fast and interactive web applications. With React, you can create web pages that <strong>update automatically</strong> when data changes, without needing to reload the page manually.</p>

                                <h2>Why is React Important?</h2>
                                <p>Before React, developers had to write a lot of code to manage updates on a webpage. Every time something changed (like a new message or a new comment), the entire page had to reload or update manually. This was slow and inefficient.</p>
                                <p>React makes web development <strong>faster</strong>, <strong>simpler</strong>, and <strong>more efficient</strong> by:</p>
                                <ul>
                                    <li><strong>Reusing Components</strong>: You can build reusable UI pieces and combine them to make complex applications.</li>
                                    <li><strong>Efficient Updates</strong>: React updates only the parts of the page that need to change, rather than reloading everything.</li>
                                    <li><strong>Better Performance</strong>: React uses a "Virtual DOM," which makes updates faster and smoother for users.</li>
                                    <li><strong>Easy to Learn</strong>: Because it focuses purely on the UI, you can quickly understand and use React.</li>
                                </ul>
                                <h2>The History of React: Why Was It Created?</h2>
                                <p>React was created at <strong>Facebook</strong> to fix a frustrating issue," where notifications showed unread messages that didn’t exist. The problem arose because messages were displayed in multiple places but didn’t stay in sync. To solve this, <strong>Facebook engineers</strong> built React, which updates the UI efficiently using the <strong>Virtual DOM</strong>. This improved performance and fixed inconsistencies, leading to <strong>React’s</strong> public release in 2013. Today, it’s one of the most popular web development tools.</p>
                                <h3>Why Should You Learn React?</h3>
                                <p>Today, <strong>big companies like Instagram, WhatsApp, Airbnb, Uber, Netflix, and many more</strong> use React to build web applications. Learning React can open up <strong>great career opportunities</strong>, whether you're building your own project or looking for a job in tech.</p>
                                <p>Now you understand what React is and why it was created, it's time to dive in! Step by step, we’ll learn how React works while also building some exciting projects along the way.</p>
                                <hr>
                                <h2>Again, What is React?</h2>
                                <p>React is a <strong>JavaScript library</strong> developed by Facebook for building <strong>user interfaces (UIs)</strong>, especially for single-page applications (SPAs). It makes it easier to build dynamic web apps by breaking the UI into reusable components.</p>
                                <h2>What is Vanilla JavaScript?</h2>
                                <p>Vanilla JavaScript refers to using plain, native JavaScript without any libraries or frameworks. It’s powerful but can get verbose and harder to manage as your app grows in complexity.</p>
                                <h2>Why Use React Instead of Vanilla JS?</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Feature</th>
                                            <th scope="col">Vanilla JS</th>
                                            <th scope="col">React</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>DOM Manipulation</td>
                                            <td>Manual and verbose</td>
                                            <td>Abstracted via virtual DOM</td>
                                        </tr>
                                        <tr>
                                            <td>UI Reusability</td>
                                            <td>Custom functions & HTML templates</td>
                                            <td>Component-based</td>
                                        </tr>   
                                        <tr>
                                            <td>State Management</td>
                                            <td>Manual state tracking</td>
                                            <td>Built-in state with hooks (<code>useState</code>)</td>
                                        </tr>  
                                        <tr>
                                            <td>Performance Optimization</td>
                                            <td>Manual tuning</td>
                                            <td>Virtual DOM diffing</td>
                                        </tr>                                         
                                        <tr>
                                            <td>Learning Curve</td>
                                            <td>Lower (initially)</td>
                                            <td>Slightly higher, but scales better</td>
                                        </tr>                                         
                                    </tbody>
                                </table> 
                                <h2>💡 Real-World Analogy</h2>
                                <p class="note"><strong>Vanilla JS</strong> is like building a car from scratch using metal, bolts, and an engine.</p>
                                <p class="note"><strong>React</strong> is like assembling a car using high-quality prebuilt components (engine block, seats, dashboard) with flexible customization.</p>
                                <h2>Example: Creating a Button that Shows an Alert</h2>
                                <h3>1. Vanilla JS Approach</h3>
                                <pre class="snippet"><code class="html">&lt;!-- index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Vanilla JS Button&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;&lt;/div&gt;

    &lt;script&gt;
        const app = document.getElementById('app');

        const button = document.createElement('button');
        button.textContent = 'Click Me';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';

        button.addEventListener('click', () => {
            alert('Hello from Vanilla JS!');
        });

        app.appendChild(button);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
                                <h2> Breakdown:</h2>
                                <ul>
                                    <li>Manually create a button element.</li>
                                    <li>Add styles via JavaScript.</li>
                                    <li>Attach event listeners.</li>
                                    <li>Append to the DOM.</li>
                                </ul>
                                <h2>2. React JS Approach (with CDN)</h2>
                                <pre class="snippet"><code class="html">&lt;!-- react.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;React Button&lt;/title&gt;
    &lt;script src="https://unpkg.com/react@18/umd/react.development.js" crossorigi&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/@babel/standalone/babel.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;

    &lt;script type="text/babel"&gt;
    function App() {
        const handleClick = () => {
        alert('Hello from React!');
        };

        return (
        &lt;button
            onClick=&lcub;handleClick&rcub;
            style=&lcub;&lcub; padding: '10px 20px', fontSize: '16px' &rcub;&rcub;
        &gt;
            Click Me
        &lt;/button&gt;
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(&lt;App /&gt;);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>                                
                                <h2> Breakdown:</h2>
                                <ul>
                                    <li>Define a component as a function.</li>
                                    <li>Use JSX to describe the UI.</li>
                                    <li><code>onClick</code> is syntactic sugar around event listeners.</li>
                                    <li>Styles can be applied via objects.</li>
                                </ul>  
                                <h2>Summary</h2>    
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Feature</th>
                                            <th scope="col">Vanilla JS</th>
                                            <th scope="col">React</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>DOM Access</td>
                                            <td><code>document.getElementById</code></td>
                                            <td>Not needed; declarative rendering</td>
                                        </tr>
                                        <tr>
                                            <td>Event Binding</td>
                                            <td><code>addEventListener</code></td>
                                            <td><code>onClick</code>, <code>onChange</code> via props</td>
                                        </tr>
                                        <tr>
                                            <td>UI Definition</td>
                                            <td>HTML + JS DOM Manipulation</td>
                                            <td>JSX + Component function</td>
                                        </tr>
                                        <tr>
                                            <td>Readability</td>
                                            <td>Lower for large apps</td>
                                            <td>High (especially with reuse)</td>
                                        </tr>                                                                                
                                    </tbody>
                                </table>  
                                <h2>What’s Next?</h2>   
                                <p>In <strong>Chapter 2</strong>, we’ll:</p>   
                                <ul>
                                    <li>Set up a basic project with both Vanilla JS and React.</li>
                                    <li>Explore file structure and rendering basics.</li>
                                </ul>    
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-syllabus" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/javascript/javascript-intro" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button --> 
                        </div>
                    </div>
                </div>                                
                                    
                        
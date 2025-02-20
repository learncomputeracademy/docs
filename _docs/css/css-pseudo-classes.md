---
layout: documentation
title: CSS Pseudo Class | Learn Computer Academy
permalink: css/css-pseudo-classes/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-general.html %}
            <div class="page-content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-9 content">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Tutorial</a></li>
                                    <li class="breadcrumb-item"><a href="#">CSS</a></li>
                                    <li class="breadcrumb-item active">Pseudo Classes</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Pseudo-classes</h1>
                                <hr>
                                <h2>What are Pseudo-classes?</h2>
                                <p>A pseudo-class is used to define a special state of an element.</p>
                                <p>For example, it can be used to:</p>
                                <ul>
                                    <li>Style an element when a user mouses over it</li>
                                    <li>Style visited and unvisited links differently</li>
                                    <li>Style an element when it gets focus</li>
                                </ul>
                                <hr>
                                <h2>Syntax</h2>
                                <p>The syntax of pseudo-classes:</p>
                                <pre class="snippet"><code class="css">selector:pseudo-class {
  property:value;
}</code></pre>
                                <hr>
                                <h2>Anchor Pseudo-classes</h2>
                                <p>Links can be displayed in different ways:</p>
                                <pre class="snippet"><code class="css">/* unvisited link */
a:link {
  color: #FF0000;
}
/* visited link */
a:visited {
  color: #00FF00;
}
/* mouse over link */
a:hover {
  color: #FF00FF;
}
/* selected link */
a:active {
  color: #0000FF;
}</code></pre>
                                <p class="note"><b>Note:</b> <code>a:hover</code> MUST come after <code>a:link</code> and <code>a:visited</code> in the CSS definition in order to be effective! <code>a:active</code> MUST come after <code>a:hover</code> in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.</p>
                                <hr>
                                <h2>Pseudo-classes and CSS Classes</h2>
                                <p>Pseudo-classes can be combined with CSS classes:</p>
                                <p>When you hover over the link in the example, it will change color:</p>
                                <pre class="snippet"><code class="css">a.highlight:hover {
  color: #ff0000;
}</code></pre>
                                <hr>
                                <h2>Hover on &lt;div&gt;</h2>
                                <p>An example of using the <code>:hover</code> pseudo-class on a &lt;div&gt; element:</p>
                                <pre class="snippet"><code class="css">div:hover {
  background-color: blue;
}</code></pre>
                                <hr>
                                <h2>Simple Tooltip Hover</h2>
                                <p>Hover over a &lt;div&gt; element to show a &lt;p&gt; element (like a tooltip):</p>
                                <style>
                                    .tooltip-container span{ color: red; display: inline-block; }
                                    .tooltip-container p{ opacity: 0; background: yellow; color: red; transition: all .3s ease; }
                                    .tooltip-container:hover p{ opacity: 1; }
                                </style>
                                <div class="tooltip-container"><span>Hover over me to show the &lt;p&gt; element.</span>
                                  <p class="p-4">Tada! Here I am!</p>
                                </div>
                                <pre class="snippet"><code class="css">p {
  display: none;
  background-color: yellow;
  padding: 20px;
}
div:hover p {
  display: block;
}</code></pre>
                                <hr>
                                <h2>CSS - The :first-child Pseudo-class</h2>
                                <p>The <code>:first-child</code> pseudo-class matches a specified element that is the first child of another element.</p>
                                <h2>Match the first &lt;p&gt; element</h2>
                                <p>In the following example, the selector matches any &lt;p&gt; element that is the first child of any element:</p>
                                <pre class="snippet"><code class="css">p:first-child {
  color: blue;
}</code></pre>
                                <hr>
                                <h2>Match the first &lt;i&gt; element in all &lt;p&gt; elements</h2>
                                <p>In the following example, the selector matches the first &lt;i&gt; element in all &lt;p&gt; elements:</p>
                                <pre class="snippet"><code class="css">p i:first-child {
  color: blue;
}</code></pre>
                                <hr>
                                <h2>Match all &lt;i&gt; elements in all first child &lt;p&gt; elements</h2>
                                <p>In the following example, the selector matches all &lt;i&gt; elements in &lt;p&gt; elements that are the first child of another element:</p>
                                <pre class="snippet"><code class="css">p:first-child i {
  color: blue;
}</code></pre>
                                <hr>
                                <h2>CSS - The :lang Pseudo-class</h2>
                                <p>The <code class="w3-codespan">:lang</code> pseudo-class allows you to define special rules for different languages.</p>
                                <p>In the example below, <code class="w3-codespan">:lang</code> defines the quotation marks for &lt;q&gt; elements with lang=&quot;no&quot;:</p>
                                <pre class="snippet"><code class="html">&lt;html>
    &lt;head>
        &lt;style>
            q:lang(no) {
              quotes: "~" "~";
            }
        &lt;/style>
    &lt;/head>

    &lt;body>

        &lt;p>Some text &lt;q lang="no">A quote in a paragraph&lt;/q> Some text.&lt;/p>
    &lt;/body>
&lt;/html></code></pre>
                                <hr>
                                <h2>All CSS Pseudo Classes</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Selector</th>
                                            <th scope="col">Example</th>
                                            <th scope="col">Example description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">:active</th>
                                            <td>a:active</td>
                                            <td>Selects the active link</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:checked</th>
                                            <td>input:checked</td>
                                            <td>Selects every checked &lt;input> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:disabled</th>
                                            <td>input:disabled</td>
                                            <td>Selects every disabled &lt;input> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:empty</th>
                                            <td>p:empty</td>
                                            <td>Selects every &lt;p> element that has no children</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:enabled</th>
                                            <td>input:enabled</td>
                                            <td>Selects every enabled &lt;input> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:first-child</th>
                                            <td>p:first-child</td>
                                            <td>Selects every &lt;p> elements that is the first child of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:first-of-type</th>
                                            <td>p:first-of-type</td>
                                            <td>Selects every &lt;p> element that is the first &lt;p> element of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:focus</th>
                                            <td>input:focus</td>
                                            <td>Selects the &lt;input> element that has focus</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:hover</th>
                                            <td>a:hover</td>
                                            <td>Selects links on mouse over</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:in-range</th>
                                            <td>input:in-range</td>
                                            <td>Selects &lt;input> elements with a value within a specified range</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:invalid</th>
                                            <td>input:invalid</td>
                                            <td>Selects all &lt;input> elements with an invalid value</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:lang(language)</th>
                                            <td>p:lang(it)</td>
                                            <td>Selects every &lt;p> element with a lang attribute value starting with "it"</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:last-child</th>
                                            <td>p:last-child</td>
                                            <td>Selects every &lt;p> elements that is the last child of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:last-of-type</th>
                                            <td>p:last-of-type</td>
                                            <td>Selects every &lt;p> element that is the last &lt;p> element of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:link</th>
                                            <td>a:link</td>
                                            <td>Selects all unvisited links</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:not(selector)</th>
                                            <td>:not(p)</td>
                                            <td>Selects every element that is not a &lt;p> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:nth-child(n)</th>
                                            <td>p:nth-child(2)</td>
                                            <td>Selects every &lt;p> element that is the second child of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:nth-last-child(n)</th>
                                            <td>p:nth-last-child(2)</td>
                                            <td>Selects every &lt;p> element that is the second child of its parent, counting from the last child</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:nth-last-of-type(n)</th>
                                            <td>p:nth-last-of-type(2)</td>
                                            <td>Selects every &lt;p> element that is the second &lt;p> element of its parent, counting from the last child</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:nth-of-type(n)</th>
                                            <td>p:nth-of-type(2)</td>
                                            <td>Selects every &lt;p> element that is the second &lt;p> element of its parent, counting from the last child</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:only-of-type</th>
                                            <td>p:only-of-type</td>
                                            <td>Selects every &lt;p> element that is the second &lt;p> element of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:only-child</th>
                                            <td>p:only-child</td>
                                            <td>Selects every &lt;p> element that is the only &lt;p> element of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:optional</th>
                                            <td>input:optional</td>
                                            <td>Selects every &lt;p> element that is the only child of its parent</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:out-of-range</th>
                                            <td>input:out-of-range</td>
                                            <td>Selects &lt;input> elements with no "required" attribute</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:read-only</th>
                                            <td>input:read-only</td>
                                            <td>Selects &lt;input> elements with a "readonly" attribute specified</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:read-write</th>
                                            <td>input:read-write</td>
                                            <td>Selects &lt;input> elements with no "readonly" attribute</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:required</th>
                                            <td>input:required</td>
                                            <td>Selects &lt;input> elements with a "required" attribute specified</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:root</th>
                                            <td>root</td>
                                            <td>Selects the document's root element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:target</th>
                                            <td>#news:target</td>
                                            <td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:valid</th>
                                            <td>input:valid</td>
                                            <td>Selects all &lt;input> elements with a valid value</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">:visited</th>
                                            <td>a:visited</td>
                                            <td>Selects all visited links</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-combinators" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-pseudo-elements" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


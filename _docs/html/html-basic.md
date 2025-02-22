---
layout: documentation
title: HTML Basic | Learn Computer Academy
permalink: html/html-basic/
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
                                <h1>HTML Basic Examples</h1>
                                <hr>
                                <h2>HTML Documents</h2>
                                <p>All HTML documents must start with a document type declaration: <code>&lt;!DOCTYPE html></code> .</p>
                                <p>The HTML document itself begins with <code>&lt;html></code> and ends with <code>&lt;/html></code> .</p>
                                <p>The visible part of the HTML document is between <code>&lt;body></code> and <code>&lt;/body></code> .</p>
                                <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>
&lt;head>
&lt;title>Page Title&lt;/title>
&lt;/head>
&lt;body>
&lt;h1>My First Heading&lt;/h1>
&lt;p>My first paragraph.&lt;/p>
&lt;/body>
&lt;/html>
</code></pre>
<hr>      
                            <h2>HTML Headings</h2>
                            <p>HTML headings are defined with the <code>&lt;h1></code> to <code>&lt;h6></code> tags.</p>
                            <p><code>&lt;h1></code> defines the most important heading. <code>&lt;h6></code> defines the least important heading: </p>
                            <pre class="snippet"><code class="html">&lt;h1>My First Heading&lt;/h1>
&lt;h2>My First Heading&lt;/h2>
&lt;h3>My First Heading&lt;/h3>
&lt;h4>My First Heading&lt;/h4>
&lt;h5>My First Heading&lt;/h5>
&lt;h6>My First Heading&lt;/h6>
</code></pre>
<hr>
                        <h2>HTML Paragraphs</h2>
                        <p>HTML paragraphs are defined with the <code>&lt;p></code> tag:</p>
                        <pre class="snippet"><code class="html">&lt;p>This is paragraph.&lt;/p>
&lt;p>This is another paragraph.&lt;/p>
</code></pre>
<hr>
                        <h2>HTML Links</h2>
                        <p>HTML links are defined with the <code>&lt;a></code> tag:</p>
                        <pre class="snippet"><code class="html">&lt;a href="https://www.learncomputer.in">This is a link.&lt;/a></code></pre>
                        <p>The link's destination is specified in the <code>href</code> attribute.</p> 
                        <p>Attributes are used to provide additional information about HTML elements.</p>

<hr>
                        <h2>HTML Images</h2>
                        <p>HTML images are defined with the <code>&lt;img></code> tag.</p>
                        <p>The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code>, and <code>height</code> are provided as attributes:</p>
                        <pre class="snippet"><code class="html">&lt;img src="img_girl.jpg" alt="W3Schools.com" width="104" height="142"></code></pre>
                        <p>The width and height are is specified in pixels by default; so width="500" means 500 pixels wide.</p>

<hr>
                        <h2>HTML Buttons</h2>
                        <p>HTML buttons are defined with the <code>&lt;button></code> tag:</p>
                        <pre class="snippet"><code class="html">&lt;button>Click me&lt;/button></code></pre>
<hr>
                        <h2>HTML Lists</h2>
                        <p>HTML lists are defined with the <code>&lt;ul></code> (unordered/bullet list) or the <code>&lt;ol></code> (ordered/numbered list) tag, followed by <code>&lt;li></code> tags (list items):</p>
                        <pre class="snippet"><code class="html">&lt;ul>          
    &lt;li>Coffee&lt;/li>
    &lt;li>Tea&lt;/li>
    &lt;li>Milk&lt;/li>
&lt;/ul>

&lt;ol>
    &lt;li>Coffee&lt;/li>
    &lt;li>Tea&lt;/li>
    &lt;li>Milk&lt;/li>
&lt;/ol></code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-intro" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-attributes" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

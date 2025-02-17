---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-intro/
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
                                <h1>HTML Introduction</h1>
                                <hr>
                                <h2>What is HTML?</h2>
                                <p>HTML is the standard markup language for creating Web pages.</p>
                                <ul>
                                    <li>HTML stands for Hyper Text Markup Language</li>
                                    <li>HTML describes the structure of a Web page</li>
                                    <li>HTML consists of a series of elements</li>
                                    <li>HTML elements tell the browser how to display the content</li>
                                    <li>HTML elements are represented by tags</li>
                                    <li>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</li>
                                    <li>Browsers do not display the HTML tags, but use them to render the content of the page</li>
                                </ul>
                                <hr>
                                <h2>A Simple HTML Document</h2>
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
                            <h3>Example Explained</h3>
                            <ul>
                                <li>The <code>&lt;!DOCTYPE html></code> declaration defines this document to be HTML5</li>
                                <li>The <code>&lt;html></code> element is the root element of an HTML page</li>
                                <li>The <code>&lt;head></code> element contains meta information about the document</li>
                                <li>The <code>&lt;title></code> element specifies a title for the document</li>
                                <li>The <code>&lt;body></code> element contains the visible page content</li>
                                <li>The <code>&lt;h1></code> element defines a large heading</li>
                                <li>The <code>&lt;p></code> element defines a paragraph</li>
                            </ul>
                            <hr>
                            <h2>HTML Tags</h2>
                            <p>HTML tags are element names surrounded by angle brackets:</p>
                            <pre class="snippet"><code class="html">&lt;tagname>content goes here...&lt;/tagname></code></pre>
                            <ul>
                                <li>HTML tags normally come <b>in pairs</b> like <code>&lt;p></code> and <code>&lt;/p></code></li>
                                <li>The first tag in a pair is the <b>start tag</b>, the second tag is the <b>end tag</b></li>
                                <li>The end tag is written like the start tag, but with a <b>forward slash</b> inserted before the tag name</li>
                            </ul>
                            <p><b>Tip:</b> The start tag is also called the <b>opening tag</b>, and the end tag the <b>closing tag</b>.</p>  
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="photoshop-shortcut_keys" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-basic" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include './includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>




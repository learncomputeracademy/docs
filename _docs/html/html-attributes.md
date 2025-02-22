---
layout: documentation
title: HTML Attributes | Learn Computer Academy
permalink: html/html-attributes/
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
                                <h1>HTML Attributes</h1>
                                <hr>
                                <p>Attributes provide additional information about HTML elements.</p>
                                <hr>
                                <h2>HTML Attributes</h2>
                                <ul>
                                    <li>All HTML elements can have <b>attributes</b></li>
                                    <li>Attributes provide <b>additional information</b> about an element</li>
                                    <li>Attributes are always specified in <b>the start tag</b></li>
                                    <li>Attributes usually come in name/value pairs like: <b>name="value"</b></li>
                                </ul>
                                <hr>
                                <h2>The href Attribute</h2>
                                <p>HTML links are defined with the <code>&lt;a></code> tag. The link address is specified in the <code>href</code> attribute:</p>
                                <pre class="snippet"><code class="html">&lt;a href="https://www.learncomputer.in">This is a link.&lt;/a></code></pre>
                                <p>You will learn more about links and the <code>&lt;a></code> tag later in this tutorial.</p>
                                <hr>
                                <h2>The src Attribute</h2>
                                <p>HTML images are defined with the <code>&lt;img></code> tag.</p>
                                <p>The filename of the image source is specified in the <code>src</code> attribute:</p>
                                <pre class="snippet"><code class="html">&lt;img src="img_girl.png"></code></pre>
                                <hr>
                                <h2>The width and height Attributes</h2>
                                <p>HTML images also have <code>width</code> and <code>height</code> attributes, which specifies the width and height of the image:</p>
                                <pre class="snippet"><code class="html">&lt;img src="img_girl.jpg" width="500" height="600"></code></pre>
                                <p>You will learn more about attributes in a later chapter.</p>
                                <p>You will learn more about images in our <b>HTML Images chapter</b>.</p>
                                <hr>
                                <h2>The alt Attribute</h2>
                                <p>The <code>alt</code> attribute specifies an alternative text to be used, if an image cannot be displayed.</p>
                                <p>The value of the <code>alt</code> attribute can be read by screen readers. This way, someone "listening" to the webpage, e.g. a vision impaired person, can "hear" the element.</p>
                                <pre class="snippet"><code class="html">&lt;img src="img_girl.jpg" alt="Girl with a jacket"></code></pre>
                                <hr>
                                <h2>The HTML Style Attribute</h2>
                                <p>Setting the style of an HTML element, can be done with the <code>style</code> attribute.</p>
                                <p>The HTML <code>style</code> attribute has the following <b>syntax:</b></p>
                                <pre class="snippet"><code class="html">&lt;tagname style="property:value;"></code></pre>
                                <p>The <b>property</b> is a CSS property. The value is a <b>CSS</b> value.</p>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-basic" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-comments" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

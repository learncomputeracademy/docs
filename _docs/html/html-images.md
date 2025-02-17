---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-images/
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
                                <h1>HTML Images</h1>
                                <hr>
                                <p>Images can improve the design and the appearance of a web page.</p>
                                <hr>
                                <pre class="snippet"><code class="html">&lt;img src="pic_trulli.jpg" alt="Italian Trulli"></code></pre>
                                <hr>
                                <h2>HTML Images Syntax</h2>
                                <p>In HTML, images are defined with the <code>&lt;img></code> tag.</p>
                                <p>The <code>&lt;img></code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
                                <p>The <code>src</code> attribute specifies the URL (web address) of the image:</p>
                                <pre class="snippet"><code class="html">&lt;img src="url"></code></pre>
                                <hr>
                                <h2>The alt Attribute</h2>
                                <p>The <code>alt</code> attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</p>
                                <p>The value of the <code>alt</code> attribute should describe the image.</p>
                                <p>If a browser cannot find an image, it will display the value of the alt attribute.</p>
                                <pre class="snippet"><code class="html">&lt;img src="img_chania.jpg" alt="Flowers in Chania"></code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-links" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-tables" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

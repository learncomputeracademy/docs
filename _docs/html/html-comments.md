---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-comments/
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
                                <h1>HTML Comments</h1>
                                <hr>
                                <p>Comment tags are used to insert comments in the HTML source code.</p>
                                <hr>
                                <h2>HTML Comment Tags</h2>
                                <p>You can add comments to your HTML source by using the following syntax:</p>
                                <pre class="snippet"><code class="html">&lt;!-- Write your comments here --></code></pre>
                                <p>Notice that there is an exclamation point (!) in the opening tag, but not in the closing tag.</p>
                                <hr>
                                <p>With comments you can place notifications and reminders in your HTML:</p>
                                <pre class="snippet"><code class="html">&lt;!-- This is a comment -->
&lt;p>This is a paragraph.&lt;/p>
&lt;!-- Remember to add more information here -->
</code></pre>
                                <hr>
                                <p>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:</p>
                                <pre class="snippet"><code class="html">&lt;!-- Do not display this image at the moment
&lt;img border="0" src="pic_trulli.jpg" alt="Trulli">
--></code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-attributes" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-links" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

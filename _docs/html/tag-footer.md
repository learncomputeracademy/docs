---
layout: documentation
title: Footer Tag | Learn Computer Academy
permalink: html/tag-footer/
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
                                <h1>HTML &lt;footer> Tag</h1>
                                <hr>
                                <p>A footer section in a document:</p>
                                <pre class="snippet"><code class="html">&lt;footer>
  &lt;p>Posted by: Hege Refsnes&lt;/p>
  &lt;p>Contact information: &lt;a href="mailto:someone@example.com">someone@example.com&lt;/a>.&lt;/p>
&lt;/footer></code></pre>
                                <hr>
                                <h2>Definition and Usage</h2>
                                <p>The <code>&lt;footer></code> tag defines a footer for a document or section.</p>
                                <p>A <code>&lt;footer></code> element should contain information about its containing element.</p>
                                A <code>&lt;footer></code> element typically contains:</p>
                                <ul>
                                    <li>authorship information</li>
                                    <li>copyright information</li>
                                    <li>contact information</li>
                                    <li>sitemap</li>
                                    <li>back to top links</li>
                                    <li>related documents</li>
                                </ul>
                                <p>You can have several <code>&lt;footer></code> elements in one document.</p>
                                <hr>
                                <h2>Tips and Notes</h2>
                                <p><b>Tip:</b> Contact information inside a <code>&lt;footer></code> element should go inside an <code>&lt;address></code> tag.</p>
                                <hr>
                                <h2>Default CSS Settings</h2>
                                <p>Most browsers will display the <code>&lt;footer></code> element with the following default values:</p>
                                <pre class="snippet"><code class="css">footer {
  display: block;
}</code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-figure" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-header" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

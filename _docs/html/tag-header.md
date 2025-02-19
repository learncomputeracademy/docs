---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/tag-header/
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
                                <h1>HTML &lt;header> Tag</h1>
                                <hr>
                                <p>A header for an &lt;article>:</p>
                                <pre class="snippet"><code class="html">&lt;article>
  &lt;header>
    &lt;h1>Most important heading here&lt;/h1>
    &lt;h3>Less important heading here&lt;/h3>
    &lt;p>Some additional information here&lt;/p>
  &lt;/header>
  &lt;p>Lorem Ipsum dolor set amet....&lt;/p>
&lt;/article></code></pre>
                                <hr>
                                <h2>Definition and Usage</h2>
                                <p>The <code>&lt;header></code> element represents a container for introductory content or a set of navigational links.</p>
                                <p>A <code>&lt;header></code> element typically contains:</p>
                                <p>one or more heading elements (<code>&lt;h1></code> - <code>&lt;h6></code>)</p>
                                <p>logo or icon</p>
                                <p>authorship information</p>
                                <p>You can have several <code>&lt;header></code> elements in one document.</p>
                                <p><b>Note</b>: A <code>&lt;header></code> tag cannot be placed within a <code>&lt;footer></code>, <code>&lt;address></code> or another <code>&lt;header></code> element.</p>
                                <hr>
                                <h2>Default CSS Settings</h2>
                                <p>Most browsers will display the <code>&lt;header></code> element with the following default values:</p>
                                <pre class="snippet"><code class="css">header {
  display: block;
}</code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-footer" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-main" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

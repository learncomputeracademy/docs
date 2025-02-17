---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/tag-main/
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
                                <h1>HTML &lt;main> Tag</h1>
                                <hr>
                                <p>A header for an &lt;article>:</p>
                                <pre class="snippet"><code class="html">&lt;main>
  &lt;h1>Web Browsers&lt;/h1>
  &lt;p>Google Chrome, Firefox, and Internet Explorer are the most used browsers today.&lt;/p>
  &lt;article>
    &lt;h1>Google Chrome&lt;/h1>
    &lt;p>Google Chrome is a free, open-source web browser developed by Google,
    released in 2008.&lt;/p>
  &lt;/article>
  &lt;article>
    &lt;h1>Internet Explorer&lt;/h1>
    &lt;p>Internet Explorer is a free web browser from Microsoft, released in 1995.&lt;/p>
  &lt;/article>
  &lt;article>
    &lt;h1>Mozilla Firefox&lt;/h1>
    &lt;p>Firefox is a free, open-source web browser from Mozilla, released in 2004.&lt;/p>
  &lt;/article>
&lt;/main></code></pre>
                                <hr>
                                <h2>Definition and Usage</h2>
                                <p>The <code>&lt;main></code> tag specifies the main content of a document.</p>
                                <p>The content inside the <code>&lt;main></code> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.</p>
                                <p><b>Note:</b> There must not be more than one <code>&lt;main></code> element in a document. The <code>&lt;main></code> element must NOT be a descendant of an <code>&lt;article></code>, <code>&lt;aside></code>, <code>&lt;footer></code>, <code>&lt;header></code>, or <code>&lt;nav></code> element.</p>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-header" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-mark" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

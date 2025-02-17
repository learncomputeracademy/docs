---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/tag-nav/
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
                                <h1>HTML &lt;nav> Tag</h1>
                                <hr>
                                <p>A set of navigation links:</p>
                                <pre class="snippet"><code class="html">&lt;nav>
  &lt;a href="/html/">HTML&lt;/a> |
  &lt;a href="/css/">CSS&lt;/a> |
  &lt;a href="/js/">JavaScript&lt;/a> |
  &lt;a href="/jquery/">jQuery&lt;/a>
&lt;/nav></code></pre>
                                <hr>
                                <h2>Definition and Usage</h2>
                                <p>The <code>&lt;nav></code> tag defines a set of navigation links.</p>
                                <p>Notice that NOT all links of a document should be inside a <code>&lt;nav></code> element. The <code>&lt;nav></code> element is intended only for major block of navigation links.</p>
                                <p>Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.</p>
                                <hr>
                                <h2>Default CSS Settings</h2>
                                <p>Most browsers will display the &lt;nav> element with the following default values:</p>
                                <pre class="snippet"><code class="css">nav {
  display: block;
}</code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-mark" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-section" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

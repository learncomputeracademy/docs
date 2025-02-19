---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-iframes/
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
                                <h1>HTML Iframes</h1>
                                <hr>
                                <p>An iframe is used to display a web page within a web page.</p>
                                <div style="width:100%; height:310px; overflow:hidden;">
                                    <iframe src="../index.php" frameborder="0" height="310px" width="100%"></iframe>   
                                </div>
                                <hr>
                                <h2>Iframe Syntax</h2>
                                <p>An HTML iframe is defined with the <code>&lt;iframe></code> tag:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="URL">&lt;/iframe></code></pre>
                                <p>The <code>src</code> attribute specifies the URL (web address) of the inline frame page.</p>
                                <hr>
                                <h2>Iframe - Set Height and Width</h2>
                                <p>Use the <code>height</code> and <code>width</code> attributes to specify the size of the iframe.</p>
                                <p>The height and width are specified in pixels by default:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="demo_iframe.htm" height="200" width="300">&lt;/iframe></code></pre>
                                <p>The height and width can also be specified in percent:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="demo_iframe.htm" height="100%" width="100%">&lt/iframe></code></pre>
                                <p>Or you can use CSS to set the height and width of the iframe:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="demo_iframe.htm" style="height:200px;width:300px;">&lt;/iframe></code></pre>
                                <hr>
                                <h2>Iframe - Remove the Border</h2>
                                <p>By default, an iframe has a border around it.</p>
                                <p>To remove the border, add the <code>style</code> attribute and use the CSS <code>border</code> property:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="demo_iframe.htm" style="border:none;">&lt;/iframe></code></pre>
                                <p>With CSS, you can also change the size, style and color of the iframe's border:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="demo_iframe.htm" style="border:2px solid red;">&lt;/iframe></code></pre>
                                <hr>
                                <h2>Iframe - Target for a Link</h2>
                                <p>An iframe can be used as the target frame for a link.</p>
                                <p>The <code>target</code> attribute of the link must refer to the <code>name</code> attribute of the iframe:</p>
                                <pre class="snippet"><code class="html">&lt;iframe src="demo.html" name="iframe_a">&lt;/iframe>
&lt;p>&lt;a href="https://www.learncomputer.in" target="iframe_a">Learncomputer.in&lt;/a>&lt;/p></code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-id" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-filepaths" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

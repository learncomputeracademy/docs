---
layout: documentation
title: HTML Links | Learn Computer Academy
permalink: html/html-links/
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
                                <h1>HTML Links</h1>
                                <hr>
                                <p>Links are found in nearly all web pages. Links allow users to click their way from page to page.</p>
                                <hr>
                                <h2>HTML Links - Hyperlinks</h2>
                                <p>HTML links are hyperlinks.</p>
                                <p>You can click on a link and jump to another document.</p>
                                <p>When you move the mouse over a link, the mouse arrow will turn into a little hand.</p>
                                <p class="note"><b>Note: </b>A link does not have to be text. It can be an image or any other HTML element.</p>
                                <hr>
                                <h2>HTML Links - Syntax</h2>
                                <p>Hyperlinks are defined with the HTML <code>&lt;a></code> tag:</p>
                                <pre class="snippet"><code class="html">&lt;a href="https://www.learncomputer.in">Visit our HTML tutorial&lt;/a></code></pre>
                                <hr>
                                <p>The <code>href</code> attribute specifies the destination address (<code>https://www.learncomputer.in/</code>) of the link.</p>
                                <p>The <b>link text</b> is the visible part (Visit our HTML tutorial).</p>
                                <p>Clicking on the link text will send you to the specified address.</p>
                                <p class="note"><b>Note:</b> Without a forward slash at the end of subfolder addresses, you might generate two requests to the server. Many servers will automatically add a forward slash to the end of the address, and then create a new request.</p>
                                <hr>
                                <h2>Local Links</h2>
                                <p>The example above used an absolute URL (a full web address).</p>
                                <p>A local link (link to the same web site) is specified with a relative URL (without https://www....).</p>
                                <pre class="snippet"><code class="html">&lt;a href="images.html">HTML Images&lt;/a></code></pre>
                                <hr>
                                <h2>HTML Link Colors</h2>
                                <p>By default, a link will appear like this (in all browsers):</p>
                                <ul>
                                    <li>An unvisited link is underlined and blue</li>
                                    <li>A visited link is underlined and purple</li>
                                    <li>An active link is underlined and red</li>
                                </ul>
                                <hr>
                                <h2>HTML Links - The target Attribute</h2>
                                <p>The <code>target</code> attribute specifies where to open the linked document.</p>
                                <p>The <code>target</code> attribute can have one of the following values:</p>
                                <ul>
                                    <li><code>_blank</code> - Opens the linked document in a new window or tab</li>
                                    <li><code>_self</code> - Opens the linked document in the same window/tab as it was clicked (this is default)</li>
                                    <li><code>_parent</code> - Opens the linked document in the parent frame</li>
                                    <li><code>_top</code> - Opens the linked document in the full body of the window</li>
                                    <li>framename - Opens the linked document in a named frame</li>
                                </ul>
                                <p>This example will open the linked document in a new browser window/tab:</p>
                                <pre class="snippet"><code class="html">&lt;a href="https://www.learncomputer.in/" target="_blank">Visit Learn Computer Academy!&lt;/a></code></pre>
                                <p><b>Tip:</b> If your webpage is locked in a frame, you can use target="_top" to break out of the frame:</p>
                                <pre class="snippet"><code class="html">&lt;a href="https://www.learncomputer.in/" target="_top">HTML5 tutorial!&lt;/a></code></pre>
                                <hr>
                                <h2>HTML Links - Image as Link</h2>
                                <p>It is common to use images as links:</p>
                                <pre class="snippet"><code class="html">&lt;a href="default.asp">
    &lt;img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
&lt;/a></code></pre>
                                <hr>
                                <h2>Link Titles</h2>
                                <p>The <code>title</code> attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.</p>
                                <pre class="snippet"><code class="html">&lt;a href="https://www.learncomputer.in/" title="Go to Learn Computer HTML section">Visit our HTML Tutorial&lt;/a></code></pre>
                            </div>
                            <!-- /.Your content goes end here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-comments" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-images" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

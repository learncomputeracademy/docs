---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-lists/
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
                                <h1>HTML Lists</h1>
                                <hr>
                                <h2>Unordered HTML List</h2>
                                <p>An unordered list starts with the <code>&lt;ul></code> tag. Each list item starts with the <code>&lt;li></code> tag.</p>
                                <p>The list items will be marked with bullets (small black circles) by default:</p>
                                <pre class="snippet"><code class="html">&lt;ul>
    &lt;li>Coffee&lt;/li>
    &lt;li>Tea&lt;/li>
    &lt;li>Milk&lt;/li>
&lt;/ul></code></pre>
                                <hr>
                                <h2>Unordered HTML List - Choose List Item Marker</h2>
                                <p>The CSS <code>list-style-type</code> property is used to define the style of the list item marker:</p>
                                <table class="table table-striped">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Value</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">disc</th>
                                            <td>Sets the list item marker to a bullet (default)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">circle</th>
                                            <td>Sets the list item marker to a circle</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">square</th>
                                            <td>Sets the list item marker to a square</td>
                                        </tr>
                                            <tr>
                                            <th scope="row">none</th>
                                            <td>The list items will not be marked</td>
                                        </tr>   
                                    </tbody>
                                </table> 
                                <hr>   
                                <pre class="snippet"><code class="html">&lt;ul style="list-style-type:disc;">
    &lt;li>Coffee&lt;/li>
    &lt;li>Tea&lt;/li>
    &lt;li>Milk&lt;/li>
&lt;/ul></code></pre>
                            <hr>
                            <h2>Ordered HTML List</h2>
                            <p>An ordered list starts with the <code>&lt;ol></code> tag. Each list item starts with the <code>&lt;li></code> tag.</p>
                            <p>The list items will be marked with numbers by default:</p>
                            <pre class="snippet"><code class="html">&lt;ol>
    &lt;li>Coffee&lt;/li>
    &lt;li>Tea&lt;/li>
    &lt;li>Milk&lt;/li>
&lt;/ol></code></pre>
                            <hr>
                            <h2>Ordered HTML List - The Type Attribute</h2>
                            <p>The type attribute of the <code>&lt;ol></code> tag, defines the type of the list item marker:</p>
                            <table class="table table-striped">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">type="1"</th>
                                            <td>The list items will be numbered with numbers (default)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">type="A"</th>
                                            <td>The list items will be numbered with uppercase letters</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">type="a"</th>
                                            <td>The list items will be numbered with lowercase letters</td>
                                        </tr>
                                            <tr>
                                            <th scope="row">type="I"</th>
                                            <td>The list items will be numbered with uppercase roman numbers</td>
                                        </tr> 
                                        </tr>
                                            <tr>
                                            <th scope="row">type="i"</th>
                                            <td>The list items will be numbered with lowercase roman numbers</td>
                                        </tr> 
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="html">&lt;ol type="1">
    &lt;li>Coffee&lt;/li>
    &lt;li>Tea&lt;/li>
    &lt;li>Milk&lt;/li>
&lt;/ol></code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-tables" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-blocks" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

---
layout: documentation
title: HTML Filepaths | Learn Computer Academy
permalink: html/html-filepaths/
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
                                <h1>HTML File Paths</h1>
                                <hr>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Path</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">&lt;img src="picture.jpg"></th>
                                            <td>picture.jpg is located in the same folder as the current page</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;img src="images/picture.jpg"></th>
                                            <td>picture.jpg is located in the images folder in the current folder</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">&lt;img src="/images/picture.jpg"></th>
                                            <td>picture.jpg is located in the images folder at the root of the current web</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;img src="../picture.jpg"></th>
                                            <td>picture.jpg is located in the folder one level up from the current folder</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr>
                                <h2>HTML File Paths</h2> 
                                <p>A file path describes the location of a file in a web site's folder structure.</p>
                                <p>File paths are used when linking to external files like:</p>
                                <ul>
                                    <li>Web pages</li>
                                    <li>Images</li>
                                    <li>Style sheets</li>
                                    <li>JavaScripts </li>
                                </ul>
                                <hr>
                                <h2>Absolute File Paths</h2>
                                <p>An absolute file path is the full URL to an internet file:</p>
                                <pre class="snippet"><code class="html">&lt;img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain"></code></pre>
                                <hr>
                                <h2>Relative File Paths</h2>
                                <p>A relative file path points to a file relative to the current page.</p>
                                <p>In this example, the file path points to a file in the images folder located at the root of the current web:</p>
                                <pre class="snippet"><code class="html">&lt;img src="/images/picture.jpg" alt="Mountain"></code></pre>
                                <p>In this example, the file path points to a file in the images folder located in the current folder:</p>
                                <pre class="snippet"><code class="html">&lt;img src="images/picture.jpg" alt="Mountain"></code></pre>
                                <p>In this example, the file path points to a file in the images folder located in the folder one level above the current folder:</p>
                                <pre class="snippet"><code class="html">&lt;img src="../images/picture.jpg" alt="Mountain"></code></pre>
                                <hr>
                                <h2>Best Practice</h2>
                                <p>It is best practice to use relative file paths (if possible).</p>
                                <p>When using relative file paths, your web pages will not be bound to your current base URL. All links will work on your own computer (localhost) as well as on your current public domain and your future public domains.</p> 
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-iframes" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-head" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

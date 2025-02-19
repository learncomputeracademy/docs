---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-inline-block/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-general.html %}
            <div class="page-content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-9 content">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Tutorial</a></li>
                                    <li class="breadcrumb-item"><a href="#">CSS</a></li>
                                    <li class="breadcrumb-item active">Inline</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - display: inline-block</h1>
                                <hr>
                                <h2>The display: inline-block Value</h2>
                                <p>Compared to <code>display: inline</code>, the major difference is that <code>display: inline-block</code> allows to set a width and height on the element.</p>
                                <p>Also, with <code>display: inline-block</code>, the top and bottom margins/paddings are respected, but with <code>display: inline</code> they are not.</p>
                                <p>Compared to <code>display: block</code>, the major difference is that <code>display: inline-block</code> does not add a line-break after the element, so the element can sit next to other elements.</p>
                                <p>The following example shows the different behavior of <code>display: inline</code>, <code>display: inline-block</code> 
                                and <code>display: block</code>:</p>
                                <pre class="snippet"><code class="css">span.a {
  display: inline; /* the default for span */
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue; 
  background-color: yellow; 
}
span.b {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue; 
  background-color: yellow; 
}
span.c {
  display: block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue; 
  background-color: yellow; 
}</code></pre>
                            <hr>
                            <h2>Using inline-block to Create Navigation Links</h2>
                        <p>One common use for <code>display: inline-block</code>is to display list items horizontally instead of vertically. The following example creates horizontal navigation links:</p>
                            <pre class="snippet"><code class="css">.nav {
  background-color: yellow; 
  list-style-type: none;
  text-align: center; 
  padding: 0;
  margin: 0;
}
.nav li {
  display: inline-block;
  font-size: 20px;
  padding: 20px;
}</code></pre>
                            <style>
                                .navi {
                                  background-color: yellow; 
                                  list-style-type: none;
                                  text-align: center;
                                  margin: 0;
                                  padding: 0;
                                }
                                .navi li {
                                  display: inline-block;
                                  font-size: 20px;
                                  padding: 20px;
                                }
                                .navi li:hover {
                                    text-decoration: underline;
                                }
                            </style>
                            <h1>Horizontal Navigation Links</h1>
                            <p>By default, list items are displayed vertically. In this example we use display: inline-block to display them horizontally (side by side).</p>
                            <p>Note: If you resize the browser window, the links will automatically break when it becomes too crowded.</p>
                            <ul class="navi">
                              <li><a href="#home">Home</a></li>
                              <li><a href="#about">About Us</a></li>
                              <li><a href="#clients">Our Clients</a></li>  
                              <li><a href="#contact">Contact Us</a></li>
                            </ul>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-float" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-align" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


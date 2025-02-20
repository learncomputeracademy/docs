---
layout: documentation
title: CSS Syntax | Learn Computer Academy
permalink: css/css-syntax/
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
                                    <li class="breadcrumb-item active">Syntax</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Syntax and Selectors</h1>
                                <hr>
                                <h2>CSS Syntax</h2>
                                <p>A CSS rule-set consists of a selector and a declaration block:</p>
                                <div>
                                    <img src="assets/img/selector2.png" alt="" class="img-fluid">
                                </div>
                                <p>The selector points to the HTML element you want to style.</p>
                                <p>The declaration block contains one or more declarations separated by semicolons.</p>
                                <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
                                <p>A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.</p>
                                <p><b>In this example all &lt;p> elements will be center-aligned, with a red text color:</b></p>
                                <pre class="snippet"><code class="css">p {
  color: red;
  text-align: center;
}</code></pre>
                                <hr>
                                <h2>CSS Selectors</h2>
                                <p>CSS selectors are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more.</p>
                                <hr>
                                <h2>The element Selector</h2>
                                <p>The element selector selects elements based on the element name.</p>
                                <p><b>You can select all &lt;p> elements on a page like this (here, all &lt;p> elements will be center-aligned, with a red text color):</b></p>
                                <pre class="snippet"><code class="css">p {
  text-align: center;
  color: red;
}</code></pre>
                                <hr>
                                <h2>The id Selector</h2>
                                <p>The id selector uses the id attribute of an HTML element to select a specific element.</p>
                                <p>The id of an element should be unique within a page, so the id selector is used to select one unique element!</p>
                                <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
                                <p><b>The style rule below will be applied to the HTML element with id="para1":</b></p>
                                <pre class="snippet"><code class="css">#para1 {
  text-align: center;
  color: red;
}</code></pre>
                                <p><b>Note:</b> An id name cannot start with a number!</p>
                                <hr>
                                <h2>The class Selector</h2>
                                <p>The class selector selects elements with a specific class attribute.</p>
                                <p>To select elements with a specific class, write a period (.) character, followed by the name of the class.</p>
                                <p><b>In this example all HTML elements with class="center" will be red and center-aligned: </b></p>
                                <pre class="snippet"><code class="css">.center {
  text-align: center;
  color: red;
}</code></pre>
                                <p>You can also specify that only specific HTML elements should be affected by a class.</p>
                                <p><b>In this example only &lt;p> elements with class="center" will be center-aligned: </b></p>
                                <pre class="snippet"><code class="css">p.center {
  text-align: center;
  color: red;
}</code></pre>
                                <p>HTML elements can also refer to more than one class.</p>
                                <p><b>In this example the &lt;p> element will be styled according to class="center" and to class="large":</b></p>
                                <pre class="snippet"><code class="html">&lt;p class="center large">This paragraph refers to two classes.&lt;/p></code></pre>
                                <p><b>Note:</b> A class name cannot start with a number!</p>
                                <hr>
                                <h2>Grouping Selectors</h2>
                                <p>If you have elements with the same style definitions, like this:</p>
                                <pre class="snippet"><code class="css">h1 {
  text-align: center;
  color: red;
}
h2 {
  text-align: center;
  color: red;
}
p {
  text-align: center;
  color: red;
}</code></pre>
                                <p>It will be better to group the selectors, to minimize the code.</p>
                                <p>To group selectors, separate each selector with a comma.</p>
                                <p><b>In this example we have grouped the selectors from the code above:</b></p>
                                <pre class="snippet"><code class="css">h1, h2, p {
  text-align: center;
  color: red;
}</code></pre>
                                <hr>
                                <h2>CSS Comments</h2>
                                <p>Comments are used to explain the code, and may help when you edit the source code at a later date.</p>
                                <p>Comments are ignored by browsers.</p>
                                <p><b>A CSS comment starts with /* and ends with */. Comments can also span multiple lines: </b></p>
                                <pre class="snippet"><code class="css">p {
  color: red;
  /* This is a single-line comment */
  text-align: center;
}
/* This is
a multi-line
comment */</code></pre>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-intro" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-howto" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>



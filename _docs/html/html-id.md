---
layout: documentation
title: HTML ID | Learn Computer Academy
permalink: html/html-id/
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
                                <h1>HTML The id Attribute</h1>
                                <hr>
                                <h2>Using The id Attribute</h2>
                                <p>The <code>id</code> attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).</p>
                                <p>The id value can be used by CSS and JavaScript to perform certain tasks for the element with the specific id value.</p>
                                <p>In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element:</p>
                                <pre class="snippet"><code class="html">&lt;style>
    #myHeader {
      background-color: lightblue;
      color: black;
      padding: 40px;
      text-align: center;
    } 
&lt;/style>
&lt;h1 id="myHeader">My Header&lt;/h1></code></pre>
                                <p><b>Tip:</b> The id attribute can be used on any HTML element.</p>
                                <p><b>Note:</b> The id value is <code>case-sensitive</code>.</p>
                                <p><b>Note:</b> The id value must contain at least one character, and must not contain whitespace (spaces, tabs, etc.).</p>
                                <hr>
                                <h2>Difference Between Class and ID</h2>
                                <p>An HTML element can only have one unique id that belongs to that single element, while a class name can be used by multiple elements:</p>
                                <pre class="snippet"><code class="html">&lt;style>
    /* Style the element with the id "myHeader" */
    #myHeader {
      background-color: lightblue;
      color: black;
      padding: 40px;
      text-align: center;
    }
    /* Style all elements with the class name "city" */
    .city {
      background-color: tomato;
      color: white;
      padding: 10px;
    } 
&lt;/style>
&lt;!-- A unique element -->
&lt;h1 id="myHeader">My Cities&lt;/h1>
&lt;!-- Multiple similar elements -->
&lt;h2 class="city">London&lt;/h2>
&lt;p>London is the capital of England.&lt;/p>
&lt;h2 class="city">Paris&lt;/h2>
&lt;p>Paris is the capital of France.&lt;/p>
&lt;h2 class="city">Tokyo&lt;/h2>
&lt;p>Tokyo is the capital of Japan.&lt;/p></code></pre>
                                <p><b>Tip:</b> You can learn much more about CSS in our <a href="css_intro.php" target="_blank">CSS Tutorial</a>.</p>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-classes" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-iframes" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

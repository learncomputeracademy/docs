---
layout: documentation
title: CSS Navbar | Learn Computer Academy
permalink: css/css-navbar/
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
                                    <li class="breadcrumb-item active">Navbar</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Navigation Bar</h1>
                                <hr>
                                <h2>Demo: Navigation Bars</h2>
                                <style>
                                    ul.vertical {
                                        list-style-type: none;
                                        margin: 0;
                                        padding: 0;
                                        width: 200px;
                                        background-color: #f1f1f1;
                                        width: 90%;
                                    }
                                    ul.vertical li a {
                                        display: block;
                                        color: #000;
                                        padding: 8px 0 8px 16px;
                                        text-decoration: none;
                                    }
                                    ul.vertical a.active {
                                        background-color: #0054D1;
                                        color: white;
                                    }
                                    ul.vertical li a:hover:not(.active) {
                                        background-color: #555;
                                        color: white;
                                    }
                                    ul.horizontal {
                                        list-style-type: none;
                                        margin: 0;
                                        padding: 0;
                                        overflow: hidden;
                                        background-color: #333;
                                    }
                                    ul.horizontal li {
                                        float: left;
                                    }
                                    ul.horizontal li a {
                                        display: inline-block;
                                        color: white;
                                        text-align: center;
                                        padding: 14px 16px;
                                        text-decoration: none;
                                    }
                                    ul.horizontal li a.active {
                                        background-color: #0054D1;
                                    }
                                    ul.horizontal li a:hover:not(.active) {
                                        background-color: #000;
                                    }
                                    ul.gray {
                                        border: 1px solid #e7e7e7;
                                        background-color: #f3f3f3;
                                    }
                                    ul.gray li a {
                                        display: block;
                                        color: #666;
                                        text-align: center;
                                        padding: 14px 16px;
                                        text-decoration: none;
                                    }
                                    ul.gray li a.active {
                                        color: white;
                                        background-color: #008CBA;
                                    }
                                    ul.gray li a:hover:not(.active) {
                                        background-color: #ddd;
                                    }
                                </style>
                                <div class="row">
                                    <div class="col-md-4">
                                        <p>Vertical</p>
                                        <ul class="vertical ex">
                                          <li><a class="active" href="javascript:void(0)">Home</a></li>
                                          <li><a href="javascript:void(0)">News</a></li>
                                          <li><a href="javascript:void(0)">Contact</a></li>
                                          <li><a href="javascript:void(0)">About</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-8">
                                        <p>Horizontal</p>
                                        <ul class="horizontal">
                                          <li><a class="active" href="javascript:void(0)">Home</a></li>
                                          <li><a href="javascript:void(0)">News</a></li>
                                          <li><a href="javascript:void(0)">Contact</a></li>
                                          <li class="rightli" style="float:right"><a href="javascript:void(0)">About</a></li>
                                        </ul>
                                        <br>
                                        <ul class="horizontal gray">
                                          <li><a href="javascript:void(0)">Home</a></li>
                                          <li><a href="javascript:void(0)">News</a></li>
                                          <li><a class="active" href="javascript:void(0)">Contact</a></li>
                                          <li class="rightli" style="float:right"><a href="javascript:void(0)">About</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <hr>
                                <h2>Navigation Bars</h2>
                                <p>Having easy-to-use navigation is important for any web site.</p>
                                <p>With CSS you can transform boring HTML menus into good-looking navigation bars.</p>
                                <hr>
                                <h2>Navigation Bar = List of Links</h2>
                                <p>A navigation bar needs standard HTML as a base.</p>
                                <p>In our examples we will build the navigation bar from a standard HTML list.</p>
                                <p>A navigation bar is basically a list of links, so using the &lt;ul&gt; and &lt;li&gt; elements makes perfect sense:</p>
                                <pre class="snippet"><code class="html">&lt;ul>
  &lt;li>&lt;a href="default.html">Home&lt;/a>&lt;/li>
  &lt;li>&lt;a href="news.html">News&lt;/a>&lt;/li>
  &lt;li>&lt;a href="contact.html">Contact&lt;/a>&lt;/li>
  &lt;li>&lt;a href="about.html">About&lt;/a>&lt;/li>
&lt;/ul></code></pre>
                                <p>Now let's remove the bullets and the margins and padding from the list:</p>
                                <pre class="snippet"><code class="css">ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}</code></pre>
                                <p>Example explained:</p>
                                <ul>
                                    <li><code class="w3-codespan">list-style-type: none;</code> - Removes the bullets. A navigation bar 
                                    does not need list markers</li>
                                    <li>Set <code class="w3-codespan">margin: 0;</code> and <code class="w3-codespan">padding: 0;</code> 
                                    to remove browser default settings</li>
                                </ul>
                                <p>The code in the example above is the standard code used in both vertical, and horizontal navigation bars.</p>
                                <hr>
                                <h2>Vertical Navigation Bar</h2>
                                <p>To build a vertical navigation bar, you can style the &lt;a&gt; elements inside the list, in addition to the code above:</p>
                                <pre class="snippet"><code class="css">li a {
  display: block;
  width: 60px;
}</code></pre>
                                <p>Example explained:</p>
                                <ul>
                                    <li><code class="w3-codespan">display: block;</code> - Displaying the links as block elements makes the whole link area clickable (not just the text), and it allows us to specify the width 
                                    (and padding, margin, height, etc. if you want)</li>
                                    <li><code class="w3-codespan">width: 60px;</code> - Block elements take up the full width available by default. We want to specify a 60 pixels width</li>
                                </ul>
                                <p>You can also set the width of &lt;ul&gt;, and remove the width of &lt;a&gt;, as they will take up the full width available when displayed as block elements. This will produce the same result as our previous example:</p>
                                <pre class="snippet"><code class="css">ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60px;
} 
li a {
  display: block;
}</code></pre>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-image-transparency" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-dropdowns" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

                

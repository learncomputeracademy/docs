---
layout: documentation
title: CSS Link | Learn Computer Academy
permalink: css/css-link/
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
                                    <li class="breadcrumb-item active">Links</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Links</h1>
                                <hr>
                                <p>With CSS, links can be styled in different ways.</p>
                                <hr>
                                <a href="javascript:void(0)" >Text Link</a>
                                <a href="javascript:void(0)" style="color: green; text-decoration: none; margin-left: 20px; font-size: 16px;">Text Link</a>
                                <a href="javascript:void(0)" style="background-color: white; color: black; border: 2px solid #4CAF50; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin-left: 20px;">Link Button</a> 
                                <a href="javascript:void(0)" style="display: inline-block; background-color: #f44336; color: #FFFFFF; padding: 14px 25px; text-align: center; text-decoration: none; font-size: 16px; margin-left: 20px; opacity: 0.9;" onMouseOver="this.style.opacity=1" onMouseOut="this.style.opacity=0.9">Link Button</a>
                                <hr>
                                <h2>Styling Links</h2>
                                <p>Links can be styled with any CSS property (e.g. <code>color</code>, <code>font-family</code>, <code>background</code>, etc.).</p>
                                <pre class="snippet"><code class="css">a {
  color: hotpink;
}</code></pre>
                                <p>In addition, links can be styled differently depending on what <strong>state</strong> they are in.</p>
                                <p>The four links states are:</p>
                                <ul>
                                    <li><code>a:link</code> - a normal, unvisited link</li>
                                    <li><code>a:visited</code> - a link the user has visited</li>
                                    <li><code>a:hover</code> - a link when the user mouses over it</li>
                                    <li><code>a:active</code> - a link the moment it is clicked</li>
                                </ul>
                                <pre class="snippet"><code class="css">/* unvisited link */
a:link {
  color: red;
}
/* visited link */
a:visited {
  color: green;
}
/* mouse over link */
a:hover {
  color: hotpink;
}
/* selected link */
a:active {
  color: blue;
}</code></pre>
                                <p>When setting the style for several link states, there are some order rules:</p>
                                <ul>
                                    <li>a:hover MUST come after a:link and a:visited</li>
                                    <li>a:active MUST come after a:hover</li>
                                </ul>
                                <hr>
                                <h2>Text Decoration</h2>
                                <p>The <code>text-decoration</code> property is mostly used to remove underlines from links:</p>
                                <pre class="snippet"><code class="css">a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: underline;
}</code></pre>
                                <hr>
                                <h2>Background Color</h2>
                                <p>The <code>background-color</code> property can be used to specify a background color for links:</p>
                                <pre class="snippet"><code class="css">a:link {
  background-color: yellow;
}
a:visited {
  background-color: cyan;
}
a:hover {
  background-color: lightgreen;
}
a:active {
  background-color: hotpink;
} </code></pre>
                                <hr>
                                <h2>Advanced - Link Buttons</h2>
                                <p>This example demonstrates a more advanced example where we combine several CSS properties to display links as boxes/buttons:</p>
                                <pre class="snippet"><code class="css">a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center; 
  text-decoration: none;
  display: inline-block;
}
a:hover, a:active {
  background-color: red;
}</code></pre>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-icons" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-list" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

---
layout: documentation
title: CSS Opacity | Learn Computer Academy
permalink: css/css-image-transparency/
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
                                    <li class="breadcrumb-item active">Opacity</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Opacity</h1>
                                <hr>
                                <p>The <code>opacity</code> property specifies the opacity/transparency of an element.</p>
                                <hr>
                                <h2>Transparent Image</h2>
                                <p>The <code>opacity</code> property can take a value from 0.0 - 1.0. The lower value, the more transparent:</p>
                                <div class="row">
                                    <div class="col-md-3" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid" style="opacity: 0.2;">
                                        <span>opacity 0.2</span>
                                    </div>
                                    <div class="col-md-3" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid" style="opacity: 0.5;">
                                        <span>opacity 0.5</span>
                                    </div>
                                    <div class="col-md-3" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid">
                                        <span>opacity 1 (default)</span>
                                    </div>
                                </div>
                                <p><b>Note:</b> IE8 and earlier use <code>filter:alpha(opacity=x)</code>. The x can take a value from 0 - 100. A lower value makes the element more transparent.</p>
                                <pre class="snippet"><code class="css">img {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}</code></pre>
                                <hr>
                                <h2>Transparent Hover Effect</h2>
                                <p>The <code>opacity</code> property is often used together with the <code>:hover</code>
                                <style>
                                    img.forest {
                                      opacity: 0.5;
                                      filter: alpha(opacity=50); /* For IE8 and earlier */
                                      transition: all .3s ease;
                                    }
                                    img.forest:hover {
                                      opacity: 1.0;
                                      filter: alpha(opacity=100); /* For IE8 and earlier */
                                    }
                                </style> 
                                <div class="row" style="margin-bottom: 1rem;">
                                    <div class="col-md-4" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid forest">
                                    </div>
                                    <div class="col-md-4" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid forest">
                                    </div>
                                    <div class="col-md-4" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid forest">
                                    </div>
                                </div>
                                <pre class="snippet"><code class="css">img {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}
img:hover {
  opacity: 1.0;
  filter: alpha(opacity=100); /* For IE8 and earlier */
}</code></pre>
                                <h3>Example explained</h3>
                                <p>The first CSS block is similar to the code in Example 1. In addition, we have added what should happen when a user hovers over one of the images. In this case we want the image to NOT be transparent when the user hovers over it. The CSS for this is <code>opacity:1;</code>.</p>
                                <p>When the mouse pointer moves away from the image, the image will be transparent again.</p>
                                <p>An example of reversed hover effect:</p>
                                <style>
                                    img.forest2 {
                                      opacity: 1;
                                      filter: alpha(opacity=100); /* For IE8 and earlier */
                                      transition: all .3s ease;
                                    }
                                    img.forest2:hover {
                                      opacity: 0.5;
                                      filter: alpha(opacity=50); /* For IE8 and earlier */
                                    }
                                </style> 
                                <div class="row" style="margin-bottom: 1rem;">
                                    <div class="col-md-4" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid forest2">
                                    </div>
                                    <div class="col-md-4" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid forest2">
                                    </div>
                                    <div class="col-md-4" style="text-align: center;">
                                        <img src="{{ site.baseurl }}/assets/img/img_forest.jpg" alt="Forest" class="img-fluid forest2">
                                    </div>
                                </div>
                                <pre class="snippet"><code class="css">img:hover {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}</code></pre>
                                <hr>
                                <h2>Transparent Box</h2>
                                <p>When using the <code>opacity</code> property to add transparency to the background of an element, all of its child elements 
                                inherit the same transparency. This can make the text inside a fully transparent element hard to read:</p>
                                <div class="row" style="margin-bottom: 1rem;">
                                    <div class="col-md-3">
                                        <div style="background-color:#4CAF50;opacity:1;padding:50px;color:black; text-align: center;"><p>opacity 1</p></div>
                                    </div>
                                    <div class="col-md-3">
                                        <div style="background-color:#4CAF50;opacity:0.6;padding:50px;color:black; text-align: center;"><p>opacity 0.6</p></div>
                                    </div>
                                    <div class="col-md-3">
                                        <div style="background-color:#4CAF50;opacity:0.3;padding:50px;color:black; text-align: center;"><p>opacity 0.3</p></div>
                                    </div>
                                    <div class="col-md-3">
                                        <div style="background-color:#4CAF50;opacity:0.1;padding:50px;color:black; text-align: center;"><p>opacity 0.1</p></div>
                                    </div>
                                </div>
                                <pre class="snippet"><code class="css">div {
  opacity: 0.3;
  filter: alpha(opacity=30); /* For IE8 and earlier */
}</code></pre>
                                <hr>
                                <h2>Transparency using RGBA</h2>
                                <p>If you do not want to apply opacity to child elements, like in our example above, use <strong>RGBA</strong> color values. The following example sets the opacity for the background color and not the text:</p>
                                <div class="row" style="margin-bottom: 1rem;">
                                    <div class="col-md-3">
                                        <div style="background:rgb(76, 175, 80);padding:50px;color:black;text-align: center;"><p>100% opacity</p></div>
                                    </div>
                                    <div class="col-md-3">
                                        <div style="background:rgba(76, 175, 80,0.6);padding:50px;color:black;text-align: center;"><p>60% opacity</p></div>
                                    </div>
                                    <div class="col-md-3">
                                        <div style="background:rgba(76, 175, 80,0.3);padding:50px;color:black;text-align: center;"><p>30% opacity</p></div>
                                    </div>
                                    <div class="col-md-3">
                                        <div style="background:rgba(76, 175, 80,0.1);padding:50px;color:black;text-align: center;"><p>10% opacity</p></div>
                                    </div>
                                </div>
                                <p>You learned from our <a href="#">CSS Colors Chapter</a>, that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an alpha channel (RGBA) - which specifies the opacity for a color.</p>
                                <p>An RGBA color value is specified with: rgba(red, green, blue, <em>alpha</em>). The <em>alpha</em> parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
                                <p><strong>Tip:</strong> You will learn more about RGBA Colors in our <a href="#">CSS Colors Chapter</a>.</p>
                                <pre class="snippet"><code class="css">div {
  background: rgba(76, 175, 80, 0.3) /* Green background with 30% opacity */
}</code></pre>
                                <hr>
                                <h2>Text in Transparent Box</h2>
                                <div class="img-block" style="margin-bottom: 1rem;">
                                    <img src="{{ site.baseurl }}/assets/img/transparent-box.jpg" alt="Transparent Image" class="img-fluid">
                                </div>
                                <pre class="snippet"><code class="html">&lt;html>
&lt;head>
    &lt;style>
    div.background {
      background: url(klematis.jpg) repeat;
      border: 2px solid black;
    }
    div.transbox {
      margin: 30px;
      background-color: #ffffff;
      border: 1px solid black;
      opacity: 0.6;
      filter: alpha(opacity=60); /* For IE8 and earlier */
    }
    div.transbox p {
      margin: 5%;
      font-weight: bold;
      color: #000000;
    }
    &lt;/style>
&lt;/head>
&lt;body>
    &lt;div class="background">
      &lt;div class="transbox">
        &lt;p>This is some text that is placed in the transparent box.&lt;/p>
      &lt;/div>
    &lt;/div>
&lt;/body>
&lt;/html></code></pre>
                                <p>First, we create a &lt;div> element (class="background") with a background image, and a border. Then we create another &lt;div> (class="transbox") inside the first &lt;div>. The &lt;div class="transbox"> have a background color, and a border - the div is transparent. Inside the transparent &lt;div>, we add some text inside a &lt;p> element.</p>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-pseudo-elements" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-navbar" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->

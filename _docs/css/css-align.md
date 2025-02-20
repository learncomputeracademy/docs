---
layout: documentation
title: CSS Align | Learn Computer Academy
permalink: css/css-align/
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
                                    <li class="breadcrumb-item active">Align</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - Horizontal & Vertical Align</h1>
                                <hr>
                                    <img src="assets/img/center-align.gif" alt="Align image" class="img-fluid">
                                <hr>
                                <h2>Center Align Elements</h2>
                                <p>To horizontally center a block element (like &lt;div&gt;), use <code class="w3-codespan">margin: auto;</code></p>
                                <p>Setting the width of the element will prevent it from stretching out to the edges of its container.</p>
                                <p>The element will then take up the specified width, and the remaining space will be split equally between the two margins:</p>
                                <div style="margin:0 auto 1rem;width:50%;border:3px solid #1863d4;padding:10px;">
                                  <p>This div element is centered.</p>
                                </div>
                                <pre class="snippet"><code class="css">.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}</code></pre>
                                <p><b>Note:</b> Center aligning has no effect if the width property is not set (or set to 100%).</p>
                                <hr>
                                <h2>Center Align Text</h2>
                                <p>To just center the text inside an element, use <code>text-align: center;</code></p>
                                <div style="text-align:center;border:3px solid #1863d4;margin-bottom: 1rem;">
                                  <p style="margin: 0;padding: 1em 0;">This text is centered.</p>
                                </div>
                                <pre class="snippet"><code class="css">.center {
  text-align: center;
  border: 3px solid green;
}</code></pre>
                                <p><b>Tip:</b> For more examples on how to align text, see the <a href="css_text.html" target="_blank">CSS Text</a> chapter.</p>
                                <hr>
                                <h2>Center an Image</h2>
                                <p>To center an image, set left and right margin to <code class="w3-codespan">auto</code> and make it into a <code class="w3-codespan">block</code> element:</p>
                                <img src="assets/img/paris.jpg" alt="Paris" style="width:45%;display:block;margin:0 auto 1rem;">
                                <pre class="snippet"><code class="css">img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}</code></pre>
                                <hr>
                                <h2>Left and Right Align - Using position</h2>
                                <p>One method for aligning elements is to use <code class="w3-codespan">position: absolute;</code>:</p>
                                <div style="position:relative;margin-bottom:180px">
                                    <div style="position: absolute;right: 0px;width: 300px;border: 3px solid #1863d4;padding: 10px;">
                                     <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
                                    </div>
                                </div>
                                <pre class="snippet"><code class="css">.right {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}</code></pre>
                                <p><b>Note:</b> Absolute positioned elements are removed from the normal flow, and can overlap elements.</p>
                                <hr>
                                <h2>Center Vertically - Using padding</h2>
                                <p>There are many ways to center an element vertically in CSS. A simple solution is to use top and bottom <code class="w3-codespan">padding</code>:</p>
                                <div style="border:3px solid #1863d4;padding:70px 2px;margin-bottom: 1rem;">
                                  <p style="margin: 0;">I am vertically centered.</p>
                                </div>
                                <pre class="snippet"><code class="css">.center {
  padding: 70px 0;
  border: 3px solid green;
}</code></pre>
                                <p>To center both vertically and horizontally, use <code>padding</code> and <code>text-align: center</code>:</p>
                                <div style="border:3px solid #1863d4;padding:70px 2px;margin-bottom: 1rem;text-align:center;">
                                  <p>I am vertically and horizontally centered.</p>
                                </div>
                                <pre class="snippet"><code class="css">.center {
  padding: 70px 0;
  border: 3px solid green;
  text-align: center;
}</code></pre>
                                <hr>
                                <h2>Center Vertically - Using line-height</h2>
                                <p>Another trick is to use the <code>line-height</code> property with a value that is equal to the <code>height</code> property.</p>
                                <div style="line-height:200px; height:200px;border:3px solid #1863d4;text-align:center;margin-bottom: 1rem;">
                                  <p style=" line-height:1.2; display:inline-block; vertical-align:middle;">I am vertically and horizontally centered.</p>
                                </div>
                                <pre class="snippet"><code class="css">.center {
  line-height: 200px;
  height: 200px;
  border: 3px solid green;
  text-align: center;
}
/* If the text has multiple lines, add the following: */
.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}</code></pre>
                                <hr>
                                <h2>Center Vertically - Using position &amp; transform</h2>
                                <p>If <code>padding</code> and <code>line-height</code> are not options, a third solution is to use positioning and the <code>transform</code> property:</p>
                                <div style="line-height:200px; height:200px;border:3px solid #1863d4;text-align:center;margin-bottom: 1rem;">
                                    <p style=" line-height:1.2; display:inline-block; vertical-align:middle;">I am vertically and horizontally centered.</p>
                                </div>
                                <pre class="snippet"><code class="css">.center { 
  height: 200px;
  position: relative;
  border: 3px solid green; 
}
.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}</code></pre>
                                <p><b>Tip:</b> You will learn more about the transform property in our 2D Transforms Chapter.</p>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-inline-block" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-combinators" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>
               
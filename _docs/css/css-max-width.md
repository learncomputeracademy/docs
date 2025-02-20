---
layout: documentation
title: CSS Max-width | Learn Computer Academy
permalink: css/css-max-width/
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
                                    <li class="breadcrumb-item active">Max width</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - width and max-width</h1>
                                <hr>
                                <h2>Using width, max-width and margin: auto;</h2>
                                <p>As mentioned in the previous chapter; a block-level element always takes up the full width available (stretches out to the left and right as far as it can).</p>
                                <p>Setting the <code>width</code> of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:</p>
                                <div style="border-width:3px;border-style:solid;width:500px; margin: 0 auto 1rem;">
                                    This &lt;div&gt; element has a width of 500px, and margin set to auto.
                                </div>
                                <p><b>Note:</b> The problem with the <code>&lt;div&gt;</code> above occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page.</p>
                                <p>Using <code>max-width</code> instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices:</p>
                                <div style="border-width:3px;border-style:solid; max-width:500px; margin: 0 auto 1rem;">
                                    This &lt;div&gt; element has a max-width of 500px, and margin set to auto.
                                </div>
                                <p><b>Tip:</b> Resize the browser window to less than 500px wide, to see the difference between the two divs!</p>
                                <p>Here is an example of the two divs above:</p>
                                <pre class="snippet"><code class="css">div.ex1 {
  width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}
div.ex2 {
  max-width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}</code></pre>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-display-visibility" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-positioning" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


---
layout: documentation
title: HTML Responsive | Learn Computer Academy
permalink: html/html-responsive/
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
                                <h1>HTML Responsive Web Design</h1>
                                <hr>
                                <h2>What is Responsive Web Design?</h2>
                                <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):</p>
                                <p><b>Note:</b> A web page should look good on <b><u>any device!</u></b></p>
                                <hr>
                                <h2>Setting The Viewport</h2>
                                <p>When making responsive web pages, add the following <code>&lt;meta></code> element in all your web pages:</p>
                                <pre class="snippet"><code class="html">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"></code></pre>
                                <p>This will set the viewport of your page, which will give the browser instructions on how to control the page's dimensions and scaling.</p>
                                <hr>
                                <h2>Responsive Images</h2>
                                <p>Responsive images are images that scale nicely to fit any browser size.</p>
                                <h3>Using the width Property</h3>
                                <p>If the CSS <code>width</code> property is set to 100%, the image will be responsive and scale up and down:</p>
                                <img src="../assets/img/img_girl.jpg" alt="" style="width:100%;height:auto;">
                                <p></p>
                                <pre class="snippet"><code class="html">&lt;img src="img_girl.jpg" style="width:100%;"></code></pre>
                                <p>Notice that in the example above, the image can be scaled up to be larger than its original size. A better solution, in many cases, will be to use the <code>max-width</code> property instead.</p>
                                <h2>Using the max-width Property</h2>
                                <p>If the <code>max-width</code> property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size:</p>
                                <img src="../assets/img/img_girl.jpg" alt="" style="max-width:100%;height:auto;">
                                <p></p>
                                <pre class="snippet"><code class="html">&lt;img src="img_girl.jpg" style="max-width:100%;height:auto;"></code></pre>
                                <h2>Show Different Images Depending on Browser Width</h2>
                                <p>The HTML <code>&lt;picture></code> element allows you to define different images for different browser window sizes.</p>
                                <p>Resize the browser window to see how the image below change depending on the width:</p>
                                <picture>
                                    <source srcset="../assets/img/img_smallflower.jpg" media="(max-width: 600px)">
                                    <source srcset="../assets/img/img_flowers.jpg" media="(max-width: 1500px)">
                                    <source srcset="../assets/img/flowers.jpg">
                                    <img src="../assets/img/img_smallflower.jpg" alt="Flowers">
                                </picture>
                                <p></p>                                
                                <pre class="snippet"><code class="html">&lt;picture>
    &lt;source srcset="img_smallflower.jpg" media="(max-width: 600px)">
    &lt;source srcset="img_flowers.jpg" media="(max-width: 1500px)">
    &lt;source srcset="flowers.jpg">
    &lt;img src="img_smallflower.jpg" alt="Flowers">
&lt;/picture></code></pre>
                                <hr>
                                <h2>Responsive Text Size</h2>
                                <p>The text size can be set with a "vw" unit, which means the "viewport width".</p>
                                <p>That way the text size will follow the size of the browser window:</p>
                                <div class="bg-gray p-5 mb-3">
                                    <h1 style="font-size:8vw;">Hello World</h1>
                                    <p style="font-size:2vw;">Resize the browser window to see how the text size scales.</p>
                                </div>
                                <pre class="snippet"><code class="html">&lt;h1 style="font-size:10vw">Hello World&lt;/h1>
&lt;p style="font-size:2vw;">Resize the browser window to see how the text size scales.&lt;/p>                                    
</code></pre>
                              <p><b>Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.</b></p>      
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-head" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-forms" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

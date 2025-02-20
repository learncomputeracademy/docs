---
layout: documentation
title: CSS Dimension | Learn Computer Academy
permalink: css/css-dimension/
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
                                    <li class="breadcrumb-item active">Dimensions</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Height and Width</h1>
                                <hr>
                                <p style="border:1px solid #4CAF50; padding:5px;">This element has a width of 100%.</p>
                                <hr>
                                <h1>CSS Setting height and width</h1>
                                <p>The <code>height</code> and <code>width</code> properties are used to set the height and width of an element.</p>
                                <p>The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.</p>
                                <hr>
                                <h2>CSS height/width Values</h2>
                                <p>The <code>height</code> and <code>width</code> properties may have the following values:</p>
                                <ul>
                                    <li><code>auto</code> - This is default. The browser calculates the height and width</li>
                                    <li><code>length</code> - Defines the height/width in px, cm etc.</li>
                                    <li><code>%</code> - Defines the height/width in percent of the containing block</li>
                                    <li><code>initial</code> - Sets the height/width to its default value</li>
                                    <li><code>inherit</code> - The height/width will be inherited from its parent value</li>
                                </ul>
                                <hr>
                                <h2>CSS height/width Examples</h2>
                                <div style="height: 200px; width: 50%; background: powderblue; padding: 5px;">This element has a height of 200 pixels and a width of 50%</div>

                                <p>Set the height and width of a &lt;div> element:</p>
                                <pre class="snippet"><code class="css">div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}</code></pre> 
                                <p class="note"><b>Note:</b> Remember that the <code>height</code> and <code>width</code> properties do not include padding, borders, or margins! They set the height/width of the area inside the padding, border, and margin of the element!</p>
                                <hr>
                                <h2>Setting max-width</h2>
                                <p>The <code>max-width</code> property is used to set the maximum width of an element.</p>
                                <p>The <code>max-width</code> can be specified in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default. Means that there is no maximum width).</p>
                                <p>The problem with the <code>&lt;div></code> above occurs when the browser window is smaller than the width of the element (500px). The browser then adds a horizontal scrollbar to the page.</p>
                                <p>Using <code>max-width</code> instead, in this situation, will improve the browser's handling of small windows.</p>
                                <p class="note"><b>Tip:</b> Drag the browser window to smaller than 500px wide, to see the difference between the two divs!</p>
                                <div style="height: 100px; max-width: 500px; background: powderblue; padding: 5px; margin-bottom: 1rem;">This element has a height of 100 pixels and a max-width of 500 pixels.</div>
                                <p class="note"><b>Note:</b> The value of the <code>max-width</code> property overrides <code>width</code>.</p>
                                <p>This &lt;div> element has a height of 100 pixels and a max-width of 500 pixels:</p>
                                <pre class="snippet"><code class="css">div {
  max-width: 500px;
  height: 100px;
  background-color: powderblue;
}</code></pre>
                                <hr>
                                <h2>All CSS Dimension Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">height</th>
                                            <td>Sets the height of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">max-height</th>
                                            <td>Sets the maximum height of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">max-width</th>
                                            <td>Sets the maximum width of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">min-height</th>
                                            <td>Sets the minimum height of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">min-width</th>
                                            <td>Sets the minimum width of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">width</th>
                                            <td>Sets the width of an element</td>
                                        </tr>                                         
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-padding" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-boxmodel" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


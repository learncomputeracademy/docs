---
layout: documentation
title: CSS Padding | Learn Computer Academy
permalink: css/css-padding/
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
                                    <li class="breadcrumb-item active">Padding</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Padding</h1>
                                <hr>
                                <p style="border:1px solid #4CAF50; padding:40px;">This element has a padding of 40px.</p>
                                <hr>
                                <h2>CSS Padding</h2>
                                <p>The CSS <code>padding</code> properties are used to generate space around an element's content, inside of any defined borders.</p>
                                <p>With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).</p>
                                <hr>
                                <h2>Padding - Individual Sides</h2>
                                <p>CSS has properties for specifying the padding for each side of an element:</p>
                                <ul>
                                    <li><code>padding-top</code></li>
                                    <li><code>padding-right</code></li>
                                    <li><code>padding-bottom</code></li>
                                    <li><code>padding-left</code></li>
                                </ul>
                                <p>All the padding properties can have the following values:</p>
                                <ul>
                                    <li>length - specifies a padding in px, pt, cm, etc.</li>
                                    <li>% - specifies a padding in % of the width of the containing element</li>
                                    <li>inherit - specifies that the padding should be inherited from the parent element</li>
                                </ul>
                                <p><b>Note:</b> Negative values are not allowed.</p>
                                <p>Set different padding for all four sides of a &lt;div> element:</p>
                                <pre class="snippet"><code class="css">div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}</code></pre>
                                <hr>
                                <h2>Padding - Shorthand Property</h2>
                                <p>To shorten the code, it is possible to specify all the padding properties in one property.</p>
                                <p>The <code>padding</code> property is a shorthand property for the following individual padding properties:</p>
                                <ul>
                                    <li><code>padding-top</code></li>
                                    <li><code>padding-right</code></li>
                                    <li><code>padding-bottom</code></li>
                                    <li><code>padding-left</code></li>
                                </ul>
                                <p>So, here is how it works:</p>
                                <p>If the <code>padding</code> property has four values:</p>
                                <ul>
                                    <li><b>padding: 25px 50px 75px 100px;</b>
                                        <ul>
                                            <li>top padding is 25px</li>
                                            <li>right padding is 50px</li>
                                            <li>bottom padding is 75px</li>
                                            <li>left padding is 100px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the padding shorthand property with four values:</p>
                                <pre class="snippet"><code class="css">div {
  padding: 25px 50px 75px 100px;
}</code></pre>
                                <p>If the padding property has three values:</p>
                                <ul>
                                    <li><b>padding: 25px 50px 75px;</b>
                                        <ul>
                                            <li>top padding is 25px</li>
                                            <li>right and left paddings are 50px</li>
                                            <li>bottom padding is 75px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the padding shorthand property with three values:</p>
                                <pre class="snippet"><code class="css">div {
  padding: 25px 50px 75px;
}</code></pre>
                                <p>If the padding property has two values:</p>
                                <ul>
                                    <li><b>padding: 25px 50px;</b>
                                        <ul>
                                            <li>top and bottom paddings are 25px</li>
                                            <li>right and left paddings are 50px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the padding shorthand property with two values:</p>
                                <pre class="snippet"><code class="css">div {
  padding: 25px 50px;
}</code></pre>
                                <p>If the padding property has one value:</p>
                                <ul>
                                    <li><b>padding: 25px;</b>
                                        <ul>
                                            <li>all four paddings are 25px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the padding shorthand property with one value:</p>
                                <pre class="snippet"><code class="css">div {
  padding: 25px;
}</code></pre>
                                <hr>
                                <h2>Padding and Element Width</h2>
                                <p>The CSS width property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (<a href="#">the box model</a>).</p>
                                <p>So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.</p>
                                <p>Here, the &ltdiv> element is given a width of 300px. However, the actual width of the &ltdiv> element will be 350px (300px + 25px of left padding + 25px of right padding):</p>
                                <pre class="snippet"><code class="css">div {
  width: 300px;
  padding: 25px;
}</code></pre>
                                <p>To keep the width at 300px, no matter the amount of padding, you can use the <code>box-sizing</code> property. This causes the element to maintain its width; if you increase the padding, the available content space will decrease.</p>
                                <p>Use the box-sizing property to keep the width at 300px, no matter the amount of padding:</p>
                                <pre class="snippet"><code class="css">div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}</code></pre>
                                <hr>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">padding</th>
                                            <td>A shorthand property for setting all the padding properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">padding-bottom</th>
                                            <td>Sets the bottom padding of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">padding-left</th>
                                            <td>Sets the left padding of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">padding-right</th>
                                            <td>Sets the right padding of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">padding-top</th>
                                            <td>Sets the top padding of an element</td>
                                        </tr> 
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-margin" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-dimension" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


---
layout: documentation
title: CSS Margin | Learn Computer Academy
permalink: css/css-margin/
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
                                <h1>CSS Margins</h1>
                                <hr>
                                <p style="border:1px solid #4CAF50; margin:40px; padding:5px;">This element has a margin of 40px.</p>
                                <hr>
                                <h2>CSS Margins</h2>
                                <p>The CSS <code>margin</code> properties are used to create space around elements, outside of any defined borders.</p>
                                <p>With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).</p>
                                <hr>
                                <h2>Margin - Individual Sides</h2>
                                <p>CSS has properties for specifying the margin for each side of an element:</p>
                                <ul>
                                    <li><code>margin-top</code></li>
                                    <li><code>margin-right</code></li>
                                    <li><code>margin-bottom</code></li>
                                    <li><code>margin-left</code></li>
                                </ul>
                                <p>All the margin properties can have the following values:</p>
                                <ul>
                                    <li>auto - the browser calculates the margin</li>
                                    <li>length - specifies a margin in px, pt, cm, etc.</li>
                                    <li>% - specifies a margin in % of the width of the containing element</li>
                                    <li>inherit - specifies that the margin should be inherited from the parent element</li>
                                </ul>
                                <p class="note"><b>Tip:</b> Negative values are allowed.</p>
                                <p>Set different margins for all four sides of a &lt;p> element:</p>
                                <pre class="snippet"><code class="css">p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}</code></pre>
                                <hr>
                                <h2>Margin - Shorthand Property</h2>
                                <p>To shorten the code, it is possible to specify all the margin properties in one property.</p>
                                <p>The <code>margin</code> property is a shorthand property for the following individual margin properties:</p>
                                <ul>
                                    <li><code>margin-top</code></li>
                                    <li><code>margin-right</code></li>
                                    <li><code>margin-bottom</code></li>
                                    <li><code>margin-left</code></li>
                                </ul>
                                <p>So, here is how it works:</p>
                                <p>If the <code>margin</code> property has <b>four values</b>:</p>
                                <ul>
                                    <li><b>margin: 25px 50px 75px 100px;</b>
                                        <ul>
                                            <li>top margin is 25px</li>
                                            <li>right margin is 50px</li>
                                            <li>bottom margin is 75px</li>
                                            <li>left margin is 100px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the margin shorthand property with four values:</p>
                                <pre class="snippet"><code class="css">p {
  margin: 25px 50px 75px 100px;
}</code></pre>
                                <p>If the <code>margin</code> property has three values:</p>
                                <ul>
                                    <li><b>margin: 25px 50px 75px;</b>
                                        <ul>
                                            <li>top margin is 25px</li>
                                            <li>right and left margins are 50px</li>
                                            <li>bottom margin is 75px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the margin shorthand property with three values:</p>
                                <pre class="snippet"><code class="css">p {
  margin: 25px 50px 75px;
}</code></pre>
                                <p>If the <code>margin</code> property has two values:</p>
                                <ul>
                                    <li><b>margin: 25px 50px;</b>
                                        <ul>
                                            <li>top and bottom margins are 25px</li>
                                            <li>right and left margins are 50px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the margin shorthand property with two values:</p>
                                <pre class="snippet"><code class="css">p {
  margin: 25px 50px;
}</code></pre>
                                <p>If the <code>margin</code> property has one value:</p>
                                <ul>
                                    <li><b>margin: 25px;</b>
                                        <ul>
                                            <li>all four margins are 25px</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Use the margin shorthand property with one value:</p>
                                <pre class="snippet"><code class="css">p {
  margin: 25px;
}</code></pre>
                                <hr>
                                <h2>The auto Value</h2>
                                <p>You can set the margin property to <code>auto</code> to horizontally center the element within its container.</p>
                                <p>The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.</p>
                                <p>Use margin: auto:</p>
                                <pre class="snippet"><code class="css">div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}</code></pre>
                                <hr>
                                <h2>The inherit Value</h2>
                                <p>This example lets the left margin of the &lt;p class="ex1"> element be inherited from the parent element (&lt;div>):</p>
                                <p>Use of the inherit value:</p>
                                <pre class="snippet"><code class="css">div {
  border: 1px solid red;
  margin-left: 100px;
}
p.ex1 {
  margin-left: inherit;
}</code></pre>
                                <hr>
                                <h2>Margin Collapse</h2>
                                <p>Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.</p>
                                <p>This does not happen on left and right margins! Only top and bottom margins!</p>
                                <p>Look at the following example:</p>
                                <p>Demonstration of margin collapse:</p>
                                <pre class="snippet"><code class="css">h1 {
  margin: 0 0 50px 0;
}
h2 {
  margin: 20px 0 0 0;
}</code></pre>
                                <p>In the example above, the &lt;h1> element has a bottom margin of 50px and the &lt;h2> element has a top margin set to 20px.</p>
                                <p>Common sense would seem to suggest that the vertical margin between the &lt;h1> and the &lt;h2> would be a total of 70px (50px + 20px). But due to margin collapse, the actual margin ends up being 50px.</p>
                                <hr>
                                <h2>All CSS Margin Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">margin</th>
                                            <td>A shorthand property for setting the margin properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">margin-bottom</th>
                                            <td>Sets the bottom margin of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">margin-left</th>
                                            <td>Sets the left margin of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">margin-right</th>
                                            <td>Sets the right margin of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">margin-top</th>
                                            <td>Sets the top margin of an element</td>
                                        </tr> 
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-border" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-padding" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>



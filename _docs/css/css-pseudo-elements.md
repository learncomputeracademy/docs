---
layout: documentation
title: CSS Pseudo Elements | Learn Computer Academy
permalink: css/css-pseudo-elements/
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
                                    <li class="breadcrumb-item active">Pseudo Elements</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Pseudo-elements</h1>
                                <hr>
                                <h2>What are Pseudo-Elements?</h2>
                                <p>A CSS pseudo-element is used to style specified parts of an element.</p>
                                <p>For example, it can be used to:</p>
                                <ul>
                                    <li>Style the first letter, or line, of an element</li>
                                    <li>Insert content before, or after, the content of an element </li>
                                </ul>
                                <hr>
                                <h2>Syntax</h2>
                                <p>The syntax of pseudo-elements:</p>
                                <pre class="snippet"><code class="css">selector::pseudo-element {
  property:value;
}</code></pre>
                                <div class="note">
                                <p><strong>Notice the double colon notation - </strong> <code>::first-line</code> versus <code>:first-line</code><br><br>The double colon replaced the single-colon notation for pseudo-elements in CSS3. This was an attempt from W3C to distinguish between <strong>pseudo-classes</strong> and <strong>pseudo-elements</strong>.<br><br>The single-colon syntax was used for both pseudo-classes and pseudo-elements in CSS2 and CSS1.<br><br>For backward compatibility, the single-colon syntax is acceptable for CSS2 and CSS1 pseudo-elements.</p>
                                </div>
                                <hr>
                                <h2>The ::first-line Pseudo-element</h2>
                                <p>The <code>::first-line</code> pseudo-element is used to add a special style to the first line of a text.</p>
                                <p>The following example formats the first line of the text in all &lt;p&gt; elements:</p>
                                <pre class="snippet"><code class="css">p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}</code></pre>
                                <p><b>Note:</b> The ::first-line pseudo-element can only be applied to block-level elements.</p>
                                <p>The following properties apply to the ::first-line pseudo-element:</p>
                                <ul>
                                    <li>font properties</li>
                                    <li>color properties</li>
                                    <li>background properties</li>
                                    <li>word-spacing</li>
                                    <li>letter-spacing</li>
                                    <li>text-decoration</li>
                                    <li>vertical-align</li>
                                    <li>text-transform</li>
                                    <li>line-height</li>
                                    <li>clear</li>
                                </ul>
                                <hr>
                                <h2>The ::first-letter Pseudo-element</h2>
                                <p>The <code>::first-letter</code> pseudo-element is used to add a special style to the first letter of a text.</p>
                                <p>The following example formats the first letter of the text in all &lt;p&gt; elements:&nbsp;</p>
                                <pre class="snippet"><code class="css">p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}</code></pre>
                                <p><strong>Note:</strong> The <code>::first-letter</code> pseudo-element can only be applied to block-level elements.</p>
                                <p>The following properties apply to the ::first-letter pseudo- element:&nbsp;</p>
                                <ul>
                                  <li> font properties</li>
                                  <li> color properties&nbsp;</li>
                                  <li> background properties</li>
                                  <li>margin properties</li>
                                  <li>padding properties</li>
                                  <li>border properties</li>
                                  <li>text-decoration</li>
                                  <li>vertical-align (only if &quot;float&quot; is &quot;none&quot;)</li>
                                  <li>text-transform</li>
                                  <li>line-height</li>
                                  <li>float</li>
                                  <li>clear</li>
                                </ul>
                                <hr>
                                <h2>Pseudo-elements and CSS Classes</h2>
                                <p>Pseudo-elements can be combined with CSS classes:</p>
                                <pre class="snippet"><code class="css">p.intro::first-letter {
  color: #ff0000;
  font-size:200%;
}</code></pre>
                                <style>
                                    p.intro::first-letter {
                                      color: #ff0000;
                                      font-size:200%;
                                    }  
                                </style>
                                <p class="intro">This is an introduction.</p>
                                <p>This is a paragraph with some text. A bit more text even.</p>
                                <p>The example above will display the first letter of paragraphs with class="intro", in red and in a larger size.</p>
                                <hr>
                                <h2>Multiple Pseudo-elements</h2>
                                <p>Several pseudo-elements can also be combined.</p>
                                <p>In the following example, the first letter of a paragraph will be red, in an xx-large font size. The rest of the first line will be blue, and in 
                                small-caps. The rest of the paragraph will be the default font size and color:</p>
                                <pre class="snippet"><code class="css">p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
p::first-line {
  color: #0000ff;
  font-variant: small-caps;
}</code></pre>
                                <hr>
                                <h2>CSS - The ::before Pseudo-element</h2>
                                <p>The <code>::before</code> pseudo-element can be used to insert some content before the content of an element.</p>
                                <p>The following example inserts an image before the content of each &lt;h1&gt; element:</p>
                                <pre class="snippet"><code class="css">h1::before {
  content: url(smiley.gif);
}</code></pre>
                                <hr>
                                <h2>CSS - The ::after Pseudo-element</h2>
                                <p>The <code>::after</code> pseudo-element can be used to insert some content after the content of an element.</p>
                                <pre class="snippet"><code class="css">h1::after {
  content: url(smiley.gif);
}</code></pre>
                                <hr>
                                <h2>CSS - The ::selection Pseudo-element</h2>
                                <p>The <code>::selection</code> pseudo-element matches the portion of an element that is selected by a user.</p>
                                <p>The following CSS properties can be applied to <code>::selection</code>: <code>color</code>, <code>background</code>, <code>cursor</code>, and <code>outline</code>.</p>
                                <p>The following example makes the selected text red on a yellow background:</p>
                                <pre class="snippet"><code class="css">::selection {
  color: red; 
  background: yellow;
}</code></pre>
                                <hr>
                                <h2>All CSS Pseudo Elements</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Selector</th>
                                            <th scope="col">Example</th>
                                            <th scope="col">Example description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">::after</th>
                                            <td>p::after</td>
                                            <td>Insert something after the content of each &lt;p> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">::before</th>
                                            <td>p::before</td>
                                            <td>Insert something before the content of each &lt;p> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">::first-letter</th>
                                            <td>p::first-letter</td>
                                            <td>Selects the first letter of each &lt;p> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">::first-line </th>
                                            <td>p::first-line</td>
                                            <td>Selects the first line of each &lt;p> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">::selection</th>
                                            <td>p::selection</td>
                                            <td>Selects the portion of an element that is selected by a user</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-pseudo-classes" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-image-transparency" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>
                


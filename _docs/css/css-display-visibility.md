---
layout: documentation
title: CSS Visibility | Learn Computer Academy
permalink: css/css-display-visibility/
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
                                    <li class="breadcrumb-item active">Display</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - The display Property</h1>
                                <hr>
                                <p>The <code>display</code> property is the most important CSS property for controlling layout.</p>
                                <hr>
                                <h2>The display Property</h2>
                                <p>The <code>display</code> property specifies if/how an element is displayed.</p>
                                <p>Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is <code>block</code> or 
                                <code>inline</code>.</p>
                                <hr>
                                <h2>Block-level Elements</h2>
                                <p>A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).</p>
                                <div style="border-width:3px;border-style:solid; margin-bottom: 1em;">The &lt;div&gt; element is a block-level element.</div>
                                <p>Examples of block-level elements:</p>
                                <ul>
                                    <li>&lt;div&gt;</li>
                                    <li>&lt;h1&gt; - &lt;h6&gt;</li>
                                    <li>&lt;p&gt;</li>
                                    <li>&lt;form&gt;</li>
                                    <li>&lt;header&gt;</li>
                                    <li>&lt;footer&gt;</li>
                                    <li>&lt;section&gt;</li>
                                </ul>
                                <hr>
                                <h2>Inline Elements</h2>
                                <p>An inline element does not start on a new line and only takes up as much width as necessary.</p>
                                <p>This is <span style="border-width:3px;border-style:solid;">an inline &lt;span&gt; element inside</span> a paragraph.</p>
                                <p>Examples of inline elements:</p>
                                <ul>
                                    <li>&lt;span&gt;</li>
                                    <li>&lt;a&gt;</li>
                                    <li>&lt;img&gt;</li>
                                    </ul>
                                <hr>
                                <h2>Display: none;</h2>
                                <p><code>display: none;</code> is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.</p>
                                <p>The <code>&lt;script&gt;</code> element uses <code>display: none;</code> as default.&nbsp;</p>
                                <hr>
                                <hr>
                                <h2>Override The Default Display Value</h2>
                                <p>As mentioned, every element has a default display value. However, you can override this.</p>
                                <p>Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.</p>
                                <p>A common example is making inline <code>&lt;li&gt;</code> elements for horizontal menus:</p>
                                <pre class="snippet"><code class="css">li {
  display: inline;
}</code></pre>
                                <p class="note"><b>Note:</b> Setting the display property of an element only changes <b>how the element is displayed</b>, NOT what kind of element it is. So, an inline element with <code>display: block</code>; is not allowed to have other block elements inside it.</p>
                                <p>The following example displays <span> elements as block elements:</p>
                                <pre class="snippet"><code class="css">span {
  display: block;
}</code></pre>
                                <span>A display property with a value of "block" results in</span> <span style="display: block;">a line break between the two elements.</span> 
                                <hr>
                                <p>The following example displays &lt;a> elements as block elements:</p>
                                <a href="#" target="_blank" style="display: block; border: 1px solid pink;">HTML</a>
                                <a href="#" target="_blank" style="display: block; border: 1px solid pink;">CSS</a>
                                <a href="#" target="_blank" style="display: block; border: 1px solid pink;">JavaScript</a>
                                <hr>
                                <h2>Hide an Element - display:none or visibility:hidden?</h2>
                                <p>Hiding an element can be done by setting the <code>display</code> property to <code>none</code>. The element will be hidden, and the page will be displayed as if the element is not there:</p>
                                <pre class="snippet"><code class="css">h1.hidden {
  display: none;
}</code></pre>
                                <p><code>visibility:hidden</code>; also hides an element.</p>
                                <p>However, the element will still take up the same space as before. The element will be hidden, but still affect the layout:</p>
                                <pre class="snippet"><code class="css">h1.hidden {
  visibility: hidden;
}</code></pre>
                                <hr>
                                <h2>CSS Display/Visibility Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">display</th>
                                            <td>Specifies how an element should be displayed</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">visibility</th>
                                            <td>Specifies whether or not an element should be visible</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-table" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-max-width" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->



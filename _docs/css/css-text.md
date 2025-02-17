---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-text/
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
                                    <li class="breadcrumb-item active">Text</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Text</h1>
                                <hr>
                                <div style="margin:auto;border:1px solid gray;padding:8px;">
<h1 style="text-align:center;text-transform:uppercase;color:#0054D1;">text formatting</h1>
<p style="text-indent:50px;text-align:justify;letter-spacing:3px;">This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.
The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored
<a style="text-decoration:none;color:#008CBA;" target="_blank" href="tryit.asp?filename=trycss_text">&quot;Try it Yourself&quot;</a> link.</p>
</div>
                                <hr>
                                <h2>Text Color</h2>
                                <p>The <code>color</code> property is used to set the color of the text. 
                                The color is specified by:</p>
                                <ul>
                                <li>a color name - like &quot;red&quot;</li>
                                <li>a HEX value - like &quot;#ff0000&quot;</li>
                                <li>an RGB value - like &quot;rgb(255,0,0)&quot;</li>
                                </ul>
                                <p>Look at <a href="#">CSS Color Values</a> for a complete list of possible color values.</p>
                                <p>The default text color for a page is defined in the body selector.</p>
                                <pre class="snippet"><code class="css">body {
  color: blue;
}
h1 {
  color: green;
}</code></pre>
                                <p class="note"><b>Note:</b> For W3C compliant CSS: If you define the <code>color</code> property, you must also define the <code>background-color</code>.</p>
                                <hr>
                                <h2>Text Alignment</h2>
                                <p>The <code>text-align</code> property is used to set the horizontal alignment of a text.</p>
                                <p>A text can be left or right aligned, centered, or justified.</p>
                                <p>The following example shows center aligned, and left and right aligned text 
                                (left alignment is default if text direction is left-to-right, and right 
                                alignment is default if text direction is right-to-left):</p>
                                <pre class="snippet"><code class="css">h1 {
  text-align: center;
}
h2 {
  text-align: left;
}
h3 {
  text-align: right;
}</code></pre>
                            <p>When the <code>text-align</code> property is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers):</p>
                            <pre class="snippet"><code class="css">div {
  text-align: justify;
}</code></pre>
                            <hr>
                            <h2>Text Decoration</h2>
                            <p>The <code>text-decoration</code> property is used to set or remove decorations from text.</p>
                            <p>The value <code>text-decoration: none;</code> is often used to remove underlines from links:</p>
                            <pre class="snippet"><code class="css">a {
  text-decoration: none;
}</code></pre>
                            <p>The other <code>text-decoration</code> values are used to decorate text:</p>
                            <pre class="snippet"><code class="css">h1 {
  text-decoration: overline;
}
h2 {
  text-decoration: line-through;
}
h3 {
  text-decoration: underline;
}</code></pre>
                            <p class="note"><b>Note:</b> It is not recommended to underline text that is not a link, as this often confuses the reader.</p>
                            <hr>
                            <h2>Text Transformation</h2>
                            <p>The <code>text-transform</code> property is used to specify uppercase and lowercase letters in a text.</p>
                            <p>It can be used to turn everything into uppercase or lowercase letters, or 
                            capitalize the first letter of each word:</p>
                            <pre class="snippet"><code class="css">p.uppercase {
  text-transform: uppercase;
}
p.lowercase {
  text-transform: lowercase;
}
p.capitalize {
  text-transform: capitalize;
}</code></pre>
                            <hr>
                            <h2>Text Indentation</h2>
                            <p>The <code>text-indent</code> property is used to specify the indentation of the first line of a text:</p>
                            <pre class="snippet"><code class="css">p {
  text-indent: 50px;
}</code></pre>
                            <hr>
                            <h2>Letter Spacing</h2>
                            <p>The <code>letter-spacing</code> property is used to specify the space between the characters in a text.</p>
                            <p>The following example demonstrates how to increase or decrease the space between characters:</p>
                            <pre class="snippet"><code class="css">h1 {
  letter-spacing: 3px;
}
h2 {
  letter-spacing: -3px;
}</code></pre>
                            <hr>
                            <h2>Line Height</h2>
                            <p>The <code>line-height</code> property is used to specify the space between lines:</p>
                            <pre class="snippet"><code class="css">p.small {
  line-height: 0.8;
}
p.big {
  line-height: 1.8;
}</code></pre>
                            <hr>
                            <h2>Text Direction</h2>
                            <p>The <code>direction</code> property is used to change the text direction of an element:</p>
                            <pre class="snippet"><code class="css">p {
  direction: rtl;
}</code></pre>
                            <hr>
                            <h2>Word Spacing</h2>
                            <p>The <code>word-spacing</code> property is used to specify the space between 
                            the words in a text.</p>
                            <p>The following example demonstrates how to increase or decrease the space between 
                            words:&nbsp;</p>
                            <pre class="snippet"><code class="css">h1 {
  word-spacing: 10px;
}
h2 {
  word-spacing: -5px;
}</code></pre>
                            <hr>
                            <h2>Text Shadow</h2>
                            <p>The <code>text-shadow</code> property adds shadow to text.</p>
                            <p>The following example specifies the position of the horizontal shadow (3px), the position of the vertical shadow (2px) and the color of the shadow (red):</p>
                            <pre class="snippet"><code class="css">h1 {
  text-shadow: 3px 2px red;
}</code></pre>
                            <h1 style="text-shadow: 3px 2px red;">Text-shadow effect</h1>
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
                                            <th scope="row">color</th>
                                            <td>Sets the color of text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">direction</th>
                                            <td>Specifies the text direction/writing direction</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">letter-spacing </th>
                                            <td>Increases or decreases the space between characters in a text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">line-height</th>
                                            <td>Sets the line height</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">text-align</th>
                                            <td>Specifies the horizontal alignment of text</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">text-decoration</th>
                                            <td>Specifies the decoration added to text</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">text-indent</th>
                                            <td>Specifies the indentation of the first line in a text-block</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">text-shadow</th>
                                            <td> Specifies the shadow effect added to text</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">text-transform </th>
                                            <td>Controls the capitalization of text</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">text-overflow</th>
                                            <td>Specifies how overflowed content that is not displayed should be signaled to the user</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">unicode-bidi</th>
                                            <td>Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">vertical-align</th>
                                            <td>Sets the vertical alignment of an element</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">white-space</th>
                                            <td>Specifies how white-space inside an element is handled</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">word-spacing</th>
                                            <td>Increases or decreases the space between words in a text</td>
                                        </tr> 
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-outline" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-font" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>
                

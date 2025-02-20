---
layout: documentation
title: CSS Fonts | Learn Computer Academy
permalink: css/css-font/
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
                                    <li class="breadcrumb-item active">Font</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Fonts</h1>
                                <hr>
                                <p>The CSS font properties define the font family, boldness, size, and the style of a text.</p>
                                <hr>
                                <h2>Difference Between Serif and Sans-serif Fonts</h2>
                                <div class="img-block">
                                    <img src="{{ site.baseurl }}/assets/img/serif.jpg" alt="font" class="img-fluid">
                                </div>
                                <hr>
                                <h2>CSS Font Families</h2>
                                <p>In CSS, there are two types of font family names:</p>
                                <ul>
                                <li><b>generic family</b> - a group of font families with a 
                                similar look (like &quot;Serif&quot; or &quot;Monospace&quot;)</li>
                                <li><b>font family</b> - a specific font family (like &quot;Times New Roman&quot; 
                                or &quot;Arial&quot;)</li>
                                </ul>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Generic family</th>
                                            <th scope="col">Font family </th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Serif </th>
                                            <td><span style="font-size:150%;font-family:Times New Roman">Times New Roman</span><br>
                                            <span style="font-size:150%;font-family:Georgia">Georgia</span></td>
                                            <td>Serif fonts have small lines at the ends on some characters</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Sans-serif</th>
                                            <td><span style="font-size:150%;font-family:Arial">Arial</span><br>
                                            <span style="font-size:150%;font-family:Verdana">Verdana</span></td>
                                            <td>"Sans" means without - these fonts do not have the lines at the ends of characters</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monospace</th>
                                            <td><span style="font-size:150%;font-family:Courier New">Courier New</span><br>
                                            <span style="font-size:150%;font-family:Lucida Console">Lucida Console</span></td>
                                            <td>All monospace characters have the same width</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="note"><b>Note:</b> On computer screens, sans-serif fonts are considered easier to read than serif fonts.</p>
                                <hr>
                                <h2>Font Family</h2>
                                <p>The font family of a text is set with the <code>font-family</code> property.</p>
                                <p>The <code>font-family</code> property should hold several font names as a &quot;fallback&quot; system. If the browser does not support the first font, it tries the next font, and so on.</p>
                                <p>Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.</p>
                                <p><b>Note</b>: If the name of a font family is more than one word, it must be in quotation marks, like: &quot;Times New Roman&quot;.</p>
                                <p>More than one font family is specified in a comma-separated list:</p>
                                <pre class="snippet"><code class="css">p {
  font-family: "Times New Roman", Times, serif;
}</code></pre>
                                <hr>
                                <h2>Font Style</h2>
                                <p>The <code>font-style</code> property is mostly used to specify italic text.</p>
                                <p>This property has three values:</p>
                                <ul>
                                    <li>normal - The text is shown normally</li>
                                    <li>italic - The text is shown in italics</li>
                                    <li>oblique - The text is &quot;leaning&quot;
                                    (oblique is very similar to italic, but less supported)</li>
                                </ul>
                                <pre class="snippet"><code class="css">p.normal {
  font-style: normal;
}
p.italic {
  font-style: italic;
}
p.oblique {
  font-style: oblique;
}</code></pre>
                                <hr>
                                <h2>Font Size</h2>
                                <p>The <code>font-size</code> property sets the size of the text.</p>
                                <p>Being able to manage the text size is important in web design. However, you should not use font size adjustments to make paragraphs look like headings, or headings look like paragraphs.</p>
                                <p>Always use the proper HTML tags, like &lt;h1&gt; - &lt;h6&gt; for headings and &lt;p&gt; for paragraphs.</p>
                                <p>The font-size value can be an absolute, or relative size.</p>
                                <p>Absolute size:</p>
                                <ul>
                                    <li>Sets the text to a specified size</li>
                                    <li>Does not allow a user to change the text size in all browsers (bad for accessibility reasons)</li>
                                    <li>Absolute size is useful when the physical size of the output is known</li>
                                </ul>
                                <p>Relative size:</p>
                                <ul>
                                    <li>Sets the size relative to surrounding elements</li>
                                    <li>Allows a user to change the text size in browsers</li>
                                </ul>
                                <p class="note"><b>Note:</b> If you do not specify a font size, the default size for normal text, like paragraphs, is 16px (16px=1em).</p>
                                <hr>
                                <h2>Set Font Size With Pixels</h2>
                                <p>Setting the text size with pixels gives you full control over the text size:</p>
                                <pre class="snippet"><code class="css">h1 {
  font-size: 40px;
}
h2 {
  font-size: 30px;
}
p {
  font-size: 14px;
}</code></pre>
                                <p><b>Tip:</b> If you use pixels, you can still use the zoom tool to resize the entire page.</p>
                                <hr>
                                <h2>Set Font Size With Em</h2>
                                <p>To allow users to resize the text (in the browser menu), many developers use em instead of pixels.</p>
                                <p>The em size unit is recommended by the W3C.</p>
                                <p>1em is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px.</p>
                                <p>The size can be calculated from pixels to em using this formula: <i>pixels</i>/16=<i>em</i></p>
                                <pre class="snippet"><code class="css">h1 {
  font-size: 2.5em; /* 40px/16=2.5em */
}
h2 {
  font-size: 1.875em; /* 30px/16=1.875em */
}
p {
  font-size: 0.875em; /* 14px/16=0.875em */
}</code></pre>
                            <p>In the example above, the text size in em is the same as the previous example in pixels. However, with the em size, it is possible to adjust the text size in all browsers.</p>
                            <p>Unfortunately, there is still a problem with older versions of IE. The text becomes larger than it should when made larger, and smaller than it should when made smaller.</p>   
                            <hr>
                            <h2>Use a Combination of Percent and Em</h2>
                            <p>The solution that works in all browsers, is to set a default font-size in percent for the &lt;body&gt; element:</p>
                            <pre class="snippet"><code class="css">body {
  font-size: 100%;
}
h1 {
  font-size: 2.5em;
}
h2 {
  font-size: 1.875em;
}
p {
  font-size: 0.875em;
}</code></pre>
                            <p>Our code now works great! It shows the same text size in all browsers, and allows all browsers to zoom or resize the text!</p>
                            <hr>
                            <h2>Font Weight</h2>
                            <p>The <code>font-weight</code> property specifies the weight of a font:</p>
                            <pre class="snippet"><code class="css">p.normal {
  font-weight: normal;
}
p.thick {
  font-weight: bold;
}</code></pre>
                            <hr>
                            <h2>Responsive Font Size</h2>
                            <p>The text size can be set with a <code>vw</code> unit, which means the &quot;viewport width&quot;.</p>
                            <p>That way the text size will follow the size of the browser window:</p>
                            <div class="bg-gray p-4" style="margin-bottom: 1em;">
                                <h1 style="font-size:8vw;">Hello World</h1>
                                <p style="font-size:2vw;">Resize the browser window to see how the font size scales.</p>
                            </div>
                            <pre class="snippet"><code class="html">&lt;h1 style="font-size:10vw">Hello World&lt;/h1></code></pre>
                            <p class="note">Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.</p>
                            <hr>
                            <h2>Font Variant</h2>
                            <p>The <code>font-variant</code> property specifies whether or not a text should be displayed in a small-caps font.</p>
                            <p>In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.</p>
                            <pre class="snippet"><code class="css">p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}</code></pre>
                            <hr>
                            <h2>All CSS Font Properties</h2>
                            <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">font</th>
                                            <td>Sets all the font properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">font-family</th>
                                            <td>Specifies the font family for text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">font-size</th>
                                            <td>Specifies the font size of text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">font-style</th>
                                            <td>Specifies the font style for text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">font-variant</th>
                                            <td>Specifies whether or not a text should be displayed in a small-caps font</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">font-weight</th>
                                            <td> Specifies the weight of a font</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-text" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-icons" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


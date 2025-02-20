---
layout: documentation
title: CSS How To | Learn Computer Academy
permalink: css/css-howto/
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
                                <h1>CSS How To...</h1>
                                <hr>
                                <p>When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.</p>
                                <hr>
                                <h2>Three Ways to Insert CSS</h2>
                                <p>There are three ways of inserting a style sheet:</p>
                                <ul>
                                    <li>External style sheet</li>
                                    <li>Internal style sheet</li>
                                    <li>Inline style</li>
                                </ul>
                                <hr>
                                <h2>External Style Sheet</h2>
                                <p>With an external style sheet, you can change the look of an entire website by changing just one file!</p>
                                <p>Each page must include a reference to the external style sheet file inside the <code>&lt;link></code> element.</p>
                                <p><b>External styles are defined within the <code>&lt;link></code> element, inside the <code>&lt;head></code> section of an HTML page:</b></p>
                                <pre class="snippet"><code class="html">&lt;head>
    &lt;link rel="stylesheet" type="text/css" href="mystyle.css">
&lt;/head></code></pre>
                                <p>An external style sheet can be written in any text editor. The file should not contain any html tags. The style sheet file must be saved with a .css extension.</p>
                                <p>Here is how the "mystyle.css" file looks like:</p>
                                <pre class="snippet"><code class="css">body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}</code></pre>
                                <p><b>Note:</b> Do not add a space between the property value and the unit (such as <code>margin-left: 20 px;</code>). The correct way is: <code>margin-left: 20px;</code></p>
                                <hr>
                                <h2>Internal Style Sheet</h2>
                                <p>An internal style sheet may be used if one single page has a unique style.</p>
                                <p><b>Internal styles are defined within the &lt;style> element, inside the &lt;head> section of an HTML page:</b></p>
                                <pre class="snippet"><code class="html">&lt;head>
    &lt;style>
        body {
          background-color: linen;
        }
        h1 {
          color: maroon;
          margin-left: 40px;
        } 
    &lt;/style>
&lt;/head></code></pre>
                                <hr>
                                <h2>Inline Styles</h2>
                                <p>An inline style may be used to apply a unique style for a single element.</p>
                                <p>To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.</p>
                                <p><b>Inline styles are defined within the "style" attribute of the relevant element:</b></p>
                                <pre class="snippet"><code class="html">&lt;h1 style="color:blue;margin-left:30px;">This is a heading&lt;/h1></code></pre>
                                <p class="note"><b>Tip:</b> An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.</p>
                                <hr>
                                <h2>Multiple Style Sheets</h2>
                                <p>If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.</p> 
                                <p>Assume that an <b>external style sheet</b> has the following style for the &lt;h1> element:</p>
                                <pre class="snippet"><code class="css">h1 {
  color: navy;
}</code></pre>
                                <p>Then, assume that an <b>internal style sheet</b> also has the following style for the &lt;h1> element:</p>
                                <pre class="snippet"><code class="css">h1 {
  color: orange;    
}</code></pre>
                                <p>If the internal style is defined <b>after</b> the link to the external style sheet, the &lt;h1> elements will be "orange":</p>
                                <pre class="snippet"><code class="html">&lt;head>
    &lt;link rel="stylesheet" type="text/css" href="mystyle.css">
    &lt;style>
        h1 {
          color: orange;
        }
    &lt;/style>
&lt;/head></code></pre>    
                                <p>However, if the internal style is defined <b>before</b> the link to the external style sheet, the &lt;h1> elements will be "navy": </p>
                                <pre class="snippet"><code class="html">&lt;head>
    &lt;style>
        h1 {
          color: orange;
        }
    &lt;/style>
    &lt;link rel="stylesheet" type="text/css" href="mystyle.css">
&lt;/head></code></pre> 
                                <hr>
                                <h2>Cascading Order</h2>
                                <p>What style will be used when there is more than one style specified for an HTML element?</p>
                                <p>All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:</p>
                                <ol>
                                    <li>Inline style (inside an HTML element)</li>
                                    <li>External and internal style sheets (in the head section)</li>
                                    <li>Browser default</li>
                                </ol>
                                <p>So, an <i>inline style has the highest priority</i>, and will override external and internal styles and browser defaults.</p>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-syntax" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-colors" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

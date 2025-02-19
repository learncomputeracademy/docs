---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-specificity/
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
                                    <li class="breadcrumb-item active">Specificity</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Specificity?</h1>
                                <hr>
                                <h2>What is Specificity?</h2>
                                <p>If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.</p>
                                <p>Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.</p>
                                <p>The universal selector (*) has low specificity, while ID selectors are highly specific!&nbsp;</p>
                                <p class="note"><strong>Note:</strong> Specificity is a common reason why your CSS-rules don't apply to some elements, although you think they should.</p>
                                <hr>
                                <h2>Specificity Hierarchy </h2>
                                <p>Every selector has its place in the specificity hierarchy. There are four categories which define the specificity level of a selector:</p>
                                <p><strong>Inline styles</strong> - An inline style is attached directly to the element to be styled. Example: &lt;h1 style=&quot;color: #ffffff;&quot;&gt;.</p>
                                <p><strong>IDs</strong> - An ID is a unique identifier for the page elements, such as #navbar.</p>
                                <p><strong>Classes, attributes and pseudo-classes</strong> - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.</p>
                                <p><strong>Elements and pseudo-elements</strong> - This category includes element names and pseudo-elements, such as h1, div, :before and :after.</p>
                                <hr>
                                <h2>How to Calculate Specificity?</h2>
                                <p>Memorize how to calculate specificity!</p>
                                <p>Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.</p>
                                <p>Consider these three code fragments:</p>
                                <pre class="snippet"><code class="html">A: h1
B: #content h1
C: &lt;div id="content">&lt;h1 style="color: #ffffff">Heading&lt;/h1>&lt;/div></code></pre>
                                <p>The specificity of A is 1 (one element)<br>The specificity of B is 101 (one ID reference and one element)<br>The specificity of C is 1000 (inline styling)</p>
                                <p>Since 1 &lt; 101 &lt; 1000, the third rule (C) has a greater level of specificity, and therefore will be applied.</p>
                                <hr>
                                <h2>Specificity Rules</h2>
                                <p><strong>Equal specificity: the latest rule counts </strong>- If the same rule is written twice into the external style sheet, then the lower rule in the style sheet is closer to the element to be styled, and therefore will be applied:</p>
                                <pre class="snippet"><code class="css">h1 {background-color: yellow;}
h1 {background-color: red;}</code></pre>
                                <p>the <b>latter rule</b> is always applied.</p>
                                <hr>
                                <p><b>ID selectors have a higher specificity than attribute selectors - Look at the following three code lines:</b></p>
                                <pre class="snippet"><code class="css">div#a {background-color: green;}
#a {background-color: yellow;}
div[id=a] {background-color: blue;}</code></pre>
                                <p>the <b>first rule</b> is more specific than the other two, and will be applied.</p>
                                <hr>
                                <p><b>Contextual selectors are more specific than a single element selector</b> - The embedded style sheet is closer to the element to be styled. So in the following situation</p>
                                <pre class="snippet"><code class="html"><b>From external CSS file:</b>
#content h1 {background-color: red;}

<b>In HTML file:</b>
&lt;style>
    #content h1 {
      background-color: yellow;
    }
&lt;/style></code></pre>
                                <p>the latter rule will be applied.</p>

                                <hr>
                                <p><b>A class selector beats any number of element selectors</b> - a class selector such as .intro beats h1, p, div, etc:</p>
                                <pre class="snippet"><code class="css">.intro {background-color: yellow;}
h1 {background-color: red;}</code></pre>
                                <p><b>The universal selector and inherited values have a specificity of 0</b> - *, body * and similar have a zero specificity. Inherited values also have a specificity of 0.</p>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-units" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <!-- <a href="#" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a> -->
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

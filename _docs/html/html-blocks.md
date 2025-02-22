---
layout: documentation
title: HTML Blocks | Learn Computer Academy
permalink: html/html-blocks/
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
                                <h1>HTML Block and Inline Elements</h1>
                                <hr>
                                <p>Every HTML element has a default display value depending on what type of element it is.</p>
                                <p>The two display values are: block and inline.</p>
                                <hr>
                                <h2>Block-level Elements</h2>
                                <p>A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).</p>
                                <div class="border border-success p-2 mb-4">The &lt;div> element is a block-level element.</div>
                                <pre class="snippet"><code class="html">&lt;div>Hello World&lt;/div></code></pre>
                                <p>Block level elements in HTML:</p>
                                <p><code>&lt;address></code>  <code>&lt;article></code>  <code>&lt;aside></code>  <code>&lt;blockquote></code>  <code>&lt;canvas></code>  <code>&lt;dd></code>  <code>&lt;div></code>  <code>&lt;dl></code>  <code>&lt;dt></code>  <code>&lt;fieldset></code>  <code>&lt;figcaption></code>  <code>&lt;figure></code>  <code>&lt;footer></code>  <code>&lt;form></code>  <code>&lt;h1></code>-<code>&lt;h6></code></p> 
                                <p><code> &lt;header></code>  <code>&lt;hr></code>  <code>&lt;li></code>  <code>&lt;main></code>  <code>&lt;nav></code>  <code>&lt;noscript></code>  <code>&lt;ol></code>  <code>&lt;p></code>  <code>&lt;pre></code>  <code>&lt;section></code>  <code>&lt;table></code>  <code>&lt;tfoot></code>  <code>&lt;ul></code>  <code>&lt;video></code></p>
                                <hr>
                                <h2>Inline Elements</h2>
                                <p>An inline element does not start on a new line and only takes up as much width as necessary.</p>
                                <p>This is <span class="border border-success p-2 mb-4">an inline &lt;span> element inside</span> a paragraph.</p>
                                <pre class="snippet"><code class="html">&lt;span>Hello World&lt;/span></code></pre>
                                <p>Inline level elements in HTML:</p>
                                <p><code>&lt;a></code> <code>&lt;abbr></code> <code>&lt;acronym></code> <code>&lt;b></code> <code>&lt;bdo></code> <code>&lt;big></code> <code>&lt;br></code> <code>&lt;button></code> <code>&lt;dfn></code> <code>&lt;em></code> <code>&lt;i></code> <code>&lt;img></code> <code>&lt;input></code> <code>&lt;kbd></code> <code>&lt;label></code> <code>&lt;map></code> <code>&lt;object></code> <code>&lt;output></code> <code>&lt;q></code> <code>&lt;samp></code> 
                                <p><code>&lt;script></code> <code>&lt;select></code> <code>&lt;small></code> <code>&lt;span></code> <code>&lt;strong></code> <code>&lt;sub></code> <code>&lt;sup></code> <code>&lt;textarea></code> <code>&lt;time></code> <code>&lt;tt></code> <code>&lt;var></code></p>
                                <hr>
                                <h2>The &lt;div> Element</h2>
                                <p>The <code>&lt;div></code> element is often used as a container for other HTML elements.</p>
                                <p>The <code>&lt;div></code> element has no required attributes, but <code>style</code>, <code>class</code> and <code>id</code> are common.</p>
                                <p>When used together with CSS, the <code>&lt;div></code> element can be used to style blocks of content:</p>
                                <pre class="snippet"><code class="html">&lt;div style="background-color:black;color:white;padding:20px;">
    &lt;h2>London&lt;/h2>
    &lt;p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.&lt;/p>
&lt;/div></code></pre>
                                <hr>
                                <h2>The &lt;span> Element</h2>
                                <p>The <code>&lt;span></code> element is often used as a container for some text.</p>
                                <p>The <code>&lt;span></code> element has no required attributes, but <code>style</code>, <code>class</code> and <code>id</code> are common.</p>
                                <p>When used together with CSS, the <code>&lt;span></code> element can be used to style parts of the text:</p>
                                <pre class="snippet"><code class="html">&lt;h1>My &lt;span style="color:red">Important&lt;/span> Heading&lt;/h1></code></pre>
                                <hr>
                                <h2>HTML Grouping Tags</h2>
                                <table class="table table-striped">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Tag</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">&lt;div></th>
                                            <td>Defines a section in a document (block-level)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;span></th>
                                            <td>Defines a section in a document (inline)</td>
                                        </tr>  
                                    </tbody>
                                </table>
                                <p><i>For a complete list of all available HTML tags, visit our HTML Tag Reference.</i></p>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-lists" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-classes" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    
              


---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-head/
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
                                <h1>HTML Head</h1>
                                <hr>
                                <h2>The HTML &lt;head> Element</h2>
                                <p>The <code>&lt;head></code> element is a container for metadata (data about data) and is placed between the <code>&lt;html></code> tag and the <code>&lt;body></code> tag.</p>
                                <p>HTML metadata is data about the HTML document. Metadata is not displayed.</p>
                                <p>Metadata typically define the document title, character set, styles, scripts, and other meta information.</p>
                                <p>The following tags describe metadata: <code>&lt;title></code>, <code>&lt;style></code>, <code>&lt;meta></code>, <code>&lt;link></code>, <code>&lt;script></code>, and <code>&lt;base></code>.</p>
                                <hr>
                                <h2>The HTML &lt;title> Element</h2>
                                <p>The <code>&lt;title></code> element defines the title of the document, and is required in all HTML documents.</p>
                                <p>The <code>&lt;title></code> element:</p>
                                <ul>
                                    <li>defines a title in the browser tab</li>
                                    <li>provides a title for the page when it is added to favorites</li>
                                    <li>displays a title for the page in search engine results</li>
                                </ul>
                                <p>A simple HTML document:</p>
                                <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>

&lt;head>
  &lt;title>Page Title&lt;/title>
&lt;/head>

&lt;body>
The content of the document......
&lt;/body>

&lt;/html></code></pre>
                                <hr>
                                <h2>The HTML &lt;style> Element</h2>
                                <p>The <code>&lt;style></code> element is used to define style information for a single HTML page:</p>
                                <pre class="snippet"><code class="html">&lt;style>
    body {background-color: powderblue;}
    h1 {color: red;}
    p {color: blue;}
&lt;/style></code></pre>
                                <hr>
                                <h2>The HTML &lt;link>Element</h2>
                                <p>The <code>&lt;link></code> element is used to link to external style sheets:</p>   
                                <pre class="snippet"><code class="html">&lt;link rel="stylesheet" href="mystyle.css"></code></pre>
                                <hr>
                                <h2>The HTML &lt;meta> Element</h2>
                                <p>The <code>&lt;meta></code> element is used to specify which character set is used, page description, keywords, author, and other metadata.</p>
                                <p>Metadata is used by browsers (how to display content), by search engines (keywords), and other web services.</p>
                                <p>Define the character set used:</p>
                                <pre class="snippet"><code class="html">&lt;meta charset="UTF-8"></code></pre>
                                <p>Define a description of your web page:</p>
                                <pre class="snippet"><code class="html">&lt;meta name="description" content="Free Web tutorials"></code></pre>
                                <p>Define keywords for search engines:</p>
                                <pre class="snippet"><code class="html">&lt;meta name="keywords" content="HTML, CSS, XML, JavaScript"></code></pre>
                                <p>Define the author of a page:</p>
                                <pre class="snippet"><code class="html">&lt;meta name="author" content="John Doe"></code></pre>
                                <p>Refresh document every 30 seconds:</p>
                                <pre class="snippet"><code class="html">&lt;meta http-equiv="refresh" content="30"></code></pre>
                                <p>Example of &lt;meta> tags:</p>
                                <pre class="snippet"><code class="html">&lt;meta charset="UTF-8">
&lt;meta name="description" content="Free Web tutorials">
&lt;meta name="keywords" content="HTML,CSS,XML,JavaScript">
&lt;meta name="author" content="John Doe"></code></pre>
                                <hr>
                                <h2>Setting The Viewport</h2>
                                <p>HTML5 introduced a method to let web designers take control over the viewport, through the <code>&lt;meta></code> tag.</p>
                                <p>The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.</p>
                                <p>You should include the following <code>&lt;meta> </code>viewport element in all your web pages:</p>
                                <pre class="snippet"><code class="html">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"></code></pre>
                                <p>A <code>&lt;meta></code> viewport element gives the browser instructions on how to control the page's dimensions and scaling.</p>
                                <p>The <b>width=device-width</b> part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).</p>
                                <p>The <b>initial-scale=1.0</b> part sets the initial zoom level when the page is first loaded by the browser.</p>
                                <p>Here is an example of a web page without the viewport meta tag, and the same web page with the viewport <code>&lt;meta></code> tag:</p>
                                <p><b>Tip:</b> If you are browsing this page with a phone or a tablet, you can click on the two links below to see the difference.</p>
                                <hr>
                                <h2>The HTML &lt;script> Element</h2>
                                <p>The <code>&lt;script></code> element is used to define client-side JavaScripts.</p>
                                <p>This JavaScript writes "Hello JavaScript!" into an HTML element with id="demo":</p>
                                <pre class="snippet"><code class="html">&lt;script>
    function myFunction {
      document.getElementById("demo").innerHTML = "Hello JavaScript!";
    }
&lt;/script></code></pre>
                                <p><b>Tip:</b> To learn all about JavaScript, visit our <a href="https://www.w3schools.com/js/default.asp" target="_blank">JavaScript Tutorial</a>.</p>
                                <hr>
                                <h2>The HTML &lt;base> Element</h2>
                                <p>The <code>&lt;base></code> element specifies the base URL and base target for all relative URLs in a page:</p>
                                <pre class="snippet"><code class="html">&lt;base href="https://www.learncomputer.in/images/" target="_blank"></code></pre>
                                <hr>
                                <h2>Omitting &lt;html>, &lt;head> and &lt;body>?</h2>
                                <p>According to the HTML5 standard; the <code>&lt;html></code>, the <code>&lt;body></code>, and the <code>&lt;head></code> tag can be omitted.</p>
                                <p>The following code will validate as HTML5:</p>
                                <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;title>Page Title&lt;/title>

&lt;h1>This is a heading&lt;/h1>
&lt;p>This is a paragraph.&lt;/p></code></pre>
                                <p><b>Note:</b></p>
                                <ul>
                                    <li>Learn Computer Academy <u><i>does not recommend</i></u> omitting the <code>&lt;html></code> and <code>&lt;body></code> tags. Omitting these tags can crash DOM or XML software and produce errors in older browsers (IE9).</li>
                                    <li>However, omitting the <code>&lt;head></code> tag has been a common practice for quite some time now.</li>
                                </ul>
                                <hr>
                                <h2>HTML head Elements</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Tag</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">&lt;head></th>
                                            <td>Defines information about the document</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;title></th>
                                            <td>Defines the title of a document</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">&lt;base></th>
                                            <td>Defines a default address or a default target for all links on a page</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;link></th>
                                            <td>Defines the relationship between a document and an external resource</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;meta></th>
                                            <td>Defines metadata about an HTML document</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;script></th>
                                            <td>Defines a client-side script</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;style></th>
                                            <td>Defines style information for a document</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-filepaths" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-responsive" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

---
layout: documentation
title: Sementic Elements | Learn Computer Academy
permalink: html/semantic-elements/
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
                                <h1>HTML5 Semantic Elements</h1>
                                <hr>
                                <p>Semantics is the study of the meanings of words and phrases in a language.</p>
                                <p>Semantic elements = elements with a meaning.</p>
                                <hr>
                                <h2>What are Semantic Elements?</h2>
                                <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                                <p>Examples of non-semantic elements: <code>&lt;div></code> and <code>&lt;span></code> - Tells nothing about its content.</p>
                                <p>Examples of semantic elements: <code>&lt;form></code>, <code>&lt;table></code>, and <code>&lt;article></code> - Clearly defines its content.</p>
                                <hr>
                                <h2>New Semantic Elements in HTML5</h2>
                                <p>Many web sites contain HTML code like: <code>&lt;div id="nav"></code> <code>&lt;div class="header"></code> <code>&lt;div id="footer"></code> to indicate navigation, header, and footer.</p>
                                <p>HTML5 offers new semantic elements to define different parts of a web page:</p>  
                                <div class="row">
                                    <div class="col-md-6">
                                        <ul>
                                            <li>&lt;article></li>
                                            <li>&lt;aside></li>
                                            <li>&lt;details></li>
                                            <li>&lt;figcaption></li>
                                            <li>&lt;figure></li>
                                            <li>&lt;footer></li>
                                            <li>&lt;header></li>
                                            <li>&lt;main></li>
                                            <li>&lt;mark></li>
                                            <li>&lt;nav></li>
                                            <li>&lt;section></li>
                                            <li>&lt;summary></li>
                                            <li>&lt;time></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="img-block" >
                                            <img src="{{ site.baseurl }}/assets/img/sementic-tags.gif" alt="sementic-tags" style="border: 1px solid #ddd;">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <h2>HTML5 section> Element</h2>
                                <p>The <code>&lt;section></code> element defines a section in a document.</p>
                                <p>According to W3C's HTML5 documentation: "A section is a thematic grouping of content, typically with a heading."</p>
                                <p>A home page could normally be split into sections for introduction, content, and contact information.</p>
                                <pre class="snippet"><code class="html">&lt;section>
  &lt;h1>WWF&lt;/h1>
  &lt;p>The World Wide Fund for Nature (WWF) is....&lt;/p>
&lt;/section></code></pre>
                                <hr>
                                <h2>HTML5 &lt;article> Element</h2>
                                <p>The <code>&lt;article></code> element specifies independent, self-contained content.</p>
                                <p>An article should make sense on its own, and it should be possible to read it independently from the rest of the web site.</p>
                                <p>Examples of where an <code>&lt;article></code> element can be used:</p>
                                <ul>
                                    <li>Forum post</li>
                                    <li>Blog post</li>
                                    <li>Newspaper article</li>
                                </ul>
                                <pre class="snippet"><code class="html">&ltarticle>
  &lth1>What Does WWF Do?&lt/h1>
  &ltp>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.&lt/p>
&lt/article></code></pre>
                                <hr>
                                <h2>Nesting &lt;article> in &lt;section> or Vice Versa?</h2>
                                <p>The <code>&lt;article></code> element specifies independent, self-contained content.</p>
                                <p>The <code>&lt;section></code> element defines section in a document.</p>
                                <p>Can we use the definitions to decide how to nest those elements? No, we cannot!</p>
                                <p>So, on the Internet, you will find HTML pages with <code>&lt;section></code> elements containing <code>&lt;article></code> elements, and <code>&lt;article></code> elements containing <code>&lt;section></code> elements.</p>
                                <p>You will also find pages with <code>&lt;section></code> elements containing <code>&lt;section></code> elements, and <code>&lt;article></code> elements containing <code>&lt;article></code> elements.</p>
                                <p class="note">Example for a newspaper: The sport <code>&lt;article></code> in the sport section, may have a technical section in each <code>&lt;article></code>.</p>
                                <hr>
                                <h2>HTML5 &lt;header> Element</h2>
                                <p>The <code>&lt;header></code> element specifies a header for a document or section.</p>
                                <p>The <code>&lt;header></code> element should be used as a container for introductory content.</p>
                                <p>You can have several <code>&lt;header></code> elements in one document.</p>
                                <p>The following example defines a header for an article:</p>
                                <pre class="snippet"><code class="html">&lt;article>
  &lt;header>
    &lt;h1>What Does WWF Do?&lt;/h1>
    &lt;p>WWF's mission:&lt;/p>
  &lt;/header>
  &lt;p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.&lt;/p>
&lt;/article></code></pre>
                                <hr>
                                <h2>HTML5 &lt;footer> Element</h2>
                                <p>The <code>&lt;footer></code> element specifies a footer for a document or section.</p>
                                <p>A <code>&lt;footer></code> element should contain information about its containing element.</p>
                                <p>A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.</p>
                                <p>You may have several <code>&lt;footer></code> elements in one document.</p>
                                <pre class="snippet"><code class="html">&lt;footer>
  &lt;p>Posted by: Hege Refsnes&lt;/p>
  &lt;p>Contact information: &lt;a href="mailto:someone@example.com">someone@example.com&lt;/a>.&lt;/p>
&lt;/footer></code></pre>
                                <hr>
                                <h2>HTML5 &lt;nav> Element</h2>
                                <p>The <code>&lt;nav></code> element defines a set of navigation links.</p>
                                <p class="note">Notice that <b>NOT</b> all links of a document should be inside a <code>&lt;nav></code> element. The <code>&lt;nav></code> element is intended only for major block of navigation links.</p>
                                <pre class="snippet"><code class="html">&lt;nav>
  &lt;a href="/html/">HTML&lt;/a> 
  &lt;a href="/css/">CSS&lt;/a> 
  &lt;a href="/js/">JavaScript&lt;/a> 
  &lt;a href="/jquery/">jQuery&lt;/a>
&lt;/nav></code></pre>
                                <hr>
                                <h2>HTML5 &lt;aside> Element</h2>
                                <p>The <code>&lt;aside></code> element defines some content aside from the content it is placed in (like a sidebar).</p>
                                <p>The <code>&lt;aside></code> content should be related to the surrounding content.</p>
                                <pre class="snippet"><code class="html">&lt;p>My family and I visited The Epcot center this summer.&lt;/p>

&lt;aside>
  &lt;h4>Epcot Center&lt;/h4>
  &lt;p>The Epcot Center is a theme park in Disney World, Florida.&lt;/p>
&lt;/aside></code></pre>
                                <hr>
                                <h2>HTML5 &lt;figure> and &lt;figcaption> Elements</h2>
                                <p>The purpose of a figure caption is to add a visual explanation to an image.</p>
                                <p>In HTML5, an image and a caption can be grouped together in a <code>&lt;figure></code> element:</p>
                                <pre class="snippet"><code class="html">&lt;figure>
  &lt;img src="pic_trulli.jpg" alt="Trulli">
  &lt;figcaption>Fig1. - Trulli, Puglia, Italy.&lt;/figcaption>
&lt;/figure></code></pre>
                                <p>The <code>&lt;img></code> element defines the image, the <code>&lt;figcaption></code> element defines the caption.</p>
                                <hr>
                                <h2>Why Semantic Elements?</h2>
                                <p>With HTML4, developers used their own id/class names to style elements: header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, etc.</p>
                                <p>This made it impossible for search engines to identify the correct web page content.</p>
                                <p>With the new HTML5 elements (<code>&lt;header></code> <code>&lt;footer></code> <code>&lt;nav></code> <code>&lt;section></code> <code>&lt;article></code>), this will become easier.</p>
                                <p>According to the W3C, a Semantic Web: "Allows data to be shared and reused across applications, enterprises, and communities."</p>
                                <hr>
                                <h2>Semantic Elements in HTML5</h2>
                                <p>Below is an alphabetical list of the new semantic elements in HTML5.</p>
                                <p>The links go to our complete HTML5 Reference.</p>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html5-new-elements" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-article" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

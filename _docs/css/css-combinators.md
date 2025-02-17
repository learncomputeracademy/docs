---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-combinators/
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
                                    <li class="breadcrumb-item active">Combinators</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Combinators</h1>
                                <hr>
                                <h2>CSS Combinators</h2>
                                <p class="note">A combinator is something that explains the relationship between the selectors.</p>
                                <p>A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.</p>
                                <p>There are four different combinators in CSS:</p>
                                <ul>
                                    <li>descendant selector (space)</li>
                                    <li>child selector (&gt;)</li>
                                    <li>adjacent sibling selector (+)</li>
                                    <li>general sibling selector (~)</li>
                                </ul>
                                <hr>
                                <h2>Descendant Selector</h2>
                                <p>The descendant selector matches all elements that are descendants of a specified element.</p>
                                <p>The following example selects all &lt;p&gt; elements inside &lt;div&gt; elements:&nbsp;</p>
                                <pre class="snippet"><code class="css">div p {
  background-color: yellow;
}</code></pre>
                                <hr>
                                <h2>Child Selector</h2>
                                <p>The child selector selects all elements that are the children of a specified element.</p>
                                <p>The following example selects all &lt;p&gt; elements that are children of a &lt;div&gt; element:</p>
                                <pre class="snippet"><code class="css">div > p {
  background-color: yellow;
}</code></pre>
                                <hr>
                                <h2>Adjacent Sibling Selector</h2>
                                <p>The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.</p>
                                <p>Sibling elements must have the same parent element, and &quot;adjacent&quot; means &quot;immediately following&quot;.</p>
                                <p>The following example selects all &lt;p&gt; elements that are placed immediately after &lt;div&gt; elements:</p>
                                <pre class="snippet"><code class="css">div + p {
  background-color: yellow;
}</code></pre>
                                <hr>
                                <h2>General Sibling Selector</h2>
                                <p>The general sibling selector selects all elements that are siblings of a specified element.</p>
                                <p>The following example selects all &lt;p&gt; elements that are siblings of &lt;div&gt; elements:&nbsp;</p>
                                <pre class="snippet"><code class="css">div ~ p {
  background-color: yellow;
}</code></pre>
                                <hr>
                                <h2>All CSS Combinator Selectors</h2>
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
                                            <th scope="row">element element</th>
                                            <td>div p</td>
                                            <td>Selects all &lt;p> elements inside &lt;div> elements</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">element>element</th>
                                            <td>div > p</td>
                                            <td>Selects all &lt;p> elements where the parent is a &lt;div> element</td>
                                        </tr>  
                                        <tr>
                                            <th scope="row">element+element</th>
                                            <td>div + p</td>
                                            <td>Selects all &lt;p> elements that are placed immediately after &lt;div> elements</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">element1~element2</th>
                                            <td>p ~ ul</td>
                                            <td>Selects every &lt;ul> element that are preceded by a &lt;p> element</td>
                                        </tr>                                                                              
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-align" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-pseudo-classes" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


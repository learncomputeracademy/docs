---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-list/
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
                                    <li class="breadcrumb-item active">List</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Lists</h1>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>Unordered Lists:</h2>
                                        <ul style="list-style:circle">
                                            <li>Coffee</li>
                                            <li>Tea</li>
                                            <li>Coca Cola</li>
                                        </ul>
                                        <ul style="list-style:square">
                                            <li>Coffee</li>
                                            <li>Tea</li>
                                            <li>Coca Cola</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <h2>Ordered Lists:</h2>  
                                        <ol style="list-style:decimal">
                                            <li>Coffee</li>
                                            <li>Tea</li>
                                            <li>Coca Cola</li>
                                        </ol>
                                        <ol style="list-style:lower-alpha">
                                            <li>Coffee</li>
                                            <li>Tea</li>
                                            <li>Coca Cola</li>
                                        </ol>
                                    </div>
                                </div>
                                <hr>
                                <h2>HTML Lists and CSS List Properties</h2>
                                <p>In HTML, there are two main types of lists:</p>
                                <ul>
                                  <li>unordered lists (&lt;ul&gt;) - the list items are marked with bullets</li>
                                  <li>ordered lists (&lt;ol&gt;) - the list items are marked with numbers or letters</li>
                                </ul>
                                <p>The CSS list properties allow you to:</p>
                                <ul>
                                  <li>Set different list item markers for ordered lists</li>
                                  <li>Set different list item markers for unordered lists</li>
                                  <li>Set an image as the list item marker</li>
                                  <li>Add background colors to lists and list items</li>
                                </ul>
                                <hr>
                                <h2>Different List Item Markers</h2>
                                <p>The <code>list-style-type</code> property specifies the type of list item marker.</p>
                                <p>The following example shows some of the available list item markers: </p>
                                <pre class="snippet"><code class="css">ul.a {
  list-style-type: circle;
}
ul.b {
  list-style-type: square;
}
ol.c {
  list-style-type: upper-roman;
}
ol.d {
  list-style-type: lower-alpha;
}</code></pre>
                                <p class="note"><b>Note:</b> Some of the values are for unordered lists, and some for ordered lists.</p>
                                <hr>
                                <h2>An Image as The List Item Marker</h2>
                                <p>The <code>list-style-image</code> property specifies an image as the list item marker:</p>
                                <pre class="snippet"><code class="css">ul {
  list-style-image: url('cat.png');
}</code></pre>
                                <ul style="list-style-image: url('assets/img/cat.png');">
                                  <li>Coffee</li>
                                  <li>Tea</li>
                                  <li>Coca Cola</li>
                                </ul>
                                <hr>
                                <h2>Position The List Item Markers</h2>
                                <p>The <code>list-style-position</code> property specifies the position of the list-item markers 
                                (bullet points).</p>
                                <p>&quot;list-style-position: outside;&quot; means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. 
                                This is default:</p>
                                <ul style="list-style-position:outside;width:25%;">
                                    <li style="border:1px solid #000000;">Coffee -
                                    <span style="display: inline !important; float: none; background-color: transparent; color: rgb(0, 0, 0); font-family: Times New Roman; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; list-style-position: inside; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">
                                    A brewed drink prepared from roasted coffee beans...</span></li>
                                    <li style="border:1px solid #000000;border-top:0;">Tea</li>
                                    <li style="border:1px solid #000000;border-top:0;">Coca-cola</li>
                                </ul>
                                <p>&quot;list-style-position: inside;&quot; means that the bullet points will be inside the list item. As it is part of the list item, it will be part of the text and 
                                push the text at the start:</p>
                                <ul style="list-style-position:inside;width:25%;">
                                    <li style="border:1px solid #000000;">Coffee -
                                    <span style="display: inline !important; float: none; background-color: transparent; color: rgb(0, 0, 0); font-family: Times New Roman; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; list-style-position: inside; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">
                                    A brewed drink prepared from roasted coffee beans...</span></li>
                                    <li style="border:1px solid #000000;border-top:0;">Tea</li>
                                    <li style="border:1px solid #000000;border-top:0;">Coca-cola</li>
                                </ul>
                                <pre class="snippet"><code class="css">ul.a {
  list-style-position: outside;
}
ul.b {
  list-style-position: inside;
}</code></pre>
                                <hr>
                                <h2>Remove Default Settings</h2>
                                <p>The <code>list-style-type:none</code> property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add <code>margin:0</code> and <code>padding:0</code> to &lt;ul&gt; or &lt;ol&gt;:</p>
                                <pre class="snippet"><code class="css">ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}</code></pre>
                                <p>Default list:</p>
                                <ul>
                                  <li>Coffee</li>
                                  <li>Tea</li>
                                  <li>Coca Cola</li>
                                </ul>
                                <p>Remove bullets, margin and padding:</p>
                                <ul style="list-style-type: none; margin: 0; padding: 0;">
                                  <li>Coffee</li>
                                  <li>Tea</li>
                                  <li>Coca Cola</li>
                                </ul>
                                <hr>
                                <h2>List - Shorthand property</h2>
                                <p>The <code>list-style</code> property is a shorthand property. It is used to set all the list properties in one declaration:</p>
                                <pre class="snippet"><code class="css">ul {
  list-style: square inside url('cat.png');
}</code></pre>
                                <ul style="list-style: square inside url('assets/img/cat.png');">
                                  <li>Coffee</li>
                                  <li>Tea</li>
                                  <li>Coca Cola</li>
                                </ul>
                                <hr>
                                <p>When using the shorthand property, the order of the property values are:</p>
                                <ul>
                                    <li><code>list-style-type</code> (if a list-style-image is specified, the value of this property will be displayed if the image for some reason cannot be displayed)</li>
                                    <li><code>list-style-position</code> (specifies whether the list-item markers should appear inside or outside the content flow)</li>
                                    <li><code>list-style-image</code> (specifies an image as the list item marker)</li>
                                </ul>
                                <p>If one of the property values above are missing, the default value for the missing property will be inserted, if any.</p>
                                <hr>
                                <h2>Styling List With Colors</h2>
                                <p>We can also style lists with colors, to make them look a little more interesting.</p>
                                <p>Anything added to the &lt;ol&gt; or &lt;ul&gt; tag, affects the entire list, while properties added to the &lt;li&gt; tag will affect the individual list items:</p>
                                <pre class="snippet"><code class="css">ol {
  background: #ff9999;
  padding: 20px;
}
ul {
  background: #3399ff;
  padding: 20px;
}
ol li {
  background: #ffe5e5;
  padding: 5px;
  margin-left: 35px;
}
ul li {
  background: #cce5ff;
  margin: 5px;
}</code></pre>
                            <ol style="  background: #ff9999; padding: 20px;">
                              <li style="background: #ffe5e5; padding: 5px; margin-left: 35px;">Coffee</li>
                              <li style="background: #ffe5e5; padding: 5px; margin-left: 35px;">Tea</li>
                              <li style="background: #ffe5e5; padding: 5px; margin-left: 35px;">Coca Cola</li>
                            </ol>
                            <ul style="background: #3399ff; padding: 20px;">
                              <li style="background: #cce5ff; margin: 5px;">Coffee</li>
                              <li style="background: #cce5ff; margin: 5px;">Tea</li>
                              <li style="background: #cce5ff; margin: 5px;">Coca Cola</li>
                            </ul>
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
                                        <th scope="row">list-style</th>
                                        <td>Sets all the properties for a list in one declaration</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">list-style-image </th>
                                        <td>Specifies an image as the list-item marker</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">list-style-position</th>
                                        <td>Specifies the position of the list-item markers (bullet points)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">list-style-type</th>
                                        <td>Specifies the type of list-item marker</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-link" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-table" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-float
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
                                    <li class="breadcrumb-item active">Float</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - float and clear</h1>
                                <hr>
                                <p>The CSS <code>float</code> property specifies how an element should float.</p>
                                <p>The CSS <code>clear</code> property specifies what elements can float beside the cleared element and on which side.</p>
                                <div class="clearfix">
                                    <div style="background-color:#2196F3;padding:16px;float:left;width:30%;opacity:0.85;text-align:center;color:#fff;">
                                        <span class="floatl">Float Left</span>
                                    </div>
                                    <div style="background-color:#F44336;padding:16px;float:right;width:30%;opacity:0.85;text-align:center;color:#fff;">
                                        <span class="floatr">Float Right</span>
                                    </div>
                                </div>
                                <hr>
                                <h2>The float Property</h2>
                                <p>The <code>float</code> property is used for positioning and formatting content e.g. let an image float left to the text in a container.</p>
                                <p>The <code>float</code> property can have one of the following values:</p>
                                <ul>
                                    <li>left - The element floats to the left of its container</li>
                                    <li>right - The element floats to the right of its container</li>
                                    <li>none - The element does not float (will be displayed just where it occurs in the text). This is default</li>
                                    <li>inherit - The element inherits the float value of its parent</li>
                                </ul>
                                <p>In its simplest use, the <code>float</code> property can be used to wrap text around images.</p>
                                <hr>
                                <h2>Example - float: right;</h2>
                                <p>The following example specifies that an image should float to the <strong>right</strong> in a text:</p>
                                <div class="clearfix">
                                    <p class="img-thumbnail p-4"><img src="{{ site.baseurl }}/assets/img/cat-dog.jpg" alt="cat" style="width:120px;height:auto;float:right;margin-left:15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <span>Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...</span></p>
                                </div>
                                <pre class="snippet"><code class="css">img {
  float: right;
}</code></pre>
                                <hr>
                                <h2>Example - float: left;</h2>
                                <p>The following example specifies that an image should float to the <strong>left</strong> in a text:</p>
                                <div class="clearfix">
                                    <p class="img-thumbnail p-4"><img src="{{ site.baseurl }}/assets/img/cat-dog.jpg" alt="cat" style="width:120px;height:auto;float:left;margin-right:15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <span class="w3-hide-small">Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...</span></p>
                                </div>
                                <pre class="snippet"><code class="css">img {
  float: left;
}</code></pre>
                                <hr>
                                <h2>Example - No float</h2>
                                <p>In the following example the image will be displayed just where it occurs in the text (float: none;):</p>
                                <div>
                                    <p class="img-thumbnail p-4"><img src="{{ site.baseurl }}/assets/img/cat-dog.jpg" alt="cat" style="max-width:185px;width:50%;float:none;">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. <span class="w3-hide-small">Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...</span></p>
                                </div>
                                <pre class="snippet"><code class="css">img {
  float: none;
}</code></pre>
                                <hr>
                                <h2>The clear Property</h2>
                                <p>The <code>clear</code> property specifies what elements can float beside the cleared element and on which side.</p>
                                <p>The <code>clear</code> property can have one of the following values:</p>
                                <ul>
                                    <li>none - Allows floating elements on both sides. This is default</li>
                                    <li>left - No floating elements allowed on the left side</li>
                                    <li>right- No floating elements allowed on the right side</li>
                                    <li>both - No floating elements allowed on either the left or the right side</li>
                                    <li>inherit - The element inherits the clear value of its parent</li>
                                </ul>
                                <p>The most common way to use the <code>clear</code> property is after you have used a <code>float</code> property on an element.</p>
                                <p>When clearing floats, you should match the clear to the float: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.</p>
                                <p>The following example clears the float to the left. Means that no floating elements are allowed on the left side (of the div):</p>
                                <pre class="snippet"><code class="css">img {
  float: left;
}</code></pre>
                                <hr>
                                <h2>The clearfix Hack</h2>
                                <p>If an element is taller than the element containing it, and it is floated, it will "overflow" outside of its container:</p>
                                <div>
                                <div style="margin-bottom: 1rem;" class="img-thumbnail p-4">
                                    <div>
                                        <h3>Without Clearfix</h3>
                                        <img src="{{ site.baseurl }}/assets/img/without-float.jpg" style="max-width:75%;">
                                    </div>
                                    <div>
                                        <h3>With Clearfix</h3>
                                        <img src="{{ site.baseurl }}/assets/img/with-float.jpg" style="max-width:75%;">
                                    </div>
                                </div>
                                <p>Then we can add <code class="w3-codespan">overflow: auto;</code> to the containing element to fix this problem:</p>
                                <pre class="snippet"><code class="css">.clearfix {
  overflow: auto;
}</code></pre>
                                <p>The <code>overflow: auto</code> clearfix works well as long as you are able to keep control of your margins and padding (else you might see scrollbars). The <b>new, modern clearfix hack</b> however, is safer to use, and the following code is used for most webpages:</p>
                                <pre class="snippet"><code class="css">.clearfix::after {
  content: "";
  clear: both;
  display: table;
}</code></pre>
                                <p class="note">You will learn more about the <code>::after</code> pseudo-element in a later chapter.</p>
                                <hr>
                                <h2>Grid of Boxes / Equal Width Boxes</h2>
                                <div style="margin-bottom: 1rem;" class="clearfix">
                                  <div style="background-color:#bbb;padding: 20px;text-align: center;float: left;max-width: 50%;width: 50%;">
                                    <p>Box 1</p>
                                  </div>
                                  <div style="background-color:#ccc;padding: 20px;text-align: center;float: left;max-width: 50%;width: 50%;">
                                    <p>Box 2</p>
                                  </div>
                                </div>
                                <br>
                                <div style="margin-bottom:1rem;" class="clearfix">
                                  <div style="background-color:#bbb;padding: 20px;text-align: center;float: left;max-width: 33.333%;width: 33.333%;">
                                    <p>Box 1</p>
                                  </div>
                                  <div style="background-color:#ccc;padding: 20px;text-align: center;float: left;max-width: 33.333%;width: 33.333%;"">
                                    <p>Box 2</p>
                                 </div>
                                  <div style="background-color:#ddd;padding: 20px;text-align: center;float: left;max-width: 33.333%;width: 33.333%;"">
                                    <p>Box 3</p>
                                  </div>
                                </div>
                                <p>With the <code>float</code> property, it is easy to float boxes of content side by side:</p>
                                <pre class="snippet"><code class="css">* {
  box-sizing: border-box;
}
.box {
  float: left;
  width: 33.33%; /* three boxes (use 25% for four, and 50% for two, etc) */
  padding: 50px; /* if you want space between the images */
}</code></pre>
                                <p class="note"><b>What is box-sizing?</b><br>
                                You can easily create three floating boxes side by side. However, when you add something that enlarges the width of each box (e.g. padding or borders), the box will break. The <code>box-sizing</code> property allows us to include the padding and border in the box's total width (and height), making sure that the padding stays inside of the box and that it does not break.<br>
                                You can read more about the box-sizing property in our CSS Box Sizing Chapter.</p>
                                <hr>
                                <h2>Images Side By Side</h2>
                                <div style="margin-bottom: 1rem;">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="{{ site.baseurl }}/assets/img/img_float1.jpg" alt="Italy" title="Italy" class="img-fluid">
                                        </div>
                                        <div class="col-md-4">
                                            <img src="{{ site.baseurl }}/assets/img/img_float2.jpg" alt="Forest" title="Forest" class="img-fluid">
                                        </div>
                                        <div class="col-md-4">
                                            <img src="{{ site.baseurl }}/assets/img/img_float3.jpg" alt="Mountains" title="Mountains" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                                <p>The grid of boxes can also be used to display images side by side:</p>
                                <pre class="snippet"><code class="css">.img-container {
  float: left;
  width: 33.33%; /* three containers (use 25% for four, and 50% for two, etc) */
  padding: 5px; /* if you want space between the images */
}</code></pre>
                                <hr>
                                <h2>Equal Height Boxes</h2>
                                <p>In the previous example, you learned how to float boxes side by side with an equal width. However, it is not easy to create floating boxes with equal heights. A quick fix 
                                however, is to set a fixed height, like in the example below:</p>
                                <div class="clearfix">
                                  <div style="background-color:#bbb;width:50%;height:300px;float:left;padding: 20px;">
                                      <h2>Box 1</h2>
                                      <p>Some content, some content, some content</p>
                                  </div>
                                  <div style="background-color:#ccc;width:50%;height:300px;float:left;padding: 20px;">
                                      <h2>Box 2</h2>
                                      <p>Some content, some content, some content</p>
                                      <p>Some content, some content, some content</p>
                                      <p>Some content, some content, some content</p>
                                  </div>
                                </div>
                                <pre class="snippet"><code class="css">.box {
  height: 300px;
}</code></pre>
                                <p class="note"><b>However</b>, this is not very flexible. It is ok if you can guarantee that the boxes will always have the same amount of content in them. But many times, the content is not the same. If you try the example above on a mobile phone, you will see that the second box's content will be displayed outside of the box. This is where CSS3 Flexbox comes in handy - as it can automatically stretch boxes to be as long as the longest box:</p>
                                <hr>
                                <h2>Navigation Menu</h2>
                                <p>Use <code>float</code> with a list of hyperlinks to create a horizontal menu:</p>
                                <div>
                                    <img src="{{ site.baseurl }}/assets/img/menu-strip-2.gif" alt="menu" class="img-fluid">
                                </div>
                                <hr>
                                <h2>All CSS Float Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">box-sizing</th>
                                            <td>Defines how the width and height of an element are calculated: should they include padding and borders, or not</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">clear</th>
                                            <td>Specifies what elements can float beside the cleared element and on which side</td>
                                        </tr>   
                                        <tr>
                                            <th scope="row">float</th>
                                            <td>Specifies how an element should float</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">overflow</th>
                                            <td>Specifies what happens if content overflows an element's box</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">overflow-x</th>
                                            <td>Specifies what to do with the left/right edges of the content if it overflows the element's content area</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">overflow-y</th>
                                            <td>Specifies what to do with the top/bottom edges of the content if it overflows the element's content area</td>
                                        </tr>                                                                                                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-overflow" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-inline-block" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

---
layout: documentation
title: CSS Position | Learn Computer Academy
permalink: css/css-positioning/
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
                                    <li class="breadcrumb-item active">Position</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - The position Property</h1>
                                <hr>
                                <p>The <code>position</code> property specifies the type of positioning method used for an element.</p>
                                <hr>
                                <p>There are five different position values: </p>
                                <ul>
                                    <li><code class="w3-codespan">static</code></li>
                                    <li><code class="w3-codespan">relative</code></li>
                                    <li><code class="w3-codespan">fixed</code></li>
                                    <li><code class="w3-codespan">absolute</code></li>
                                    <li><code class="w3-codespan">sticky</code></li>
                                </ul>
                                <p>Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the <code>position</code> 
                                property is set first. They also work differently depending on the position value.</p>
                                <hr>
                                <h2>position: static;</h2>
                                <p>HTML elements are positioned static by default.</p>
                                <p>Static positioned elements are not affected by the top, bottom, left, and right properties.</p>
                                <p>An element with <code>position: static;</code> is not positioned in any special way; it is always positioned according to the normal flow of the page:</p>
                                <div style="border-width:3px;border-style:solid;position:static;margin-bottom: 1rem;">
                                    This &lt;div&gt; element has position: static;
                                </div>
                                <p>Here is the CSS that is used:</p>
                                <pre class="snippet"><code class="css">div.static {
  position: static;
  border: 3px solid #73AD21;
}</code></pre>
                                <hr>
                                <h2>position: relative;</h2>
                                <p>An element with <code class="w3-codespan">position: relative;</code> is positioned relative to its normal position.</p>
                                <p>Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.</p>
                                <div style="border-width:3px;border-style:solid;position:relative;left:30px;margin-bottom: 1rem;">
                                This &lt;div&gt; element has position: relative;
                                </div>
                                <p>Here is the CSS that is used:</p>
                                <pre class="snippet"><code class="css">div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}</code></pre>
                                <hr>
                                <h2>position: fixed;</h2>
                                <p>An element with <code>position: fixed;</code> is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.</p>
                                <p>A fixed element does not leave a gap in the page where it would normally have been located.</p>
                                <p>Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:</p>
                                <div style="border-width:1px;background-color:rgba(0,84,209,0.3);border-style:solid;border-color:#00bcd4;color:#fff;position:fixed;padding:7px;bottom:0;right:0;max-width:450px;z-index:999">
                                    This &lt;div&gt; element has <code>position: fixed;</code>
                                </div>
                                <pre class="snippet"><code class="css">div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}</code></pre>
                                <hr>
                                <h2>position: absolute;</h2>
                                <p>An element with <code class="w3-codespan">position: absolute;</code> is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).</p>
                                <p>However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.</p>
                                <p><b>Note:</b> A &quot;positioned&quot; element is one whose position is anything except <code>static</code>.</p>
                                <p>Here is a simple example:</p>
                                <div style="border-width:3px;border-style:solid;border-color:#0054D1;position: relative;width: 400px;height: 200px; margin-bottom: 1rem;">
                                    This &lt;div&gt; element has position: relative;

                                    <div style="border-width:3px;border-style:solid;border-color:#0054D1;position: absolute;top: 80px;right: 0;width: 200px;height: 100px;">
                                        This &lt;div&gt; element has position: absolute;
                                    </div>
                                </div>
                                <p>Here is the CSS that is used:</p>
                                <pre class="snippet"><code class="css">div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #0054D1;
} 
div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #0054D1;
}</code></pre>
                                <hr>
                                <h2>position: sticky;</h2>
                                <p>An element with <code>position: sticky;</code> is positioned based on the user's scroll position.</p>
                                <p>A sticky element toggles between <code>relative</code> and <code>fixed</code>, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).</p>
                                <div style="border: 3px solid;padding: 1%;height: 200px;overflow-x: auto;margin-bottom: 1rem;">
                                    <p><b>Try to scroll inside this frame to understand how sticky positioning works.</b></p>
                                    <p><b>Note: IE/Edge 15 and earlier versions do not support sticky position.</b></p>
                                    <div style="  position: -webkit-sticky; /* Safari */position: sticky;top: -12px;background-color: #0054D1; color:#fff; border: 2px solid #2196f3;">I am sticky!</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos deserunt porro corrupti, harum quos itaque! Facilis corporis hic tempore, alias repellat minima optio. Ab ea autem mollitia sunt fuga, ut quasi quisquam alias, magni dolore assumenda. Quidem praesentium dicta, totam voluptate, pariatur officia! Voluptates quam ad alias quidem aperiam, adipisci eum ipsam magnam enim, non doloribus suscipit illo consequatur labore ab vero maxime quas ullam dolor, recusandae quos, officiis ipsa. Harum, atque aliquam et doloremque sed eaque temporibus dolores, deserunt rem quibusdam assumenda dicta eius, voluptatibus amet nisi optio consequuntur soluta sequi fuga eum quasi velit odio excepturi impedit. Odio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, fuga perspiciatis rem asperiores, eum provident temporibus alias magni modi iste tenetur distinctio voluptatem? Quae eveniet, earum eaque. Fugiat labore harum, atque porro, fugit odio amet. Quam, rerum dolore, adipisci laudantium consectetur quae. Neque eius deserunt similique, aliquid quis deleniti eaque, animi atque molestiae magni doloribus officiis fuga aut a expedita in ad vitae illo voluptatem. Unde beatae sint laudantium, ipsa corrupti vel repudiandae cupiditate repellendus ex modi similique dolor laboriosam vitae officia cum aut, consectetur laborum iusto at! Nobis, quisquam sit rerum ea vero, reiciendis eligendi aliquam labore sint quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, iste, eligendi. Natus nemo aut quos adipisci, ipsum impedit eligendi, voluptatibus ab qui enim aspernatur, beatae aliquid id molestiae veritatis eveniet harum illo dolor quaerat eos blanditiis explicabo. Optio repellat neque quod nulla molestias ut nisi, corporis minima sint. Perspiciatis, modi vitae vero sit quibusdam magnam quo unde! Nisi iure non illo provident, voluptatum harum, dicta quia facilis, dolorum totam dignissimos maiores, itaque porro unde! Non inventore ullam quidem repellendus neque voluptates distinctio itaque eaque voluptatum ad. Eos repellendus debitis, totam deleniti quidem eligendi alias ratione, est, soluta, facilis rem. Eaque?</p>
                                </div>
                                <p class="note"><b>Note:</b> Internet Explorer, Edge 15 and earlier versions do not support sticky positioning. Safari requires a -webkit- prefix (see example below). You must also specify at least one of top, right, bottom or left for sticky positioning to work.</p>
                                <p>In this example, the sticky element sticks to the top of the page (<code>top: 0</code>), when you reach its scroll position.</p>
                                <pre class="snippet"><code class="css">div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}</code></pre>
                                <h2>Overlapping Elements</h2>
                                <p>When elements are positioned, they can overlap other elements.</p>
                                <p>The <code>z-index</code> property specifies the stack order of an element (which element should be placed in front of, or behind, the others).</p>
                                <p>An element can have a positive or negative stack order:</p>
                                <div style="position:relative;padding:80px;box-shadow: 0 0 15px 0 rgba(0,0,0,.3);">
                                    <h1 style="position:absolute;left:35px;top:15px;z-index:2;color: #000;">This is a heading</h1>
                                    <img style="position:absolute;left:30px;top:15px;z-index:1;" src="{{ site.baseurl }}/assets/img/cat-img.jpg" width="100" height="auto" class="rounded-circle">
                                    <p style="position:absolute;left:35px;top:65px;z-index:2;color: #000;">Because the image has a z-index of -1, it will be placed behind the text.</p>
                                </div>
                                <pre class="snippet"><code class="css">img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}</code></pre>
                                <p>An element with greater stack order is always in front of an element with a lower stack order.</p>
                                <p class="note"><b>Note:</b> If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top.</p>
                                <hr>
                                <h2>Positioning Text In an Image</h2>
                                <p>How to position text over an image:</p>
                                <div class="img-thumbnail">
                                    <img src="assets/img/text-over-img.jpg" alt="" class="img-fluid">
                                </div>
                                <hr>
                                <h2>All CSS Positioning Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">bottom</th>
                                            <td>Sets the bottom margin edge for a positioned box</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">clip</th>
                                            <td>Clips an absolutely positioned element</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">left</th>
                                            <td>Sets the left margin edge for a positioned box</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">position</th>
                                            <td>Specifies the type of positioning for an element</td>
                                        </tr>                                         
                                        <tr>
                                            <th scope="row">right</th>
                                            <td>Sets the right margin edge for a positioned box</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">top</th>
                                            <td>Sets the top margin edge for a positioned box</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">z-index</th>
                                            <td>Sets the stack order of an element</td>
                                        </tr>                                       
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-max-width" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-overflow" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


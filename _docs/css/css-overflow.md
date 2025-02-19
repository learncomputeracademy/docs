---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-overflow/
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
                                    <li class="breadcrumb-item active">Overflow</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Layout - Overflow</h1>
                                <hr>
                                <p>The CSS <code>overflow</code> property controls what happens to content that is too big to fit into an area.</p>
                                <div style="background: #0054D1;color: white;padding: 15px;width: 100%;height: 150px;overflow: scroll;border: 1px solid #ccc;margin-bottom: 1rem;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestias maiores dicta officiis molestiae, consectetur voluptas consequuntur, neque, soluta aperiam in perferendis alias ex, veritatis obcaecati nisi aut animi laboriosam iste mollitia fugiat vero illo. Commodi eum, sint pariatur, tempora illo totam nemo, laborum possimus odio eos incidunt aliquid neque cupiditate veniam modi. Earum possimus debitis tempora ipsum nemo vitae voluptatibus, culpa repellat incidunt harum laboriosam fuga unde molestias suscipit ad deleniti non, animi minus pariatur veniam ut, reprehenderit iure enim deserunt! Amet dolorum minima recusandae quidem, quaerat. Voluptatem similique explicabo beatae eos laboriosam fugit recusandae cupiditate, consectetur dolor debitis, facere non. Ea, eos alias reprehenderit reiciendis tempora quia illum quo aspernatur sed dolores suscipit nam delectus at perferendis magni voluptatum laboriosam quas aperiam molestias, vero asperiores, necessitatibus ullam! Assumenda optio ex autem adipisci earum vel odit officia natus, quisquam delectus dolorem magnam sed veritatis ab perferendis iure suscipit similique rem provident, asperiores, quis architecto possimus. Molestias quas ad quibusdam sapiente est similique ut architecto ea dignissimos dolores commodi distinctio aspernatur veritatis dolorem magnam quaerat, aut, corrupti deleniti. Consectetur tempore officiis nostrum inventore porro repellendus architecto laudantium labore dolores aperiam est, atque, cum commodi molestias voluptatibus reiciendis. Velit voluptas repellendus esse nulla pariatur ratione consequuntur, quidem laborum minima reiciendis dolor saepe porro debitis modi earum soluta omnis ipsam neque quo iusto. Molestiae commodi asperiores quis eaque nobis in ducimus, mollitia modi ad natus. Repellendus ea maxime odit, perspiciatis consectetur minus praesentium, culpa cumque facere quas cupiditate consequatur, eum odio non sapiente. Animi sit obcaecati sunt id facilis dolorum corporis, inventore mollitia nemo nulla eveniet fugit ipsam, praesentium soluta quasi iure nisi quam ipsa saepe ratione, necessitatibus iusto adipisci. Rerum dolor voluptatem quas laborum saepe, et placeat assumenda nostrum soluta reiciendis. Unde accusantium temporibus placeat ipsa, sunt laboriosam tempora aut velit!</div>
                                <hr>
                                <h2>CSS Overflow</h2>
                                <p>The <code>overflow</code> property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified 
                                area.</p>
                                <p>The <code>overflow</code> property has the following values:</p>
                                <ul>
                                    <li><code>visible</code> - Default. The overflow is not clipped. 
                                    The content renders outside the element's box</li>
                                    <li><code>hidden</code> - The overflow is clipped, and the rest of the content will be invisible</li>
                                    <li><code>scroll</code> - The overflow is clipped, and a scrollbar is added to see the rest of the content</li>
                                    <li><code>auto</code> - Similar to <code>scroll</code>, 
                                    but it adds scrollbars only when necessary</li>
                                </ul>
                                <div>
                                    <p><strong>Note:</strong> The <code>overflow</code> property only works for block elements with a specified height.</p>
                                    <p><strong>Note:</strong> In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).</p>
                                </div>
                                <hr>
                                <h2>overflow: visible</h2>
                                <p>By default, the overflow is <code class="w3-codespan">visible</code>, meaning that it is not clipped and it 
                                renders outside the element's box:</p>
                                <div style="background: #ececec;height: 100px;width: 20%;margin-bottom: 4rem;">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
                                <pre class="snippet"><code class="css">div {
  width: 200px;
  height: 50px;
  background-color: #eee;
  overflow: visible;
}</code></pre>
                                <hr>
                                <h2>overflow: hidden</h2>
                                <p>With the <code>hidden</code> value, the overflow is clipped, and the rest of the content is hidden:</p>
                                <div style="background: #ececec;height: 100px;width: 20%;margin-bottom: 1rem;overflow: hidden;">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
                                <pre class="snippet"><code class="css">div {
  overflow: hidden;
}</code></pre>
                                <hr>
                                <h2>overflow: scroll</h2>
                                <p>Setting the value to <code>scroll</code>, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):</p>
                                <div style="background: #ececec;height: 100px;width: 20%;margin-bottom: 1rem;overflow: scroll;">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
                                <pre class="snippet"><code class="css">div {
    overflow: scroll;
}</code></pre>
                                <hr>
                                <h2>overflow: auto</h2>
                                <p>The <code>auto</code> value is similar to <code>scroll</code>, but it adds scrollbars only when necessary:</p>
                                <div style="background: #ececec;height: 100px;width: 20%;margin-bottom: 1rem;overflow: scroll;">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
                                <pre class="snippet"><code class="css">div {
    overflow: auto;
}</code></pre>
                                <hr>
                                <h2>overflow-x and overflow-y</h2>
                                <p>The <code>overflow-x</code> and <code>overflow-y</code> properties specifies whether to change the overflow of content just horizontally or vertically (or both):</p>
                                <p><code>overflow-x</code> specifies what to do with the left/right edges of the content.</p>
                                <p><code>overflow-y</code> specifies what to do with the top/bottom edges of the content.</p>
                                <div style="background: #ececec;height: 100px;width: 20%;margin-bottom: 1rem;overflow-x: hidden;overflow-y: scroll;">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
                                <pre class="snippet"><code class="css">div {
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
}</code></pre>
                                <hr>
                                <h2>All CSS Overflow Properties</h2>
                                 <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-positioning" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-float" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


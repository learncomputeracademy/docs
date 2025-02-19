---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-boxmodel/
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
                                    <li class="breadcrumb-item active">Box Model</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Box Model</h1>
                                <hr>
                                <h2>The CSS Box Model</h2>
                                <p>All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.</p>
                                <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:</p>
                                <div class="img-block">
                                    <img src="assets/img/boxmodel.jpg" alt="boxmodel" class="img-fluid">
                                </div>
                                <p>Explanation of the different parts:</p>
                                <ul>
                                    <li><b>Content</b> - The content of the box, where text and images appear</li>
                                    <li><b>Padding</b> - Clears an area around the content. The padding is transparent</li>
                                    <li><b>Border</b> - A border that goes around the padding and content</li>
                                    <li><b>Margin</b> - Clears an area outside the border. The margin is transparent</li>
                                </ul>
                                <p>The box model allows us to add a border around elements, and to define space between elements.</p>
                                <p>Demonstration of the box model:</p>
                                <pre class="snippet"><code class="css">div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}</code></pre>
                                <hr>
                                <h2>Width and Height of an Element</h2>
                                <p>In order to set the width and height of an element correctly in all browsers, you need to know how the box model works.</p>
                                <p class="note"><b>Important:</b> When you set the width and height properties of an element with CSS, you just set the width and height of the <b>content area</b>. To calculate the full size of an element, you must also add padding, borders and margins.</p>
                                <p>This &lt;div> element will have a total width of 350px: </p>
                                <pre class="snippet"><code class="css">div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0; 
}</code></pre>
                                <p>Here is the calculation:</p>
                                <pre class="snippet"><code class="css">320px (width)
+ 20px (left + right padding)
+ 10px (left + right border)
+ 0px (left + right margin)
= 350px</code></pre>
                                <p>The total width of an element should be calculated like this:</p>
                                <p>Total element width = width + left padding + right padding + left border + right border + left margin + right margin</p>
                                <p>The total height of an element should be calculated like this:</p>
                                <p>Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin</p>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-dimension" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-outline" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


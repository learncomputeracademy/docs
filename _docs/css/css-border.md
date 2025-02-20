---
layout: documentation
title: CSS Border | Learn Computer Academy
permalink: css/css-border/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-general.html %}
            <!-- Navbar Start -->
            <?php include '../includes/innerpage-navigation.php'; ?>
            <!-- /.End of Navbar -->
            <!-- Sidebar Start -->
            <?php include '../includes/sidebar-general.php'; ?>
            <!-- /.End of Sidebar Holder -->
            <div class="page-content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-9 content">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Tutorial</a></li>
                                    <li class="breadcrumb-item"><a href="#">CSS</a></li>
                                    <li class="breadcrumb-item active">Border</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h2>CSS Border Properties</h2>
                                <p>The CSS <code>border</code> properties allow you to specify the style, width, and color of an element's border.</p>
                                <p>CSS background properties:</p>
                                <p style="border:1px solid #999;" class="p-3">I have borders on all sides.</p>
                                <p style="border-bottom:1px solid #f44336;" class="p-3">I have a red bottom border.</p>
                                <p style="border:1px solid #999; border-radius: 15px;" class="p-3">I have rounded borders.</p>
                                <p style="border-left:4px solid #2196F3;" class="p-3">I have a blue left border.</p>
                                <hr>
                                <h2>CSS Border Style</h2>
                                <p>The <code>border-style</code> property specifies what kind of border to display.</p>
                                <p>The following values are allowed:</p>
                                <ul>
                                    <li><code>dotted</code> - Defines a dotted border</li>
                                    <li><code>dashed</code> - Defines a dashed border</li>
                                    <li><code>solid</code> - Defines a solid border</li>
                                    <li><code>double</code> - Defines a double border</li>
                                    <li><code>groove</code> - Defines a 3D grooved border. The effect depends on the border-color value</li>
                                    <li><code>ridge</code> - Defines a 3D ridged border. The effect depends on the border-color value</li>
                                    <li><code>inset</code> - Defines a 3D inset border. The effect depends on the border-color value</li>
                                    <li><code>outset</code> - Defines a 3D outset border. The effect depends on the border-color value</li>
                                    <li><code>none</code> - Defines no border</li>
                                    <li><code>hidden</code> - Defines a hidden border</li>
                                </ul>
                                <p>The <code>border-style</code> property can have from one to four values (for the top border, right border, bottom border, and the left border).</p>
                                <pre class="snippet"><code class="css">p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}</code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <p style="border-style: dotted;">A dotted border.</p>
                                <p style="border-style: dashed;">A dashed border.</p>
                                <p style="border-style: solid;">A solid border.</p>
                                <p style="border-style: double;">A double border.</p>
                                <p style="border-style: groove;">A groove border. The effect depends on the border-color value.</p>
                                <p style="border-style: ridge;">A ridge border. The effect depends on the border-color value.</p>
                                <p style="border-style: inset;">An inset border. The effect depends on the border-color value.</p>
                                <p style="border-style: outset;">An outset border. The effect depends on the border-color value.</p>
                                <p style="border-style: none;">No border.</p>
                                <p style="border-style: hidden;">A hidden border.</p>
                                <p style="border-style: dotted dashed solid double;">A mixed border.</p>
                                <hr>
                                <h2>CSS Border Width</h2>
                                <p>The <code>border-width</code> property specifies the width of the four borders.</p>
                                <p>The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.</p>
                                <p>The <code>border-width</code> property can have from one to four values (for the top border, right border, bottom border, and the left border).</p>
                                <p style="border: 5px solid #333;" class="p-3">5px border-width</p>
                                <pre class="snippet"><code class="css">p.one {
  border-style: solid;
  border-width: 5px;
}
p.two {
  border-style: solid;
  border-width: medium;
}
p.three {
  border-style: solid;
  border-width: 2px 10px 4px 20px;
}</code></pre>
                                <hr>
                                <h2>CSS Border Color</h2>
                                <p>The <code>border-color</code> property is used to set the color of the four borders.</p>
                                <p>The color can be set by:</p>
                                <ul>
                                    <li>name - specify a color name, like "red"</li>
                                    <li>Hex - specify a hex value, like "#ff0000"</li>
                                    <li>RGB - specify a RGB value, like "rgb(255,0,0)"</li>
                                    <li>transparent</li>
                                </ul>
                                <p>The <code>border-color</code> property can have from one to four values (for the top border, right border, bottom border, and the left border). </p>
                                <p>If <code>border-color</code> is not set, it inherits the color of the element.</p>
                                <p style="border: 5px solid red;" class="p-3">Red border</p>
                                <pre class="snippet"><code class="css">p.one {
  border-style: solid;
  border-color: red;
}
p.two {
  border-style: solid;
  border-color: green;
}
p.three {
  border-style: solid;
  border-color: red green blue yellow;
}</code></pre>
                                <hr>
                                <h2>CSS Border - Individual Sides</h2>
                                <p>From the examples above you have seen that it is possible to specify a different border for each side.</p>
                                <p>In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left):</p>
                                <p style="border-size: 5px; border-color: red; border-top-style: dotted; border-right-style: solid; border-bottom-style: dotted; border-left-style: solid;" class="p-3">Different Border Styles</p>
                                <pre class="snippet"><code class="css">p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}</code></pre>
                                <p>So, here is how it works:</p>
                                <p>If the <code>border-style</code> property has four values:</p>
                                <ul>
                                    <li><b>border-style: dotted solid double dashed;</b>
                                        <ul>
                                            <li>top border is dotted</li>
                                            <li>right border is solid</li>
                                            <li>bottom border is double</li>
                                            <li>left border is dashed</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>If the <code>border-style</code> property has three values:</p>
                                <ul>
                                    <li><b>border-style: dotted solid double;</b>
                                        <ul>
                                            <li>top border is dotted</li>
                                            <li>right and left borders are solid</li>
                                            <li>bottom border is double</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>If the <code>border-style</code> property has two values:</p>
                                <ul>
                                    <li><b>border-style: dotted solid;</b>
                                        <ul>
                                            <li>top and bottom borders are dotted</li>
                                            <li>right and left borders are solid</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>If the <code>border-style</code> property has one value:</p>
                                <ul>
                                    <li>border-style: dotted;
                                        <ul>
                                            <li>all four borders are dotted</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>The <code>border-style</code> property is used in the example above. However, it also works with <code>border-width</code> and <code>border-color</code>.</p>
                                <hr>
                                <h2>CSS Border - Shorthand Property</h2>
                                <p>As you can see from the examples above, there are many properties to consider when dealing with borders.</p>
                                <p>To shorten the code, it is also possible to specify all the individual border properties in one property.</p>
                                <p>The <code>border</code> property is a shorthand property for the following individual border properties:</p>
                                <ul>
                                    <li>border-width</li>
                                    <li>border-style (required)</li>
                                    <li>border-color</li>
                                </ul>
                                <hr>
                                <h2>CSS Rounded Borders</h2>
                                <p>The <code>border-radius</code> property is used to add rounded borders to an element:</p>
                                <p style="border: 2px solid red; border-radius: 0px;" class="p-2">Normal border</p>
                                <p style="border: 2px solid red; border-radius: 5px;" class="p-2">Round border</p>
                                <p style="border: 2px solid red; border-radius: 8px;" class="p-2">Rounder border</p>
                                <p style="border: 2px solid red; border-radius: 20px;" class="p-2">Roundest border</p>
                                <hr>
                                <h2>All CSS Border Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">border</th>
                                            <td>Sets all the border properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-bottom</th>
                                            <td>Sets all the bottom border properties in one declaration</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">border-bottom-color</th>
                                            <td>Sets the color of the bottom border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-bottom-style</th>
                                            <td>Sets the style of the bottom border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-bottom-width</th>
                                            <td>Sets the width of the bottom border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-color</th>
                                            <td>Sets the color of the four borders</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-left</th>
                                            <td>Sets all the left border properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-left-color</th>
                                            <td>Sets the color of the left border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-left-style</th>
                                            <td>Sets the style of the left border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-left-width</th>
                                            <td>Sets the width of the left border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-radius</th>
                                            <td>Sets all the four border-*-radius properties for rounded corners</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-right</th>
                                            <td>Sets all the right border properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-right-color</th>
                                            <td>Sets the color of the right border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-right-style</th>
                                            <td>Sets the style of the right border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-right-width</th>
                                            <td>Sets the width of the right border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-style</th>
                                            <td>Sets the style of the four borders</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-top</th>
                                            <td>Sets all the top border properties in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-top-color</th>
                                            <td>Sets the color of the top border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-top-style</th>
                                            <td>Sets the style of the top border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-top-width</th>
                                            <td>Sets the width of the top border</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">border-width</th>
                                            <td>Sets the width of the four borders</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-background" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-margin" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

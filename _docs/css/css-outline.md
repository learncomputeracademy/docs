---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-outline/
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
                                    <li class="breadcrumb-item active">Outline</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Outline</h1>
                                <hr>
                                <p style="width:98%;border:2px solid #ea0059;outline:#0054D1 solid 10px;padding:20px;margin:auto;text-align:center">This element has a <b>pink border</b> and a <b>blue outline</b> with a width of 10px.</p>
                                <hr>
                                <h2>CSS Outline</h2>
                                <p>An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".</p>
                                <div class="img-block" style="margin-bottom: 1rem;">
                                    <img src="assets/img/outline-img.jpg" alt="boxmodel" class="img-fluid">
                                </div>
                                <p>CSS has the following outline properties:</p>
                                <ul>
                                    <li><code>outline-style</code></li>
                                    <li><code>outline-color</code></li>
                                    <li><code>outline-width</code></li>
                                    <li><code>outline-offset</code></li>
                                    <li><code>outline</code></li>
                                </ul>
                                <p class="note"><b>Note:</b> Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.</p>
                                <hr>
                                <h2>CSS Outline Style</h2>
                                <p>The outline-style property specifies the style of the outline, and can have one of the following values:</p>
                                <ul>
                                    <li><code>dotted</code> - Defines a dotted outline</li>
                                    <li><code>dashed</code> - Defines a dashed outline</li>
                                    <li><code>solid</code> - Defines a solid outline</li>
                                    <li><code>double</code> - Defines a double outline</li>
                                    <li><code>groove</code> - Defines a 3D grooved outline</li>
                                    <li><code>ridge</code> - Defines a 3D ridged outline</li>
                                    <li><code>inset</code> - Defines a 3D inset outline</li>
                                    <li><code>outset</code> - Defines a 3D outset outline</li>
                                    <li><code>none</code> - Defines no outline</li>
                                    <li><code>hidden</code> - Defines a hidden outline</li>
                                </ul>
                                <p>The following example shows the different <code>outline-style</code> values:</p>
                                <p style="outline-style:dotted;">A dotted outline.</p>
                                <p style="outline-style:dashed;">A dashed outline.</p>
                                <p style="outline-style:solid;">A solid outline.</p>
                                <p style="outline-style:double;">A double outline.</p>
                                <p style="outline-style:groove;">A groove outline. The effect depends on the outline-color value.</p>
                                <p style="outline-style:ridge;">A ridge outline. The effect depends on the outline-color value.</p>
                                <p style="outline-style:inset;">An inset outline. The effect depends on the outline-color value.</p>
                                <p style="outline-style:outset;">An outset outline. The effect depends on the outline-color value.</p>
                                <p>Demonstration of the different outline styles:</p>
                                <pre class="snippet"><code class="css">p.dotted {outline-style: dotted;}
p.dashed {outline-style: dashed;}
p.solid {outline-style: solid;}
p.double {outline-style: double;}
p.groove {outline-style: groove;}
p.ridge {outline-style: ridge;}
p.inset {outline-style: inset;}
p.outset {outline-style: outset;}</code></pre>
                                <p><b>Note:</b> None of the other outline properties will have any effect, unless the <code>outline-style</code> property is set!</p>
                                <hr>
                                <h2>CSS Outline Color</h2>
                                <p>The <code>outline-color</code> property is used to set the color of the outline.</p>
                                <p>The color can be set by:</p>
                                <ul>
                                <li>name - specify a color name, like &quot;red&quot;</li>
                                <li>RGB - specify a RGB value, like &quot;rgb(255,0,0)&quot;</li>
                                <li>Hex - specify a hex value, like &quot;#ff0000&quot;</li>
                                <li>invert - performs a color inversion (which ensures that the outline is visible, regardless of color background)</li>
                                </ul>
                                <p>The following example shows some different outlines with different colors. 
                                Also notice that these elements also have a thin black border inside the outline:</p>
                                <p style="border: 1px solid black;outline-style:solid;outline-color:red;">A solid red outline.</p>
                                <p style="border: 1px solid black;outline-style:double;outline-color:green;">A double green outline.</p>
                                <p style="border: 1px solid black;outline-style:outset;outline-color:yellow;">An outset yellow outline.</p>
                                <pre class="snippet"><code class="css">p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
}
p.ex2 {
  border: 1px solid black;
  outline-style: double;
  outline-color: green;
}
p.ex3 {
  border: 1px solid black;
  outline-style: outset;
  outline-color: yellow;
}</code></pre>
                                <p>The following example uses <code>outline-color: invert</code>, which performs a color inversion. This ensures that the outline is visible, regardless of color background:</p>
                                <p style="border: 1px solid yellow;outline-style:solid;outline-color:invert;">A solid invert outline.</p>
                                <pre class="snippet"><code class="css">p.ex1 {
  border: 1px solid yellow;
  outline-style: solid;
  outline-color: invert;
}</code></pre>
                                <hr>
                                <h2>CSS Outline Width</h2>
                                <p>The <code class="w3-codespan">outline-width</code> property specifies the width of the outline, 
                                and can have one of the following values:</p>
                                <ul>
                                  <li>thin (typically 1px)</li>
                                  <li>medium (typically 3px)</li>
                                  <li>thick (typically 5px)</li>
                                  <li>A specific size (in px, pt, cm, em, etc)</li>
                                </ul>
                                <p>The following example shows some outlines with different widths:</p>
                                <p style="border: 1px solid black;outline-style:solid;outline-color:red;outline-width:thin;">A thin outline.</p>
                                <p style="border: 1px solid black;outline-style:solid;outline-color:red;outline-width:medium;">A medium outline.</p>
                                <p style="border: 1px solid black;outline-style:solid;outline-color:red;outline-width:thick;">A thick outline.</p>
                                <p style="border: 1px solid black;outline-style:solid;outline-color:red;outline-width:4px;">A 4px thick outline.</p>
                                <pre class="snippet"><code class="css">p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thin;
}
p.ex2 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: medium;
}
p.ex3 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thick;
}
p.ex4 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: 4px;
}</code></pre>
                                <hr>
                                <h2>CSS Outline - Shorthand property</h2>
                                <p>The <code>outline</code> property is a shorthand property for 
                                setting the following individual outline properties:</p>
                                <ul>
                                <li><code>outline-width</code></li>
                                <li><code>outline-style</code> (required)</li>
                                <li><code>outline-color</code></li>
                                </ul>
                                <p>The <code>outline</code> property is specified as one, 
                                two, or three values from the list above. The order of the values does not 
                                matter.</p>
                                <p>The following example shows some outlines specified with the shorthand <code>outline</code> 
                                property:</p>
                                <p style="outline: dashed;">A dashed outline.</p>
                                <p style="outline: dotted red;">A dotted red outline.</p>
                                <p style="outline: 5px solid yellow;">A 5px solid yellow outline.</p>
                                <p style="outline: ridge thick pink;">A thick ridge pink outline.</p>
                                <pre class="snippet"><code class="css">p.ex1 {outline: dashed;}
p.ex2 {outline: dotted red;}
p.ex3 {outline: 5px solid yellow;}
p.ex4 {outline: thick ridge pink;}</code></pre>
                                <hr>
                                <h2>CSS Outline Offset</h2>
                                <p>The <code>outline-offset</code> property adds space 
                                between an outline and the edge/border of an element. The space between an 
                                element and its outline is transparent.</p>
                                <p>The following example specifies an outline 15px outside the border edge:</p>
                                <p style="margin:30px;border:1px solid black;outline:1px solid red;outline-offset:15px;">
                                This paragraph has an outline 15px outside the border edge.</p>
                                <pre class="snippet"><code class="css">p {
  margin: 30px;
  border: 1px solid black;
  outline: 1px solid red;
  outline-offset: 15px;
}</code></pre>
                                <p>The following example shows that the space between an element and its outline is transparent:</p>
                                <p style="margin:30px;background:yellow;border:1px solid black;outline:1px solid red;outline-offset:15px;">
                                This paragraph has an outline of 15px outside the border edge.</p>
                                <pre class="snippet"><code class="css">p {
  margin: 30px;
  background: yellow;
  border: 1px solid black;
  outline: 1px solid red;
  outline-offset: 15px;
}</code></pre>
                                <hr>
                                <h2>All CSS Outline Properties</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Property</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">outline</th>
                                            <td>A shorthand property for setting outline-width, outline-style, and outline-color in one declaration</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">outline-color</th>
                                            <td>Sets the color of an outline</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">outline-offset</th>
                                            <td>Specifies the space between an outline and the edge or border of an element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">outline-style</th>
                                            <td>Sets the style of an outline</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">outline-width</th>
                                            <td>Sets the width of an outline</td>
                                        </tr> 
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-boxmodel" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-text" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


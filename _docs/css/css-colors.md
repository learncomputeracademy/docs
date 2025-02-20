---
layout: documentation
title: CSS Colors | Learn Computer Academy
permalink: css/css-colors/
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
                                    <li class="breadcrumb-item active">Colors</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Colors</h1>
                                <hr>
                                <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
                                <hr>
                                <p class="note"><b>Note:</b> CSS/HTML support <a href="https://www.w3schools.com/colors/colors_names.asp">140 standard color names</a>.</p> 
                                <hr>
                                <h2>CSS Background Color</h2>
                                <p>You can set the background color for HTML elements:</p> 
                                <pre class="snippet"><code class="html">&lt;h1 style="background-color:DodgerBlue;">Hello World&lt;/h1>
&lt;p style="background-color:Tomato;">Lorem ipsum...&lt;/p></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <h1 style="background-color:DodgerBlue; color: #fff;" class="p-3">Hello World</h1>
                                <p style="background-color:Tomato; color: #fff;" class="p-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                <hr>
                                <h2>CSS Text Color</h2>
                                <p>You can set the color of text:</p>
                                <pre class="snippet"><code class="html">&lt;h1 style="color:Tomato;">Hello World&lt;/h1>
&lt;p style="color:DodgerBlue;">Lorem ipsum...&lt;/p>
&lt;p style="color:MediumSeaGreen;">Ut wisi enim...&lt;/p></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <h1 style="color:Tomato;">Hello World</h1>
                                <p style="color:DodgerBlue;">Lorem ipsum...</p>
                                <p style="color:MediumSeaGreen;">Ut wisi enim...</p>
                                <hr>
                                <h2>CSS Border Color</h2>
                                <p>You can set the color of borders:</p>
                                <pre class="snippet"><code class="html">&lt;h1 style="border:2px solid Tomato;">Hello World&lt;/h1>
&lt;h1 style="border:2px solid DodgerBlue;">Hello World&lt;/h1>
&lt;h1 style="border:2px solid Violet;">Hello World&lt;/h1></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <h1 style="border:2px solid Tomato;">Hello World</h1>
                                <h1 style="border:2px solid DodgerBlue;">Hello World</h1>
                                <h1 style="border:2px solid Violet;">Hello World</h1>
                                <hr>
                                <h2>CSS Color Values</h2>
                                <p>In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:</p>
                                <p>Same as color name "Tomato":</p>
                                <pre class="snippet"><code class="html">&lt;h1 style="background-color:rgb(255, 99, 71);">...&lt;/h1>
&lt;h1 style="background-color:#ff6347;">...&lt;/h1>
&lt;h1 style="background-color:hsl(9, 100%, 64%);">...&lt;/h1>
&lt;h1 style="background-color:rgba(255, 99, 71, 0.5);">...&lt;/h1>
&lt;h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...&lt;/h1></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <h3 style="background-color:rgb(255, 99, 71); color: #fff;" class="p-3">rgb(255, 99, 71)</h3>
                                <h3 style="background-color:#ff6347; color: #fff;" class="p-3">#ff6347</h3>
                                <h3 style="background-color:hsl(9, 100%, 64%); color: #fff;" class="p-3">hsl(9, 100%, 64%)</h3>
                                <p>Same as color name "Tomato", but 50% transparent:</p>
                                <h3 style="background-color:rgba(255, 99, 71, 0.5); color: #fff;" class="p-3">rgba(255, 99, 71, 0.5)</h3>
                                <h3 style="background-color:hsla(9, 100%, 64%, 0.5); color: #fff;" class="p-3">hsla(9, 100%, 64%, 0.5)</h3>
                                <hr>
                                <h2>CSS RGB Value</h2>
                                <p>In CSS, a color can be specified as an RGB value, using this formula:</p>
                                <p><b>rgb(red, green, blue)</b></p>
                                <p>Each parameter (red, green, and blue) defines the intensity of the color between 0 and 255.</p>
                                <p>For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255) and the others are set to 0.</p>
                                <p>To display the color black, all color parameters must be set to 0, like this: rgb(0, 0, 0).</p>
                                <p>To display the color white, all color parameters must be set to 255, like this: rgb(255, 255, 255).</p>
                                <hr>
                                <h2>CSS HEX Value</h2>
                                <p>In CSS, a color can be specified using a hexadecimal value in the form:</p>
                                <p><b>#rrggbb</b></p>
                                <p>Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).</p>
                                <p>For example, #ff0000 is displayed as red, because red is set to its highest value (ff) and the others are set to the lowest value (00).</p>
                                <hr>
                                <h2> HSL Value</h2>
                                <p>In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:</p>
                                <p><b>hsl(hue, saturation, lightness)</b></p>
                                <p>Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.</p>
                                <p>Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.</p>
                                <p>Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white</p>
                                <hr>
                                <h2>Saturation</h2>
                                <p>Saturation can be described as the intensity of a color.</p>
                                <p>100% is pure color, no shades of gray</p>
                                <p>50% is 50% gray, but you can still see the color.</p>
                                <p>0% is completely gray, you can no longer see the color.</p>
                                <hr>
                                <h2>Lightness</h2>
                                <p>The lightness of a color can be described as how much light you want to give the color, where 0% means no light (black), 50% means 50% light (neither dark nor light) 100% means full lightness (white).</p>
                                <p>Shades of gray are often defined by setting the hue and saturation to 0, and adjust the lightness from 0% to 100% to get darker/lighter shades:</p>
                                <hr>
                                <h2>RGBA Value</h2>
                                <p>RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.</p>
                                <p>An RGBA color value is specified with:</p>
                                <p><b>rgba(red, green, blue, alpha)</b></p>
                                <p>The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):</p>
                                <hr>
                                <h2>HSLA Value</h2>
                                <p>HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.</p>
                                <p>An HSLA color value is specified with:</p>
                                <p><b>hsla(hue, saturation, lightness, alpha)</b></p>
                                <p>The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):</p>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-howto" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-background" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


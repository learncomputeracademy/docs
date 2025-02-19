---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-units/
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
                                    <li class="breadcrumb-item active">Units</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Units</h1>
                                <hr>
                                <h2>CSS Units</h2>
                                <p>CSS has several different units for expressing a length.</p>
                                <p>Many CSS properties take &quot;length&quot; values, such as <code>width</code>, <code>margin</code>, <code>padding</code>, <code>font-size</code>, etc.</p>
                                <p>Length is a number followed by a length unit, such as 10px, 2em, etc.</p>
                                <p>A whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted.</p>
                                <p>For some CSS properties, negative lengths are allowed.</p>
                                <p>There are two types of length units: absolute and relative.</p>
                                <hr>
                                <h2>Absolute Lengths</h2>
                                <p>The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.</p>
                                <p>Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.</p>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">cm</th>
                                            <td>centimeters</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">mm</th>
                                            <td>millimeters</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">in</th>
                                            <td>inches(1in = 96px = 2.54cm)</td>
                                        </tr>  
                                        <tr>
                                            <th scope="row">px *</th>
                                            <td>pixels(1px = 1/96th of 1in)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">pt</th>
                                            <td>points(1pt = 1/72 of 1in)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">pc</th>
                                            <td>picas(1pc = 12 pt)</td>
                                        </tr>                                  
                                    </tbody>
                                </table>
                                <p>* Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.</p>
                                <hr>
                                <h2>Relative Lengths</h2>
                                <p>Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.</p>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">em</th>
                                            <td>Relative to the font-size of the element (2em means 2 times the size of the current font)  </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ex</th>
                                            <td>Relative to the x-height of the current font (rarely used)  </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ch</th>
                                            <td>Relative to width of the "0" (zero)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">rem</th>
                                            <td>Relative to font-size of the root element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">vw</th>
                                            <td>Relative to 1% of the width of the viewport* </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">vh</th>
                                            <td>Relative to 1% of the height of the viewport* </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">vmin</th>
                                            <td>Relative to 1% of viewport's* smaller dimension </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">vmax</th>
                                            <td>Relative to 1% of viewport's* larger dimension  </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">%   </th>
                                            <td>Relative to the parent element</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="note">
                                    <p><b>Tip:</b> The em and rem units are practical in creating perfectly scalable layout!</p>
                                    <p>* Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.</p>
                                </div>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-form" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-specificity" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


---
layout: documentation
title: HTML Tables | Learn Computer Academy
permalink: html/html-tables/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-general.html %}
            <div class="page-content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-9 content">
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>HTML Tables</h1>
                                <hr>
                                <h1>Defining an HTML Table</h1>
                                <p>An HTML table is defined with the <code>&lt;table></code> tag.</p>
                                <p>Each table row is defined with the <code>&lt;tr></code> tag. A table header is defined with the <code>&lt;th></code> tag. By default, table headings are bold and centered. A table data/cell is defined with the <code>&lt;td></code> tag.</p>
                                <pre class="snippet"><code class="html">&lt;table style="width:100%">
    &lt;tr>
        &lt;th>Firstname&lt;/th>
        &lt;th>Lastname&lt;/th> 
        &lt;th>Age&lt;/th>
    &lt;/tr>
    &lt;tr>
        &lt;td>Jill&lt;/td>
        &lt;td>Smith&lt;/td> 
        &lt;td>50&lt;/td>
    &lt;/tr>
    &lt;tr>
        &lt;td>Eve&lt;/td>
        &lt;td>Jackson&lt;/td> 
        &lt;td>94&lt;/td>
    &lt;/tr>
&lt;/table></code></pre>
                                <hr>
                                <p><b>Note:</b> The <code>&lt;td></code> elements are the data containers of the table.</p>
                                <p>They can contain all sorts of HTML elements; text, images, lists, other tables, etc.</p>
                                <hr>
                                <h1>HTML Table - Adding a Border</h1>
                                <p>If you do not specify a border for the table, it will be displayed without borders.</p>
                                <p>A border is set using the CSS <code>border</code> property:</p>
                                <pre class="snippet"><code class="css">table, th, td {
    border: 1px solid black;
}</code></pre>
                                <hr>
                                <h1>HTML Table - Adding Cell Padding</h1>
                                <p>Cell padding specifies the space between the cell content and its borders.</p>
                                <p>If you do not specify a padding, the table cells will be displayed without padding.</p>
                                <p>To set the padding, use the CSS <code>padding</code> property:</p>
                                <pre class="snippet"><code class="css">th, td {
    padding: 15px;
}</code></pre>
                                <hr>
                                <h1>HTML Table - Left-align Headings</h1>
                                <p>By default, table headings are bold and centered.</p>
                                <p>To left-align the table headings, use the CSS <code>text-align</code> property:</p>
                                <pre class="snippet"><code class="css">th {
    text-align: left;
}</code></pre>
                                <hr>
                                <h1>HTML Table - Adding Border Spacing</h1>
                                <p>Border spacing specifies the space between the cells.</p>
                                <p>To set the border spacing for a table, use the CSS <code>border-spacing</code> property:</p>
                                <pre class="snippet"><code class="css">table {
    border-spacing: 5px;
}</code></pre>
                                <p><b>Note:</b> If the table has collapsed borders, border-spacing has no effect.</p>
                                <hr>
                                <h1>HTML Table - Cells that Span Many Columns</h1>
                                <p>To make a cell span more than one column, use the <code>colspan</code> attribute:</p>
                                <pre class="snippet"><code class="html">&lt;table style="width:100%">
    &lt;tr>
        &lt;th>Name&lt;/th>
        &lt;th colspan="2">Telephone&lt;/th>
    &lt;/tr>
    &lt;tr>
        &lt;td>Bill Gates&lt;/td>
        &lt;td>55577854&lt;/td>
        &lt;td>55577855&lt;/td>
    &lt;/tr>
&lt;/table></code></pre>
                                <hr>
                                <h1>HTML Table - Cells that Span Many Rows</h1>
                                <p>To make a cell span more than one row, use the <code>rowspan</code> attribute:</p>
                                <pre class="snippet"><code class="html">&lt;table style="width:100%">
    &lt;tr>
        &lt;th>Name:&lt;/th>
        &lt;td>Bill Gates&lt;/td>
    &lt;/tr>
    &lt;tr>
        &lt;th rowspan="2">Telephone:&lt;/th>
        &lt;td>55577854&lt;/td>
    &lt;/tr>
    &lt;tr>
        &lt;td>55577855&lt;/td>
    &lt;/tr>
&lt;/table></code></pre>
                                <hr>
                                <h1>HTML Table - Adding a Caption</h1>
                                <p>To add a caption to a table, use the <code>&lt;caption></code> tag:</p>
                                <p><b>Note:</b> The <code>&lt;caption></code> tag must be inserted immediately after the <code>&lt;table></code> tag.</p>
                                <pre class="snippet"><code class="html">&lt;table style="width:100%">
    &lt;caption>Monthly savings&lt;/caption>
    &lt;tr>
        &lt;th>Month&lt;/th>
        &lt;th>Savings&lt;/th>
    &lt;/tr>
    &lt;tr>
        &lt;td>January&lt;/td>
        &lt;td>$100&lt;/td>
    &lt;/tr>
    &lt;tr>
        &lt;td>February&lt;/td>
        &lt;td>$50&lt;/td>
    &lt;/tr>
&lt;/table></code></pre>
                                <p><b>Note:</b> The <code>&lt;caption></code> tag must be inserted immediately after the <code>&lt;table></code> tag.</p>
                                <hr>
                                <h4>Chapter Summary</h4> 
                                <ul>
                                    <li>Use the HTML <code>&lt;table></code> element to define a table</li>
                                    <li>Use the HTML <code>&lt;tr></code> element to define a table row</li>
                                    <li>Use the HTML <code>&lt;td></code> element to define a table data</li>
                                    <li>Use the HTML <code>&lt;th></code> element to define a table heading</li>
                                    <li>Use the HTML <code>&lt;caption></code> element to define a table caption</li>
                                    <li>Use the CSS <code>border</code> property to define a border</li>
                                    <li>Use the CSS <code>border-collapse</code> property to collapse cell borders</li>
                                    <li>Use the CSS <code>padding</code> property to add padding to cells</li>
                                    <li>Use the CSS <code>text-align</code> property to align cell text</li>
                                    <li>Use the CSS <code>border-spacing</code> property to set the spacing between cells</li>
                                    <li>Use the <code>colspan</code> attribute to make a cell span many columns</li>
                                    <li>Use the <code>rowspan</code> attribute to make a cell span many rows</li>
                                    <li>Use the <code>id</code> attribute to uniquely define one table</li>
                                </ul>
                                <hr>
                                <h2>HTML Table Tags</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Tag</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">&lt;table></th>
                                            <td>Defines a table</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;th></th>
                                            <td>Defines a header cell in a table</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">&lt;tr></th>
                                            <td>Defines a row in a table</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;td></th>
                                            <td>Defines a cell in a table</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;caption></th>
                                            <td>Defines a table caption</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;colgroup></th>
                                            <td>Specifies a group of one or more columns in a table for formatting</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;col></th>
                                            <td>Specifies column properties for each column within a &lt;colgroup> element</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;thead></th>
                                            <td>Groups the header content in a table</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;tbody></th>
                                            <td>Groups the body content in a table</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;tfoot></th>
                                            <td>Groups the footer content in a table</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-images" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-lists" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

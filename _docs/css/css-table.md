---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-table/
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
                                    <li class="breadcrumb-item active">Table</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Tables</h1>
                                <hr>
                                <p>The look of an HTML table can be greatly improved with CSS:</p>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                          <th>Company</th>
                                          <th>Contact</th>
                                          <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="scope">Alfreds Futterkiste</td>
                                            <td>Maria Anders</td>
                                            <td>Germany</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Berglunds snabbköp</td>
                                            <td>Christina Berglund</td>
                                            <td>Sweden</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Centro comercial Moctezuma</td>
                                            <td>Francisco Chang</td>
                                            <td>Mexico</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Ernst Handel</td>
                                            <td>Roland Mendel</td>
                                            <td>Austria</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Island Trading</td>
                                            <td>Helen Bennett</td>
                                            <td>UK</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Königlich Essen</td>
                                            <td>Philip Cramer</td>
                                            <td>Germany</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Laughing Bacchus Winecellars</td>
                                            <td>Yoshi Tannamuri</td>
                                            <td>Canada</td>
                                        </tr>
                                        <tr>
                                            <th class="scope">Magazzini Alimentari Riuniti</td>
                                            <td>Giovanni Rovelli</td>
                                            <td>Italy</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr>
                                <h2>Table Borders</h2>
                                <p>To specify table borders in CSS, use the <code>border</code> property.</p>
                                <p>The example below specifies a black border for &lt;table&gt;, &lt;th&gt;, and &lt;td&gt; elements:</p>
                                <table style="border: 1px solid black; border-collapse: separate; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="border: 1px solid black;">Firstname</th>   
                                            <th style="border: 1px solid black;">Lastname</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border: 1px solid black;">Peter</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black;">Lois</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">table, th, td {
  border: 1px solid black;
}</code></pre>
                                <p>Notice that the table in the example above has double borders. This is because both the table and the <th> and <td> elements have separate borders.</p>
                                <hr>
                                <h2>Collapse Table Borders</h2>
                                <p>The <code>border-collapse</code> property sets whether the table borders should be collapsed into a single border:</p>
                                <table style="border: 1px solid black; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="border: 1px solid black;">Firstname</th>   
                                            <th style="border: 1px solid black;">Lastname</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border: 1px solid black;">Peter</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black;">Lois</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">table {
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid black;
}</code></pre>
                                <p>If you only want a border around the table, only specify the <code>border</code> property for &lt;table>:</p>
                                <table style="border: 1px solid black; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>   
                                            <th>Lastname</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Peter</td>
                                            <td>Griffin</td>
                                        </tr>
                                        <tr>
                                            <td>Lois</td>
                                            <td>Griffin</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">table {
  border: 1px solid black;
}</code></pre>
                                <hr>
                                <h2>Table Width and Height</h2>
                                <p>Width and height of a table are defined by the <code>width</code> and <code>height</code> properties.</p>
                                <p>The example below sets the width of the table to 100%, and the height of the &lt;th&gt; elements to 50px:</p>
                                <table style="border: 1px solid black; width:100%; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="height: 50px; border: 1px solid black; text-align: center;">Firstname</th>   
                                            <th style="height: 50px; border: 1px solid black; text-align: center;">Lastname</th>
                                            <th style="height: 50px; border: 1px solid black; text-align: center;">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border: 1px solid black;">Peter</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                            <td style="border: 1px solid black;">$100</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black;">Lois</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                            <td style="border: 1px solid black;">$150</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black;">Joe</td>
                                            <td style="border: 1px solid black;">Swanson</td>
                                            <td style="border: 1px solid black;">$300</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">table {
  width: 100%;
}
th {
  height: 50px;
}</code></pre>
                                <hr>
                                <h2>Horizontal Alignment</h2>
                                <p>The <code>text-align</code> property sets the horizontal alignment (like left, right, or center) of the content in &lt;th&gt; or &lt;td&gt;.</p>
                                <p>By default, the content of &lt;th&gt; elements are center-aligned and the content of &lt;td&gt; elements are left-aligned.</p>
                                <p>The following example left-aligns the text in &lt;th&gt; elements:</p>
                                <table style="border: 1px solid black; width:100%; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="border: 1px solid black;">Firstname</th>   
                                            <th style="border: 1px solid black;">Lastname</th>
                                            <th style="border: 1px solid black;">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border: 1px solid black;">Peter</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                            <td style="border: 1px solid black;">$100</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black;">Lois</td>
                                            <td style="border: 1px solid black;">Griffin</td>
                                            <td style="border: 1px solid black;">$150</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black;">Joe</td>
                                            <td style="border: 1px solid black;">Swanson</td>
                                            <td style="border: 1px solid black;">$300</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">th {
  text-align: left;
}</code></pre>
                                <hr>
                                <h2>Vertical Alignment</h2>
                                <p>The <code>vertical-align</code> property sets the vertical alignment (like top, bottom, or middle) of the content in &lt;th&gt; or &lt;td&gt;.</p>
                                <p>By default, the vertical alignment of the content in a table is middle (for both &lt;th&gt; and &lt;td&gt; elements).</p>
                                <p>The following example sets the vertical text alignment to bottom for &lt;td&gt; elements:</p>
                                <table style="border: 1px solid black; width:100%; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="border: 1px solid black;">Firstname</th>   
                                            <th style="border: 1px solid black;">Lastname</th>
                                            <th style="border: 1px solid black;">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">Peter</td>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">Griffin</td>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">$100</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">Lois</td>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">Griffin</td>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">$150</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">Joe</td>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">Swanson</td>
                                            <td style="border: 1px solid black; height: 50px; vertical-align: middle;">$300</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">td {
  height: 50px;
  vertical-align: bottom;
}</code></pre>
                                <hr>
                                <h2>Table Padding</h2>
                                <p>To control the space between the border and the content in a table, use the <code>padding</code> property on &lt;td&gt; and &lt;th&gt; elements:</p>
                                <table style="border: 1px solid black; width:100%; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="border: 1px solid black; padding: 15px;">Firstname</th>   
                                            <th style="border: 1px solid black; padding: 15px;">Lastname</th>
                                            <th style="border: 1px solid black; padding: 15px;">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border: 1px solid black; padding: 15px;">Peter</td>
                                            <td style="border: 1px solid black; padding: 15px;">Griffin</td>
                                            <td style="border: 1px solid black; padding: 15px;">$100</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black; padding: 15px;">Lois</td>
                                            <td style="border: 1px solid black; padding: 15px;">Griffin</td>
                                            <td style="border: 1px solid black; padding: 15px;">$150</td>
                                        </tr>
                                        <tr>
                                            <td style="border: 1px solid black; padding: 15px;">Joe</td>
                                            <td style="border: 1px solid black; padding: 15px;">Swanson</td>
                                            <td style="border: 1px solid black; padding: 15px;">$300</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                                <pre class="snippet"><code class="css">th, td {
  padding: 15px;
  text-align: left;
}</code></pre>
                                <hr>
                                <h2>Horizontal Dividers</h2>
                                <table style="width:100%; margin-bottom: 1rem;">
                                    <thead>
                                        <tr>
                                            <th style="border-bottom: 1px solid #ddd; padding: 12px;">First Name</th>
                                            <th style="border-bottom: 1px solid #ddd; padding: 12px;">Last Name</th>
                                            <th style="border-bottom: 1px solid #ddd; padding: 12px;">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">Peter</td>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">Griffin</td>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">$100</td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">Lois</td>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">Griffin</td>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">$150</td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">Joe</td>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">Swanson</td>
                                            <td style="border-bottom: 1px solid #ddd; padding: 12px;">$300</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>Add the <code>border-bottom</code> property to &lt;th&gt; and &lt;td&gt; for horizontal dividers:</p>
                                <pre class="snippet"><code class="css">th, td {
  border-bottom: 1px solid #ddd;
}</code></pre>
                                <hr>
                                <h2>Hoverable Table</h2>
                                <p>Use the <code class="w3-codespan">:hover</code> selector on &lt;tr&gt; to highlight table rows on mouse 
                                over:</p>
                                <table style="width:100%; border:1px solid #000; margin-bottom: 1rem;">
                                    <tr onMouseOver="this.style.background='#f2f6fd'" onMouseOut="this.style.background='#fff'" style="transition: all .3s ease;">
                                        <th style="border:1px solid #000; padding:12px;">First Name</th>
                                        <th style="border:1px solid #000; padding:12px;">Last Name</th>
                                        <th style="border:1px solid #000; padding:12px;">Savings</th>
                                    </tr>
                                    <tr onMouseOver="this.style.background='#f2f6fd'" onMouseOut="this.style.background='#fff'" style="transition: all .3s ease;">
                                        <td style="border:1px solid #000; padding:12px;">Peter</td>
                                        <td style="border:1px solid #000; padding:12px;">Griffin</td>
                                        <td style="border:1px solid #000; padding:12px;">$100</td>
                                    </tr>
                                    <tr onMouseOver="this.style.background='#f2f6fd'" onMouseOut="this.style.background='#fff'" style="transition: all .3s ease;">
                                        <td style="border:1px solid #000; padding:12px;">Lois</td>
                                        <td style="border:1px solid #000; padding:12px;">Griffin</td>
                                        <td style="border:1px solid #000; padding:12px;">$150</td>
                                    </tr>
                                    <tr onMouseOver="this.style.background='#f2f6fd'" onMouseOut="this.style.background='#fff'" style="transition: all .3s ease;">
                                        <td style="border:1px solid #000; padding:12px;">Joe</td>
                                        <td style="border:1px solid #000; padding:12px;">Swanson</td>
                                        <td style="border:1px solid #000; padding:12px;">$300</td>
                                    </tr>
                                </table>
                                <pre class="snippet"><code class="css">tr:hover {background-color: #f5f5f5;}</code></pre>
                                <hr>
                                <h2>Striped Tables</h2>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Peter</th>
                                            <th>Griffin</td>
                                            <td>$100</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Lois</th>
                                            <th>Griffin</td>
                                            <td>$150</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Joe</th>
                                            <th>Swanson</td>
                                            <td>$300</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>For zebra-striped tables, use the <code>nth-child()</code> selector and add a <code>background-color</code> to all even (or odd) table rows:</p>
                                <pre class="snippet"><code class="css">tr:nth-child(even) {background-color: #dee2e6;}</code></pre>
                                <hr>
                                <h2>Table Color</h2>
                                <p>The example below specifies the background color 
                                and text color of 
                                &lt;th&gt; elements:</p>
                                <table style="width:100%; border:1px solid #000; margin-bottom: 1rem;">
                                    <tr>
                                        <th style="background-color:#0054D1;color:white;">First Name</th>
                                        <th style="background-color:#0054D1;color:white;">Last Name</th>
                                        <th style="background-color:#0054D1;color:white;">Savings</th>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #000;">Peter</td>
                                        <td style="border:1px solid #000;">Griffin</td>
                                        <td style="border:1px solid #000;">$100</td>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #000;">Lois</td>
                                        <td style="border:1px solid #000;">Griffin</td>
                                        <td style="border:1px solid #000;">$150</td>
                                    </tr>
                                    <tr>
                                        <td style="border:1px solid #000;">Joe</td>
                                        <td style="border:1px solid #000;">Swanson</td>
                                        <td style="border:1px solid #000;">$300</td>
                                    </tr>
                                </table>
                                <pre class="snippet"><code class="css">th {
  background-color: #0054D1;
  color: white;
}</code></pre>
                                <hr>
                                <h2>Responsive Table</h2>
                                <p>A responsive table will display a horizontal scroll bar if the screen is too small to display the full content:</p>
                                <div style="overflow-x:auto">
                                    <table class="table table-striped table-bordered">
                                        <thead class="thead-shades">
                                            <tr>
                                                <th scope="col">First Name</th>  
                                                <th scope="col">Last Name</th>   
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>  
                                                <th scope="col">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Jill</th>
                                                <th scope="row">Smith</th>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                                <td>50</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Eve</th>
                                                <th scope="row">Jackson</th>
                                                <td>94</td>  
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                                <td>94</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Jill</th>
                                                <th scope="row">Smith</th>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                                <td>67</td>
                                            </tr>                                        
                                        </tbody>
                                    </table>
                                </div>
                                <p>Add a container element (like &lt;div>) with <code>overflow-x:auto</code> around the &lt;table> element to make it responsive:</p>
                                <pre class="snippet"><code class="html">&lt;div style="overflow-x:auto;">
&lt;table>
... table content ...
&lt;/table>
&lt;/div></code></pre>
                                <p class="note"><b>Note:</b> In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).</p>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-list" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-display-visibility" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->


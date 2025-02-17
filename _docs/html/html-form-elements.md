---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-form-elements/
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
                                <h1>HTML Form Elements</h1>
                                <hr>
                                <p>This chapter describes all HTML form elements.</p>
                                <hr>
                                <h2>The &lt;input> Element</h2>
                                <p>The most important form element is the <code>&lt;input></code> element.</p>
                                <p>The <code>&lt;input></code> element can be displayed in several ways, depending on the <code>type</code> attribute.</p>
                                <pre class="snippet"><code class="html">&lt;input name="firstname" type="text"></code></pre>
                                <p>If the <code>type</code> attribute is omitted, the input field gets the default type: "text".</p>
                                <hr>
                                <h2>The &lt;select> Element</h2>
                                <p>The <code>&lt;select></code> element defines a <b>drop-down list</b>:</p>
                                <pre class="snippet"><code class="html">&lt;select name="cars">
    &lt;option value="volvo">Volvo&lt;/option>
    &lt;option value="saab">Saab&lt;/option>
    &lt;option value="fiat">Fiat&lt;/option>
    &lt;option value="audi">Audi&lt;/option>
&lt;/select></code></pre>
                                <p>The <code>&lt;option></code> elements defines an option that can be selected.</p>
                                <p>By default, the first item in the drop-down list is selected.</p>
                                <p>To define a pre-selected option, add the <code>selected</code> attribute to the option:</p>
                                <pre class="snippet"><code class="html">&lt;option value="fiat" selected>Fiat&lt;/option></code></pre>
                                <p>This is how it will look like in a browser:</p>
                                <select name="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat" selected>Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <hr>
                                <h3>Visible Values:</h3>
                                <p>Use the <code>size</code> attribute to specify the number of visible values:</p>
                                <pre class="snippet"><code class="html">&lt;select name="cars" size="3">
    &lt;option value="volvo">Volvo&lt;/option>
    &lt;option value="saab">Saab&lt;/option>
    &lt;option value="fiat">Fiat&lt;/option>
    &lt;option value="audi">Audi&lt;/option>
&lt;/select></code></pre>
                                <p>This is how it will look like in a browser:</p>
                                <select name="cars" size="3">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <hr>
                                <h3>Allow Multiple Selections:</h3>
                                <p>Use the <code>multiple</code> attribute to allow the user to select more than one value:</p>
                                <select name="cars" size="4" multiple>
                                  <option value="volvo">Volvo</option>
                                  <option value="saab">Saab</option>
                                  <option value="fiat">Fiat</option>
                                  <option value="audi">Audi</option>
                                </select>
                                <hr>
                                <h2>The &lt;textarea> Element</h2>
                                <p>The <code>&lt;textarea></code> element defines a multi-line input field (a text area):</p>
                                <pre class="snippet"><code class="html">&lt;textarea name="message" rows="10" cols="30">
    The cat was playing in the garden.
&lt;/textarea></code></pre>
                                <p>The <code>rows</code> attribute specifies the visible number of lines in a text area.</p>
                                <p>The <code>cols</code> attribute specifies the visible width of a text area.</p>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
                                <p>You can also define the size of the text area by using CSS:</p>
                                <pre class="snippet"><code class="html">&lt;textarea name="message" style="width:200px; height:600px;">
    The cat was playing in the garden.
&lt;/textarea></code></pre>
                                <hr>
                                <h2>The &lt;button> Element</h2>
                                <p>The <code>&lt;button></code> element defines a clickable button:</p>
                                <pre class="snippet"><code class="html">&lt;button type="button" onclick="alert('Hello World!')">Click Me!&lt;/button></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <button type="button" onclick="alert('Hello World!')">Click Me!</button>
                                <p><b>Note:</b> Always specify the <b>type</b> attribute for the button element. Different browsers may use different default types for the button element.</p>
                                <hr>
                                <h2>HTML5 Form Elements</h2>
                                <p>HTML5 added the following form elements:</p>
                                <ul>
                                    <li><code>&lt;datalist></code></li>
                                    <li><code>&lt;output></code></li>
                                </ul>
                                <p><b>Note:</b> Browsers do not display unknown elements. New elements that are not supported in older browsers will not "destroy" your web page.</p>
                                <hr>
                                <h2>HTML5 <datalist> Element</h2>
                                <p>The <code>&lt;datalist></code> element specifies a list of pre-defined options for an <code>&lt;input></code> element.</p>
                                <p>Users will see a drop-down list of the pre-defined options as they input data.</p>
                                <p>The <code>list</code> attribute of the <code>&lt;input></code> element, must refer to the <code>id</code> attribute of the <code>&lt;datalist></code> element.</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php">
        &lt;input list="browsers">
        &lt;datalist id="browsers">
        &lt;option value="Internet Explorer">
        &lt;option value="Firefox">
        &lt;option value="Chrome">
        &lt;option value="Opera">
        &lt;option value="Safari">
    &lt;/datalist> 
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action="">
                                    <input list="browsers">
                                    <datalist id="browsers">
                                        <option value="Internet Explorer">
                                        <option value="Firefox">
                                        <option value="Chrome">
                                        <option value="Opera">
                                        <option value="Safari">
                                    </datalist> 
                                    <input type="submit">
                                </form>
                                <hr>
                                <h2>HTML5 &lt;output> Element</h2>
                                <p>The <code>&lt;output></code> element represents the result of a calculation (like one performed by a script).</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php"
    oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    0
    &lt;input type="range"  id="a" name="a" value="50">
    100 +
    &lt;input type="number" id="b" name="b" value="50">
    =
    &lt;output name="x" for="a b">&lt;/output>
    &lt;br>&lt;br>
    &lt;input type="submit">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action=""
                                    oninput="x.value=parseInt(a.value)+parseInt(b.value)">
                                    0
                                    <input type="range"  id="a" name="a" value="50">
                                    100 +
                                    <input type="number" id="b" name="b" value="50">
                                    =
                                    <output name="x" for="a b"></output>
                                    <br><br>
                                    <input type="submit">
                                </form>
                            </div>
                            <!-- /.Your content goes end here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-forms" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-form-input-types" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

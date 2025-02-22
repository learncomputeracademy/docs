---
layout: documentation
title: HTML Forms | Learn Computer Academy
permalink: html/html-forms/
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
                                <h1>HTML Forms</h1>
                                <hr>
                                <h2>The &lt;form> Element</h2>
                                <p>The HTML <code>&lt;form></code> element defines a form that is used to collect user input:</p>
                                <pre class="snippet"><code class="html">&lt;form>
.
form elements
.
&lt;/form></code></pre>
                                <p>HTML Form Example:</p>
                                <div class="bg-gray p-3">
                                    <form action="/action_page.php" target="_blank">
                                      First name:<br>
                                      <input type="text" name="firstname" value="Mickey"><br>
                                      Last name:<br>
                                      <input type="text" name="lastname" value="Mouse">
                                      <br><br>
                                      <input type="submit" value="Submit">
                                    </form> 
                                </div>
                                <p>An HTML form contains <b>form elements</b>.</p>
                                <p>Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more.</p>
                                <hr>
                                <h2>The &lt;input> Element</h2>
                                <p>The <code>&lt;input></code> element is the most important form element.</p>
                                <p>The <code>&lt;input></code> element can be displayed in several ways, depending on the <b>type</b> attribute.</p>
                                <p>Here are some examples:</p>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">&lt;input type="text"></th>
                                            <td>Defines a one-line text input field</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">&lt;input type="radio"></th>
                                            <td>Defines a radio button (for selecting one of many choices)</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">&lt;input type="submit"></th>
                                            <td>Defines a submit button (for submitting the form)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr>
                                <h2>Text Input</h2>
                                <p><code>&lt;input type="text"></code> defines a one-line input field for <b>text input</b>.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    First name:&lt;br>
    &lt;input type="text" name="firstname">&lt;br>
    Last name:&lt;br>
    &lt;input type="text" name="lastname">
&lt;/form></code></pre>
                                <p>This is how it will look like in a browser:</p>
                                <form>
                                    First name:<br>
                                    <input type="text" name="firstname"><br>
                                    Last name:<br>
                                    <input type="text" name="lastname">
                                </form>
                                <p class="pt-3"><b>Note:</b> The form itself is not visible. Also note that the default width of a <u>text field is 20 characters</u>.</p>
                                <hr>
                                <h2>Radio Button Input</h2>
                                <p><code>&lt;input type="radio"></code> defines a <b>radio button</b>.</p>
                                <p>Radio buttons let a user select ONE of a limited number of choices:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    &lt;input type="radio" name="gender" value="male" checked> Male&lt;br>
    &lt;input type="radio" name="gender" value="female"> Female&lt;br>
    &lt;input type="radio" name="gender" value="other"> Other
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  <input type="radio" name="gender" value="male" checked> Male<br>
                                  <input type="radio" name="gender" value="female"> Female<br>
                                  <input type="radio" name="gender" value="other"> Other
                                </form>
                                <hr>
                                <h2>The Submit Button</h2>
                                <p><code>&lt;input type="submit"></code> defines a button for <b>submitting</b> the form data to a <b>form-handler</b>.</p>
                                <p>The form-handler is typically a server page with a script for processing input data.</p>
                                <p>The form-handler is specified in the form's <b>action</b> attribute:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="Mickey">&lt;br>
    Last name:&lt;br>
    &lt;input type="text" name="lastname" value="Mouse">&lt;br>&lt;br>
    &lt;input type="submit" value="Submit">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action="/">
                                    First name:<br>
                                    <input type="text" name="firstname" value="Mickey"><br>
                                    Last name:<br>
                                    <input type="text" name="lastname" value="Mouse"><br><br>
                                    <input type="submit" value="Submit">
                                </form>
                                <hr>
                                <h2>The Action Attribute</h2>
                                <p>The <code>action</code> attribute defines the action to be performed when the form is submitted.</p>
                                <p>Normally, the form data is sent to a web page on the server when the user clicks on the submit button.</p>
                                <p>In the example above, the form data is sent to a page on the server called "/action_page.php". This page contains a server-side script that handles the form data:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php"></code></pre>
                                <p>If the <code>action</code> attribute is omitted, the action is set to the current page.</p>
                                <hr>
                                <h2>The Target Attribute</h2>
                                <p>The <code>target</code> attribute specifies if the submitted result will open in a new browser tab, a frame, or in the current window.</p>
                                <p>The default value is "<code>_self</code>" which means the form will be submitted in the current window.</p>
                                <p>To make the form result open in a new browser tab, use the value "<code>_blank</code>":</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php" target="_blank"></code></pre>
                                <p>Other legal values are "<code>_parent</code>", "<code>_top</code>", or a name representing the name of an iframe.</p>
                                <hr>
                                <h2>The Method Attribute</h2>
                                <p>The <code>method</code> attribute specifies the HTTP method (<b>GET</b> or <b>POST</b>) to be used when submitting the form data:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php" method="get"></code></pre>
                                <p>or:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php" method="post"></code></pre>
                                <hr>
                                <h2>When to Use GET?</h2>
                                <p>The default method when submitting form data is GET.</p>
                                <p>However, when GET is used, the submitted form data will be <b>visible in the page address field</b>:</p>
                                <pre class="snippet"><code class="html">/action_page.php?firstname=Mickey&lastname=Mouse</code></pre>
                                <p><b>Notes on GET:</b></p>
                                <ul>
                                    <li>Appends form-data into the URL in name/value pairs</li>
                                    <li>The length of a URL is limited (about 3000 characters)</li>
                                    <li>Never use GET to send sensitive data! (will be visible in the URL)</li>
                                    <li>Useful for form submissions where a user wants to bookmark the result</li>
                                    <li>GET is better for non-secure data, like query strings in Google</li>
                                </ul>
                                <hr>
                                <h2>When to Use POST?</h2>
                                <p>Always use POST if the form data contains sensitive or personal information. The POST method does not display the submitted form data in the page address field.</p>
                                <p><b>Notes on POST:</b></p>
                                <ul>
                                    <li>POST has no size limitations, and can be used to send large amounts of data.</li>
                                    <li>Form submissions with POST cannot be bookmarked</li>
                                </ul>
                                <hr>
                                <h2>The Name Attribute</h2>
                                <p>Each input field must have a <code>name</code>name attribute to be submitted.</p>
                                <p>If the <code>name</code>name attribute is omitted, the data of that input field will not be sent at all.</p>
                                <p>This example will only submit the "Last name" input field:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php">
    First name:&lt;br>
    &lt;input type="text" value="Mickey">&lt;br>
    Last name:&lt;br>
    &lt;input type="text" name="lastname" value="Mouse">&lt;br>&lt;br>
    &lt;input type="submit" value="Submit">
&lt;/form></code></pre>
                                <hr>
                                <h2>Grouping Form Data with &lt;fieldset></h2>
                                <p>The <code>&lt;fieldset></code> element is used to group related data in a form.</p>
                                <p>The <code>&lt;legend></code> element defines a caption for the <code>&lt;fieldset></code> element.</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php">
    &lt;fieldset>
        &lt;legend>Personal information:&lt;/legend>
        First name:&lt;br>
        &lt;input type="text" name="firstname" value="Mickey">&lt;br>
        Last name:&lt;br>
        &lt;input type="text" name="lastname" value="Mouse">&lt;br>&lt;br>
        &lt;input type="submit" value="Submit">
    &lt;/fieldset>
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action="/action_page.php">
                                  <fieldset>
                                    <legend>Personal information:</legend>
                                    First name:<br>
                                    <input type="text" name="firstname" value="Mickey"><br>
                                    Last name:<br>
                                    <input type="text" name="lastname" value="Mouse"><br><br>
                                    <input type="submit" value="Submit">
                                  </fieldset>
                                </form>
                                <hr>
                                <p>Here is the list of all <code>&lt;form></code> attributes:</p>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">accept-charset</th>
                                            <td>Specifies the charset used in the submitted form (default: the page charset).</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">action</th>
                                            <td>Specifies an address (url) where to submit the form (default: the submitting page).</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">autocomplete</th>
                                            <td>Specifies if the browser should autocomplete the form (default: on).</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">enctype</th>
                                            <td>Specifies the encoding of the submitted data (default: is url-encoded).</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">method</th>
                                            <td>Specifies the HTTP method used when submitting the form (default: GET).</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">name</th>
                                            <td>Specifies a name used to identify the form (for DOM usage: document.forms.name).</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">novalidate</th>
                                            <td>Specifies that the browser should not validate the form.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">target</th>
                                            <td>Specifies the target of the address in the action attribute (default: _self).</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>You will learn more about the form attributes in the next chapters.</p>
                            </div>
                            <!-- /.Your content goes end here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-responsive" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-form-elements" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


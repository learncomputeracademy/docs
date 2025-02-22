---
layout: documentation
title: HTML Form Attributes | Learn Computer Academy
permalink: html/html-form-attributes/
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
                                <h1>HTML Input Attributes</h1>
                                <hr>
                                <h2>The value Attribute</h2>
                                <p>The <code>value</code> attribute specifies the initial value for an input field:</p>
                                <pre class="snippet"><code class="html">&lt;form action="">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="John">
&lt;/form></code></pre>
                                <hr>
                                <h2>The readonly Attribute</h2>
                                <p>The <code>readonly</code> attribute specifies that the input field is read only (cannot be changed):</p>
                                <pre class="snippet"><code class="html">&lt;form action="">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="John" readonly>
&lt;/form></code></pre>
                                <hr>
                                <h2>The disabled Attribute</h2>
                                <p>The <code>disabled</code> attribute specifies that the input field is disabled.</p>
                                <p>A disabled input field is <u>unusable and un-clickable</u>, and its value will not be sent when submitting the form:</p>
                                <pre class="snippet"><code class="html">&lt;form action="">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="John" disabled>
&lt;/form></code></pre>
                                <hr>
                                <h2>The size Attribute</h2>
                                <p>The <code>size</code> attribute specifies the size (in characters) for the input field:</p>
                                <pre class="snippet"><code class="html">&lt;form action="">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="John" size="40">
&lt;/form></code></pre>
                                <hr>
                                <h2>The maxlength Attribute</h2>
                                <p>The <code>maxlength</code> attribute specifies the maximum allowed length for the input field:</p>
                                <pre class="snippet"><code class="html">&lt;form action="">  
    First name:&lt;br>
    &lt;input type="text" name="firstname" maxlength="10">
&lt;/form></code></pre>
                               With a <code>maxlength</code> attribute, the input field will not accept more than the allowed number of characters.</p>
                                <p>The <code>maxlength</code> attribute does not provide any feedback. If you want to alert the user, you must write JavaScript code.</p>
                                <p><b>Note:</b> Input restrictions are not foolproof, and JavaScript provides many ways to add illegal input. To safely restrict input, it must be checked by the receiver (the server) as well!
                                <hr>
                                <h2>HTML5 Attributes</h2>
                                <p>HTML5 added the following attributes for <code>&lt;input></code>:</p>
                                <ul>
                                    <li>autocomplete</li>
                                    <li>autofocus</li>
                                    <li>form</li>
                                    <li>formaction</li>
                                    <li>formenctype</li>
                                    <li>formmethod</li>
                                    <li>formnovalidate</li>
                                    <li>formtarget</li>
                                    <li>height and width</li>
                                    <li>list</li>
                                    <li>min and max</li>
                                    <li>multiple</li>
                                    <li>pattern (regexp)</li>
                                    <li>placeholder</li>
                                    <li>required</li>
                                    <li>step</li>
                                </ul>
                                <p>and the following attributes for <code>&lt;form></code>:</p>
                                <ul>
                                    <li>autocomplete</li>
                                    <li>novalidate</li>
                                </ul>
                                <hr>
                                <h2>The autocomplete Attribute</h2>
                                <p>The <code>autocomplete</code> attribute specifies whether a form or input field should have autocomplete on or off.</p>
                                <p>When autocomplete is on, the browser automatically completes the input values based on values that the user has entered before.</p>
                                <p><b>Tip:</b> It is possible to have autocomplete "on" for the form, and "off" for specific input fields, or vice versa.</p>
                                <p>The <code>autocomplete</code> attribute works with <code>&lt;form></code> and the following <code>&lt;input></code> types: text, search, url, tel, email, password, datepickers, range, and color.</p>
                                <pre class="snippet"><code class="html">&lt;form action="" autocomplete="on">
    First name:&lt;input type="text" name="fname">&lt;br>
    Last name: &lt;input type="text" name="lname">&lt;br>
    E-mail: &lt;input type="email" name="email" autocomplete="off">&lt;br>
    &lt;input type="submit">
&lt;/form></code></pre> 
                                <p><b>Tip:</b> In some browsers you may need to activate the autocomplete function for this to work.</p>
                                <hr>
                                <h2>The novalidate Attribute</h2>
                                <p>The <code>novalidate</code> attribute is a <code>&lt;form></code> attribute.</p>
                                <p>When present, novalidate specifies that the form data should not be validated when submitted.</p>
                                <pre class="snippet"><code class="html">&lt;form action="" novalidate>
    E-mail: &lt;input type="email" name="user_email">
    &lt;input type="submit">
&lt;/form></code></pre> 
                                <hr>
                                <h2>The autofocus Attribute</h2>
                                <p>The <code>autofocus</code> attribute specifies that the input field should automatically get focus when the page loads.</p>
                                <p>Let the "First name" input field automatically get focus when the page loads:</p>
                                <pre class="snippet"><code class="html">&lt;form action="">
    First name: &lt;input type="text" name="fname" autofocus>
&lt;/form></code></pre>
                                <hr>
                                <h2>The form Attribute</h2>
                                <p>The <code>form</code> attribute specifies one or more forms an <code>&lt;input></code> element belongs to.</p>
                                <p>An input field located outside the HTML form (but still a part of the form):</p>
                                <pre class="snippet"><code class="html">&lt;form action="" id="form1">
    First name: &lt;input type="text" name="fname">&lt;br>
    &lt;input type="submit" value="Submit">
&lt;/form>
Last name: &lt;input type="text" name="lname" form="form1"></code></pre>
                                <hr>
                                <h2>The formaction Attribute</h2>
                                <p>The <code>formaction</code> attribute specifies the URL of a file that will process the input control when the form is submitted.</p>
                                <p>The formaction attribute overrides the action attribute of the <code>&lt;form></code> element.</p>
                                <p>The formaction attribute is used with <code>type="submit"</code> and <code>type="image"</code></p>
                                <p>An HTML form with two submit buttons, with different actions:</p>
                                <pre class="snippet"><code class="html">&lt;form action="">
  First name: &lt;input type="text" name="fname">&lt;br>
  Last name: &lt;input type="text" name="lname">&lt;br>
  &lt;input type="submit" value="Submit">&lt;br>
  &lt;input type="submit" formaction="/action_page2.php"
  value="Submit as admin">
&lt;/form></code></pre>
                                <hr>
                                <h2>The formenctype Attribute</h2>
                                <p>The <code>formenctype</code> attribute specifies how the form data should be encoded when submitted (only for forms with method="post").</p>
                                <p>The <code>formenctype</code> attribute overrides the enctype attribute of the <code>&lt;form></code> element.</p>
                                <p>The <code>formenctype</code> attribute is used with <code>type="submit"</code> and <code>type="image"</code>.</p>
                                <p>Send form-data that is default encoded (the first submit button), and encoded as "multipart/form-data" (the second submit button):</p>
                                <pre class="snippet"><code class="html">&lt;form action="" method="post">
    First name: &lt;input type="text" name="fname">&lt;br>
    &lt;input type="submit" value="Submit">
    &lt;input type="submit" formenctype="multipart/form-data"
    value="Submit as Multipart/form-data">
&lt;/form></code></pre>
                                <hr>
                                <h2>The formmethod Attribute</h2>
<p>The <code>formmethod</code> attribute defines the HTTP method for sending form-data to the action URL.</p>
<p>The <code>formmethod</code> attribute overrides the method attribute of the <code>&lt;form></code> element.</p>
<p>The <code>formmethod</code> attribute can be used with <code>type="submit"</code> and <code>type="image"</code>.</p>
<p>The second submit button overrides the HTTP method of the form:</p>
<pre class="snippet"><code class="html">&lt;form action="" method="get">
    First name: &lt;input type="text" name="fname">&lt;br>
    Last name: &lt;input type="text" name="lname">&lt;br>
    &lt;input type="submit" value="Submit">
    &lt;input type="submit" formmethod="post" value="Submit using POST">
&lt;/form></code></pre>
<hr>
<h2>The formnovalidate Attribute</h2>
<p>The <code>formnovalidate</code> attribute overrides the novalidate attribute of the <code>&lt;form></code> element.</p>
<p>The <code>formnovalidate</code> attribute can be used with <code>type="submit"</code>.</p>
<p>A form with two submit buttons (with and without validation):</p>
<pre class="snippet"><code class="html">&lt;form action="">
    E-mail: &lt;input type="email" name="userid">&lt;br>
    &lt;input type="submit" value="Submit">&lt;br>
    &lt;input type="submit" formnovalidate value="Submit without validation">
&lt;/form></code></pre>
<hr>
<h2>The formtarget Attribute</h2>
<p>The <code>formtarget</code> attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.</p>
<p>The <code>formtarget</code> attribute overrides the target attribute of the <code>&lt;form></code> element.</p>
<p>The <code>formtarget</code> attribute can be used with type="submit" and type="image".</p>
<p>A form with two submit buttons, with different target windows:</p>
<pre class="snippet"><code class="html">&lt;form action="">
    First name: &lt;input type="text" name="fname">&lt;br>
    Last name: &lt;input type="text" name="lname">&lt;br>
    &lt;input type="submit" value="Submit as normal">
    &lt;input type="submit" formtarget="_blank"
    value="Submit to a new window">
&lt;/form></code></pre>
<hr>
<h2>The height and width Attributes</h2>
<p>The <code>height</code> and <code>width</code> attributes specify the height and width of an <code>&lt;input type="image"></code> element.</p>
<p>Always specify the size of images. If the browser does not know the size, the page will flicker while images load.</p>
<p>Define an image as the submit button, with height and width attributes:</p>
<pre class="snippet"><code class="html">&lt;input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"></code></pre>
<hr>
<h2>The list Attribute</h2>
<p>The list attribute refers to a <code>&lt;datalist></code> element that contains pre-defined options for an <code>&lt;input></code> element.</p>
<pre class="snippet"><code class="html">&lt;input list="browsers">
&lt;datalist id="browsers">
  &lt;option value="Internet Explorer">
  &lt;option value="Firefox">
  &lt;option value="Chrome">
  &lt;option value="Opera">
  &lt;option value="Safari">
&lt;/datalist></code></pre>
<hr>
<h2>The min and max Attributes</h2>
<p>The <code>min</code> and <code>max</code> attributes specify the minimum and maximum values for an <code>&lt;input></code> element.</p>
<p>The <code>min</code> and <code>max</code> attributes work with the following input types: number, range, date, datetime-local, month, time and week.</p>
<pre class="snippet"><code class="html">Enter a date before 1980-01-01:
&lt;input type="date" name="bday" max="1979-12-31">
Enter a date after 2000-01-01:
&lt;input type="date" name="bday" min="2000-01-02">
Quantity (between 1 and 5):
&lt;input type="number" name="quantity" min="1" max="5"></code></pre>
<hr>
<h2>The multiple Attribute</h2>
<p>The <code>multiple</code> attribute specifies that the user is allowed to enter more than one value in the <code>&lt;input></code> element.</p>
<p>The <code>multiple</code> attribute works with the following input types: email, and file.</p>
<p>A file upload field that accepts multiple values:</p>
<pre class="snippet"><code class="html">Select images: &lt;input type="file" name="img" multiple></code></pre>
<hr>
<h2>The pattern Attribute</h2>
<p>The pattern attribute specifies a regular expression that the <input> element's value is checked against.</p>
<p>The pattern attribute works with the following input types: text, search, url, tel, email, and password.</p>
<p><b>Tip:</b> Use the global title attribute to describe the pattern to help the user.</p>
<p><b>Tip:</b> Learn more about regular expressions in our JavaScript tutorial.</p>
<p>An input field that can contain only three letters (no numbers or special characters):</p>
<pre class="snippet"><code class="html">Country code: &lt;input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code"></code></pre>
<hr>
<h2>The placeholder Attribute</h2>
<p>The <code>placeholder</code> attribute specifies a hint that describes the expected value of an input field (a sample value or a short description of the format).</p>
<p>The hint is displayed in the input field before the user enters a value.</p>
<p>The <code>placeholder</code> attribute works with the following input types: text, search, url, tel, email, and password.</p>
<pre class="snippet"><code class="html">&lt;input type="text" name="fname" placeholder="First name"></code></pre>
<hr>
<h2>The required Attribute</h2>
<p>The <code>required</code> attribute specifies that an input field must be filled out before submitting the form.</p>
<p>The <code>required</code> attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file.</p>
<pre class="snippet"><code class="html">Username: &lt;input type="text" name="usrname" required></code></pre>
<hr>
<h2>The step Attribute</h2>
<p>The <code>step</code> attribute specifies the legal number intervals for an <code>&lt;input></code> element.</p>
<p>Example: if step="3", legal numbers could be -3, 0, 3, 6, etc.</p>
<p><b>Tip:</b> The step attribute can be used together with the max and min attributes to create a range of legal values.</p>
<p>The <code>step</code> attribute works with the following input types: number, range, date, datetime-local, month, time and week.</p>
<p>An input field with a specified legal number intervals:</p>
<pre class="snippet"><code class="html">&lt;input type="number" name="points" step="3"></code></pre>
                            <!-- /.Your content goes end here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-form-input-types" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html5-intro" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->

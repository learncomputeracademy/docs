---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-form-input-types/
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
                                <h1>HTML Input Types</h1>
                                <hr>
                                <p>This chapter describes the different input types for the <code>&lt;input></code> element.</p>
                                <hr>
                                <h2>HTML Input Types</h2>
                                <p>Here are the different input types you can use in HTML:</p>
                                <ul>
                                    <li><code>&lt;input type="button"></code></li>
                                    <li><code>&lt;input type="checkbox"></code></li>
                                    <li><code>&lt;input type="color"></code></li>
                                    <li><code>&lt;input type="date"></code></li>
                                    <li><code>&lt;input type="datetime-local"></code></li>
                                    <li><code>&lt;input type="email"></code></li>
                                    <li><code>&lt;input type="file"></code></li>
                                    <li><code>&lt;input type="hidden"></code></li>
                                    <li><code>&lt;input type="image"></code></li>
                                    <li><code>&lt;input type="month"></code></li>
                                    <li><code>&lt;input type="number"></code></li>
                                    <li><code>&lt;input type="password"></code></li>
                                    <li><code>&lt;input type="radio"></code></li>
                                    <li><code>&lt;input type="range"></code></li>
                                    <li><code>&lt;input type="reset"></code></li>
                                    <li><code>&lt;input type="search"></code></li>
                                    <li><code>&lt;input type="submit"></code></li>
                                    <li><code>&lt;input type="tel"></code></li>
                                    <li><code>&lt;input type="text"></code></li>
                                    <li><code>&lt;input type="time"></code></li>
                                    <li><code>&lt;input type="url"></code></li>
                                    <li><code>&lt;input type="week"></code></li>
                                </ul>
                                <hr>
                                <h2>Input Type Text</h2>
                                <p><code>&lt;input type="text"></code> defines a <b>one-line text input field</b>:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    First name:&lt;br>
    &lt;input type="text" name="firstname">&lt;br>
    Last name:&lt;br>
    &lt;input type="text" name="lastname">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  First name:<br>
                                  <input type="text" name="firstname"><br>
                                  Last name:<br>
                                  <input type="text" name="lastname">
                                </form>
                                <hr>
                                <h2>Input Type Password</h2>
                                <p><code>&lt;input type="password"></code> defines a <b>password field</b>:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    User name:&lt;br>
    &lt;input type="text" name="username">&lt;br>
    User password:&lt;br>
    &lt;input type="password" name="psw">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  User name:<br>
                                  <input type="text" name="username"><br>
                                  User password:<br>
                                  <input type="password" name="psw">
                                </form>
                                <p>The characters in a password field are masked (shown as asterisks [*] or circles).</p>
                                <hr>
                                <h2>Input Type Submit</h2>
                                <p><code>&lt;input type="submit"></code> defines a button for <b>submitting</b> form data to a <b>form-handler</b>.</p>
                                <p>The form-handler is typically a server page with a script for processing input data.</p>
                                <p>The form-handler is specified in the form's <code>action</code> attribute:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="Mickey">&lt;br>
    Last name:&lt;br>
    &lt;input type="text" name="lastname" value="Mouse">&lt;br>&lt;br>
    &lt;input type="submit" value="Submit">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action="">
                                  First name:<br>
                                  <input type="text" name="firstname" value="Mickey"><br>
                                  Last name:<br>
                                  <input type="text" name="lastname" value="Mouse"><br><br>
                                  <input type="submit" value="Submit">
                                </form>
                                <p>If you omit the submit button's value attribute, the button will get a default text:</p>
                                <hr>
                                <h2>Input Type Reset</h2>
                                <p><code>&lt;input type="reset"></code> defines a <b>reset button</b> that will reset all form values to their default values:</p>
                                <pre class="snippet"><code class="html">&lt;form action="/action_page.php">
    First name:&lt;br>
    &lt;input type="text" name="firstname" value="Mickey">&lt;br>
    Last name:&lt;br>
    &lt;input type="text" name="lastname" value="Mouse">&lt;br>&lt;br>
    &lt;input type="submit" value="Submit">
    &lt;input type="reset">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action="">
                                  First name:<br>
                                  <input type="text" name="firstname" value="Mickey"><br>
                                  Last name:<br>
                                  <input type="text" name="lastname" value="Mouse"><br><br>
                                  <input type="submit" value="Submit">
                                  <input type="reset">
                                </form>
                                <p>If you change the input values and then click the "Reset" button, the form-data will be reset to the default values.</p>
                                <hr>
                                <h2>Input Type Radio</h2>
                                <p><code>&lt;input type="radio"></code> defines a <b>radio button</b>.</p>
                                <p>Radio buttons let a user select ONLY ONE of a limited number of choices:</p>
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
                                <h2>Input Type Checkbox</h2>
                                <p><code>&lt;input type="checkbox"></code> defines a <b>checkbox</b>.</p>
                                <p>Checkboxes let a user select ZERO or MORE options of a limited number of choices.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    &lt;input type="checkbox" name="vehicle1" value="Bike"> I have a bike&lt;br>
    &lt;input type="checkbox" name="vehicle2" value="Car"> I have a car 
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  <input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
                                  <input type="checkbox" name="vehicle2" value="Car"> I have a car 
                                </form>
                                <hr>
                                <h2>Input Type <b>Button</b></h2>
                                <p><code>&lt;input type="button"></code> defines a button:</p>
                                <pre class="snippet"><code class="html">&lt;input type="button" onclick="alert('Hello World!')" value="Click Me!"></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <input type="button" onclick="alert('Hello World!')" value="Click Me!">
                                <hr>
                                <h2>HTML5 Input Types</h2>
                                <p>HTML5 added several new input types:</p>
                                <ul>
                                    <li>color</li>
                                    <li>date</li>
                                    <li>datetime-local</li>
                                    <li>email</li>
                                    <li>month</li>
                                    <li>number</li>
                                    <li>range</li>
                                    <li>search</li>
                                    <li>tel</li>
                                    <li>time</li>
                                    <li>url</li>
                                    <li>week</li>
                                </ul>
                                <p>New input types that are <u>not supported by older web browsers</u>, will behave as <code>&lt;input type="text"></code>.</p>
                                <hr>
                                <h2>Input Type Color</h2>
                                <p>The <code>&lt;input type="color"></code> is used for input fields that should contain a color.</p>
                                <p>Depending on browser support, a color picker can show up in the input field.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Select your favorite color:
    &lt;input type="color" name="favcolor">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Select your favorite color:
                                  <input type="color" name="favcolor" value="#ff0000">
                                </form>
                                <hr>
                                <h2>Input Type Date</h2>
                                <p>The <code>&lt;input type="date"></code> is used for input fields that should contain a date.</p>
                                <p>Depending on browser support, a date picker can show up in the input field.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Birthday:
    &lt;input type="date" name="bday">
&lt;/form></code></pre>
                                <p>You can also use the <code>min</code> and <code>max</code> attributes to add restrictions to dates:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Enter a date before 1980-01-01:
    &lt;input type="date" name="bday" max="1979-12-31">&lt;br>
    Enter a date after 2000-01-01:
    &lt;input type="date" name="bday" min="2000-01-02">&lt;br>
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Enter a date before 1980-01-01:
                                  <input type="date" name="bday" max="1979-12-31"><br>
                                  Enter a date after 2000-01-01:
                                  <input type="date" name="bday" min="2000-01-02"><br>
                                </form>
                                <hr>
                                <h2>Input Type Datetime-local</h2>
                                <p>The <code>&lt;input type="datetime-local"></code> specifies a date and time input field, with no time zone.</p>
                                <p>Depending on browser support, a date picker can show up in the input field.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Birthday (date and time):
    &lt;input type="datetime-local" name="bdaytime">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Birthday (date and time):
                                  <input type="datetime-local" name="bdaytime">
                                </form>
                                <hr>
                                <h2>Input Type Email</h2>
                                <p>The <code>&lt;input type="email"></code> is used for input fields that should contain an e-mail address.</p>
                                <p>Depending on browser support, the e-mail address can be automatically validated when submitted.</p>
                                <p>Some smartphones recognize the email type, and add ".com" to the keyboard to match email input.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    E-mail:
    &lt;input type="email" name="email">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  E-mail:
                                  <input type="email" name="email">
                                </form>
                                <hr>
                                <h2>Input Type File</h2>
                                <p>The <code>&lt;input type="file"></code> defines a file-select field and a "Browse" button for file uploads.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Select a file: &lt;input type="file" name="myFile">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Select a file: <input type="file" name="myFile">
                                </form>
                                <hr>
                                <h2>Input Type Month</h2>
                                <p>The <code>&lt;input type="month"></code> allows the user to select a month and year.</p>
                                <p>Depending on browser support, a date picker can show up in the input field.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Birthday (month and year):
    &lt;input type="month" name="bdaymonth">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Birthday (month and year):
                                  <input type="month" name="bdaymonth">
                                </form>
                                <hr>
                                <h2>Input Type Number</h2>
                                <p>The <code>&lt;input type="number"></code> defines a <b>numeric</b> input field.</p>
                                <p>You can also set restrictions on what numbers are accepted.</p>
                                <p>The following example displays a numeric input field, where you can enter a value from 1 to 5:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Quantity (between 1 and 5):
    &lt;input type="number" name="quantity" min="1" max="5">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Quantity (between 1 and 5):
                                  <input type="number" name="quantity" min="1" max="5">
                                </form>
                                <hr>
                                <h2>Input Restrictions</h2>
                                <p>Here is a list of some common input restrictions:</p>
                                <table class="table table-striped table-bordered">
                                    <thead class="thead-shades">
                                        <tr>
                                            <th scope="col">Attribute</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">disabled</th>
                                            <td>Specifies that an input field should be disabled</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">max</th>
                                            <td>Specifies the maximum value for an input field</td>
                                        </tr> 
                                        <tr>
                                            <th scope="row">maxlength</th>
                                            <td>Specifies the maximum number of character for an input field</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">min</th>
                                            <td>Specifies the minimum value for an input field</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">pattern</th>
                                            <td>Specifies a regular expression to check the input value against</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">readonly</th>
                                            <td>Specifies that an input field is read only (cannot be changed)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">required</th>
                                            <td>Specifies that an input field is required (must be filled out)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">size</th>
                                            <td>Specifies the width (in characters) of an input field</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">step</th>
                                            <td>Specifies the legal number intervals for an input field</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">value</th>
                                            <td>Specifies the default value for an input field</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>You will learn more about input restrictions in the next chapter.</p>
                                <p>The following example displays a numeric input field, where you can enter a value from 0 to 100, in steps of 10. The default value is 30:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Quantity:
    &lt;input type="number" name="points" min="0" max="100" step="10" value="30">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Quantity:
                                  <input type="number" name="points" min="0" max="100" step="10" value="30">
                                </form>
                                <hr>
                                <h2>Input Type Range</h2>
                                <p>The <code>&lt;input type="range"></code> defines a control for entering a number whose exact value is not important (like a slider control). Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the <code>min</code>, <code>max</code>, and <code>step</code> attributes:</p>
                                <pre class="snippet"><code class="html">&lt;form>
    &lt;input type="range" name="points" min="0" max="10">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  <input type="range" name="points" min="0" max="10">
                                </form>
                                <hr>
                                <h2>Input Type Search</h2>
                                <p>The <code>&lt;input type="search"></code> is used for search fields (a search field behaves like a regular text field).</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Search Google:
    &lt;input type="search" name="googlesearch">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Search Google:
                                  <input type="search" name="googlesearch">
                                </form>
                                <hr>
                                <h2>Input Type Tel</h2>
                                <p>The <code>&lt;input type="tel"></code> is used for input fields that should contain a telephone number.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Telephone:
    &lt;input type="tel" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form>
                                  Telephone:
                                  <input type="tel" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}">
                                    <input type="submit">
                                    <span>Format: 1234-567-890</span>
                                </form>
                                <hr>
                                <h2>Input Type Time</h2>
                                <p>The <code>&lt;input type="time"></code> allows the user to select a time (no time zone).</p>
                                <p>Depending on browser support, a time picker can show up in the input field.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Select a time:
    &lt;input type="time" name="usr_time">
&lt;/form></code></pre>
                                <p>This is how the HTML code above will be displayed in a browser:</p>
                                <form action="/action_page.php">
                                  Select a time:
                                  <input type="time" name="usr_time">
                                  <input type="submit">
                                </form>
                                <p><b>Note:</b> type="time" is not supported in Safari or Internet Explorer 12 and earlier versions.</p>
                                <hr>
                                <h2>Input Type Url</h2>
                                <p>The <code>&lt;input type="url"></code> is used for input fields that should contain a URL address.</p>
                                <p>Depending on browser support, the url field can be automatically validated when submitted.</p>
                                <p>Some smartphones recognize the url type, and adds ".com" to the keyboard to match url input.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Add your homepage:
    &lt;input type="url" name="homepage">
&lt;/form></code></pre>
                                <form action="">
                                    Add your homepage:
                                    <input type="url" name="homepage">
                                    <input type="submit">
                                </form>
                                <p><b>Note:</b>The type="url" is not supported in IE9 and earlier versions.</p>
                                <hr>
                                <h2>Input Type Week</h2>
                                <p>The <code>lt;&input type="week"></code> allows the user to select a week and year.</p>
                                <p>Depending on browser support, a date picker can show up in the input field.</p>
                                <pre class="snippet"><code class="html">&lt;form>
    Select a week:
    &lt;input type="week" name="week_year">
&lt;/form></code></pre>
                                <form action="">
                                    Select a week:
                                    <input type="week" name="year_week">
                                    <input type="submit">
                                </form>
                                <p><b>Note:</b> type="week" is not supported in Firefox, Safari or Internet Explorer 11 and earlier versions.</p>
                            </div>
                            <!-- /.Your content goes end here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-form-elements" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-form-attributes" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

---
layout: documentation
title: CSS Form | Learn Computer Academy
permalink: css/css-form/
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
                                    <li class="breadcrumb-item active">Form</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Forms</h1>
                                <hr>
                                <p>The look of an HTML form can be greatly improved with CSS:</p>
                                <div style="border-radius:5px;background-color:#f2f2f2;padding:40px;">
                                    <form action="" class="test">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="Your name.." class="form-control">
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." class="form-control">
                                        <label for="country">Country</label>
                                        <select id="country" name="country" class="form-control">
                                        <option value="usa">Australia</option>
                                        <option value="usa">Canada</option>
                                        <option value="usa">USA</option>
                                        </select>
                                        <a target="_blank" href="#" class="btn btn-primary form-control" style="margin-top: 20px;">SUBMIT &raquo;</a>
                                    </form>
                                </div>
                                <hr>
                                <h2>Styling Input Fields</h2>
                                <p>Use the <code class="w3-codespan">width</code> property to determine the width of the input field:</p>
                                <label for="fname2">First Name</label>
                                <input type="text" id="fname2" name="firstname" style="width:100%; margin-bottom: 1rem;">
                                <pre class="snippet"><code class="css">input {
  width: 100%;
}</code></pre>
                                <p>The example above applies to all &lt;input&gt; elements. If you only want to style a specific input type, you can use attribute selectors:</p>
                                <ul>
                                    <li><code>input[type=text]</code> - will only select text fields</li>
                                    <li><code>input[type=password]</code> - will only select password fields</li>
                                    <li><code>input[type=number]</code> - will only select number fields</li>
                                    <li>etc..</li>
                                </ul>
                                <hr>
                                <h2>Padded Inputs</h2>
                                <p>Use the <code class="w3-codespan">padding</code> property to add space inside the text field.</p>
                                <p><strong>Tip:</strong> When you have many inputs after each other, you might 
                                also want to add some <code class="w3-codespan">margin</code>, to add more space 
                                outside of them:</p>
                                <label for="fname3">First Name</label>
                                <input type="text" id="fname3" name="firstname" class="form-control">
                                <label for="lname3">Last Name</label>
                                <input type="text" id="lname3" name="lastname" class="form-control" style="margin-bottom: 1rem;">
                                <pre class="snippet"><code class="css">input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}</code></pre>
                                <p class="note">Note that we have set the <code>box-sizing</code> property to <code>border-box</code>. This makes sure that the padding and eventually borders are included in the total width and height of the elements. <br>Read more about the <code>box-sizing</code> property in our <a href="#">CSS Box Sizing</a> chapter.</p>
                                <hr>
                                <h2>Bordered Inputs</h2>
                                <p>Use the <code>border</code> property to change the border size and color, and 
                                use the <code>border-radius</code> property to add rounded corners:</p>
                                <label for="fname4">First Name</label>
                                <input type="text" id="fname4" name="firstname" class="form-control" style="border: 1px solid red;margin-bottom: 1rem;">
                                <pre class="snippet"><code class="css">input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}</code></pre>
                                <p>If you only want a bottom border, use the <code>border-bottom</code> property:</p>
                                <label for="fname7">First Name</label>
                                <input type="text" id="fname7" name="firstname" placeholder="First Name" class="form-control" style="border-width: 1px; border-style: solid; border-color: transparent transparent red transparent;margin-bottom: 1rem; ">
                                <pre class="snippet"><code class="css">input[type=text] {
  border: none;
  border-bottom: 2px solid red;
}</code></pre>
                                <hr>
                                <h2>Colored Inputs</h2>
                                <p>Use the <code>background-color</code> property to add a background color to the input, and the <code>color</code> property to change the text color:</p>
                                <input type="text" value="John" name="firstname" class="form-control" style="background: #0054D1;color: #fff;margin-bottom: 1rem;" >
                                <pre class="snippet"><code class="css">input[type=text] {
  background-color: #3CBC8D;
  color: white;
}</code></pre>
                                <hr>
                                <h2>Focused Inputs</h2>
                                <p>By default, some browsers will add a blue outline around the input when it gets focus (clicked on). You can remove this behavior by adding <code>outline: none;</code> to the input.</p>
                                <p>Use the <code>:focus</code> selector to do something with the input field when it gets focus:</p>
                                <style>
                                    .focus1:focus{
                                       background-color: lightblue; 
                                   }
                                    .focus2:focus{
                                       background-color: pink; 
                                   }                                   
                                </style>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input class="focus1 form-control" type="text" name="firstname" style="margin-bottom: 1rem;">
                                        <pre class="snippet"><code class="css">input[type=text]:focus {
  background-color: lightblue;
}</code></pre>
                                    </div>
                                    <div class="col-md-6">
                                        <input class="focus2 form-control" type="text" name="lastname" style="margin-bottom: 1rem;">
                                        <pre class="snippet"><code class="css">input[type=text]:focus {
  background-color: pink;
}</code></pre>
                                    </div>                                    
                                </div>
                                <hr>
                                <h2>Input with icon/image</h2>
                                <p>If you want an icon inside the input, use the <code class="w3-codespan">background-image</code> property and position it with the <code>background-position</code> property. Also notice that we add a large left padding to reserve the space of the icon:</p>
                                <style>
                                    input[type=text].icon {
                                      background-color: white;
                                      background-image: url('assets/img/search.svg');
                                      background-position: 10px 10px; 
                                      background-repeat: no-repeat;
                                      padding-left: 40px;
                                      background-size: 20px;
                                </style>
                                <input type="text" name="search" placeholder="Search.." class="icon form-control" style="margin-bottom: 1rem;">
                                <pre class="snippet"><code class="css">input[type=text] {
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding-left: 40px;
}</code></pre>
                                <hr>
                                <h2>Styling Textareas</h2>
                                <p><strong>Tip:</strong> Use the <code>resize</code> property to prevent textareas from being resized (disable the "grabber" in the bottom right corner):</p>
                                <textarea name="firstname" class="form-control" style="margin-bottom: 1rem;">Some text...</textarea>
                                <pre class="snippet"><code class="css">textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}</code></pre>
                                <hr>
                                <h2>Styling Select Menus</h2>
                                <style>
                                    select#country {
                                      width: 100%;
                                      padding: 16px 20px;
                                      border: none;
                                      border-radius: 4px;
                                      background-color: #f1f1f1;
                                    }
                                </style>
                                <form class="test">
                                  <select id="country" name="country" style="background-color:#f1f1f1;border:none;margin-bottom: 1rem;">
                                    <option value="usa">Choose...</option>
                                    <option value="usa">Australia</option>
                                    <option value="usa">Canada</option>
                                    <option value="usa">USA</option>
                                  </select>
                                </form>
                                <pre class="snippet"><code class="css">select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}</code></pre>
                                <hr>
                                <h2>Styling Input Buttons</h2>
                                <input type="button" value="Button" class="btn btn-primary" style="margin-bottom: 1rem;">
                                <input type="button" value="Button" class="btn btn-primary" style="width:100%;margin-bottom: 1rem;">
                                <pre class="snippet"><code class="css">input[type=button], input[type=submit], input[type=reset] {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
/* Tip: use width: 100% for full-width buttons */</code></pre>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-dropdowns" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-units" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>
            

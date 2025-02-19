---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/html-classes/
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
                                <h1>HTML The class Attribute</h1>
                                <hr>
                                <h2>Using The class Attribute</h2>
                                <p>The HTML <code>class</code> attribute is used to define equal styles for elements with the same class name.</p>
                                <p>So, all HTML elements with the same <code>class</code> attribute will get the same style.</p>
                                <p>Here we have three <code>&lt;div></code> elements that point to the same class name:</p>
                                <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    &lt;style>
        .cities {
          background-color: black;
          color: white;
          margin: 20px;
          padding: 20px;
        } 
    &lt;/style>
&lt;/head>
&lt;body>
    &lt;div class="cities">
      &lt;h2>London&lt;/h2>
      &lt;p>London is the capital of England.&lt;/p>
    &lt;/div>
    &lt;div class="cities">
      &lt;h2>Paris&lt;/h2>
      &lt;p>Paris is the capital of France.&lt;/p>
    &lt;/div>
    &lt;div class="cities">
      &lt;h2>Tokyo&lt;/h2>
      &lt;p>Tokyo is the capital of Japan.&lt;/p>
    &lt;/div>
&lt;/body>
&lt;/html></code></pre>
                                <hr>
                                <h2>Using The class Attribute on Inline Elements</h2>
                                <p>The HTML <code>class</code> attribute can also be used on inline elements:</p>
                                <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>
&lt;head>
    &lt;style>
        span.note {
          font-size: 120%;
          color: red;
        }
    &lt;/style>
&lt;/head>
&lt;body>
    &lt;h1>My &lt;span class="note">Important&lt;/span> Heading&lt;/h1>
    &lt;p>This is some &lt;span class="note">important&lt;/span> text.&lt;/p>
&lt;/body>
&lt;/html></code></pre>
                                <p><b>Tip:</b> The <code>class</code> attribute can be used on any HTML element.</p> 
                                <p><b>Note:</b> The class name is <code>case sensitive!</code></p> 
                                <p><b>Tip:</b> You can learn much more about CSS in our CSS Tutorial.</p>    
                                <hr>
                                <h2>Select Elements With a Specific Class</h2>
                                <p>In CSS, to select elements with a specific class, write a period (.) character, followed by the name of the class:</p> 
                                <p><i>Use CSS to style all elements with the class name "city":</i></p> 
                                <pre class="snippet"><code class="html">&lt;style>
    .city {
      background-color: tomato;
      color: white;
      padding: 10px;
    } 
&lt;/style>
&lt;h2 class="city">London&lt;/h2>
&lt;p>London is the capital of England.&lt;/p>
&lt;h2 class="city">Paris&lt;/h2>
&lt;p>Paris is the capital of France.&lt;/p>
&lt;h2 class="city">Tokyo&lt;/h2>
&lt;p>Tokyo is the capital of Japan.&lt;/p></code></pre>
                                <hr>
                                <h2>Multiple Classes</h2>
                                <p>HTML elements can have more than one class name, each class name must be separated by a space.</p> 
                                <p><i>Style elements with the class name "city", also style elements with the class name "main":</i></p>
                                <pre class="snippet"><code class="html">&lt;h2 class="city main">London&lt;/h2>
&lt;h2 class="city">Paris&lt;/h2>
&lt;h2 class="city">Tokyo&lt;/h2></code></pre>
                                <p>In the example above, the first <code>&lt;h2></code> element belongs to both the "city" class and the "main" class.</p>
                                <hr>
                                <h2>Different Tags Can Share Same Class</h2>
                                <p>Different tags, like <code>&lt;h2></code> and <code>&lt;p></code>, can have the same class name and thereby share the same style:</p>
                                <pre class="snippet"><code class="html">&lt;h2 class="city">Paris&lt;/h2>
&lt;p class="city">Paris is the capital of France&lt;/p></code></pre>
                                <hr>
                                <h2>Using The class Attribute in JavaScript</h2>
                                <p>The class name can also be used by JavaScript to perform certain tasks for elements with the specified class name.</p>
                                <p>JavaScript can access elements with a specified class name by using the <code>getElementsByClassName()</code> method:</p>
                                <pre class="snippet"><code class="html">&lt;script>
    function myFunction() {
      var x = document.getElementsByClassName("city");
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    }
&lt;/script></code></pre>                             
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="html-blocks" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="html-id" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>


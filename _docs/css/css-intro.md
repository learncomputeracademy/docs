---
layout: documentation
title: Introduction of CSS | Learn Computer Academy
permalink: css/css-intro/
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
                                <h1>CSS Introduction</h1>
                                <hr>
                                <h2>What is CSS?</h2>
                                <ul>
                                    <li><b>CSS</b> stands for <b>C</b>ascading <b>S</b>tyle <b>S</b>heets</li>
                                    <li>CSS describes <b>how HTML elements are to be displayed on screen, paper, or in other media</b></li>
                                    <li>CSS <b>saves a lot of work</b>. It can control the layout of multiple web pages all at once</li>
                                    <li>External stylesheets are stored in <b>CSS files</b></li>
                                </ul>
                                <hr>
                                <h2>Why Use CSS?</h2>
                                <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p> 
                                <hr>
                                <h2>CSS Solved a Big Problem</h2>
                                <p>HTML was NEVER intended to contain tags for formatting a web page!</p>
                                <p>HTML was created to <b>describe the content</b> of a web page, like:</p>
                                <p>&lt;h1>This is a heading&lt;/h1></p>
                                <p>&lt;p>This is a paragraph.&lt;/p></p>
                                <p>When tags like &lt;font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</p>
                                <p>To solve this problem, the <b>World Wide Web Consortium (W3C)</b> created CSS.</p>
                                <p>CSS removed the style formatting from the HTML page!</p>
                                <p><b>If you don't know what HTML is, we suggest that you read our HTML Tutorial.</b>
                                <hr>
                                <h2>CSS Saves a Lot of Work!</h2>
                                <p>The style definitions are normally saved in external <b>.css</b> files.</p>
                                <p>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>
                                <hr>
                                <h2>The Difference Between Inline, External and Internal CSS Styles</h2>
                                <p>There are three ways you can use to implement CSS: internal, external, and inline styles. Let’s break them down.</p>
                                <h3>Internal CSS</h3>
                                <p>Internal or embedded CSS requires you to add <code>&lt;style></code> tag in the <code>&lt;head></code> section of your HTML document.</p>
                                <p>This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.</p>
                                <p>Here’s how you can use internal CSS:</p>
                                <ol>
                                    <li>Open your HTML page and locate <code>&lt;head></code> opening tag.</li>
                                    <li>Put the following code right after the <code>&lt;head></code> tag</li>
                                </ol>
                                <pre class="snippet"><code class="css">&lt;!DOCTYPE html>
&lt;html>
    &lt;head>
        &lt;style>
            body {
                background-color: blue;
            }
            h1 {
                color: red;
                padding: 60px;
            } 
        &lt;/style>
    &lt;/head>
    &lt;body>
        &lt;h1>Learn Computer Academy Tutorials&lt;/h1>
        &lt;p>This is our paragraph.&lt;/p>
    &lt;/body>
&lt;/html></code></pre>
                            <h3>Advantages of Internal CSS:</h3>
                            <ul>
                                <li>You can use class and ID selectors in this style sheet. Here’s an example:</li>
                                <pre class="snippet"><code class="css">.class {
    property1 : value1; 
    property2 : value2; 
    property3 : value3; 
}
#id {
    property1 : value1; 
    property2 : value2; 
    property3 : value3; 
}</code></pre>
                                <li>Since you’ll only add the code within the same HTML file, you don’t need to upload multiple files.</li>
                            </ul>
                            <h3>Disadvantages of Internal CSS:</h3>
                            <ul>
                                <li>Adding the code to the HTML document can increase the page’s size and loading time.</li>
                            </ul>
                            <hr>
                         <h3>External CSS</h3>
                         <p>With external CSS, you’ll link your web pages to an external <b>.css file</b>, which can be created by any text editor in your device (e.g., Notepad++).</p>
                         <p>This CSS type is a more efficient method, especially for styling a large website. By editing one <b>.css file</b>, you can change your entire site at once.</p>
                         <p>Follow these steps to use external CSS:</p>
                         <ol>
                             <li>Create a new <b>.css</b> file with the text editor, and add the style rules. For example:</li>
<pre class="snippet"><code class="css">.xleftcol {
   float: left;
   width: 33%;
   background:#809900;
}
.xmiddlecol {
   float: left;
   width: 34%;
   background:#eff2df;
}
</code></pre>               
                            <li>In the <code>&lt;head></code> section of your HTML sheet, add a reference to your external .css file right after <code>&lt;title></code> tag:</li>
                         </ol>                            
                            <pre class="snippet"><code class="html">&lt;link rel="stylesheet" type="text/css" href="style.css" /></code></pre>
                            <p class="note"><b>Note:</b> Don’t forget to change style.css with the name of your .css file.</p>
                            <h3>Advantages of External CSS:</h3>
                            <ol>
                                <li>Since the CSS code is in a separate document, your HTML files will have a cleaner structure and are smaller in size.</li>
                                <li>You can use the same <b>.css</b> file for multiple pages.</li>
                            </ol>
                            <h3>Disadvantages of External CSS:</h3>
                            <ol>
                                <li>Your pages may not be rendered correctly until the external CSS is loaded.</li>
                                <li>Uploading or linking to multiple CSS files can increase your site’s download time.</li>
                            </ol>
                            <hr>
                            <h3>Inline CSS</h3>
                            <p>Inline CSS is used to style a specific HTML element. For this CSS style, you’ll only need to add the style attribute to each HTML tag, without using selectors.</p>
                            <p>This CSS type is not really recommended, as each HTML tag needs to be styled individually. Managing your website may become too hard if you only use inline CSS.</p>
                            <p>However, inline CSS in HTML can be useful in some situations. For example, in cases where you don’t have access to CSS files or need to apply styles for a single element only.</p>
                            <p>Let’s take a look at an example. Here, we add an inline CSS to the <code>&lt;p></code> and <code>&lt;h1></code> tag:</p>
                            <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>
&lt;body style="background-color:black;">
    &lt;h1 style="color:white;padding:30px;">Hostinger Tutorials&lt;/h1>
    &lt;p style="color:white;">Something usefull here.&lt;/p>
&lt;/body>
&lt;/html></code></pre>
                            <h3>Advantages of Inline CSS:</h3>
                            <ol>
                                <li>You can easily and quickly insert CSS rules to an HTML page. That’s why this method is useful for testing or previewing the changes, and performing quick-fixes to your website.</li>
                                <li>You don’t need to create and upload a separate document as in the external style.</li>
                            </ol>
                             <h3>Disadvantages of Inline CSS:</h3>
                            <ol>
                                <li>Adding CSS rules to every HTML element is time-consuming and makes your HTML structure messy.</li>
                                <li>Styling multiple elements can affect your page’s size and download time.</li>
                            </ol>
                            <hr>
                            <h2>Conclusion</h2>
                            <p>In this tutorial, you’ve learned the difference between the three types of CSS: internal, external, and inline. Here’s the recap:</p>
                            <ol>
                                <li><b>Internal or embedded</b> ⁠— add <code>&lt;style></code> tag in the <code>&lt;head></code> section of HTML document</li>
                                <li><b>External</b> ⁠— link the HTML sheet to a separate <b>.css file</b></li>
                                <li><b>Inline</b> ⁠— apply CSS rules for specific elements.</li>
                            </ol>
                                 <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/html/html5-new-elements" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-syntax" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->

                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->






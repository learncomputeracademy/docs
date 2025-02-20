---
layout: documentation
title: CSS Icons | Learn Computer Academy
permalink: css/css-icons/
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
                                    <li class="breadcrumb-item active">Icons</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Icons</h1>
                                <hr>
                                <div style="text-align: center;" class="d-flex justify-content-around">
                                    <div class="w3-third">
                                        <i class="fa fa-cloud" style="font-size:36px;"></i>
                                        <i class="fa fa-cloud" style="font-size:60px; color: #888"></i>
                                        <i class="fa fa-cloud" style="font-size:72px; color: #0054D1;"></i>
                                    </div>
                                    <div class="w3-third">
                                        <i class="fa fa-car" style="font-size:36px;"></i>
                                        <i class="fa fa-car" style="font-size:60px; color: #888"></i>
                                        <i class="fa fa-car" style="font-size:72px; color: #0054D1;"></i>
                                    </div>
                                    <div class="w3-third">
                                        <i class="fab fa-earlybirds" style="font-size:36px;"></i>
                                        <i class="fab fa-earlybirds" style="font-size:60px; color: #888"></i>
                                        <i class="fab fa-earlybirds" style="font-size:72px; color: #0054D1;"></i>
                                    </div> 
                                </div>
                                <hr>
                                <h2>How To Add Icons</h2>
                                <p>The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome.</p>
                                <p>Add the name of the specified icon class to any inline HTML element (like <code>&lt;i&gt;</code> or 
                                <code>&lt;span&gt;</code>).</p>
                                <p>All the icons in the icon libraries below, are scalable vectors that can be customized with CSS (size, color, shadow, etc.)</p>
                                <hr>
                                <h2>Font Awesome Icons</h2>
                                <p>To use the Font Awesome icons, go to <a href="https://fontawesome.com">fontawesome.com</a>, sign in, and get a code to add in the <code>&lt;head&gt;</code> section of your HTML page:</p>
                                <p><code class="w3-codespan">&lt;script src=&quot;https://kit.fontawesome.com/<em>yourcode</em>.js&quot;&gt;&lt;/script&gt;</code></p>
                                <p>Read more about how to get started with Font Awesome in W3Schools- 
                                <a href="https://www.w3schools.com/icons/fontawesome5_intro.asp">Font Awesome 5 tutorial</a>.</p>
                                <p><b>Note:</b> No downloading or installation is required!</p>
                                <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>
    &lt;head>
        &lt;script src="https://kit.fontawesome.com/a076d05399.js"></script>
    &lt;/head>

    &lt;body>
        &lt;i class="fas fa-cloud"></i>
        &lt;i class="fas fa-heart"></i>
        &lt;i class="fas fa-car"></i>
        &lt;i class="fas fa-file"></i>
        &lt;i class="fas fa-bars"></i>
    &lt;/body>
&lt;/html></code></pre>
                            <hr>
                            <h2>Google Icons</h2>
                            <p>To use the Google icons, add the following line inside the <code>&lt;head&gt;</code> section of your HTML page:</p>
                            <p><code>&lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;</code></p>
                            <p><b>Note:</b> No downloading or installation is required!</p>
                            <pre class="snippet"><code class="html">&lt;!DOCTYPE html>
&lt;html>
    &lt;head>
        &lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    &lt;/head>

    &lt;body>
        &lt;i class="material-icons">cloud</i>
        &lt;i class="material-icons">favorite</i>
        &lt;i class="material-icons">attachment</i>
        &lt;i class="material-icons">computer</i>
        &lt;i class="material-icons">traffic</i>
    &lt;/body>
&lt;/html></code></pre>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="/css/css-font" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="/css/css-link" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                       <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>

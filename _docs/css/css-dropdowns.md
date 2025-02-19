---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: css/css-dropdowns/
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
                                    <li class="breadcrumb-item active">Dropdowns</li>
                                </ol>
                            </nav>
                            <!-- Your content goes started here -->
                            <div class="doc-content">
                                <h1>CSS Dropdowns</h1>
                                <hr>
                                <p>Create a hoverable dropdown with CSS.</p>
                                <hr>
                                <h2>Demo: Dropdown Examples</h2>
                                <p>Move the mouse over the examples below:</p>
                                <style>
                                    .dropdown{ display: inline-block; }
                                    .dropdown-content{ position: absolute; left: 0; bottom: -50px; display: none; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); background-color: #f9f9f9; }
                                    .dropdown-content p{ margin-bottom: 0; }
                                    .dropdown:hover .dropdown-content{ display: inline-block; }
                                    .dropdown-content2 a{ display: block; color: #111; }
                                    .dropdown:hover .dropdown-content2{ position: absolute; left: 0; bottom: -100px; min-width: 168px; padding: 12px; }
                                </style>
                                <div class="row" style="margin-bottom:1rem;">
                                    <div class="col-md-4">
                                        <div class="dropdown dropdown2" style="position:relative;top:15px;display: inline-block;">
                                          <span class="dropspan">Dropdown Text</span>
                                          <div class="dropdown-content" style="padding:8px 16px;min-width:150px;text-align:center">
                                            <p>Hello World!</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="dropdown dropdown2">
                                          <button class="btn btn-primary">Dropdown Menu</button>
                                          <div class="dropdown-content dropdown-content2">
                                            <a href="javascript:void(0)">Link 1</a>
                                            <a href="javascript:void(0)">Link 2</a>
                                            <a href="javascript:void(0)">Link 3</a>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="dropdown dropdown2">
                                        <span style="position:relative;bottom:15px;">Other: </span><img class="dropimg" src="/assets/img/img_5terre.jpg" alt="Cinque Terre" width="100" height="50">
                                          <div class="dropdown-content right">
                                            <div class="img">
                                                <img src="/assets/img/img_5terre.jpg" alt="Cinque Terre" width="300" height="200">
                                                <div style="padding:15px;text-align:center;">Beautiful Cinque Terre</div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.Your content ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="css-navbar" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="css-form" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>
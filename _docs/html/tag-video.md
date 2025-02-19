---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/tag-video/
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
                                <h1>HTML5 Video</h1>
                                <hr>
                                <h2>Playing Videos in HTML</h2>
                                <p>Before HTML5, a video could only be played in a browser with a plug-in (like flash).</p>
                                <p>The HTML5 <code>&lt;video></code> element specifies a standard way to embed a video in a web page.</p>
                                <video width="100%" height="auto" controls autoplay>
                                  <source src="{{ site.baseurl }}/assets/img/movie.mp4" type="video/mp4">
                                  <source src="{{ site.baseurl }}/assets/img/movie.ogg" type="video/ogg">
                                Your browser does not support the video tag.
                                </video>
                                <hr>
                                <h2>The HTML &lt;video> Element</h2>
                                <p>To show a video in HTML, use the &lt;video> element:</p>
                                <pre class="snippet"><code class="html">&lt;video width="320" height="240" controls>
  &lt;source src="movie.mp4" type="video/mp4">
  &lt;source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
&lt;/video></code></pre>
                                <hr>
                                <h2>How it Works</h2>
                                <p>The controls attribute adds video controls, like play, pause, and volume.</p>
                                <p>It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.</p>
                                <p>The <code>&lt;source></code> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.</p>
                                <p>The text between the <code>&lt;video></code> and <code>&lt;/video></code> tags will only be displayed in browsers that do not support the <code>&lt;video></code> element.</p>
                                <hr>
                                <h2>HTML &lt;video> Autoplay</h2>
                                <p>To start a video automatically use the autoplay attribute:</p>
                                <pre class="snippet"><code class="html">&lt;video width="320" height="240" autoplay>
  &lt;source src="movie.mp4" type="video/mp4">
  &lt;source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
&lt;/video></code></pre>
                                <p class="note">The autoplay attribute does not work in mobile devices like iPad and iPhone.</p>
                                <hr>
                                <h2>HTML Video - Methods, Properties, and Events</h2>
                                <p>HTML5 defines DOM methods, properties, and events for the <code>&lt;video></code> element.</p>
                                <p>This allows you to load, play, and pause videos, as well as setting duration and volume.</p>
                                <p>There are also DOM events that can notify you when a video begins to play, is paused, etc.</p>
                                <div style="text-align:center; margin-bottom: 20px;"> 
                                  <button onclick="playPause()" class="btn btn-primary">Play/Pause</button> 
                                  <button onclick="makeBig()" class="btn btn-primary">Big</button>
                                  <button onclick="makeSmall()" class="btn btn-primary">Small</button>
                                  <button onclick="makeNormal()" class="btn btn-primary">Normal</button>
                                  <br><br>
                                  <video id="video1" width="420">
                                    <source src="{{ site.baseurl }}/assets/img/movie.mp4" type="video/mp4">
                                    <source src="{{ site.baseurl }}/assets/img/movie.ogg" type="video/ogg">
                                    Your browser does not support HTML5 video.
                                  </video>
                                </div> 
                                <script> 
                                    var myVideo = document.getElementById("video1"); 
                                    function playPause() { 
                                      if (myVideo.paused) 
                                        myVideo.play(); 
                                      else 
                                        myVideo.pause(); 
                                    } 
                                    function makeBig() { 
                                        myVideo.width = 560; 
                                    } 
                                    function makeSmall() { 
                                        myVideo.width = 320; 
                                    } 
                                    function makeNormal() { 
                                        myVideo.width = 420; 
                                    } 
                                </script> 
                                <pre class="snippet"><code class="html">&lt;div style="text-align:center"> 
  &lt;button onclick="playPause()">Play/Pause&lt;/button> 
  &lt;button onclick="makeBig()">Big&lt;/button>
  &lt;button onclick="makeSmall()">Small&lt;/button>
  &lt;button onclick="makeNormal()">Normal&lt;/button>
  &lt;br>&lt;br>
  &lt;video id="video1" width="420">
    &lt;source src="movie.mp4" type="video/mp4">
    &lt;source src="movie.ogg" type="video/ogg">
    Your browser does not support HTML5 video.
  &lt;/video>
&lt;/div> </code></pre>
                        <pre class="snippet"><code class="js">&lt;script> 
    var myVideo = document.getElementById("video1"); 
    function playPause() { 
      if (myVideo.paused) 
        myVideo.play(); 
      else 
        myVideo.pause(); 
    } 
    function makeBig() { 
        myVideo.width = 560; 
    } 
    function makeSmall() { 
        myVideo.width = 320; 
    } 
    function makeNormal() { 
        myVideo.width = 420; 
    } 
&lt;/script> </code></pre>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-section" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-audio" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>



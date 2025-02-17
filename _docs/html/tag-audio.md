---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: html/tag-audio/
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
                                <h1>HTML5 Audio</h1>
                                <hr>
                                <h2>Audio on the Web</h2>
                                <p>Before HTML5, audio files could only be played in a browser with a plug-in (like flash).</p>
                                <p>The HTML5 <code>&lt;audio></code> element specifies a standard way to embed audio in a web page.</p>
                                <hr>
                                <h2>The HTML <audio> Element</h2>
                                <p>To play an audio file in HTML, use the <code>&lt;audio></code> element:</p>
                                <pre class="snippet"><code class="html">&lt;audio controls>
  &lt;source src="claps.ogg" type="audio/ogg">
  &lt;source src="claps.mp3" type="audio/mpeg">
Your browser does not support the audio element.
&lt;/audio></code></pre>
                                <audio controls>
                                  <source src="{{ site.baseurl }}/assets/img/claps.ogg" type="audio/ogg">
                                  <source src="{{ site.baseurl }}/assets/img/claps.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                                <hr>
                                <h2>HTML Audio - How It Works</h2>
                                <p>The controls attribute adds audio controls, like play, pause, and volume.</p>
                                <p>The <code>&lt;source></code> element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.</p>
                                <p>The text between the <code>&lt;audio> </code>and <code>&lt;/audio></code> tags will only be displayed in browsers that do not support the <code>&lt;audio></code> element.</p>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-video" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <a href="tag-youtube" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>



---
layout: documentation
title: Embed YouTube Iframe  | Learn Computer Academy
permalink: html/tag-youtube/
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
                                <h1>HTML YouTube Videos</h1>
                                <hr>
                                <p>The easiest way to play videos in HTML, is to use YouTube.</p>
                                <hr>
                                <h2>Struggling with Video Formats?</h2>
                                <p>Earlier in this tutorial, you have seen that you might have to convert your videos to different formats to make them play in all browsers.</p>
                                <p>Converting videos to different formats can be difficult and time-consuming.</p>
                                <p>An easier solution is to let YouTube play the videos in your web page.</p>
                                <hr>
                                <h2>YouTube Video Id</h2>
                                <p>YouTube will display an id (like tgbNymZ7vqY), when you save (or play) a video.</p>
                                <p>You can use this id, and refer to your video in the HTML code.</p>
                                <hr>
                                <h2>Playing a YouTube Video in HTML</h2>
                                <p>To play your video on a web page, do the following:</p>
                                <ul>
                                    <li>Upload the video to YouTube</li>
                                    <li>Take a note of the video id</li>
                                    <li>Define an <code>&lt;iframe></code> element in your web page</li>
                                    <li>Let the src attribute point to the video URL</li>
                                    <li>Use the width and height attributes to specify the dimension of the player</li>
                                    <li>Add any other parameters to the URL (see below)</li>
                                </ul>
                                <pre class="snippet"><code class="html">&lt;iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
&lt;/iframe></code></pre>
                                <iframe width="100%" height="520" style="border: none;" src="https://www.youtube.com/embed/GY-CLke_gVI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <hr>
                                <h2>YouTube Autoplay</h2>
                                <p>You can have your video start playing automatically when a user visits that page by adding a simple parameter to your YouTube URL.</p>
                                <p class="note"><b>Note</b>: Take careful consideration when deciding to autoplay your videos. Automatically starting a video can annoy your visitor and end up causing more harm than good.</p>
                                <p>Value 0 (default): The video will not play automatically when the player loads.</p>
                                <p>Value 1: The video will play automatically when the player loads.</p>
                                <hr>
                                <h2>YouTube - Autoplay</h2>
                                <pre class="snippet"><code class="html">&lt;iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
&lt;/iframe></code></pre>
                                <hr>
                                <h2>YouTube Playlist</h2>
                                <p>A comma separated list of videos to play (in addition to the original URL).</p>
                                <hr>
                                <h2>YouTube Loop</h2>
                                <p>Value 0 (default): The video will play only once.</p>
                                <p>Value 1: The video will loop (forever).</p>
                                <hr>
                                <pre class="snippet"><code class="html">&lt;iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
&lt;/iframe></code></pre>
                                <hr>
                                <h2>YouTube Controls</h2>
                                <p>Value 0: Player controls does not display.</p>
                                <p>Value 1 (default): Player controls display.</p>
                                <pre class="snippet"><code class="html">&lt;iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
&lt;/iframe></code></pre>
                                <hr>
                                <h2>YouTube - Using &lt;object> or &lt;embed></h2>
                                <p><b>Note</b>: YouTube <code>&lt;object></code> and <code>&lt;embed></code> were deprecated from January 2015. You should migrate your videos to use <code>&lt;iframe></code> instead.</p>
                            </div>
                            <!-- /.Your content goes ends here -->
                            <div class="footer-btn d-flex justify-content-between">
                                <a href="tag-audio" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a>
                                <!-- <a href="#" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a> -->
                            </div>
                            <!-- /.End of footer button -->
                        </div>
                        <!-- Right Sidebar Start-->
                        <?php include '../includes/right-sidebar-innerpage.php'; ?>
                        <!-- Right-Sidebar End -->
                    </div>
                </div>



---
layout: documentation
title: Resourses | Learn Computer Academy
---

 <div class="loader">
  <!-- /.End of Navbar -->
  <div class="header-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="header-title">Collection of useful resourses.</h2>
          <p class="sub-title">Browse through our collection of important and interesting resources from around the internet.</p>
          <div class="header-btn">
            <a href="/design/photoshop/photoshop-intro" class="btn btn-white btn-round">Go to Study Material</a>
            <a href="/syllabus" class="btn btn-white btn-round">Checkout Syllabus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.End of header -->
  <div class="page-content" style="margin-left: 0;">
    <div class="content-wrapper">
      <div class="product-demo">
        <div class="container">
          <div class="row">
            <div class="col-md-9 d-md-block rightSidebar">
              <div class="row">
                <div class="col-md-12">
                  <div class="section-title">
                    <h2>Browse Resourses</h2>
                    <p>Please let us know if you have any interesting links which we have missed.</p>
                  </div>
                </div>
              </div>
              <!-- Free Iamges Start -->
              <h2 class="link-title">Free Images</h2>
              <div class="row" id="freeImages">
                {% for free_image in site.data.resources.free_images %}
                  <div class="col-6 col-sm-6 col-md-3">
                    <div class="preview">
                      <div class="preview-content">
                        <div class="preview-img">
                          <img src="{{ site.baseurl }}/assets/img/{{ free_image.thumbnail }}" class="img-fluid" alt="" />
                          <div class="img-overlay"></div>
                          <div class="preview-btn">
                            <a href="{{ free_image.url }}" target="_blank" class="btn btn-white">Visit</a>
                          </div>
                        </div>
                      </div>
                      <div class="preview-title">{{ free_image.name }}</div>
                    </div>
                  </div>
                {% endfor %}
              </div>
              <hr>
              <!-- Colors Start -->
              <h2 class="link-title">Colors</h2>
              <div class="row" id="colors">
                {% for color_website in site.data.resources.color_websites %}
                  <div class="col-6 col-sm-6 col-md-3">
                    <div class="preview">
                      <div class="preview-content">
                        <div class="preview-img">
                          <img src="{{ site.baseurl }}/assets/img/{{ color_website.thumbnail }}" class="img-fluid" alt="">
                          <div class="img-overlay"></div>
                          <div class="preview-btn">
                            <a href="{{ color_website.url }}" target="_blank" class="btn btn-white">Visit</a>
                          </div>
                        </div>
                      </div>
                      <div class="preview-title">{{ color_website.name }}</div>
                    </div>
                    <!-- /.End of preview -->
                  </div>
                {% endfor %}
              </div>
              <hr>
              <!-- Free Icons Start -->
              <h2 class="link-title">Free Icons</h2>
              <div class="row" id="freeIcons">
                {% for free_icon in site.data.resources.free_icons %}
                  <div class="col-6 col-sm-6 col-md-3">
                    <div class="preview">
                      <div class="preview-content">
                        <div class="preview-img">
                          <img src="{{ site.baseurl }}/assets/img/{{ free_icon.thumbnail }}" class="img-fluid" alt="">
                          <div class="img-overlay"></div>
                          <div class="preview-btn">
                            <a href="{{ free_icon.url }}" target="_blank" class="btn btn-white">Visit</a>
                          </div>
                        </div>
                      </div>
                      <div class="preview-title">{{ free_icon.name }}</div>
                    </div>
                    <!-- /.End of preview -->
                  </div>
                {% endfor %}
              </div>
              <hr>
              <!-- Free Fonts Start -->
              <h2 class="link-title">Free Fonts</h2>
              <div class="row" id="freeFonts">
                {% for free_font in site.data.resources.free_fonts %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ free_font.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ free_font.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ free_font.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %}              
              </div>
              <hr>
              <!-- Lorem Ipsum Start -->
              <h2 class="link-title">Lorem Ipsum</h2>
              <div class="row" id="loremIpsum">
                {% for lorem_ipsum in site.data.resources.lorem_ipsums %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ lorem_ipsum.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ lorem_ipsum.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ lorem_ipsum.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %} 
              </div>
              <hr>
              <!-- Webfont Generator Start -->
              <h2 class="link-title">Webfont Generator</h2>
              <div class="row" id="transfonter">
                {% for webfont_generator in site.data.resources.webfont_generators %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ webfont_generator.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ webfont_generator.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ webfont_generator.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %}
              </div>
              <hr>
              <!-- W3Schools Start -->
              <h2 class="link-title">W3Schools</h2>
              <div class="row" id="w3schools">
                {% for w3School in site.data.resources.w3Schools %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ w3School.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ w3School.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ w3School.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %}
              </div>
              <hr>
              <!-- CSS Generator Start -->
              <h2 class="link-title">CSS Generator</h2>
              <div class="row" id="cssgen">
                {% for css_generator in site.data.resources.css_generators %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ css_generator.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ css_generator.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ css_generator.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %}
              </div>
              <hr>
              <!-- Javascript Start-->
              <h2 class="link-title">JavaScript</h2>
              <div class="row" id="jslib">
                {% for javascript in site.data.resources.javascripts %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ javascript.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ javascript.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ javascript.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %}
              </div>
              <!-- /. Js row -->
              <hr>
              <!-- Design & UI Start -->
              <h2 class="link-title">Design & UI</h2>
              <div class="row" id="dUi">
                {% for design_ui in site.data.resources.design_uis %}
                  <div class="col-6 col-sm-6 col-md-3">
                      <div class="preview">
                        <div class="preview-content">
                          <div class="preview-img">
                            <img src="{{ site.baseurl }}/assets/img/{{ design_ui.thumbnail }}" class="img-fluid" alt="">
                            <div class="img-overlay"></div>
                            <div class="preview-btn">
                              <a href="{{ design_ui.url }}" target="_blank" class="btn btn-white">Visit</a>
                            </div>
                          </div>
                        </div>
                        <div class="preview-title">{{ design_ui.name }}</div>
                      </div>
                      <!-- /.End of preview -->
                    </div>
                {% endfor %}
              </div>
              <!-- /.dUi row -->
            </div>
            <div class="col-md-3 d-none d-sm-none d-md-block rightSidebar">
                {% include sidebar-resourses.html %}
              <!-- /.End of section nav -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

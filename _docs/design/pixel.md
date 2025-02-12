---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: design/pixel/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-syllabus.html %}
<div class="top-search">
  <div class="input-group">
   <span class="input-group-addon">
    <i class="ti-search"></i>
   </span>
   <input type="text" class="form-control" placeholder="Search for snippets ......">
   <span class="input-group-addon close-search">
    <i class="ti-close"></i>
   </span>
  </div>
 </div>
 <!-- /.End of Top Search -->
 <!-- Navbar Start --> <?php include '../includes/innerpage-navigation.php'; ?>
 <!-- /.End of Navbar -->
 <!-- Start Sidebar --> <?php include '../includes/sidebar-syllabus.php'; ?>
 <!-- /.End of Sidebar -->
 <div class="page-content">
  <div class="content-wrapper">
   <div class="row">
    <div class="col-md-9 content">
     <!-- Your content goes started here -->
     <div class="doc-content">
      <h1>What is Pixel?</h1>
      <hr>
      <p>The pixel (a word invented from "picture element") is the basic unit of programmable color on a computer display or in a computer image. Think of it as a logical - rather than a physical - unit. The physical size of a pixel depends on how you've set the resolution for the display screen. If you've set the display to its maximum resolution, the physical size of a pixel will equal the physical size of the dot pitch (let's just call it the dot size) of the display. If, however, you've set the resolution to something less than the maximum resolution, a pixel will be larger than the physical size of the screen's dot (that is, a pixel will use more than one dot). </p>
      <p>The specific color that a pixel describes is some blend of three components of the color spectrum - RGB. Up to three bytes of data are allocated for specifying a pixel's color, one byte for each major color component. A true color or 24-bit color system uses all three bytes. However, many color display systems use only one byte (limiting the display to 256 different colors).</p>
      <p>A bitmap is a file that indicates a color for each pixel along the horizontal axis or row (called the x coordinate) and a color for each pixel along the vertical axis (called the y coordinate). A Graphics Interchange Format file, for example, contains a bitmap of an image (along with other data).</p>
      <p>Screen image sharpness is sometimes expressed as dpi (dots per inch). (In this usage, the term dot means pixel, not dot as in dot pitch.) Dots per inch is determined by both the physical screen size and the resolution setting. A given image will have lower resolution - fewer dots per inch - on a larger screen as the same data is spread out over a larger physical area. On the same size screen, the image will have lower resolution if the resolution setting is made lower - resetting from 800 by 600 pixels per horizontal and vertical line to 640 by 480 means fewer dots per inch on the screen and an image that is less sharp. (On the other hand, individual image elements such as text will be larger in size.)</p>
      <p>Pixel replaced an earlier contraction of picture element, pel.</p>
      <hr>
      <h2>Resolution</h2>
      <p>In computers, resolution is the number of pixels (individual points of color) contained on a display monitor, expressed in terms of the number of pixels on the horizontal axis and the number on the vertical axis. The sharpness of the image on a display depends on the resolution and the size of the monitor. The same pixel resolution will be sharper on a smaller monitor and gradually lose sharpness on larger monitors because the same number of pixels are being spread out over a larger number of inches.</p>
      <p>A given computer display system will have a maximum resolution that depends on its physical ability to focus light (in which case the physical dot size - the dot pitch - matches the pixel size) and usually several lesser resolutions. For example, a display system that supports a maximum resolution of 1280 by 1023 pixels may also support 1024 by 768, 800 by 600, and 640 by 480 resolutions. Note that on a given size monitor, the maximum resolution may offer a sharper image but be spread across a space too small to read well.</p>
      <p>Display resolution is not measured in dots per inch as it usually is with printers. However, the resolution and the physical monitor size together do let you determine the pixels per inch. Typically, PC monitors have somewhere between 50 and 100 pixels per inch. For example, a 15-inch VGA (see display modes) monitor has a resolution of 640 pixels along a 12-inch horizontal line or about 53 pixels per inch. A smaller VGA display would have more pixels per inch.</p>
      <hr>
      <h2>Dot Pitch</h2>
      <p>The dot pitch specification for a display monitor tells you how sharp the displayed image can be. The dot pitch is measured in millimeters (mm) and a smaller number means a sharper image. In desk top monitors, common dot pitches are .31mm, .28mm, .27mm, .26mm, and .25mm. Personal computer users will usually want a .28mm or finer. Some large monitors for presentation use may have a larger dot pitch (.48mm, for example). Think of the dot specified by the dot pitch as the smallest physical visual component on the display. A pixel is the smallest programmable visual element and maps to the dot if the display is set to its highest resolution. When set to lower resolutions, a pixel encompasses multiple dots.</p>
      <p>Technically, in a cathode ray tube (CRT) display with a shadow mask, the dot pitch is the distance between the holes in the shadow mask, measured in millimeters (mm). The shadow mask is a metal screen filled with holes through which the three electron beams pass that focus to a single point on the tube's phosphor surface. In CRTs that use an aperture grill (a slotted form of mask), such as Sony's Trinitron flat-screen technology, the dot pitch is the difference between adjacent slots that pass through an electron beam of the same color.</p>
      <hr>
      <h2>True Color</h2>
      <p>True color is the specification of the color of a pixel on a display screen using a 24-bit value, which allows the possibility of up to 16,777,216 possible colors. Many displays today support only an 8-bit color value, allowing up to 256 possible colors.</p>
      <p>The number of bits used to define a pixel's color shade is its bit-depth . True color is sometimes known as 24-bit color . Some new color display systems offer a 32-bit color mode. The extra byte, called the alpha channel , is used for control and special effects information.</p>
      <hr>
      <h2>Dots Per Inch (dpi)</h2>
      <p>1) In computers, dots per inch (dpi) is a measure of the sharpness (that is, the density of illuminated points) on a display screen . The dot pitch determines the absolute limit of the possible dots per inch. However, the displayed resolution of pixel s (picture elements) that is set up for the display is usually not as fine as the dot pitch. The dots per inch for a given picture resolution will differ based on the overall screen size since the same number of pixels are being spread out over a different space. Some users prefer the term "pixels per inch ( ppi )" as a measure of display image sharpness, reserving dpi for use with the print medium.</p>
      <p>2) In printing, dots per inch (dpi) is the usual measure of printed image quality on the paper. The average personal computer printer today provides 300 dpi or 600 dpi. Choosing the higher print quality usually reduces the speed of printing each page.</p>
      <hr>
      <h2>Pixels Per Inch (ppi)</h2>
      <p>In computers, pixels per inch (ppi) is a measure of the sharpness (that is, the density of illuminated points) on a display screen . The dot pitch determines the absolute limit of the possible pixels per inch. However, the displayed resolution of pixel s (picture elements) that is set up for the display is usually not as fine as the dot pitch. The pixels per inch for a given picture resolution will differ based on the overall screen size since the same number of pixels are being spread out over a different space. The term "dots per inch" ( dpi ), extended from the print medium, is sometimes used instead of pixels per inch.</p>
     </div>
     <!-- /.Your content ends here -->
     <div class="footer-btn d-flex justify-content-between">
      <!--                                 <a href="#" class="btn"><i class="fas fa-arrow-circle-left"></i>Previous</a><a href="#" class="btn">Next<i class="fas fa-arrow-circle-right"></i></a> -->
     </div>
     <!-- /.End of footer button -->
    </div>
    <!-- Right Sidebar Start--> <?php include '../includes/right-sidebar-innerpage.php'; ?>
    <!-- Right-Sidebar End -->
   </div>
  </div>


---
layout: documentation
title: Color in Design | Learn Computer Academy
permalink: design/photoshop-resizing/
---
<div class="loader">
{% include innerpage-navigation.html %}
{% include sidebar-syllabus.html %}
<div class="page-content">
 <div class="content-wrapper">
  <div class="row">
   <div class="col-md-9 content">
    <!-- Your content goes started here -->
    <div class="doc-content">
     <h2>Resizing</h2>
     <hr>
     <div class="row">
      <div class="col-md-12">
       <div class="text-block">
        <p>Resizing in Photoshop can help you print your images in standard photo sizes, resize and preserve the high quality of digital photos, and enlarge small images to a poster size.</p>
        <h2>Resizing to a Specific Size</h2>
        <p>To resize your image to a preset size, follow the steps below:</p>
        <ul>
         <li>1.In the main menu, go to <b>File > New</b>. </li>
         <li>2.In the New dialog box, click on the <b>Document Type</b> dropdown menu.You will see several preset sizes, such as Web, Photo, and U.S Paper. Remember that <b>72 ppi</b> is ine for online images, but a ppi of <b>150-300 ppi</b> is better for printed images. (Figure 10). </li>
         <li>3.Choose the size that you wish and click OK.</li>
        </ul>
        <div class="img-block" style="text-align: center;margin-bottom: 1rem;">
         <img src="{{ site.baseurl }}/../assets/img/ps-interface.jpg" alt="PS Interface" class="img-fluid">
         <span style="display: block;">
          <i>Figure 10: Preset size in the New dialog box</i>
         </span>
        </div>
        <p class="note">
         <b>NOTE</b>: All the preset sizes are in portrait orientation. If you wish to resize an image with the landscape orientation, you need to create your own preset. To create your own size, do the following:
        </p>
        <ul>
         <li>1. Type in the values for Width and Height, for example 2000 x 2000.</li>
         <li>2. Type in your desired resolution (300 ppi for high quality prints, and 72 ppi is good for web images).</li>
         <li>3.Click the Save Preset button.</li>
        </ul>
       </div>
      </div>
     </div>
     <hr>
     <h2>Resizing Digital Photos</h2>
     <p>Digital photos usually have large dimensions but low resolution, 72 ppi, which affects their quality when their size is decreased or increased. When printed, the photos with the changed size will look pixilated. To resize the digital photos without loosing the quality, follow these steps:</p>
     <div class="img-block" style="text-align: center;margin-bottom: 1rem;">
      <img src="{{ site.baseurl }}/../assets/img/cat-resize.jpg" alt="cat" class="img-fluid">
      <span style="display: block;">
       <i>Figure 11: Dimensions of a digital photo</i>
      </span>
     </div>
     <ul>
      <li>1. Open the digital photo you wish to resize.</li>
      <li>2. In the main menu, go to <b>View > Rulers</b>. You will see the dimension of your photo (Figure 11). </li>
      <li>3. In the main menu, go to <b>Image > Image Size</b>. </li>
      <li>4. In the <b>Image Size</b> dialog box, uncheck the <b>Resample Image box</b> (Figure 12). Type in your desired resolution (anything between 150 and 300 ppi). The photo is now 4 x 2.667 inches. </li>
     </ul>
     <div class="img-block" style="text-align: center;margin-bottom: 1rem;">
      <img src="{{ site.baseurl }}/../assets/img/cat-resize-dialog.jpg" alt="cat" class="img-fluid">
      <span style="display: block;">
       <i>Figure 12: Changing resolution</i>
      </span>
     </div>
     <hr>
     <h2>Enlarging</h2>
     <p>If you want to make your digital photo into a poster size image, you can do it in the Image Size dialog box. However, just increasing the dimensions will make the image appear blurry and pixilated. To enlarge the image without losing the quality, follow these steps:</p>
     <ul>
      <li>1. Open the digital image you wish to enlarge.</li>
      <li>2. In the main menu, go to <b>Image > Image Size</b>. </li>
      <li>3. In the Image Size dialog box, make sure the <b>Resample Image box</b> is checked and choose <b>Bicubic Smoother</b> from the dropdown box (Figure 13). </li>
      <li>4. Change the <b>Width</b> and <b>Height</b> measurements to Percent. Type in <b>110</b>. This will increase the size of the image by <b>10 percent</b> (Figure 13). </li>
      <li>5. Continue enlarging by 10 percent untill you are satisied with the size.</li>
     </ul>
     <p class="note">
      <b>NOTE</b>: If the Resampling box is unchecked, the dropdown menu is inaccessible. Always be sure to have it checked.
     </p>
     <div class="img-block" style="text-align: center;margin-bottom: 1rem;">
      <img src="{{ site.baseurl }}/../assets/img/cat-enlarge.jpg" alt="cat" class="img-fluid">
      <span style="display: block;">
       <i>Figure 13: Increasing the size by 10 percent</i>
      </span>
     </div>
    </div>
    <!-- /.Your content goes ends here -->
    <div class="footer-btn d-flex justify-content-between">
     <a href="photoshop-layers" class="btn">
      <i class="fas fa-arrow-circle-left"></i>Previous </a>
     <a href="photoshop-saving" class="btn">Next <i class="fas fa-arrow-circle-right"></i>
     </a>
    </div>
    <!-- /.End of footer button -->
   </div>
   <!-- Right Sidebar Start--> <?php include '../../includes/right-sidebar-innerpage.php'; ?>
   <!-- Right-Sidebar End -->
  </div>
 </div>

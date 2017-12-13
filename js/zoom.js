$(".zoom_01").elevateZoom({
  zoomType				: "lens",
  lensShape : "round",
  lensSize    : 200
});


//initiate the plugin and pass the id of the div containing gallery images
$("#img_01").elevateZoom({constrainType:"height", constrainSize:425, lensShape : "round", zoomType: "lens", containLensZoom: true, gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: "active"}); 

//pass the images to Fancybox
$("#img_01").bind("click", function(e) {  
  var ez =   $('#img_01').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});

//initiate the plugin and pass the id of the div containing gallery images
$("#img_02").elevateZoom({constrainType:"height", constrainSize:425, lensShape : "round", zoomType: "lens", containLensZoom: true, gallery:'gallery_02', cursor: 'pointer', galleryActiveClass: "active"}); 

//pass the images to Fancybox
$("#img_02").bind("click", function(e) {  
  var ez =   $('#img_02').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});
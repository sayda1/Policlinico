$(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
});

$('#myCarousel').carousel({
                interval: 5000
        });









$(document).ready(function(){

    var native_width = 0;
    var native_height = 0;

    //Now the mousemove function
    $(".magnify").mousemove(function(e){
        //When the user hovers on the image, the script will first calculate
        //the native dimensions if they don't exist. Only after the native dimensions
        //are available, the script will show the zoomed version.
        if(!native_width && !native_height)
        {
            //This will create a new image object with the same image as that in .small
            //We cannot directly get the dimensions from .small because of the 
            //width specified to 200px in the html. To get the actual dimensions we have
            //created this image object.
            var image_object = new Image();
            image_object.src = $(".small").attr("src");
            
            //This code is wrapped in the .load function which is important.
            //width and height of the object would return 0 if accessed before 
            //the image gets loaded.
            native_width = image_object.width;
            native_height = image_object.height;
        }
        else
        {
            //x/y coordinates of the mouse
            //This is the position of .magnify with respect to the document.
            var magnify_offset = $(this).offset();
            //We will deduct the positions of .magnify from the mouse positions with
            //respect to the document to get the mouse positions with respect to the 
            //container(.magnify)
            var mx = e.pageX - magnify_offset.left;
            var my = e.pageY - magnify_offset.top;
            
            //Finally the code to fade out the glass if the mouse is outside the container
            if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
            {
                $(".large").fadeIn(100);
            }
            else
            {
                $(".large").fadeOut(100);
            }
            if($(".large").is(":visible"))
            {
                //The background position of .large will be changed according to the position
                //of the mouse over the .small image. So we will get the ratio of the pixel
                //under the mouse pointer with respect to the image and use that to position the 
                //large image inside the magnifying glass
                var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
                var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
                var bgp = rx + "px " + ry + "px";
                
                //Time to move the magnifying glass with the mouse
                var px = mx - $(".large").width()/2;
                var py = my - $(".large").height()/2;
                //Now the glass moves with the mouse
                //The logic is to deduct half of the glass's width and height from the 
                //mouse coordinates to place it with its center at the mouse coordinates
                
                //If you hover on the image now, you should see the magnifying glass in action
                $(".large").css({left: px, top: py, backgroundPosition: bgp});
            }
        }
    })
})









// $(document).ready(function(){ $(".capa1").hover(function(){ $(".mensaje1").show();  }, function(){ $(".mensaje1").hide(); }); });
// $(document).ready(function(){ $(".capa2").hover(function(){ $(".mensaje2").show();  }, function(){ $(".mensaje2").hide(); }); });
// $(document).ready(function(){ $(".capa3").hover(function(){ $(".mensaje3").show();  }, function(){ $(".mensaje3").hide(); }); });
// $(document).ready(function(){ $(".capa4").hover(function(){ $(".mensaje4").show();  }, function(){ $(".mensaje4").hide(); }); });
// $(document).ready(function(){ $(".capa5").hover(function(){ $(".mensaje5").show();  }, function(){ $(".mensaje5").hide(); }); });
// $(document).ready(function(){ $(".capa6").hover(function(){ $(".mensaje6").show();  }, function(){ $(".mensaje6").hide(); }); });
// $(document).ready(function(){ $(".capa7").hover(function(){ $(".mensaje7").show();  }, function(){ $(".mensaje7").hide(); }); });
// $(document).ready(function(){ $(".capa8").hover(function(){ $(".mensaje8").show();  }, function(){ $(".mensaje8").hide(); }); });


// $(document).ready(function(){$(".capa1").hover(function(){$(".capa").hide();}, function(){$(".capa").show();}); });
// $(document).ready(function(){$(".capa2").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});
// $(document).ready(function(){$(".capa3").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});
// $(document).ready(function(){$(".capa4").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});
// $(document).ready(function(){$(".capa5").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});
// $(document).ready(function(){$(".capa6").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});
// $(document).ready(function(){$(".capa7").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});
// $(document).ready(function(){$(".capa8").hover(function(){$(".capa").hide();}, function(){$(".capa").show();});});


// $(document).ready(function()
// {
//     var navItems = $('.admin-menu li > a');
//     var navListItems = $('.admin-menu li');
//     var allWells = $('.admin-content');
//     var allWellsExceptFirst = $('.admin-content:not(:first)');
    
//     allWellsExceptFirst.hide();
//     navItems.click(function(e)
//     {
//         e.preventDefault();
//         navListItems.removeClass('active');
//         $(this).closest('li').addClass('active');
        
//         allWells.hide();
//         var target = $(this).attr('data-target-id');
//         $('#' + target).show();
//     });
// });



// .proyects2{background-color: rgb(21,56,116);}
// .proyects2 .esconder-mostrar {padding: 3em 0em 4em 0em;}
// .proyects2 .esconder-mostrar .proyectos{margin: 1em auto;}
// .proyects2 .esconder-mostrar ul{list-style: none; width: 95%;}
// .proyects2 .esconder-mostrar .izquierda{float: left; padding: 0;}
// .proyects2 .esconder-mostrar .derecha{float: right; padding: 0;}
// .proyects2 .mostrar-esconder a{text-decoration: none;}
// .proyects2 .mostrar-esconder h4 { font-size: 15px; color:white;}
// .proyects2 .capa1, .capa2, .capa3, .capa4, .capa5, .capa6,.capa7,.capa8{
//   border-radius: 0.5em;
//   background-color: transparent;       
//   border:1px solid white;
//   padding: 1em;
//   margin-bottom: 0.3em;
//   color: #fff; }
// .proyects2 .capa1 i, .capa2 i, .capa3 i, .capa4 i, .capa5 i, .capa6 i,.capa7 i,.capa8 i{font-size: 2em; color:white;}
// .proyects2 .mensaje1, .mensaje2, .mensaje3, .mensaje4, .mensaje5, .mensaje6,.mensaje7,.mensaje8{display: none; height: 20em;color: #fff;}
// .proyects2 .img{background-size: cover; background-position: center; width: 100%; height:19em; border-radius: 0.5em;}
// .proyects2 .img1{background-image: url(../img/medicina.jpg);}
// .proyects2 .img2{background-image: url(../img/proyectos.JPG);}
// .proyects2 .img3{background-image: url(../img/produccion.JPG);}
// .proyects2 .img4{background-image: url(../img/industria.jpg);}
// .proyects2 .img5{background-image: url(../img/social.jpg);}
// .proyects2 .img6{background-image: url(../img/vivero.jpg);}
// .proyects2 .img7{background-image: url(../img/medicina.jpg);}
// .proyects2 .img8{background-image: url(../img/medicina.jpg);}
// .proyects2 li:hover{
//     background-color: #337ab7;
//     border-radius: 0.5em;
// }




// <div class="proyects2 ">
//   <div class="mostrar-esconder">
//     <div class="esconder-mostrar">
//         <div class="container">
//             <h2 class="text-center" style="color: white;">PROYECTOS</h2>
//             <div class="row">
//               <div class="col-md-3 col-xs-6 col-sm-3">
//                 <ul class="izquierda">
//                   <li class="capa1 text-center active">
//                     <h4>SALUD</h4> 
//                   </li>
//                   <li class="capa2 text-center"> 
//                     <h4>EDUCACIÓN</h4>
//                   </li>
//                   <li class="capa3 text-center"> 
//                     <h4>COMERCIALIZACIÓN</h4>
//                   </li>
//                   <li class="capa4 text-center">
//                     <h4>PRODUCCIÓN TEXTIL</h4>
//                   </li>
//                 </ul>
//               </div>
//               <div class="col-md-6 hidden-xs col-sm-6" style="height: 320px;">
//                 <div class="centro">
//                     <div class="capa text-center " style="width: 100%">
//                     </div>
//                     <div  class="mensaje1 text-center">
//                       <div class="img img1"></div>
//                       <h4>SALUD</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic esse minus recusandae magni consequuntur dolor provident.</p>
//                     </div>
//                     <div  class="mensaje2 text-center">
//                       <div class="img img2"></div>
//                       <h4>EDUCACIÓN</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic esse minus recusandae magni consequuntur dolor provident.</p>
//                     </div>
//                     <div  class="mensaje3 text-center">
//                       <div class="img img3"></div>
//                       <h4>COMERCIALIZACIÓN</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic esse minus recusandae magni consequuntur dolor provident.</p>
//                     </div>
//                     <div class="mensaje4 text-center">
//                       <div class="img img4"></div>
//                       <h4>PRODUCCIÓN TEXTIL</h4>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit delectus, ex rem accusantium voluptatibus laudantium pariatur, velit laborum quaerat!.</p>
//                     </div>
//                     <div  class="mensaje5 text-center">
//                       <div class="img img5"></div>
//                       <h4>INDUSTRIA ALIMENTARIA</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores las mejores partes de las vvisve nde nomeib coo todo lo que habita las mejores dolencias de las maquinas.</p> 
//                     </div>
//                     <div  class="mensaje6 text-center">
//                       <div class="img img6"></div>
//                       <h4>VIVERO</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic esse minus recusandae magni consequuntur dolor provident.</p>
//                     </div>
//                     <div  class="mensaje7 text-center">
//                       <div class="img img7"></div>
//                       <h4>AYUDA SOCIAL</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic esse minus recusandae magni consequuntur dolor provident.</p>
//                     </div>
//                     <div  class="mensaje8 text-center">
//                       <div class="img img8"></div>
//                       <h4>AYUDA SOCIAL</h4>
//                       <p>Asperiores voluptas sed, pariatur at perspiciatis vel repellat maiores corporis reiciendis eveniet dolorum placeat hic esse minus recusandae magni consequuntur dolor provident.</p>
//                     </div>
//                 </div>
//               </div>
//               <div class="col-md-3 col-xs-6 col-sm-3">
//                 <ul class="derecha">
//                   <li class="capa5 text-center"> 
//                     <!-- <i class="fa fa-cutlery" aria-hidden="true"></i> -->
//                     <h4>IND. ALIMENTARIA</h4>
//                   </li>
//                   <li class="capa6 text-center"> 
//                     <!-- <i class="fa fa-leaf" aria-hidden="true"></i> -->
//                     <h4>VIVERO</h4>
//                   </li>
//                   <li class="capa7 text-center">
//                     <!-- <i class="fa fa-users" aria-hidden="true"></i> --> 
//                     <h4>AYUDA SOCIAL</h4>
//                   </li>
//                   <li class="capa8 text-center">
//                     <!-- <i class="fa fa-users" aria-hidden="true"></i> --> 
//                     <h4>SOCIAL</h4>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//       </div>
//     </div>
//   </div>
// </div>
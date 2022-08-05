  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  $(document).ready(function(){
			$('.b1').click(function(e){
				e.preventDefault();
				$("p.hid").hide(1000, function() {
					$('.hidecontent').css("border","0");
                    alert("Hide method has finished its working!");
                });
			});
			for ( var i = 0; i < 5; i++ ) {
			  $( "<div>" ).appendTo($('.hide2'));
			}
			$( ".hide2 div" ).click(function() {
			  $( this ).hide( 2000, function() {
			    $( this ).remove();
			  });
			});
			$("#btn").on('click', function() {
                $("#outer").show("swing");
            });

			$('.togglebtn').on('click', function(){
				$("p.normal").toggle();
		        $("p.fast").toggle("fast");
		        $("p.slow").toggle("slow");
		        $("p.very-fast").toggle(50);
		        $("p.very-slow").toggle(2000);
			});
			$('.btn1').click(function(){
				alert("this will fade out your content");
				$("p.para").fadeOut(1000);
			})
			$('.btn2').click(function(){
				$("p.para").fadeIn(1000);
			});
			 $(".btn3").click(function(){
			    $("p.para").fadeOut(1000, function(){
			      alert("fadeOut() method is finished!");
			    });
			  });
			 $('.btn4').click(function(){
			 	$(".para").fadeTo(1000, 0.4);
			 });
			 $(".btn5").click(function(e){
			 	e.preventDefault();  
		        $("#first").fadeToggle();  
		        $("#second").fadeToggle("slow");  
		        $("#third").fadeToggle(3000,function(){
		            alert("The fade-toggle effect is completed click again on button.");
		        });  
		    });  
			 $('.opnbtn').on('click', function(e){
			 	// $('.overlay').slidedown('100').css("width", "100%");
			 	$(".overlay").slideDown(400).delay(800).fadeIn(400).addClass('open');
			 });
			 $('.closebtn').on('click', function(){
			 	$('.overlay').slideUp( 500 ).fadeIn( 400 ).removeClass("open");
			 });
			 $(window).scroll( function(){
			 	var scrollTop = $(window).scrollTop();
			 	if( scrollTop >= 50){
				$( "#p1" ).animate( { width : "60%",
					opacity : 0.5,
					marginLeft : "0.5in",
					fontSize : "2em",
					borderWidth : "11px"
					}, 1500 );

				
				}else{
						
					$( "#p1" ).animate( { width : "100%",
					opacity : 1,
					marginLeft : "0",
					fontSize : "1em",
					borderWidth : "0px"
					}, 1500 );
				}
			});
			 $(".animation").mouseover(function(){
			   $(this).animate({
                  height:'300px',
                  width:'300px',
                })
			 });

			$(".animation").mouseout(function(){
			   $(this).animate({
                  height:'178px',
                  width:'178px',
                });
            });


		});
		function scrollAnimated() {
		$("html, body").animate({ scrollTop: "20" });
		}
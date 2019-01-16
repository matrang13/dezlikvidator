$(function() {

	$(document).ready(function() {
        $("#lightgallery").lightGallery(); 
    });

    $(document).ready(function() {
    	$("#menu").mmenu({
			"extensions": [
			  "pagedim-black",
			  "position-right",
			  "theme-dark"
			],
			"iconbar": {
			  "add": true,
			  "top": [
			     "<a href='#/'><i class='fa fa-home'></i></a>",
			     "<a href='#/'><i class='fa fa-user'></i></a>"
			  ],
			  "bottom": [
			     "<a href='#/'><i class='fa fa-twitter'></i></a>",
			     "<a href='#/'><i class='fa fa-facebook'></i></a>",
			     "<a href='#/'><i class='fa fa-linkedin'></i></a>"
			  ]
			},
			"navbars": [
			  {
			     "position": "bottom",
			     "content": [
			        "<a class='fa fa-envelope' href='#/'></a>",
			        "<a class='fa fa-twitter' href='#/'></a>",
			        "<a class='fa fa-facebook' href='#/'></a>"
			     ]
			  }
			]
		});

    	var api = $("#menu").data( "mmenu" );

    	api.bind( "open:finish", function() {
	    	$(".hamburger").addClass('is-active');   
	    });

	    api.bind( "close:finish", function() {
	    	$(".hamburger").removeClass('is-active');   
	    });

    });

    
     

    $('.owl-carousel').owlCarousel({
	    margin:25,
	    
	    responsiveClass:true,
	    responsive:{
	    	0:{
	            items:1,
	        },
	        450:{
	            items:1,
	        },
	        501:{
	            items:2,
	         	loop:true,
	         	autoWidth:true,
	        },
	        1401:{
	            items:3,
	            mouseDrag:false,
	            autoWidth:true,
	        }
	    }
	})

    var link = document.querySelector('.button-callback');
    var modalCallback = document.querySelector('.modal-callback');
    var closeButton = document.querySelector('.close-button');
    var userName = modalCallback.querySelector('[name=name]');
    var userPhone = modalCallback.querySelector('[name=phone]');
    var form = modalCallback.querySelector('form');
    var modalOverlay = document.querySelector("#modal-overlay");

    link.addEventListener("click", function( evt ){
    	evt.preventDefault();

    	modalCallback.classList.toggle("modal-callback-show");
    	modalOverlay.classList.toggle("overlay-show");
    	userName.focus();
    });

    closeButton.addEventListener("click", function( evt ){
    	evt.preventDefault();
    	modalCallback.classList.toggle("modal-callback-show");
    	modalOverlay.classList.toggle("overlay-show");
    	modalCallback.classList.remove("modal-error");
    });

    modalOverlay.addEventListener("click", function( evt ){
    	evt.preventDefault();
    	modalCallback.classList.toggle("modal-callback-show");
    	modalOverlay.classList.toggle("overlay-show");
    	modalCallback.classList.remove("modal-error");
    });

    form.addEventListener("submit", function( evt ){
    	if(!userName.value || !userPhone.value){
    		evt.preventDefault();
    		modalCallback.classList.add("modal-error");
    	}
    });

    window.addEventListener("keydown", function( evt ){
    	if(evt.keyCode == 27){
    		modalCallback.classList.toggle("modal-callback-show");
    	}
    })

});

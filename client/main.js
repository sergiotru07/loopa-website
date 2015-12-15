$(document).ready(function() {
	$(".button-collapse").sideNav();

	$(window).resize(function(){
		if ($(window).width() <= 1180){	
			$('#tkc').addClass('btn').removeClass('btn-large');
			$('#mkc').addClass('btn').removeClass('btn-large');
		}else{
			$('#tkc').addClass('btn-large').removeClass('btn');
			$('#mkc').addClass('btn-large').removeClass('btn');
		}		
	});
	
	/*Agregar transformación del menú hamburguesa a flecha y la transición de los elementos del sidebar*/
	$('.button-collapse').on('click', function(){
		$('#arrowEfct').removeClass('material-design-hamburger__icon--from-arrow');
		$('#arrowEfct').toggleClass('material-design-hamburger__icon--to-arrow');
		$('.side-nav .animate').toggleClass('actived');
	});		

	$('.drag-target').on('click', function(){
		$('#arrowEfct').removeClass('material-design-hamburger__icon--to-arrow');
		$('#arrowEfct').toggleClass('material-design-hamburger__icon--from-arrow');
		$('.side-nav li').removeClass('actived');
	});	
})
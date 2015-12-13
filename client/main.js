$(document).ready(function() {
	$(".button-collapse").sideNav();

	$(window).resize(function(){
		if ($(window).width() <= 992){	
			$('#btn1').addClass('right-align').removeClass('center-align');
			$('#btn2').addClass('left-align').removeClass('center-align');
		}else{
			$('#btn1').addClass('center-align').removeClass('right-align');
			$('#btn2').addClass('center-align').removeClass('left-align');
		}	
	});

	$(window).resize(function(){
		if ($(window).width() <= 601){	
			$('#tkc').addClass('btn').removeClass('btn-large');
			$('#mkc').addClass('btn').removeClass('btn-large');
		}else{
			$('#tkc').addClass('btn-large').removeClass('btn');
			$('#mkc').addClass('btn-large').removeClass('btn');
		}		
	});
	
	/*Agregar transformación del menú hamburguesa a flecha y viceversa*/
	$('.button-collapse').on('click', function(){
		$('#arrowEfct').removeClass('material-design-hamburger__icon--from-arrow');
		$('#arrowEfct').toggleClass('material-design-hamburger__icon--to-arrow');
	});		

	$('.drag-target').on('click', function(){
		$('#arrowEfct').removeClass('material-design-hamburger__icon--to-arrow');
		$('#arrowEfct').toggleClass('material-design-hamburger__icon--from-arrow');
	});	
})
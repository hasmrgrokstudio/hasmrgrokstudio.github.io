
function liftOff() { 
			//$('#defaultCountdown').countdown({until: new Date(2013, 1-1, 1), onExpiry: liftOff});
		}
$(document).ready(function(){
	var austDay = new Date();
	var mes = austDay.getMonth();
	var den = austDay.getDate();
	austDay = new Date(austDay.getFullYear(), mes, den + 1);
	
	$.countdown.setDefaults($.countdown.regional['ru']);
	$('#defaultCountdown').countdown({until: austDay , onExpiry: liftOff});
	$('#defaultCountdown2').countdown({until: austDay , onExpiry: liftOff});
	$('#defaultCountdown3').countdown({until: austDay , onExpiry: liftOff});
   
	// спрятать #back-top в начале
	$("#back-top").hide();
 
	// показать #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
 
		// прокрутить плавно тело документа к 0px при нажатии
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	$('.order-link').click(function(){
		$('body').addClass('lock');
		$('iframe').hide();
		$('#modal').css('display', 'block');
		$('#order').css('display', 'block');
		var plasmaname = $(this).attr('title');
		$('#form_order').find('textarea').val(plasmaname);
		return false;
	});
	
	$('.call-back').click(function(){
		$('body').addClass('lock');
		$('#modal').css('display', 'block');
		$('#call_back').css('display', 'block');
		return false;
	});
	
	
	$('#modal a.cancel').click(function(){
		$(this).parent().hide();
		$('body').removeClass('lock');
		$('html').removeClass('lock');
		$('#modal').css('display', 'none');
		$('#modal .loadcover').css('display', 'none');
		$('iframe').show();
		return false;
	});
	
	$(".gallery").jCarouselLite({
		btnNext: ".next", // класс кнопки перехода вперед, null для отключения
		btnPrev: ".prev", // класс кнопки перехода назад, null для отключения
		mouseWheel: true, //если false, то галерея не будет прокручиваться колесом мыши
		auto: 4000, //шаг автопрокрутки в миллисекундах, null для отключения
		speed: 400, //скорость прокрутки в миллисекундах
		vertical: false, //если true, то галерея будет располагаться вертикально
		circular: true, //true - прокрутка по кругу, false - только до последнего изображения
		visible: 4, //количество видимых картинок
		start: 0, //с какого элемента начинается галерея (первый элемент имеет значение 0)
		scroll: 1 //количество элементов, которые одновременно прокручиваются при щелчке по кнопке
	});	

	$(".gallery_2").jCarouselLite({
		btnNext: ".left", // класс кнопки перехода вперед, null для отключения
		btnPrev: ".right", // класс кнопки перехода назад, null для отключения
		mouseWheel: true, //если false, то галерея не будет прокручиваться колесом мыши
		auto: 4000, //шаг автопрокрутки в миллисекундах, null для отключения
		speed: 400, //скорость прокрутки в миллисекундах
		vertical: false, //если true, то галерея будет располагаться вертикально
		circular: true, //true - прокрутка по кругу, false - только до последнего изображения
		visible: 4, //количество видимых картинок
		start: 0, //с какого элемента начинается галерея (первый элемент имеет значение 0)
		scroll: 1 //количество элементов, которые одновременно прокручиваются при щелчке по кнопке
	});	
});

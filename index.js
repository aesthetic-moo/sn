
var carousel = $('#carousel'),
    slideWidth = 100 / $("#carousel .slide").size(),
    threshold = slideWidth / 2,
    dragStart,
    dragEnd;

$("#carousel").css("width", $("#carousel .slide").size() + "00%");
$("#carousel .slide").size() > 1 ? $("#carousel").css("left", "-100%"): i = 0;
$('#next').click(function(){ shiftSlide(-1) });
$('#prev').click(function(){ shiftSlide(1) });

carousel.on('mousedown', function(){
  if (carousel.hasClass('transition')) return;
  dragStart = event.pageX;
  $(this).on('mousemove', function(){
    dragEnd = event.pageX;
    $(this).css('transform','translateX('+ dragPos() +'px)')
  })
  $(document).on('mouseup', function(){
    if (dragPos() > threshold) { return shiftSlide(1) }
    if (dragPos() < -threshold) { return shiftSlide(-1) }
    shiftSlide(0);
  })
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + '%)');
  setTimeout(function(){
    if (direction === 1) {
      $('.slide:first').before($('.slide:last'));
    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
		carousel.css('transform','translateX(0px)');
  },1000)
}

var timer = setInterval(next, 6000);
function next() {
  $('#next').click();
}
$(".wrap").hover(function() {
  clearInterval(timer)
}, function(){
  timer = setInterval(next, 6000);
});


//lien 'ajouter au panier'
$(".containeritems:not(.cart) ul li .imgcontain").append('<a class="btn" href="#">Ajouter au panier</a>');


//Vérification champs avec formule originale
function formiscomplet(element) {
  let email = element.siblings("input[type=email]").val();
  let password = element.siblings("input[type=password]").val();
  return /^\S{4,}@\S{4,}\.\S{2,}$/.test(email) && /^\S{8,}$/.test(password);
}


//+/- dans le panier
$("#cart ul li:not(.checkout)").append('<p class="stretch"></p><button class="btn minus">-</button><p class="qty">1</p><button class="btn plus">+</button><button class="btn">Supprimer</button>');
$(".minus").click( function () {
	let nombre = $(this).next().text();
	nombre == 1 ? nombre : nombre--;
 $(this).next().text(nombre);
});
$(".plus").click( function () {
	let nombre = $(this).prev().text();
	nombre == 15 ? alert("Veuillez contacter pour faire des commandes en vrac") : nombre++;
 $(this).prev().text(nombre);
});

$(".product ul li:nth-child(2)").append('<div class="prodcontrol"></p><button class="btn minus">-</button><p class="qty">1</p><button class="btn plus">+</button><button class="btn">Ajouter au panier</button>');

//Confirmation formulaire
function success() {
  $(".containeritems ul li").append('<h4 class="primary">Le formulaire a bien été envoyé et recu!</h4>');
};
function fail() {
  $(".containeritems ul li").append("<h4 class='danger'>Erreur lors de l'envoi, veuillez réessayer</h4>'");
};


//ANIMATIONS HOVER

//texte de la navigation droite

//background de la navigation centrale


//Grossisement de l'image
$(".containeritems:not(.cart) ul li .imgcontain, #catwrap .imgcontain").wrap( function() {
  $(this).wrap("<a class='container' href='" + $(this).attr("href") + "'></a>")
});
$(".containeritems:not(.cart) ul li .imgcontain a.btn, #catwrap .container .imgcontain p").wrap("<div class='darken'></div>");

//background de lien style boutons


//background de boutons formulaires
//rouge si formulaire n'est pas complet, primaryColor si le formulaire est complet
$("form button").css("backgroundColor", "#000000");
$("form button").hover(function() {
  if (formiscomplet($(this))) {
    $(this).stop( true, true ).animate({
      backgroundColor: $primary
    }, 300, "swing");
  } else {
    $(this).stop( true, true ).animate({
      backgroundColor: "#ae2727"
    }, 300, "swing");
  }
}, function() {
  $(this).stop( true, true ).animate({
    backgroundColor: "#000000"
  }, 300, "swing");
});


//Animation et showing de paragraphe au clic d'un titre (info.html)
$("li.info p:not(.shown)").css("display", "none");
$("li.info h4").click(function() {
  if ($(this).next().css("display") == "none")
  {
    $(this).next().slideDown();
  } else {
    $(this).next().slideUp();
  }
});

//----------------------------------------------------------------------------------------------------------------------
//Animation des titres
$("h1, h2, h3, h4, h5, h6").css("width", "0%")
$("h1, h2, h3, h4, h5, h6").animate({
  width: "100%"
});


//Animation du menu mobile
function extendsmallnavigation() {
  $("ul.hidesmall").toggleClass("show")
}


//FadeIn de la page
$("*:not(.darken)").css("opacity", 0);
$("*:not(.darken)").animate({
  opacity: 1
}, 1500);
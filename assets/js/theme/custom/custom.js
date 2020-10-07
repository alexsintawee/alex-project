$(document).ready(function() {
	body_loading();
	
	var get_top_promo_header = $(".header-banner").height();
	$(".header-section").css("top",get_top_promo_header);
});
$(window).on("scroll", function() {
  var get_windows_scroll = $(window).scrollTop();

$(".data-scroll-detect").each(function() {
	var this_elem = $(this);
    var elem_padding_detect_start = parseInt(this_elem.offset().top); 
    if (typeof this_elem.data("padding-start") !== "undefined" && this_elem.data("padding-start") !== "" ) {
      elem_padding_detect_start = elem_padding_detect_start - parseInt(this_elem.data("padding-start"));
    }
	var elem_padding_detect_end = elem_padding_detect_start + parseInt(this_elem.height());
	if (typeof this_elem.data("padding-end") !== "undefined" && this_elem.data("padding-end") !== "" ) {
      elem_padding_detect_end = elem_padding_detect_end - parseInt(this_elem.data("padding-end"));
    }
    
	if ((get_windows_scroll>elem_padding_detect_start) && (get_windows_scroll<elem_padding_detect_end)) {
		this_elem.addClass("scroll-detected");
	} else {
		this_elem.removeClass("scroll-detected");
	}  
	if (get_windows_scroll>elem_padding_detect_start) {
		this_elem.addClass("scroll-detected-toggle");
	}
	if (get_windows_scroll>elem_padding_detect_end) {
		this_elem.addClass("scroll-detected-passed");
	} 
	if (get_windows_scroll<elem_padding_detect_start) {
		this_elem.removeClass("scroll-detected");
		this_elem.removeClass("scroll-detected-passed");
	} 
});
  Header_sticky();
  local_nav_sticky();

});
function Header_sticky() { 
  var get_windows_scroll = $(window).scrollTop();
  var get_header_height = $(".header-section").outerHeight();
  var get_top_promo_header = $(".header-banner").height();
  if (get_windows_scroll>=get_top_promo_header) { 
  	$(".header-section").addClass("sticky");
  	$(".header-background-blank").removeClass("hide");
  	$(".header-background-blank").css("height",get_header_height+"px");
  	$(".header-section .bg-header").height(get_header_height);
  	$(".header-section").css("top",0);
  } else {
  	$(".header-section").removeClass("sticky");
  	$(".header-background-blank").css("height","0px");
  	$(".header-background-blank").addClass("hide");
  	$(".header-section .bg-header").height(0);
  	$(".header-section").css("top",(get_top_promo_header-get_windows_scroll));
  }
}
function local_nav_sticky() {
if ($(".data-local-nav-container").length) {
  var get_windows_scroll = $(window).scrollTop();
  var get_header_height = $(".header-section").outerHeight();
  var get_local_nav_height = $(".data-local-nav-container .data-body").outerHeight();
  var elem_pos = $(".data-local-nav-container").position();
  var get_elem_top_pos = elem_pos.top;

	if (get_windows_scroll>=get_elem_top_pos) { 
		$(".data-local-nav-container").addClass("sticky");
		$(".data-local-nav-container .data-body").css("margin-top",get_header_height+"px");
		$(".data-local-nav-blank").css("height",get_local_nav_height+"px");
		$(".data-local-nav-blank").removeClass("hide");
	} else {
		$(".data-local-nav-container").removeClass("sticky");
		$(".data-local-nav-container .data-body").css("margin-top","0px");
		$(".data-local-nav-blank").css("height","0px");
		$(".data-local-nav-blank").addClass("hide");
	}
}

}
var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      $(".body-inner").addClass("downscroll").removeClass("upscroll");
    } else {
      $(".body-inner").removeClass("downscroll").addClass("upscroll");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
function body_loading() {
  $("body").addClass("body-loading");
  setTimeout(function() {
    $("body").removeClass("body-loading");
    $("body").addClass("loaded");
  }, 1000);
}

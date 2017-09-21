var $home = $("#home")
var $about = $("#about")
var $gallery = $("#gallery")
var $contact = $("#contact")
var $trailer = $("#trailer")
function setVisible(name) {
    $home.hide();
    $about.hide();
    $gallery.hide();
    $contact.hide();
    $trailer.hide();
    if (name === "home") {
        $home.fadeIn();
    } else if (name === "about") {
        $about.fadeIn();
    } else if (name === "gallery") {
        $gallery.fadeIn();
    } else if (name === "contact") {
        $contact.fadeIn();
    } else if (name === "trailer") {
        $trailer.fadeIn();
    }
}
function openTrailer() {
    setVisible("trailer")
    $("nav").hide();
    $(".tape").hide()
}
function closeTrailer() {
    setVisible("home")
    $("nav").fadeIn();
    $(".tape").fadeIn()
    var iframe = $("iframe")[0].contentWindow
    iframe.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}', '*');
}

$("a").click( function(e) {
    e.preventDefault()
    setVisible($(this).attr("href"))
    $("li").removeClass("active")
    $(this).parent().addClass("active")
})

// Create a lightbox
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
    // Add image and caption to lightbox
  
    $lightbox
      .append($img)
      .append($caption);
  
    // Add lighbox to document
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // Get image link and description
      var src = $(this).attr("src");
      var cap = $(this).attr("alt");
  
      // Add data to lighbox
  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Show lightbox
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());
$(".next").click(function(){
    var nextPhoto = $("img.active");

    nextPhoto.removeClass("active");
    nextPhoto.next().addClass("active");

})

$(".prev").click(function(){
    var prevPhoto = $("img.active");

    prevPhoto.removeClass("active");
    prevPhoto.prev().addClass("active");

})

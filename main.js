function prevPhoto(){
    var currentPhoto = $("img.active");
    var currentCircle = $("i.active");

    currentPhoto.removeClass("active");
    currentCircle.removeClass("active");

    if (currentPhoto.hasClass("first")) {
        $("img.last").addClass("active");
        $("i.last").addClass("active");

    } else {
        currentPhoto.prev().addClass("active");
        currentCircle.prev().addClass("active");
    }
}

function nextPhoto(){
    var currentPhoto = $("img.active");
    var currentCircle = $("i.active")

    currentPhoto.removeClass("active");
    currentCircle.removeClass("active");

    if (currentPhoto.hasClass("last")) {
        $("img.first").addClass("active");
        $("i.first").addClass("active");

    } else {
        currentPhoto.next().addClass("active");
        currentCircle.next().addClass("active");
    }
}

$(".prev").click(function(){
    prevPhoto();
})

$(".next").click(function(){
    nextPhoto();
})

$(document).keydown(function(){
    if (event.which == 37){
        prevPhoto();
    }
    else if (event.which == 39){
        nextPhoto();
    }
})

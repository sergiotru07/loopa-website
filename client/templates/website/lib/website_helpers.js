openSideNav= function() {
    $('#arrowEfct')
        .removeClass('material-design-hamburger__icon--from-arrow')
        .toggleClass('material-design-hamburger__icon--to-arrow');

    $(".side-nav")
        .animate({
            left: "0",
        }, 400, function() {
            $(this)
                .find(".animate")
                .toggleClass('actived');
        });

     $("body")
     	.css("overflow","hidden")
     	.prepend('<div id="sidenav-overlay"></div>');

     $(".dark-bg").css("display","block");
}

closeSideNav= function() {
    $('#arrowEfct')
        .removeClass('material-design-hamburger__icon--to-arrow')
        .toggleClass('material-design-hamburger__icon--from-arrow');

    $(".side-nav")
        .animate({
            left: "-150%",
        }, 1500)
        .find(".animate")
        .toggleClass('actived');

    $("body")
    	.css("overflow","")
    	.find("#sidenav-overlay")
    	.remove()
    $(".dark-bg").css("display","");
}


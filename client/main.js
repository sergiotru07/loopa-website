Meteor.startup(function() {

    function openSideNav() {
        $('#arrowEfct').removeClass('material-design-hamburger__icon--from-arrow')
            .toggleClass('material-design-hamburger__icon--to-arrow');
        $('.side-nav .animate').toggleClass('actived');
    }

    function closeSideNav() {
        $('#arrowEfct').removeClass('material-design-hamburger__icon--to-arrow')
            .toggleClass('material-design-hamburger__icon--from-arrow');
        $('.side-nav li').removeClass('actived');
    }

    $(".button-collapse").sideNav();

    $(window).resize(function() {

        let sideNavLeft = parseInt($(".side-nav").css("left"));

        if ($(this).width() >= 993 && sideNavLeft >= 0) {
            $(".button-collapse").sideNav("hide")
            closeSideNav();
        }

        if ($(this).width() <= 1180) {
            $('#tkc').addClass('btn').removeClass('btn-large');
            $('#mkc').addClass('btn').removeClass('btn-large');
        } else {
            $('#tkc').addClass('btn-large').removeClass('btn');
            $('#mkc').addClass('btn-large').removeClass('btn');
        }
    });

    /*Agregar transformación del menú hamburguesa a flecha y la transición de los elementos del sidebar*/
    $('.button-collapse').on('click', () => { openSideNav() });
    $('.drag-target').on('click', () => { closeSideNav() });
});

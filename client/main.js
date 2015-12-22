Session.set("windowWidth", $(window).width());

Meteor.startup(function() {

    $(window).resize(function() {

        let sideNavLeft = $(".sidenav").css("transform");
        const matrixOpenSideNav="matrix(1, 0, 0, 1, 0, 0)"
        Session.set("windowWidth", $(this).width());

        if ($(this).width() >= 993 && sideNavLeft == matrixOpenSideNav) {
            Session.set("isSidenavOpen", false);
        }

        if ($(this).width() <= 1180) {
            $('#tkc').addClass('btn').removeClass('btn-large');
            $('#mkc').addClass('btn').removeClass('btn-large');
        } else {
            $('#tkc').addClass('btn-large').removeClass('btn');
            $('#mkc').addClass('btn-large').removeClass('btn');
        }
    });
    
});

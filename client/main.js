Meteor.startup(function() {
    Session.set("windowWidth", $(window).width());
    $(window).resize(function() {

        const matrixOpenSideNav="matrix(1, 0, 0, 1, 0, 0)"
        let sideNavLeft = $(".sidenav").css("transform"),
            windowWidth = $(this).width(),
            courseCardWidth = $(".course-card").width();

        Session.set("windowWidth", windowWidth);
        Session.set("courseCardWidth", courseCardWidth);

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

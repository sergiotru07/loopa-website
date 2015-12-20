const [fromArrow, toArrow] = [
    "material-design-hamburger__icon--from-arrow",
    "material-design-hamburger__icon--to-arrow"
];

let menuOptions = [{
    option: "Inicio",
    iconPath: "icons-sidebar/home.svg"
}, {
    option: "Cursos",
    iconPath: "icons-sidebar/developer-mode.svg"
}, {
    option: "Blog",
    iconPath: "icons-sidebar/school.svg"
}, {
    option: "FAQ's",
    iconPath: "icons-sidebar/info-outline.svg"
}, {
    option: "LOGIN",
    iconPath: "icons-sidebar/account-box.svg"
}];

Template.navBar.helpers({
    menuOptions: () => menuOptions,
    optionIs: (option, value) => option === value,
    arrowAnimationClass: () => Session.get("isSidenavOpen") ? toArrow : fromArrow,
    optionsAnimation: () => Session.get("isSidenavOpen") ? "actived" : "",
    openSidenav: () => Session.get("isSidenavOpen") ? "open-sidenav" : ""
});

Template.navBar.onRendered(function() {
    $("ul.horizontal-options")
        .children()
        .first()
        .addClass("active")
        .parent()
        .next()
        .find(".sideBar-options")
        .first()
        .addClass("active")
});

Template.navBar.events({
    "click .button-collapse": function() {
        Session.set("isSidenavOpen", true);
    }
})

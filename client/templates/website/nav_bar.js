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
}];

Template.navBar.helpers({
    menuOptions: function() {
        return menuOptions;
    }
});

Template.navBar.onRendered(function(){
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
	"click .button-collapse": function(){
		openSideNav();
	},
	"click .dark-bg": function(){
        closeSideNav();
    }
})

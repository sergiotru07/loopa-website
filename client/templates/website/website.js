Session.set("isSidenavOpen", false);
const containerStyles = `
	overflow: hidden;
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
`

Template.website.helpers({
    isSidenavOpen: () => Session.get("isSidenavOpen"),
    darkBgDisplay: () => Session.get("isSidenavOpen") ? "block" : "none",
    containerStyles: () => Session.get("isSidenavOpen") ? containerStyles : "none"
});

Template.website.events({
    "click .dark-bg": function() {
        Session.set("isSidenavOpen", false);
    }
});

Session.set("isSidenavOpen", false);

Template.website.helpers({
    isSidenavOpen: () => Session.get("isSidenavOpen"),
    darkBgDisplay: () => Session.get("isSidenavOpen") ? "block" : "none",
    containerStyles: () => Session.get("isSidenavOpen") ? "website-container-sidenav-open" : ""
});

Template.website.events({
    "click .dark-bg": function() {
        Session.set("isSidenavOpen", false);
    }
});

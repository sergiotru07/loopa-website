Session.set("isSidenavOpen", false);

Template.website.helpers({
    isSidenavOpen: () => Session.get("isSidenavOpen"),
    darkBgDisplay: () => Session.get("isSidenavOpen") ? "block" : "none",
    bodyOverflow: () => Session.get("isSidenavOpen") ? "hidden" : "none"
});

Template.website.events({
    "click .dark-bg": function() {
        Session.set("isSidenavOpen", false);
    }
});

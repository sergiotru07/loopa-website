Router.route("/", function() {
	this.layout('websiteLayout');
    this.render("website");
}, {
    name: "website"
});
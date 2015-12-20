Template.features.events({
	"mouseenter .test": function(){
		$(".test2").css("transform", "translateY(0)");
	},
	"mouseleave .test2": function(){
        $(".test2").css("transform", "translateY(600px)");
    }
});
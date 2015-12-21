let cardsContent={
	firstCard:{
		featureIndex: "feature-one",
		color: "red",
		featureTitle: "Feature One",
		featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
	},
	secondCard:{
		featureIndex: "feature-two",
		color: "yellow",
		featureTitle: "Feature Two",
		featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
	},
	thirdCard:{
		featureIndex: "feature-three",
		color: "blue",
		featureTitle: "Feature Three",
		featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
	},
	fourthCard:{
		featureIndex: "feature-four",
		color: "pink",
		featureTitle: "Feature Four",
		featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
	},
	fifthCard:{
		featureIndex: "feature-five",
		color: "indigo",
		featureTitle: "Feature Five",
		featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
	},
	sixthCard:{
		featureIndex: "feature-six",
		color: "teal",
		featureTitle: "Feature Six",
		featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
	}
};

Template.featuresSection.events({
	"mouseenter .card": function(e,t){
		let $target = $(e.target);
		$target
			.find(".card-back")
			.css("transform", "translateY(0)");
	},
	"mouseleave .card": function(){
        $(".card-back").css("transform", "translateY(600px)");
    }
});

Template.featuresSection.helpers({
	cardsContent: () => cardsContent
});

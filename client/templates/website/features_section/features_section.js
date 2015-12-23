let cardsContent = {
    firstCard: {
        featureIndex: "feature-one",
        color: "red lighten-1",
        featureTitle: "Feature One",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    secondCard: {
        featureIndex: "feature-two",
        color: "yellow lighten-1",
        featureTitle: "Feature Two",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    thirdCard: {
        featureIndex: "feature-three",
        color: "deep-purple lighten-2",
        featureTitle: "Feature Three",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fourthCard: {
        featureIndex: "feature-four",
        color: "purple lighten-3",
        featureTitle: "Feature Four",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fifthCard: {
        featureIndex: "feature-five",
        color: "light-blue lighten-3",
        featureTitle: "Feature Five",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    }
};

Template.featuresSection.events({
    "mouseenter .card": function(e, t) {
        $(e.target)
            .find(".card-back")
            .css("transform", "translateY(0)");
    },
    "mouseleave .card": function(e, t) {
         $(e.target)
            .find(".card-back")
            .removeAttr("style");
    }
});


Template.featuresSection.helpers({
    cardsContent: () => cardsContent
});
